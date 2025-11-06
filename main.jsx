import React, { useState, useEffect } from 'react';
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, onSnapshot, setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGAKkeso4kFAV6y3S6XILLaEVZ-LB_h_4",
  authDomain: "turkeytennis-3d372.firebaseapp.com",
  projectId: "turkeytennis-3d372",
  storageBucket: "turkeytennis-3d372.firebasestorage.app",
  messagingSenderId: "964948050175",
  appId: "1:964948050175:web:d81932731a106cb5980cca",
  measurementId: "G-2HY1NYSDP2"
};

const TOURNAMENT_DOC_REF = `artifacts/turkeytennis-3d372/public/data/swiss-tournament/tournament-state`;
const CORRECT_PASSWORD = "turkey2024";
const TOTAL_ROUNDS = 4;

const INITIAL_TEAMS = [
  { name: 'Towson X', players: ['Elias', 'Yoshi'], description: 'Welcome Towson X' },
  { name: 'Where is my husband', players: ['Brooke', 'Varidhi'], description: 'Brooke is without her husband who is tall. But she should play well.' },
  { name: 'Siblings or Married', players: ['Laurel', 'Zim'], description: 'Jury is still out. Might be both' },
  { name: 'uWu', players: ['Tab', 'NoNo'], description: 'Actively over thinking their match and processing the situation like anime' },
  { name: 'Just Roomates', players: ['Moose', 'Austin'], description: 'Just roomates I swear' },
  { name: 'Towson Y', players: ['Dan', 'Sara'], description: 'ugh, another towson.' },
  { name: 'Team Fun', players: ['Colin', 'Cait'], description: 'idk.' },
  { name: 'Team 1 Bed 1 Bath 1 Den', players: ['Dan FB', 'Jess'], description: 'Will be good unless kaboom' }
];

const INITIAL_ALTERNATES = [
  'Team Julia and Theo', 'Team Joel and Luke', 'Undisclosed', 
  'Team Adam and Vinny', 'Team PeeCeeTee', 'Team Johnny and grant', 
  'Team Homestead', 'Team Jack', 'Team Ash'
];

