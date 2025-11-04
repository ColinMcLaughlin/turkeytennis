// import './style.css' // Assuming this is linked in index.html

// Global Data
const teams = [
  {
    name: 'Towson X',
    players: ['Elias', 'Yoshi'],
    pool: 'A',
    description: 'Welcome Towson X'
  },
  {
    name: 'Where is my husband',
    players: ['Brooke', 'Varidhi'],
    pool: 'B',
    description: 'Brooke is without her husband who is tall. But she should play well.'
  },
  {
    name: 'Siblings or Married',
    players: ['Laurel', 'Zim'],
    pool: 'A',
    description: 'Jury is still out.  Might be both'
  },
  {
    name: 'uWu',
    players: ['Tab', 'NoNo'],
    pool: 'B',
    description: 'Actively over thinking their match and processing the situation like anime '
  },
  {
    name: 'Just Roomates',
    players: ['Moose', 'Austin'],
    pool: 'A',
    description: 'Just roomates I swear'
  },
  {
    name: 'Towson Y',
    players: ['Dan', 'Sara'],
    pool: 'A',
    description: 'ugh, another townson.'
  },
  {
    name: 'Team Fun',
    players: ['Colin', 'Cait'],
    pool: 'B',
    description: 'Should play good .'
  },
  {
    name: 'Team 1 Bed 1 Bath 1 Den',
    players: ['Dan FB', 'Jess'],
    pool: 'B',
    description: 'will be good unless kaboom'
  }
]

const alternates = [
  'Team Julia and Theo',
  'Team Joel and Luke',
  'Undisclosed',
  'Team Adam and Vinny',
  'Team PeeCeeTee'
]

const CORRECT_PASSWORD = "turkey2024"

let matchSchedule = [
  // Round 1 - 1:00 PM
  { time: '1:00 PM', court: '1', team1: 'Towson X', team2: 'Siblings or Married', pool: 'A', score: '-', team1Idx: 0, team2Idx: 2 },
  { time: '1:00 PM', court: '2', team1: 'Just Roomates', team2: 'Towson Y', pool: 'A', score: '-', team1Idx: 4, team2Idx: 5 },
  { time: '1:00 PM', court: '3', team1: 'Where is my husband', team2: 'uWu', pool: 'B', score: '-', team1Idx: 1, team2Idx: 3 },
  // Bye: Team Fun, Team 1 Bed 1 Bath 1 Den
  
  // Round 2 - 1:20 PM
  { time: '1:20 PM', court: '1', team1: 'Team Fun', team2: 'Towson Y', pool: 'AB', score: '-', team1Idx: 6, team2Idx: 5 },
  { time: '1:20 PM', court: '2', team1: 'Towson X', team2: 'Just Roomates', pool: 'A', score: '-', team1Idx: 0, team2Idx: 4 },
  { time: '1:20 PM', court: '3', team1: 'Team 1 Bed 1 Bath 1 Den', team2: 'uWu', pool: 'B', score: '-', team1Idx: 7, team2Idx: 3 },
  // Bye: Siblings or Married, Where is my husband
  
  // Round 3 - 1:40 PM
  { time: '1:40 PM', court: '1', team1: 'Siblings or Married', team2: 'Towson Y', pool: 'A', score: '-', team1Idx: 2, team2Idx: 5 },
  { time: '1:40 PM', court: '2', team1: 'Where is my husband', team2: 'Team 1 Bed 1 Bath 1 Den', pool: 'B', score: '-', team1Idx: 1, team2Idx: 7 },
  { time: '1:40 PM', court: '3', team1: 'Towson X', team2: 'Team Fun', pool: 'AB', score: '-', team1Idx: 0, team2Idx: 6 },
  // Bye: Just Roomates, uWu
  
  // Round 4 - 2:00 PM
  { time: '2:00 PM', court: '1', team1: 'Just Roomates', team2: 'Siblings or Married', pool: 'A', score: '-', team1Idx: 4, team2Idx: 2 },
  { time: '2:00 PM', court: '2', team1: 'uWu', team2: 'Where is my husband', pool: 'B', score: '-', team1Idx: 3, team2Idx: 1 },
  { time: '2:00 PM', court: '3', team1: 'Team Fun', team2: 'Team 1 Bed 1 Bath 1 Den', pool: 'AB', score: '-', team1Idx: 6, team2Idx: 7 }
]

