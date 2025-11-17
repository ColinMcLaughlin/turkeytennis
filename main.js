import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, onSnapshot, setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// --- START FIREBASE CONFIGURATION ---
const firebaseConfig = {
  apiKey: "AIzaSyAGAKkeso4kFAV6y3S6XILLaEVZ-LB_h_4",
  authDomain: "turkeytennis-3d372.firebaseapp.com",
  projectId: "turkeytennis-3d372",
  storageBucket: "turkeytennis-3d372.firebasestorage.app",
  messagingSenderId: "964948050175",
  appId: "1:964948050175:web:d81932731a106cb5980cca",
  measurementId: "G-2HY1NYSDP2"
};

// --- CORRECTED VARIABLE DEFINITIONS ---
const appId = firebaseConfig.projectId || 'default-app-id'; 
const initialAuthToken = null; 

// Tournament Document Path 
const TOURNAMENT_DOC_REF = `artifacts/${appId}/public/data/tournament/tournament-state`;

// --- Initial Tournament State (Used only if no data exists in Firestore) ---
const INITIAL_TEAMS = [
  { name: 'PCJackThany', players: ['jackthany', 'mas'], pool: 'A', description: 'who tf knows what will happen.' },
  { name: 'Where is my husband', players: ['Brooke', 'Varidhi'], pool: 'B', description: 'Brooke is without her husband who is tall. But she should play well.' },
  { name: 'Siblings or Married', players: ['Laurel', 'Zim'], pool: 'A', description: 'Jury is still out. Might be both' },
  { name: 'uWu', players: ['Tab', 'NoNo'], pool: 'B', description: 'Actively over thinking their match and processing the situation like anime ' },
  { name: 'Just Roomates', players: ['Moose', 'Austin'], pool: 'A', description: 'Just roomates I swear' },
  { name: 'Towson Y', players: ['Dan', 'Sara'], pool: 'A', description: 'ugh, another towson.' },
  { name: 'Team Fun', players: ['Colin', 'Cait'], pool: 'B', description: 'vroom vroom' },
  { name: 'Team 1 Bed 1 Bath 1 Den', players: ['Dan FB', 'Jess'], pool: 'B', description: 'Will be good unless kaboom' }
];

const INITIAL_SCHEDULE = [
  { time: '1:00 PM', court: '1', team1: 'PCJackThany', team2: 'Siblings or Married', pool: 'A', score: '-', team1Idx: 0, team2Idx: 2 },
  { time: '1:00 PM', court: '2', team1: 'Just Roomates', team2: 'Towson Y', pool: 'A', score: '-', team1Idx: 4, team2Idx: 5 },
  { time: '1:00 PM', court: '3', team1: 'Where is my husband', team2: 'uWu', pool: 'B', score: '-', team1Idx: 1, team2Idx: 3 },
  { time: '1:20 PM', court: '1', team1: 'Team Fun', team2: 'Towson Y', pool: 'A', score: '-', team1Idx: 6, team2Idx: 5 },
  { time: '1:20 PM', court: '2', team1: 'PCJackThany', team2: 'Just Roomates', pool: 'A', score: '-', team1Idx: 0, team2Idx: 4 },
  { time: '1:20 PM', court: '3', team1: 'Team 1 Bed 1 Bath 1 Den', team2: 'uWu', pool: 'B', score: '-', team1Idx: 7, team2Idx: 3 },
  { time: '1:40 PM', court: '1', team1: 'Siblings or Married', team2: 'Towson Y', pool: 'A', score: '-', team1Idx: 2, team2Idx: 5 },
  { time: '1:40 PM', court: '2', team1: 'Where is my husband', team2: 'Team 1 Bed 1 Bath 1 Den', pool: 'B', score: '-', team1Idx: 1, team2Idx: 7 },
  { time: '1:40 PM', court: '3', team1: 'PCJackThany', team2: 'Team Fun', pool: 'A', score: '-', team1Idx: 0, team2Idx: 6 },
  { time: '2:00 PM', court: '1', team1: 'Just Roomates', team2: 'Siblings or Married', pool: 'A', score: '-', team1Idx: 4, team2Idx: 2 },
  { time: '2:00 PM', court: '2', team1: 'uWu', team2: 'Where is my husband', pool: 'B', score: '-', team1Idx: 3, team2Idx: 1 },
  { time: '2:00 PM', court: '3', team1: 'Team Fun', team2: 'Siblings or Married', pool: 'A', score: '-', team1Idx: 6, team2Idx: 2 },
  { time: '2:20 PM', court: '1', team1: 'Team 1 Bed 1 Bath 1 Den', team2: 'Where is my husband', pool: 'B', score: '-', team1Idx: 7, team2Idx: 1 },
  { time: '2:20 PM', court: '2', team1: 'Open Slot A', team2: 'Towson Y', pool: 'A', score: '-', team1Idx: 0, team2Idx: 5 },
  { time: '2:40 PM', court: '1', team1: 'Team Fun', team2: 'Just Roomates', pool: 'A', score: '-', team1Idx: 6, team2Idx: 4 }
];