function SwissTournament() {
  const [tournamentState, setTournamentState] = useState(null);
  const [passwordUnlocked, setPasswordUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [message, setMessage] = useState({ text: '', type: '' });
  const [db, setDb] = useState(null);
  const [loading, setLoading] = useState(true);

  // Form states
  const [selectedMatch, setSelectedMatch] = useState('');
  const [score1, setScore1] = useState('');
  const [score2, setScore2] = useState('');

  useEffect(() => {
    initFirebase();
  }, []);

  const initFirebase = async () => {
    try {
      const app = initializeApp(firebaseConfig);
      const firestore = getFirestore(app);
      setLogLevel('error');
      const auth = getAuth(app);
      await signInAnonymously(auth);
      setDb(firestore);

      const docRef = doc(firestore, TOURNAMENT_DOC_REF);
      
      // Initialize if needed
      const initialState = {
        teams: INITIAL_TEAMS.map(t => ({ ...t, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 })),
        rounds: [],
        currentRound: 1,
        alternates: INITIAL_ALTERNATES
      };
      
      await setDoc(docRef, initialState, { merge: true });

      // Real-time listener
      onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          setTournamentState(docSnap.data());
          setLoading(false);
        }
      });
    } catch (e) {
      console.error("Firebase error:", e);
      setLoading(false);
    }
  };

  const saveState = async (updates) => {
    if (!db) return;
    try {
      const docRef = doc(db, TOURNAMENT_DOC_REF);
      await setDoc(docRef, updates, { merge: true });
    } catch (e) {
      console.error("Save error:", e);
      setMessage({ text: 'Error saving to database', type: 'error' });
    }
  };

  const generateRound = async (roundNum) => {
    if (!tournamentState) return;

    const teams = [...tournamentState.teams];
    let matches = [];

    if (roundNum === 1) {
      // Random pairing for round 1
      const shuffled = teams.sort(() => Math.random() - 0.5);
      const courts = ['1', '2', '3'];
      
      for (let i = 0; i < 3; i++) {
        matches.push({
          court: courts[i],
          team1Idx: teams.indexOf(shuffled[i * 2]),
          team2Idx: teams.indexOf(shuffled[i * 2 + 1]),
          team1Name: shuffled[i * 2].name,
          team2Name: shuffled[i * 2 + 1].name,
          score1: null,
          score2: null,
          completed: false
        });
      }
      
      // Bye teams
      matches.push({
        court: 'BYE',
        team1Idx: teams.indexOf(shuffled[6]),
        team2Idx: teams.indexOf(shuffled[7]),
        team1Name: shuffled[6].name,
        team2Name: shuffled[7].name,
        score1: null,
        score2: null,
        completed: false
      });
    } else {
      // Swiss pairing: sort by record, pair 1v2, 3v4, etc.
      const sortedTeams = teams.map((t, idx) => ({ ...t, idx }))
        .sort((a, b) => {
          if (b.wins !== a.wins) return b.wins - a.wins;
          const aDiff = a.pointsFor - a.pointsAgainst;
          const bDiff = b.pointsFor - b.pointsAgainst;
          return bDiff - aDiff;
        });

      const courts = ['1', '2', '3'];
      for (let i = 0; i < 3; i++) {
        matches.push({
          court: courts[i],
          team1Idx: sortedTeams[i * 2].idx,
          team2Idx: sortedTeams[i * 2 + 1].idx,
          team1Name: sortedTeams[i * 2].name,
          team2Name: sortedTeams[i * 2 + 1].name,
          score1: null,
          score2: null,
          completed: false
        });
      }

      matches.push({
        court: 'BYE',
        team1Idx: sortedTeams[6].idx,
        team2Idx: sortedTeams[7].idx,
        team1Name: sortedTeams[6].name,
        team2Name: sortedTeams[7].name,
        score1: null,
        score2: null,
        completed: false
      });
    }

    const newRounds = [...tournamentState.rounds];
    newRounds[roundNum - 1] = { roundNum, matches };

    await saveState({ rounds: newRounds, currentRound: roundNum });
    setMessage({ text: `Round ${roundNum} generated!`, type: 'success' });
  };

  const submitScore = async () => {
    if (!tournamentState || !selectedMatch) return;

    const [roundIdx, matchIdx] = selectedMatch.split('-').map(Number);
    const s1 = parseInt(score1);
    const s2 = parseInt(score2);

    if (isNaN(s1) || isNaN(s2) || s1 < 0 || s2 < 0) {
      setMessage({ text: 'Invalid scores', type: 'error' });
      return;
    }

    const newRounds = [...tournamentState.rounds];
    const match = newRounds[roundIdx].matches[matchIdx];
    
    if (match.completed) {
      setMessage({ text: 'Score already submitted', type: 'error' });
      return;
    }

    match.score1 = s1;
    match.score2 = s2;
    match.completed = true;

    const newTeams = [...tournamentState.teams];
    
    // Update team records
    newTeams[match.team1Idx].pointsFor += s1;
    newTeams[match.team1Idx].pointsAgainst += s2;
    newTeams[match.team2Idx].pointsFor += s2;
    newTeams[match.team2Idx].pointsAgainst += s1;

    if (s1 > s2) {
      newTeams[match.team1Idx].wins++;
      newTeams[match.team2Idx].losses++;
    } else if (s2 > s1) {
      newTeams[match.team2Idx].wins++;
      newTeams[match.team1Idx].losses++;
    } else {
      // Tie - both get 0.5 wins
      newTeams[match.team1Idx].wins += 0.5;
      newTeams[match.team1Idx].losses += 0.5;
      newTeams[match.team2Idx].wins += 0.5;
      newTeams[match.team2Idx].losses += 0.5;
    }

    await saveState({ rounds: newRounds, teams: newTeams });
    setMessage({ text: `Score submitted: ${match.team1Name} ${s1} - ${s2} ${match.team2Name}`, type: 'success' });
    setSelectedMatch('');
    setScore1('');
    setScore2('');
  };

  const resetTournament = async () => {
    if (!window.confirm('Are you sure you want to reset the entire tournament?')) return;
    
    const initialState = {
      teams: INITIAL_TEAMS.map(t => ({ ...t, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 })),
      rounds: [],
      currentRound: 1,
      alternates: INITIAL_ALTERNATES
    };
    
    await saveState(initialState);
    setMessage({ text: 'Tournament reset!', type: 'error' });
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-orange-50">
      <div className="text-2xl font-bold text-orange-800">Loading Tournament...</div>
    </div>;
  }

  if (!tournamentState) {
    return <div className="flex items-center justify-center min-h-screen bg-orange-50">
      <div className="text-2xl font-bold text-red-600">Error loading tournament data</div>
    </div>;
  }

  const sortedStandings = [...tournamentState.teams]
    .map((t, idx) => ({ ...t, idx }))
    .sort((a, b) => {
      if (b.wins !== a.wins) return b.wins - a.wins;
      const aDiff = a.pointsFor - a.pointsAgainst;
      const bDiff = b.pointsFor - b.pointsAgainst;
      return bDiff - aDiff;
    });

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-4xl font-bold text-orange-800 text-center mb-2">
            🦃 Turkey Tennis Swiss Draw Tournament 🎾
          </h1>
          <p className="text-center text-gray-600">November 22nd, 2025 - Meadowbrook Local Park</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {['home', 'schedule', 'standings', 'scores', 'teams'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold capitalize transition ${
                activeTab === tab
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-orange-800 hover:bg-orange-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Home Tab */}
        {activeTab === 'home' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Welcome!</h2>
            <div className="prose max-w-none mb-8">
              <p className="text-lg">This is a <strong>Swiss Draw Tournament</strong> with {TOTAL_ROUNDS} rounds.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All teams play {TOTAL_ROUNDS} rounds - no elimination</li>
                <li>After each round, teams are paired based on their current record</li>
                <li>Teams with similar records play each other</li>
                <li>Each game is 20 minutes with 3 courts available</li>
                <li>Final standings determined by wins, then point differential</li>
                <li>Since we have 8 teams and 3 courts, 2 teams get a bye each round</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-orange-800 mb-4">Participating Teams</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {tournamentState.teams.map((team, idx) => (
                <div key={idx} className="bg-orange-100 rounded-lg p-4 border-2 border-orange-300">
                  <h4 className="font-bold text-orange-900 mb-2">{team.name}</h4>
                  <p className="text-sm text-gray-700">{team.players.join(' & ')}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-orange-800 mb-4">Alternates</h3>
            <ul className="list-disc pl-6 space-y-1">
              {tournamentState.alternates.map((alt, idx) => (
                <li key={idx} className="text-gray-700">{alt}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-orange-800 mb-6">Schedule & Results</h2>
            
            {[...Array(TOTAL_ROUNDS)].map((_, roundIdx) => {
              const round = tournamentState.rounds[roundIdx];
              return (
                <div key={roundIdx} className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-orange-700">Round {roundIdx + 1}</h3>
                    {!round && roundIdx + 1 === tournamentState.currentRound && passwordUnlocked && (
                      <button
                        onClick={() => generateRound(roundIdx + 1)}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                      >
                        Generate Round {roundIdx + 1}
                      </button>
                    )}
                  </div>

                  {round ? (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-orange-200">
                            <th className="border p-2">Court</th>
                            <th className="border p-2">Team 1</th>
                            <th className="border p-2">Team 2</th>
                            <th className="border p-2">Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          {round.matches.map((match, matchIdx) => (
                            <tr key={matchIdx} className={match.court === 'BYE' ? 'bg-gray-100' : ''}>
                              <td className="border p-2 text-center font-bold">{match.court}</td>
                              <td className="border p-2">{match.team1Name}</td>
                              <td className="border p-2">{match.team2Name}</td>
                              <td className="border p-2 text-center font-bold">
                                {match.completed 
                                  ? `${match.score1} - ${match.score2}`
                                  : match.court === 'BYE' ? 'Bye Round' : '-'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">Round not yet generated</p>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Standings Tab */}
        {activeTab === 'standings' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-orange-800 mb-6">Current Standings</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-orange-200">
                    <th className="border p-3">Rank</th>
                    <th className="border p-3">Team</th>
                    <th className="border p-3">Wins</th>
                    <th className="border p-3">Losses</th>
                    <th className="border p-3">Points For</th>
                    <th className="border p-3">Points Against</th>
                    <th className="border p-3">Differential</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedStandings.map((team, idx) => (
                    <tr key={idx} className={idx === 0 ? 'bg-yellow-100 font-bold' : ''}>
                      <td className="border p-3 text-center">{idx + 1}</td>
                      <td className="border p-3">{team.name}</td>
                      <td className="border p-3 text-center">{team.wins}</td>
                      <td className="border p-3 text-center">{team.losses}</td>
                      <td className="border p-3 text-center">{team.pointsFor}</td>
                      <td className="border p-3 text-center">{team.pointsAgainst}</td>
                      <td className="border p-3 text-center font-bold">
                        {team.pointsFor - team.pointsAgainst > 0 ? '+' : ''}
                        {team.pointsFor - team.pointsAgainst}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Scores Tab */}
        {activeTab === 'scores' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-orange-800 mb-6">Submit Scores</h2>

            {!passwordUnlocked ? (
              <div className="max-w-md">
                <label className="block mb-2 font-semibold">Enter Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded mb-4"
                  placeholder="Password"
                />
                <button
                  onClick={() => {
                    if (password === CORRECT_PASSWORD) {
                      setPasswordUnlocked(true);
                      setMessage({ text: 'Unlocked!', type: 'success' });
                    } else {
                      setMessage({ text: 'Incorrect password', type: 'error' });
                    }
                  }}
                  className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
                >
                  Unlock
                </button>
              </div>
            ) : (
              <div>
                <div className="max-w-md mb-6">
                  <label className="block mb-2 font-semibold">Select Match:</label>
                  <select
                    value={selectedMatch}
                    onChange={(e) => setSelectedMatch(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                  >
                    <option value="">Choose a match...</option>
                    {tournamentState.rounds.map((round, roundIdx) =>
                      round.matches.map((match, matchIdx) =>
                        !match.completed && match.court !== 'BYE' && (
                          <option key={`${roundIdx}-${matchIdx}`} value={`${roundIdx}-${matchIdx}`}>
                            Round {roundIdx + 1} - Court {match.court}: {match.team1Name} vs {match.team2Name}
                          </option>
                        )
                      )
                    )}
                  </select>

                  <label className="block mb-2 font-semibold">Team 1 Score:</label>
                  <input
                    type="number"
                    min="0"
                    value={score1}
                    onChange={(e) => setScore1(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                  />

                  <label className="block mb-2 font-semibold">Team 2 Score:</label>
                  <input
                    type="number"
                    min="0"
                    value={score2}
                    onChange={(e) => setScore2(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                  />

                  <button
                    onClick={submitScore}
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mb-4"
                  >
                    Submit Score
                  </button>

                  <button
                    onClick={resetTournament}
                    className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
                  >
                    Reset Tournament
                  </button>
                </div>
              </div>
            )}

            {message.text && (
              <div className={`mt-4 p-4 rounded ${
                message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {message.text}
              </div>
            )}
          </div>
        )}

        {/* Teams Tab */}
        {activeTab === 'teams' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-orange-800 mb-6">Team Details</h2>
            <div className="space-y-6">
              {tournamentState.teams.map((team, idx) => (
                <div key={idx} className="border-2 border-orange-300 rounded-lg p-6 bg-orange-50">
                  <h3 className="text-2xl font-bold text-orange-900 mb-2">{team.name}</h3>
                  <p className="text-lg mb-2"><strong>Players:</strong> {team.players.join(' & ')}</p>
                  <p className="text-gray-700 italic">{team.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SwissTournament;