let bracketMatches = {
  quarterfinals: [
    { id: 'qf1', team1: 'Pool A 1st', team2: 'Pool B 4th', score: '-', winner: null },
    { id: 'qf2', team1: 'Pool B 1st', team2: 'Pool A 4th', score: '-', winner: null },
    { id: 'qf3', team1: 'Pool A 2nd', team2: 'Pool B 3rd', score: '-', winner: null },
    { id: 'qf4', team1: 'Pool B 2nd', team2: 'Pool A 3rd', score: '-', winner: null }
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
}

let bracketPlayActive = false
let passwordUnlocked = false

// --- Template Content Generation ---

const welcomeDescriptionHTML = `
  <div class="welcome-section">
    <h2>Welcome to the Turkey Tennis Doubles Invitational! 🦃🎾</h2>
    <p>We're thrilled to host another year of friendly (and sometimes fierce) competition. Use the tabs above to view teams, see the schedule, and submit scores.</p>
    <p>Good luck to all the teams!</p>
  </div>
`

const teamsHTML = teams.map((team, idx) => `
  <div class="team-card" data-team-id="${idx}">
    <h3>${team.name}</h3>
    <ul>
      <li>${team.players[0]}</li>
      <li>${team.players[1]}</li>
    </ul>
  </div>
`).join('')

const alternatesHTML = alternates.map(alt => `<li>${alt}</li>`).join('')

const teamOptions = teams.map((team, idx) => `<option value="${idx}">${team.name}</option>`).join('')

const teamDetailsHTML = teams.map((team, idx) => `
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
`).join('')

// --- Logic Functions ---

const getRecords = () => {
  const records = {}
  teams.forEach((team, idx) => {
    records[idx] = { wins: 0, losses: 0 }
  })

  matchSchedule.forEach(match => {
    if (match.score !== '-') {
      const scores = match.score.split('-').map(s => parseInt(s.trim()))
      if (scores.length === 2) {
        if (scores[0] > scores[1]) {
          records[match.team1Idx].wins++
          records[match.team2Idx].losses++
        } else if (scores[1] > scores[0]) {
          records[match.team2Idx].wins++
          records[match.team1Idx].losses++
        }
      }
    }
  })

  return records
}

const generatePoolPlayHTML = () => {
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
              ${matchSchedule.map((match, idx) => `
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
  `
}

const generateStandingsHTML = () => {
  const records = getRecords()
  
  const poolATeams = teams.filter(t => t.pool === 'A').map(team => {
    const teamIdx = teams.indexOf(team)
    return { ...team, teamIdx, record: records[teamIdx] }
  }).sort((a, b) => b.record.wins - a.record.wins)
  
  const poolBTeams = teams.filter(t => t.pool === 'B').map(team => {
    const teamIdx = teams.indexOf(team)
    return { ...team, teamIdx, record: records[teamIdx] }
  }).sort((a, b) => b.record.wins - a.record.wins)

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
                <th>Record</th>
              </tr>
            </thead>
            <tbody>
              ${poolATeams.map((team, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td>${team.name}</td>
                  <td>${team.record.wins}-${team.record.losses}</td>
                </tr>
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
                <th>Record</th>
              </tr>
            </thead>
            <tbody>
              ${poolBTeams.map((team, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td>${team.name}</td>
                  <td>${team.record.wins}-${team.record.losses}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
}

const generateBracketsHTML = () => {
  const renderMatch = (match) => `
    <div class="bracket-match">
      <div class="bracket-team">${match.team1}</div>
      <div class="bracket-team">${match.team2}</div>
      <div class="bracket-score">${match.score}</div>
    </div>
  `
  
  const bracketHTML = `
    <div class="bracket-container">
      <div class="bracket-round">
        <h3>Quarterfinals</h3>
        ${bracketMatches.quarterfinals.map(renderMatch).join('')}
      </div>
      
      <div class="bracket-round">
        <h3>Semifinals</h3>
        ${bracketMatches.semifinals.map(renderMatch).join('')}
      </div>
      
      <div class="bracket-round">
        <h3>Finals</h3>
        ${bracketMatches.finals.map(renderMatch).join('')}
      </div>
      
      <div class="bracket-round">
        <h3>Champion</h3>
        <div class="bracket-champion">
          <div class="bracket-team">${bracketMatches.finals[0].winner || 'TBD'}</div>
        </div>
      </div>
    </div>
  `
  
  const consolationHTML = `
    <div class="bracket-container">
      <div class="bracket-round">
        <h3>Consolation Semifinals</h3>
        ${bracketMatches.consolationSemis.map(renderMatch).join('')}
      </div>
      
      <div class="bracket-round">
        <h3>Consolation Finals</h3>
        ${bracketMatches.consolationFinals.map(renderMatch).join('')}
      </div>
      
      <div class="bracket-round">
        <h3>5th Place</h3>
        <div class="bracket-champion consolation-winner">
          <div class="bracket-team">${bracketMatches.consolationFinals[0].winner || 'TBD'}</div>
        </div>
      </div>
    </div>
  `
  
  return `
    <div class="bracket-section">
      <h3>Championship Bracket</h3>
      ${bracketHTML}
      <h3 style="margin-top: 3rem;">Consolation Bracket</h3>
      ${consolationHTML}
    </div>
  `
}

// --- Main Template Render ---
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Turkey Tennis Doubles Invitational</h1>
    <div class="tabs">
      <button class="tab-button active" data-tab="home">Home</button>
      <button class="tab-button" data-tab="schedule">Schedule and Results</button>
      <button class="tab-button" data-tab="scores">Submit Scores</button>
      <button class="tab-button" data-tab="teams">Team Details</button>
    </div>
    <div class="tab-content">
      <div id="home" class="tab-pane active">
        <!-- WELCOME DESCRIPTION INSERTED HERE -->
        ${welcomeDescriptionHTML}
        
        <div class="teams-section">
          <h2>Participating Teams</h2>
          <div class="teams-grid">
            ${teamsHTML}
          </div>
        </div>
        <div class="alternates-section">
          <h2>Alternates</h2>
          <ul class="alternates-list">
            ${alternatesHTML}
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
      </div>
      <div id="scores" class="tab-pane">
        <h2>Submit Scores</h2>
        <div class="password-section" id="password-section">
          <div class="form-group">
            <label for="password">Enter Password:</label>
            <input type="password" id="password" placeholder="Enter password">
          </div>
          <button id="passwordBtn" class="submit-btn">Unlock</button>
          <div id="password-result" class="result"></div>
        </div>
        <div class="score-form" id="score-form" style="display: none;">
          <div id="pool-play-section" style="display: ${bracketPlayActive ? 'none' : 'block'};">
            <h3>Pool Play Scores</h3>
            <div class="form-group">
              <label for="match-select">Select Match:</label>
              <select id="match-select">
                <option value="">Choose a match...</option>
                ${matchSchedule.map((match, idx) => `
                  <option value="${idx}">${match.time} - Court ${match.court}: ${match.team1} vs ${match.team2}</option>
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
          
          <div id="bracket-play-section" style="display: ${bracketPlayActive ? 'block' : 'none'};">
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
      </div>
      <div id="teams" class="tab-pane">
        <h2>Team Details</h2>
        <div class="team-details-container">
          ${teamDetailsHTML}
        </div>
      </div>
    </div>
  </div>
`

// --- Event Handlers and Helpers ---

const switchTab = (tabName) => {
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'))
  document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'))

  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active')
  document.getElementById(tabName).classList.add('active')
}

const switchSubtab = (subtabName) => {
  document.querySelectorAll('.subtab-button').forEach(btn => btn.classList.remove('active'))
  document.querySelectorAll('.subtab-pane').forEach(pane => pane.classList.remove('active'))

  const currentTabButton = document.querySelector(`[data-subtab="${subtabName}"]`);
  if (currentTabButton) currentTabButton.classList.add('active');
  
  const currentTabPane = document.getElementById(subtabName);
  if (currentTabPane) currentTabPane.classList.add('active');

  // Re-render dynamic content on tab switch
  if (subtabName === 'standings') {
    document.getElementById('standings').innerHTML = generateStandingsHTML()
  } else if (subtabName === 'pool-play') {
    document.getElementById('pool-play').innerHTML = generatePoolPlayHTML()
  } else if (subtabName === 'brackets') {
    document.getElementById('brackets').innerHTML = generateBracketsHTML()
  }
}

const updateBracketMatchSelect = () => {
  const select = document.getElementById('bracket-match-select')
  if (!select) return; // Guard
  select.innerHTML = '<option value="">Choose a bracket match...</option>'
  
  const sections = [
    { round: 'qf', matches: bracketMatches.quarterfinals, prefix: 'Quarterfinal' },
    { round: 'sf', matches: bracketMatches.semifinals, prefix: 'Semifinal' },
    { round: 'f', matches: bracketMatches.finals, prefix: 'Finals' },
    { round: 'csf', matches: bracketMatches.consolationSemis, prefix: 'Consolation Semifinal' },
    { round: 'cf', matches: bracketMatches.consolationFinals, prefix: 'Consolation Finals' }
  ];

  sections.forEach(({ round, matches, prefix }) => {
    matches.forEach((match, idx) => {
      // Check if match teams are finalized and score is not submitted
      const isPlaceholder = match.team1.includes('Pool') || match.team1.includes('Winner') || match.team1.includes('Loser');
      
      if (match.score === '-' && !isPlaceholder) {
        let name = `${prefix} ${round !== 'f' && round !== 'cf' ? idx + 1 : ''}`.trim();
        select.innerHTML += `<option value="${round}-${idx}">${name}: ${match.team1} vs ${match.team2}</option>`
      }
    })
  })
}

// Event Listeners initialization
document.addEventListener('DOMContentLoaded', () => {
  // Ensure correct subtab is rendered on load
  switchSubtab('pool-play');
  
  // Tab Switching
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab')
      switchTab(tabName)
    })
  })

  // Subtab Switching
  document.querySelectorAll('.subtab-button').forEach(button => {
    button.addEventListener('click', () => {
      const subtabName = button.getAttribute('data-subtab')
      switchSubtab(subtabName)
    })
  })

  // Team Card Click
  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', () => {
      switchTab('teams')
    })
  })

  // Password Unlock
  document.getElementById('passwordBtn').addEventListener('click', () => {
    const password = document.getElementById('password').value
    const resultDiv = document.getElementById('password-result')

    if (password === CORRECT_PASSWORD) {
      passwordUnlocked = true
      document.getElementById('password-section').style.display = 'none'
      document.getElementById('score-form').style.display = 'block'
      document.getElementById('password').value = ''
      
      if (bracketPlayActive) {
        document.getElementById('pool-play-section').style.display = 'none';
        document.getElementById('bracket-play-section').style.display = 'block';
        updateBracketMatchSelect();
      } else {
        document.getElementById('pool-play-section').style.display = 'block';
        document.getElementById('bracket-play-section').style.display = 'none';
      }
      
      resultDiv.textContent = 'Unlocked!'
      resultDiv.className = 'result success'
    } else {
      resultDiv.textContent = 'Incorrect password'
      resultDiv.className = 'result error'
    }
  })

  // Pool Play Score Submission
  document.getElementById('submitBtn').addEventListener('click', () => {
    if (!passwordUnlocked) {
      document.getElementById('result').textContent = 'Please enter password first'
      document.getElementById('result').className = 'result error'
      return
    }

    const matchIdx = parseInt(document.getElementById('match-select').value)
    const score1 = parseInt(document.getElementById('score1').value)
    const score2 = parseInt(document.getElementById('score2').value)

    const resultDiv = document.getElementById('result')

    if (isNaN(matchIdx) || matchIdx < 0) {
      resultDiv.textContent = 'Please select a match'
      resultDiv.className = 'result error'
      return
    }

    if (isNaN(score1) || isNaN(score2)) {
      resultDiv.textContent = 'Please enter valid scores'
      resultDiv.className = 'result error'
      return
    }
    
    // Check if score is already submitted
    if (matchSchedule[matchIdx].score !== '-') {
        resultDiv.textContent = 'Score already submitted for this match.'
        resultDiv.className = 'result error'
        return
    }

    const match = matchSchedule[matchIdx]
    let winner

    if (score1 > score2) {
      winner = match.team1
    } else if (score2 > score1) {
      winner = match.team2
    } else {
      resultDiv.textContent = `${match.team1} ${score1} - ${score2} ${match.team2} (Tied)`
      resultDiv.className = 'result tie'
      document.getElementById('match-select').value = ''
      document.getElementById('score1').value = ''
      document.getElementById('score2').value = ''
      match.score = `${score1} - ${score2}` // Still record tie for history
      switchSubtab('pool-play'); // Update view
      return
    }

    match.score = `${score1} - ${score2}`

    resultDiv.textContent = `${match.team1} ${score1} - ${score2} ${match.team2} | Winner: ${winner}`
    resultDiv.className = 'result success'

    document.getElementById('match-select').value = ''
    document.getElementById('score1').value = ''
    document.getElementById('score2').value = ''

    switchSubtab('pool-play') // Update view to show new score
  })

  // Conclude Pool Play Button
  document.getElementById('concludeBtn').addEventListener('click', () => {
    // NOTE: Removed window.confirm() as per instructions.
    // In a real app, this would be a custom modal. Here, we just proceed.
    
    const records = getRecords()
    
    // Sort teams by record (wins descending)
    const poolATeams = teams.filter(t => t.pool === 'A').map(team => {
      const teamIdx = teams.indexOf(team)
      return { ...team, teamIdx, record: records[teamIdx] }
    }).sort((a, b) => b.record.wins - a.record.wins)
    
    const poolBTeams = teams.filter(t => t.pool === 'B').map(team => {
      const teamIdx = teams.indexOf(team)
      return { ...team, teamIdx, record: records[teamIdx] }
    }).sort((a, b) => b.record.wins - a.record.wins)
    
    if (poolATeams.some(t => t.record.wins + t.record.losses < 3) || 
        poolBTeams.some(t => t.record.wins + t.record.losses < 3)) {
         document.getElementById('result').textContent = 'Warning: Not all pool play matches have been scored. Proceeding anyway.'
         document.getElementById('result').className = 'result tie'
    } else {
         document.getElementById('result').textContent = 'Pool play concluded! Bracket play has begun.'
         document.getElementById('result').className = 'result success'
    }

    // Seed the bracket (Top 4 from each pool)
    bracketMatches.quarterfinals[0].team1 = poolATeams[0].name
    bracketMatches.quarterfinals[0].team2 = poolBTeams[3].name
    
    bracketMatches.quarterfinals[1].team1 = poolBTeams[0].name
    bracketMatches.quarterfinals[1].team2 = poolATeams[3].name
    
    bracketMatches.quarterfinals[2].team1 = poolATeams[1].name
    bracketMatches.quarterfinals[2].team2 = poolBTeams[2].name
    
    bracketMatches.quarterfinals[3].team1 = poolBTeams[1].name
    bracketMatches.quarterfinals[3].team2 = poolATeams[2].name
    
    bracketPlayActive = true
    
    document.getElementById('pool-play-section').style.display = 'none'
    document.getElementById('bracket-play-section').style.display = 'block'
    
    updateBracketMatchSelect()
    
    switchSubtab('brackets')
  })
  
  // Bracket Score Submission
  document.getElementById('submitBracketBtn').addEventListener('click', () => {
    const matchId = document.getElementById('bracket-match-select').value
    const score1 = parseInt(document.getElementById('bracket-score1').value)
    const score2 = parseInt(document.getElementById('bracket-score2').value)
    const resultDiv = document.getElementById('result')
    
    if (!matchId) {
      resultDiv.textContent = 'Please select a match'
      resultDiv.className = 'result error'
      return
    }
    
    if (isNaN(score1) || isNaN(score2)) {
      resultDiv.textContent = 'Please enter valid scores'
      resultDiv.className = 'result error'
      return
    }
    
    if (score1 === score2) {
      resultDiv.textContent = 'Ties are not allowed in bracket play'
      resultDiv.className = 'result error'
      return
    }
    
    const [round, idxStr] = matchId.split('-')
    const idx = parseInt(idxStr);
    let match, winner, loser
    
    // Helper to update match and successors
    const updateMatch = (matchArray, index) => {
      match = matchArray[index];
      winner = score1 > score2 ? match.team1 : match.team2;
      loser = score1 > score2 ? match.team2 : match.team1;
      match.score = `${score1} - ${score2}`;
      match.winner = winner;
      
      resultDiv.textContent = `Score submitted: ${match.team1} ${score1} - ${score2} ${match.team2} | Winner: ${winner}`
      resultDiv.className = 'result success'
    }

    if (round === 'qf') {
      updateMatch(bracketMatches.quarterfinals, idx);
      if (idx === 0) {
        bracketMatches.semifinals[0].team1 = winner;
        bracketMatches.consolationSemis[0].team1 = loser;
      } else if (idx === 1) {
        bracketMatches.semifinals[0].team2 = winner;
        bracketMatches.consolationSemis[0].team2 = loser;
      } else if (idx === 2) {
        bracketMatches.semifinals[1].team1 = winner;
        bracketMatches.consolationSemis[1].team1 = loser;
      } else if (idx === 3) {
        bracketMatches.semifinals[1].team2 = winner;
        bracketMatches.consolationSemis[1].team2 = loser;
      }
    } else if (round === 'sf') {
      updateMatch(bracketMatches.semifinals, idx);
      if (idx === 0) {
        bracketMatches.finals[0].team1 = winner;
      } else if (idx === 1) {
        bracketMatches.finals[0].team2 = winner;
      }
    } else if (round === 'f') {
      updateMatch(bracketMatches.finals, idx);
      // Champion logic done by reading match.winner
    } else if (round === 'csf') {
      updateMatch(bracketMatches.consolationSemis, idx);
      if (idx === 0) {
        bracketMatches.consolationFinals[0].team1 = winner;
      } else if (idx === 1) {
        bracketMatches.consolationFinals[0].team2 = winner;
      }
    } else if (round === 'cf') {
      updateMatch(bracketMatches.consolationFinals, idx);
      // 5th Place logic done by reading match.winner
    }
    
    document.getElementById('bracket-match-select').value = ''
    document.getElementById('bracket-score1').value = ''
    document.getElementById('bracket-score2').value = ''
    
    updateBracketMatchSelect()
    switchSubtab('brackets')
  })
  
  // Reset Tournament Button
  document.getElementById('resetBtn').addEventListener('click', () => {
    // NOTE: Removed window.confirm() as per instructions.
    // In a real app, this would be a custom modal. Here, we just reset.

    // Reset all pool play scores
    matchSchedule.forEach(match => {
      match.score = '-'
    })
    
    // Reset all bracket matches
    const resetBracketMatch = (match) => {
      match.score = '-'
      match.winner = null
    }

    bracketMatches.quarterfinals.forEach(resetBracketMatch)
    bracketMatches.quarterfinals[0].team1 = 'Pool A 1st'
    bracketMatches.quarterfinals[0].team2 = 'Pool B 4th'
    bracketMatches.quarterfinals[1].team1 = 'Pool B 1st'
    bracketMatches.quarterfinals[1].team2 = 'Pool A 4th'
    bracketMatches.quarterfinals[2].team1 = 'Pool A 2nd'
    bracketMatches.quarterfinals[2].team2 = 'Pool B 3rd'
    bracketMatches.quarterfinals[3].team1 = 'Pool B 2nd'
    bracketMatches.quarterfinals[3].team2 = 'Pool A 3rd'
    
    bracketMatches.semifinals.forEach(resetBracketMatch)
    bracketMatches.semifinals[0].team1 = 'Winner QF1'
    bracketMatches.semifinals[0].team2 = 'Winner QF2'
    bracketMatches.semifinals[1].team1 = 'Winner QF3'
    bracketMatches.semifinals[1].team2 = 'Winner QF4'
    
    bracketMatches.finals[0].score = '-'
    bracketMatches.finals[0].winner = null
    bracketMatches.finals[0].team1 = 'Winner SF1'
    bracketMatches.finals[0].team2 = 'Winner SF2'
    
    bracketMatches.consolationSemis.forEach(resetBracketMatch)
    bracketMatches.consolationSemis[0].team1 = 'Loser QF1'
    bracketMatches.consolationSemis[0].team2 = 'Loser QF2'
    bracketMatches.consolationSemis[1].team1 = 'Loser QF3'
    bracketMatches.consolationSemis[1].team2 = 'Loser QF4'
    
    bracketMatches.consolationFinals[0].score = '-'
    bracketMatches.consolationFinals[0].winner = null
    bracketMatches.consolationFinals[0].team1 = 'Winner CSF1'
    bracketMatches.consolationFinals[0].team2 = 'Winner CSF2'
    
    bracketPlayActive = false
    
    document.getElementById('pool-play-section').style.display = 'block'
    document.getElementById('bracket-play-section').style.display = 'none'
    
    document.getElementById('result').textContent = 'Tournament has been reset!'
    document.getElementById('result').className = 'result error'
    
    switchSubtab('pool-play')
  })
});