const INITIAL_BRACKET_MATCHES = {
  quarterfinals: [
    { id: 'qf1', team1: 'Pool A 1st', team2: 'Pool B 4th', score: '-', winner: null },
    { id: 'qf2', team1: 'Pool B 2nd', team2: 'Pool A 3th', score: '-', winner: null },
    { id: 'qf3', team1: 'Pool A 2nd', team2: 'Pool B 3rd', score: '-', winner: null },
    { id: 'qf4', team1: 'Pool B 1st', team2: 'Pool A 4th', score: '-', winner: null }
  ],
  semifinals: [
    { id: 'sf1', team1: 'Winner QF1', team2: 'Winner QF2', score: '-', winner: null },
    { id: 'sf2', team1: 'Winner QF3', team2: 'Winner QF4', score: '-', winner: null }
  ],
  finals: [
    { id: 'f1', team1: 'Winner SF1', team2: 'Winner SF2', score: '-', winner: null }
  ],
  consolationSemis: [
    { id: 'csf1', team1: 'Loser QF1', team2: 'Loser QF2', score: '-', winner: null },
    { id: 'csf2', team1: 'Loser QF3', team2: 'Loser QF4', score: '-', winner: null }
  ],
  consolationFinals: [
    { id: 'cf1', team1: 'Winner CSF1', team2: 'Winner CSF2', score: '-', winner: null }
  ]
};

const INITIAL_ALTERNATES = [
  'Team Julia and Theo, goodluck to TK on his thesis', 'Chris Scalzi might hangout', 'Undisclosed', 'Secret','Camille might hangout' ,'Maybe the cacopardos will come', "maybe colin little brother will play"
];

const CORRECT_PASSWORD = "turkey2024";

// --- Runtime State (Kept in memory, updated by Firestore) ---
let tournamentState = {};
let passwordUnlocked = false;
let db;

// --- Template Content Generation ---
const welcomeDescriptionHTML = `
  <div class="welcome-section">
    <h2>Turkey Tennis Doubles Invitational at Meadowbrook Local Park! 🦃🎾 </h2>
    <h3>November 22nd, 2025</h3>
    <h3>1:00PM</h3>
    <p>Serve! Rally! Win!</p>
    <p>Pool play games will be one abbreviated set to 4 games with a 20 minute time cap.</p>
    <p>Bracket play will be one set to 6 games with no time cap.</p>
    <p></p>
    <p>Secret prize for the winners!</p>
  </div>
`;

// Generates HTML for the team cards using current state data
const generateTeamsHTML = () => tournamentState.teams.map((team, idx) => `
  <div class="team-card" data-team-id="${idx}">
    <h3>${team.name}</h3>
    <ul>
      <li>${team.players[0]}</li>
      <li>${team.players[1]}</li>
    </ul>
  </div>
`).join('');

const generateAlternatesHTML = () => INITIAL_ALTERNATES.map(alt => `<li>${alt}</li>`).join('');

const generateTeamOptions = () => tournamentState.teams.map((team, idx) => 
  `<option value="${idx}">${team.name}</option>`
).join('');

const generateTeamDetailsHTML = () => tournamentState.teams.map((team, idx) => `
  <div class="team-detail">
    <h2>${team.name}</h2>
    <div class="team-players">
      <strong>Players:</strong> ${team.players.join(' & ')}
    </div>
    <div class="team-pool">
      <strong>Pool:</strong> ${team.pool}
    </div>
    <p class="team-description">${team.description}</p>
  </div>
`).join('');

// --- Logic Functions ---

const getRecords = () => {
  const records = {};
  tournamentState.teams.forEach((team, idx) => {
    // ADDED 'ties' PROPERTY
    records[idx] = { wins: 0, losses: 0, ties: 0 };
  });

  tournamentState.matchSchedule.forEach(match => {
    if (match.score !== '-') {
      const scores = match.score.split('-').map(s => parseInt(s.trim()));
      if (scores.length === 2) { // Changed condition to check for tie, removed the unequal check
        if (scores[0] > scores[1]) {
          records[match.team1Idx].wins++;
          records[match.team2Idx].losses++;
        } else if (scores[1] > scores[0]) {
          records[match.team2Idx].wins++;
          records[match.team1Idx].losses++;
        } else if (scores[0] === scores[1]) { 
          // TIE LOGIC ADDED
          records[match.team1Idx].ties++;
          records[match.team2Idx].ties++;
        }
      }
    }
  });

  return records;
};

const generatePoolPlayHTML = () => {
  if (!tournamentState.matchSchedule) return '<div>Loading schedule...</div>';
  return `
    <div class="pools-container">
      <div class="pool">
        <h3>Pool Play Schedule & Scores</h3>
        <div class="table-responsive">
          <table class="standings-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Court</th>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              ${tournamentState.matchSchedule.map((match, idx) => `
                <tr>
                  <td>${match.time}</td>
                  <td>${match.court}</td>
                  <td>${match.team1}</td>
                  <td>${match.team2}</td>
                  <td class="score-cell" data-match-idx="${idx}">${match.score}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
};

const generateStandingsHTML = () => {
  if (!tournamentState.teams) return '<div>Loading standings...</div>';
  const records = getRecords();
  
  const poolATeams = tournamentState.teams.filter(t => t.pool === 'A').map(team => {
    const teamIdx = tournamentState.teams.indexOf(team);
    return { ...team, teamIdx, record: records[teamIdx] };
  }).sort((a, b) => b.record.wins - a.record.wins);
  
  const poolBTeams = tournamentState.teams.filter(t => t.pool === 'B').map(team => {
    const teamIdx = tournamentState.teams.indexOf(team);
    return { ...team, teamIdx, record: records[teamIdx] };
  }).sort((a, b) => b.record.wins - a.record.wins);

  return `
    <div class="pools-container">
      <div class="pool">
        <h3>Pool A Standings</h3>
        <div class="table-responsive">
          <table class="standings-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>Record (W-L-T)</th>               </tr>
            </thead>
            <tbody>
              ${poolATeams.map((team, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td>${team.name}</td>
                  <td>${team.record.wins}-${team.record.losses}-${team.record.ties}</td>                 </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
      <div class="pool">
        <h3>Pool B Standings</h3>
        <div class="table-responsive">
          <table class="standings-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>Record (W-L-T)</th>               </tr>
            </thead>
            <tbody>
              ${poolBTeams.map((team, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td>${team.name}</td>
                  <td>${team.record.wins}-${team.record.losses}-${team.record.ties}</td>                 </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
};

const generateBracketsHTML = () => {
  if (!tournamentState.bracketMatches) return '<div>Loading brackets...</div>';
  
  const renderMatch = (match) => `
    <div class="bracket-match">
      <div class="bracket-team">${match.team1}</div>
      <div class="bracket-team">${match.team2}</div>
      <div class="bracket-score">${match.score}</div>
    </div>
  `;
  
  const b = tournamentState.bracketMatches;
  
  const bracketHTML = `
    <div class="bracket-container">
      <div class="bracket-round">
        <h3>Quarterfinals</h3>
        ${b.quarterfinals.map(renderMatch).join('')}
      </div>
      
      <div class="bracket-round">
        <h3>Semifinals</h3>
        ${b.semifinals.map(renderMatch).join('')}
        </div>
      
      <div class="bracket-round">
        <h3>Finals</h3>
        ${b.finals.map(renderMatch).join('')}
      </div>
      
      <div class="bracket-round">
        <h3>Champion</h3>
        <div class="bracket-champion">
          <div class="bracket-team">${b.finals[0].winner || 'TBD'}</div>
        </div>
      </div>
    </div>
  `;
  
  const consolationHTML = `
    <div class="bracket-container">
      <div class="bracket-round">
        <h3>Consolation Semifinals</h3>
        ${b.consolationSemis.map(renderMatch).join('')}
      </div>
      
      <div class="bracket-round">
        <h3>Consolation Finals</h3>
        ${b.consolationFinals.map(renderMatch).join('')}
      </div>
      
      <div class="bracket-round">
        <h3>5th Place</h3>
        <div class="bracket-champion consolation-winner">
          <div class="bracket-team">${b.consolationFinals[0].winner || 'TBD'}</div>
        </div>
      </div>
    </div>
  `;
  
  return `
    <div class="bracket-section">
      <h3>Championship Bracket</h3>
      ${bracketHTML}
      <h3 style="margin-top: 3rem;">Consolation Bracket</h3>
      ${consolationHTML}
    </div>
  `;
};

// --- Firebase Data Management ---

/**
 * Saves the current tournamentState object back to Firestore.
 * This function handles all writes to the database.
 */
const saveState = async (newState) => {
  if (!db) return console.error("Firestore not initialized.");
  try {
    const docRef = doc(db, TOURNAMENT_DOC_REF);
    // Merge new state into the existing state
    await setDoc(docRef, newState, { merge: true });
    console.log("Tournament state saved successfully.");
  } catch (e) {
    console.error("Error saving state:", e);
    // Display error message on UI if possible
    const resultDiv = document.getElementById('result');
    if(resultDiv) {
        resultDiv.textContent = 'Error: Could not save score to database.';
        resultDiv.className = 'result error';
    }
  }
};

/**
 * Initializes the tournament document in Firestore if it doesn't exist.
 */
const initializeTournamentData = async () => {
  if (!db) return;
  const docRef = doc(db, TOURNAMENT_DOC_REF);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    console.log("No existing tournament data found. Initializing new tournament.");
    const initialData = {
      teams: INITIAL_TEAMS,
      matchSchedule: INITIAL_SCHEDULE,
      bracketMatches: INITIAL_BRACKET_MATCHES,
      bracketPlayActive: false,
      alternates: INITIAL_ALTERNATES
    };
    // Use setDoc without merge to create the initial document
    await setDoc(docRef, initialData); 
  }
};

/**
 * Renders the entire application UI based on the current tournamentState.
 */
const renderApp = () => {
  const appDiv = document.getElementById('app');
  if (!appDiv || !tournamentState.teams) return; // Wait until data is loaded

  try {
    // The main template relies on the data being loaded
    appDiv.innerHTML = `
      <div>
        <h1>Turkey Tennis Doubles Invitational</h1>
        <div class="tabs">
          <button class="tab-button active" data-tab="home">Home</button>
          <button class="tab-button" data-tab="schedule">Schedule and Results</button>
          <button class="tab-button" data-tab="scores">Submit Scores</button>
          <button class="tab-button" data-tab="teams">🍗 the Teams</button>
        </div>
        <div class="tab-content">
          <div id="home" class="tab-pane active">
            ${welcomeDescriptionHTML}
            
            <div class="alternates-section">
              <h2>Alternates</h2>
              <ul class="alternates-list">
                ${generateAlternatesHTML()}
              </ul>
            </div>
          </div>           
          <div id="schedule" class="tab-pane">
            <h2>Schedule and Results</h2>
            <div class="subtabs">
              <button class="subtab-button active" data-subtab="pool-play">Pool Play</button>
              <button class="subtab-button" data-subtab="standings">Standings</button>
              <button class="subtab-button" data-subtab="brackets">Brackets</button>
            </div>
            <div class="subtab-content">
              <div id="pool-play" class="subtab-pane active">
                ${generatePoolPlayHTML()}
              </div>
              <div id="standings" class="subtab-pane">
                ${generateStandingsHTML()}
              </div>
              <div id="brackets" class="subtab-pane">
                ${generateBracketsHTML()}
              </div>
            </div>
          </div>           <div id="scores" class="tab-pane">
            <h2>Submit Scores</h2>
            <div class="password-section" id="password-section" style="display: ${passwordUnlocked ? 'none' : 'block'};">
              <div class="form-group">
                <label for="password">Enter Password:</label>
                <input type="password" id="password" placeholder="Enter password">
              </div>
              <button id="passwordBtn" class="submit-btn">Unlock</button>
              <div id="password-result" class="result"></div>
            </div>
            <div class="score-form" id="score-form" style="display: ${passwordUnlocked ? 'block' : 'none'};">
              <div id="pool-play-section" style="display: ${tournamentState.bracketPlayActive ? 'none' : 'block'};">
                <h3>Pool Play Scores</h3>
                <div class="form-group">
                  <label for="match-select">Select Match:</label>
                  <select id="match-select">
                    <option value="">Choose a match...</option>
                    ${tournamentState.matchSchedule.map((match, idx) => `
                      <option value="${idx}">${match.time} - Court ${match.court}: ${match.team1} vs ${match.team2} (${match.score !== '-' ? 'SCORED' : 'PENDING'})</option>
                    `).join('')}
                  </select>
                </div>
                <div class="form-group">
                  <label for="score1">Team 1 Score:</label>
                  <input type="number" id="score1" min="0" placeholder="0">
                </div>
                <div class="form-group">
                  <label for="score2">Team 2 Score:</label>
                  <input type="number" id="score2" min="0" placeholder="0">
                </div>
                <button id="submitBtn" class="submit-btn">Submit Pool Score</button>
                <button id="concludeBtn" class="submit-btn" style="margin-top: 1rem; background-color: #28a745;">Conclude Pool Play & Start Bracket</button>
              </div>
              
              <div id="bracket-play-section" style="display: ${tournamentState.bracketPlayActive ? 'block' : 'none'};">
                <h3>Bracket Play Scores</h3>
                <div class="form-group">
                  <label for="bracket-match-select">Select Bracket Match:</label>
                  <select id="bracket-match-select">
                    <option value="">Choose a bracket match...</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="bracket-score1">Team 1 Score:</label>
                  <input type="number" id="bracket-score1" min="0" placeholder="0">
                </div>
                <div class="form-group">
                  <label for="bracket-score2">Team 2 Score:</label>
                  <input type="number" id="bracket-score2" min="0" placeholder="0">
                </div>
                <button id="submitBracketBtn" class="submit-btn">Submit Bracket Score</button>
              </div>
              
              <button id="resetBtn" class="submit-btn" style="margin-top: 2rem; background-color: #dc3545;">Reset Tournament</button>
              <div id="result" class="result"></div>
            </div>
          </div>           <div id="teams" class="tab-pane">
            <h2>Team Details</h2>
            <div class="team-details-container">
              ${generateTeamDetailsHTML()}
            </div>
          </div>         </div>       </div>     `;
    // After rendering, re-attach event listeners
    attachEventListeners();
    // Ensure the default visible tabs/subtabs are active and updated
    switchTab('home'); 
    switchSubtab('pool-play');
    if (tournamentState.bracketPlayActive) {
        updateBracketMatchSelect();
    }

    // Hide loading screen and show the app only AFTER successful rendering
    document.getElementById('loading').style.display = 'none';
    document.getElementById('app').style.display = 'block';

  } catch (e) {
    console.error("Critical Rendering Error:", e);
    // If rendering fails, display a controlled error message in the main div
    document.getElementById('loading').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    appDiv.innerHTML = `<div style="color: red; padding: 2rem;">CRITICAL RENDERING ERROR: Failed to build the page content. Check the console (F12) for JavaScript errors.</div>`;
  }
};

const switchTab = (tabName) => {
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

  const tabButton = document.querySelector(`[data-tab="${tabName}"]`);
  const tabPane = document.getElementById(tabName);
  
  // Use simple display/class logic as the template is fully regenerated
  if (tabButton && tabPane) {
      tabButton.classList.add('active');
      tabPane.classList.add('active');
  }
};

const switchSubtab = (subtabName) => {
  document.querySelectorAll('.subtab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.subtab-pane').forEach(pane => pane.classList.remove('active'));

  const currentTabButton = document.querySelector(`[data-subtab="${subtabName}"]`);
  const currentTabPane = document.getElementById(subtabName);
  
  if (currentTabButton && currentTabPane) {
      currentTabButton.classList.add('active');
      currentTabPane.classList.add('active');
  }
};

const updateBracketMatchSelect = () => {
  const select = document.getElementById('bracket-match-select');
  if (!select) return; 
  select.innerHTML = '<option value="">Choose a bracket match...</option>';
  
  const b = tournamentState.bracketMatches;
  
  const sections = [
    { round: 'qf', matches: b.quarterfinals, prefix: 'Quarterfinal' },
    { round: 'sf', matches: b.semifinals, prefix: 'Semifinal' },
    { round: 'f', matches: b.finals, prefix: 'Finals' },
    { round: 'csf', matches: b.consolationSemis, prefix: 'Consolation Semifinal' },
    { round: 'cf', matches: b.consolationFinals, prefix: 'Consolation Finals' }
  ];

  sections.forEach(({ round, matches, prefix }) => {
    matches.forEach((match, idx) => {
      // Check if match teams are finalized and score is not submitted
      const isPlaceholder = match.team1.includes('Pool') || match.team1.includes('Winner') || match.team1.includes('Loser') || match.team1.includes('TBD');
      
      if (match.score === '-' && !isPlaceholder) {
        let name = `${prefix} ${round !== 'f' && round !== 'cf' ? idx + 1 : ''}`.trim();
        select.innerHTML += `<option value="${round}-${idx}">${name}: ${match.team1} vs ${match.team2}</option>`;
      }
    });
  });
};

// --- Event Listeners ---

const attachEventListeners = () => {
  // Use event delegation on the main app div
  const appDiv = document.getElementById('app');
  if (!appDiv) return;

  // Since renderApp completely regenerates all HTML, we must attach listeners every time.
  // Using event delegation on the root div for tabs/subtabs is more efficient.
  
  // Clear any existing listeners first if possible (though the innerHTML clear often handles this).
  appDiv.onclick = (e) => {
      if (e.target.classList.contains('tab-button') && e.target.getAttribute('data-tab')) {
        switchTab(e.target.getAttribute('data-tab'));
      } else if (e.target.classList.contains('subtab-button') && e.target.getAttribute('data-subtab')) {
        switchSubtab(e.target.getAttribute('data-subtab'));
      } else if (e.target.classList.contains('team-card') && e.target.getAttribute('data-team-id')) {
        switchTab('teams');
      }
  };


  // --- Password Unlock ---
  const passwordBtn = document.getElementById('passwordBtn');
  if (passwordBtn) passwordBtn.onclick = () => {
    const password = document.getElementById('password').value;
    const resultDiv = document.getElementById('password-result');

    if (password === CORRECT_PASSWORD) {
      passwordUnlocked = true;
      renderApp(); // Rerender to show the score forms
      resultDiv.textContent = 'Unlocked!';
      resultDiv.className = 'result success';
    } else {
      resultDiv.textContent = 'Incorrect password';
      resultDiv.className = 'result error';
    }
  };

  // --- Pool Play Score Submission ---
  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) submitBtn.onclick = async () => {
    if (!passwordUnlocked) return; 

    const matchIdx = parseInt(document.getElementById('match-select').value);
    const score1 = parseInt(document.getElementById('score1').value);
    const score2 = parseInt(document.getElementById('score2').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(matchIdx) || matchIdx < 0 || isNaN(score1) || isNaN(score2)) {
      resultDiv.textContent = 'Please select a match and enter valid scores';
      resultDiv.className = 'result error';
      return;
    }
    
    if (tournamentState.matchSchedule[matchIdx].score !== '-') {
        resultDiv.textContent = 'Score already submitted for this match.';
        resultDiv.className = 'result error';
        return;
    }

    const match = tournamentState.matchSchedule[matchIdx];
    let winner, newSchedule = [...tournamentState.matchSchedule];

    if (score1 === score2) {
      newSchedule[matchIdx].score = `${score1} - ${score2}`;
      await saveState({ matchSchedule: newSchedule });
      resultDiv.textContent = `${match.team1} ${score1} - ${score2} ${match.team2} (Tied)`;
      resultDiv.className = 'result tie';
      return;
    }

    winner = score1 > score2 ? match.team1 : match.team2;
    newSchedule[matchIdx].score = `${score1} - ${score2}`;

    await saveState({ matchSchedule: newSchedule });
    
    resultDiv.textContent = `${match.team1} ${score1} - ${score2} ${match.team2} | Winner: ${winner}`;
    resultDiv.className = 'result success';
    
    // Clear form fields
    document.getElementById('match-select').value = '';
    document.getElementById('score1').value = '';
    document.getElementById('score2').value = '';
  };

  // --- Conclude Pool Play Button ---
  const concludeBtn = document.getElementById('concludeBtn');
  if (concludeBtn) concludeBtn.onclick = async () => {
    
    const records = getRecords();
    
    const poolATeams = tournamentState.teams.filter(t => t.pool === 'A').map(team => {
      const teamIdx = tournamentState.teams.indexOf(team);
      return { ...team, teamIdx, record: records[teamIdx] };
    }).sort((a, b) => b.record.wins - a.record.wins);
    
    const poolBTeams = tournamentState.teams.filter(t => t.pool === 'B').map(team => {
      const teamIdx = tournamentState.teams.indexOf(team);
      return { ...team, teamIdx, record: records[teamIdx] };
    }).sort((a, b) => b.record.wins - a.record.wins);
    
    let newBracketMatches = JSON.parse(JSON.stringify(tournamentState.bracketMatches)); 
    
    // Seed the bracket (Top 4 from each pool)
    newBracketMatches.quarterfinals[0].team1 = poolATeams[0].name;
    newBracketMatches.quarterfinals[0].team2 = poolBTeams[3].name;
    newBracketMatches.quarterfinals[1].team1 = poolBTeams[1].name;
    newBracketMatches.quarterfinals[1].team2 = poolATeams[2].name;
    newBracketMatches.quarterfinals[2].team1 = poolATeams[1].name;
    newBracketMatches.quarterfinals[2].team2 = poolBTeams[2].name;
    newBracketMatches.quarterfinals[3].team1 = poolBTeams[0].name;
    newBracketMatches.quarterfinals[3].team2 = poolATeams[3].name;
    
    await saveState({
        bracketMatches: newBracketMatches,
        bracketPlayActive: true
    });
    
    document.getElementById('result').textContent = 'Pool play concluded! Bracket play has begun.';
    document.getElementById('result').className = 'result success';
  };

  // --- Bracket Score Submission ---
  const submitBracketBtn = document.getElementById('submitBracketBtn');
  if (submitBracketBtn) submitBracketBtn.onclick = async () => {
    const matchId = document.getElementById('bracket-match-select').value;
    const score1 = parseInt(document.getElementById('bracket-score1').value);
    const score2 = parseInt(document.getElementById('bracket-score2').value);
    const resultDiv = document.getElementById('result');
    
    if (!matchId || isNaN(score1) || isNaN(score2) || score1 === score2) {
      resultDiv.textContent = 'Please select a match and enter valid (non-tied) scores';
      resultDiv.className = 'result error';
      return;
    }
    
    const [round, idxStr] = matchId.split('-');
    const idx = parseInt(idxStr);
    
    let newBracketMatches = JSON.parse(JSON.stringify(tournamentState.bracketMatches));
    let match, winner, loser;

    const updateAndPropagate = (matchArray, index, successorLogic) => {
      match = matchArray[index];
      winner = score1 > score2 ? match.team1 : match.team2;
      loser = score1 > score2 ? match.team2 : match.team1;
      match.score = `${score1} - ${score2}`;
      match.winner = winner;
      successorLogic(winner, loser);
    };

    if (round === 'qf') {
      updateAndPropagate(newBracketMatches.quarterfinals, idx, (w, l) => {
        if (idx === 0) { newBracketMatches.semifinals[0].team1 = w; newBracketMatches.consolationSemis[0].team1 = l; } 
        else if (idx === 1) { newBracketMatches.semifinals[0].team2 = w; newBracketMatches.consolationSemis[0].team2 = l; } 
        else if (idx === 2) { newBracketMatches.semifinals[1].team1 = w; newBracketMatches.consolationSemis[1].team1 = l; } 
        else if (idx === 3) { newBracketMatches.semifinals[1].team2 = w; newBracketMatches.consolationSemis[1].team2 = l; }
      });
    } else if (round === 'sf') {
      updateAndPropagate(newBracketMatches.semifinals, idx, (w) => {
        if (idx === 0) { newBracketMatches.finals[0].team1 = w; } 
        else if (idx === 1) { newBracketMatches.finals[0].team2 = w; }
      });
    } else if (round === 'f') {
      updateAndPropagate(newBracketMatches.finals, idx, () => {});
    } else if (round === 'csf') {
      updateAndPropagate(newBracketMatches.consolationSemis, idx, (w) => {
        if (idx === 0) { newBracketMatches.consolationFinals[0].team1 = w; } 
        else if (idx === 1) { newBracketMatches.consolationFinals[0].team2 = w; }
      });
    } else if (round === 'cf') {
      updateAndPropagate(newBracketMatches.consolationFinals, idx, () => {});
    }
    
    await saveState({ bracketMatches: newBracketMatches });

    resultDiv.textContent = `Score submitted: ${match.team1} ${score1} - ${score2} ${match.team2} | Winner: ${winner}`;
    resultDiv.className = 'result success';

    // Clear form fields
    document.getElementById('bracket-match-select').value = '';
    document.getElementById('bracket-score1').value = '';
    document.getElementById('bracket-score2').value = '';
  };

  // --- Reset Tournament Button ---
  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) resetBtn.onclick = async () => {
    // Create the full initial state object and overwrite the database
    const fullInitialState = {
      teams: INITIAL_TEAMS,
      matchSchedule: INITIAL_SCHEDULE,
      bracketMatches: INITIAL_BRACKET_MATCHES,
      bracketPlayActive: false,
      alternates: INITIAL_ALTERNATES
    };
    
    await saveState(fullInitialState); // Overwrite database

    document.getElementById('result').textContent = 'Tournament has been reset!';
    document.getElementById('result').className = 'result error';
  };
};

// --- Initialization and Real-Time Listener ---

const startApp = async () => {
  const loadingDiv = document.getElementById('loading');
  const appDiv = document.getElementById('app');

  // CRITICAL CHECK: Ensure Firebase configuration is not empty
  if (Object.keys(firebaseConfig).length === 0) {
      if (loadingDiv) {
          loadingDiv.innerHTML = `<div style="color: red; padding: 2rem; font-weight: bold;">FATAL ERROR: Firebase Configuration is Missing. Cannot connect to database.</div>`;
      }
      return;
  }
  
  try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    setLogLevel('error'); // Hide verbose logs
    const auth = getAuth(app);
    
    if (initialAuthToken) {
        await signInWithCustomToken(auth, initialAuthToken);
    } else {
        await signInAnonymously(auth);
    }
    
    console.log("Firebase authenticated successfully.");

    await initializeTournamentData();

    // Set up real-time listener (onSnapshot)
    const docRef = doc(db, TOURNAMENT_DOC_REF);
    onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        // Update local state with Firestore data
        tournamentState = data;
        
        // Rerender the entire UI with the latest data
        renderApp();
      } else {
        console.warn("Tournament state document does not exist. A new one should be initialized shortly.");
      }
    });

  } catch (e) {
    console.error("Firebase Initialization Failed:", e);
    // If Firebase fails completely, show an error on the loading screen
    if (loadingDiv) {
        loadingDiv.innerHTML = `
            <div style="color: red; padding: 2rem; font-weight: bold;">CRITICAL ERROR: Failed to connect to the database. Please check console (F12) for details.</div>
        `;
    }
    // Ensure app is hidden and loading is shown if we crash here
    if (appDiv) appDiv.style.display = 'none';
    if (loadingDiv) loadingDiv.style.display = 'block';
  }
};

document.addEventListener('DOMContentLoaded', startApp);