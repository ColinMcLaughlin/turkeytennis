import './style.css'

const teams = [
  {
    name: 'Towson X',
    players: ['Elias', 'Yoshi'],
    pool: 'B',
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
    description: 'Jury is still out.  Might be both'
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
    pool: 'A',
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
  { time: '9:00 AM', court: '1', team1: 'Towson X', team2: 'Siblings or Married', pool: 'A', score: '-', team1Idx: 0, team2Idx: 2 },
  { time: '9:00 AM', court: '2', team1: 'Just Roomates', team2: 'Team Fun', pool: 'A', score: '-', team1Idx: 4, team2Idx: 6 },
  { time: '11:15 AM', court: '1', team1: 'Towson X', team2: 'Just Roomates', pool: 'A', score: '-', team1Idx: 0, team2Idx: 4 },
  { time: '11:15 AM', court: '2', team1: 'Siblings or Married', team2: 'Team Fun', pool: 'A', score: '-', team1Idx: 2, team2Idx: 6 },
  { time: '1:30 PM', court: '1', team1: 'Towson X', team2: 'Team Fun', pool: 'A', score: '-', team1Idx: 0, team2Idx: 6 },
  { time: '1:30 PM', court: '2', team1: 'Just Roomates', team2: 'Siblings or Married', pool: 'A', score: '-', team1Idx: 4, team2Idx: 2 },
  { time: '9:00 AM', court: '3', team1: 'Where is my husband', team2: 'uWu', pool: 'B', score: '-', team1Idx: 1, team2Idx: 3 },
  { time: '9:00 AM', court: '4', team1: 'Team 1 Bed 1 Bath 1 Den', team2: 'Towson Y', pool: 'B', score: '-', team1Idx: 7, team2Idx: 5 },
  { time: '11:15 AM', court: '3', team1: 'Where is my husband', team2: 'Team 1 Bed 1 Bath 1 Den', pool: 'B', score: '-', team1Idx: 1, team2Idx: 7 },
  { time: '11:15 AM', court: '4', team1: 'uWu', team2: 'Towson Y', pool: 'B', score: '-', team1Idx: 3, team2Idx: 5 },
  { time: '1:30 PM', court: '3', team1: 'Where is my husband', team2: 'Towson Y', pool: 'B', score: '-', team1Idx: 1, team2Idx: 5 },
  { time: '1:30 PM', court: '4', team1: 'uWu', team2: 'Team 1 Bed 1 Bath 1 Den', pool: 'B', score: '-', team1Idx: 3, team2Idx: 7 }
]

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
        <h3>Pool A Schedule & Scores</h3>
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
            ${matchSchedule.filter(m => m.pool === 'A').map((match, idx) => `
              <tr>
                <td>${match.time}</td>
                <td>${match.court}</td>
                <td>${match.team1}</td>
                <td>${match.team2}</td>
                <td class="score-cell" data-match-idx="${matchSchedule.indexOf(match)}">${match.score}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div class="pool">
        <h3>Pool B Schedule & Scores</h3>
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
            ${matchSchedule.filter(m => m.pool === 'B').map((match, idx) => `
              <tr>
                <td>${match.time}</td>
                <td>${match.court}</td>
                <td>${match.team1}</td>
                <td>${match.team2}</td>
                <td class="score-cell" data-match-idx="${matchSchedule.indexOf(match)}">${match.score}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `
}

const generateStandingsHTML = () => {
  const records = getRecords()

  return `
    <div class="pools-container">
      <div class="pool">
        <h3>Pool A Standings</h3>
        <table class="standings-table">
          <thead>
            <tr>
              <th>Team</th>
              <th>Record</th>
            </tr>
          </thead>
          <tbody>
            ${teams.filter(t => t.pool === 'A').map((team, idx) => {
              const teamIdx = teams.indexOf(team)
              const record = records[teamIdx]
              return `
                <tr>
                  <td>${team.name}</td>
                  <td>${record.wins}-${record.losses}</td>
                </tr>
              `
            }).join('')}
          </tbody>
        </table>
      </div>
      <div class="pool">
        <h3>Pool B Standings</h3>
        <table class="standings-table">
          <thead>
            <tr>
              <th>Team</th>
              <th>Record</th>
            </tr>
          </thead>
          <tbody>
            ${teams.filter(t => t.pool === 'B').map((team, idx) => {
              const teamIdx = teams.indexOf(team)
              const record = records[teamIdx]
              return `
                <tr>
                  <td>${team.name}</td>
                  <td>${record.wins}-${record.losses}</td>
                </tr>
              `
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `
}

const generateBracketsHTML = () => {
  return `
    <div class="brackets-section">
      <p>Brackets will be displayed here after pool play concludes.</p>
    </div>
  `
}

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
          <button id="submitBtn" class="submit-btn">Submit Score</button>
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

let passwordUnlocked = false

document.getElementById('passwordBtn').addEventListener('click', () => {
  const password = document.getElementById('password').value
  const resultDiv = document.getElementById('password-result')

  if (password === CORRECT_PASSWORD) {
    passwordUnlocked = true
    document.getElementById('password-section').style.display = 'none'
    document.getElementById('score-form').style.display = 'block'
    resultDiv.textContent = ''
  } else {
    resultDiv.textContent = 'Incorrect password'
    resultDiv.className = 'result error'
  }
})

document.getElementById('password').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('passwordBtn').click()
  }
})

const switchTab = (tabName) => {
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'))
  document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'))

  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active')
  document.getElementById(tabName).classList.add('active')
}

const switchSubtab = (subtabName) => {
  document.querySelectorAll('.subtab-button').forEach(btn => btn.classList.remove('active'))
  document.querySelectorAll('.subtab-pane').forEach(pane => pane.classList.remove('active'))

  document.querySelector(`[data-subtab="${subtabName}"]`).classList.add('active')
  document.getElementById(subtabName).classList.add('active')

  if (subtabName === 'standings') {
    document.getElementById('standings').innerHTML = generateStandingsHTML()
  } else if (subtabName === 'pool-play') {
    document.getElementById('pool-play').innerHTML = generatePoolPlayHTML()
  }
}

document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const tabName = button.getAttribute('data-tab')
    switchTab(tabName)
  })
})

document.querySelectorAll('.subtab-button').forEach(button => {
  button.addEventListener('click', () => {
    const subtabName = button.getAttribute('data-subtab')
    switchSubtab(subtabName)
  })
})

document.querySelectorAll('.team-card').forEach(card => {
  card.addEventListener('click', () => {
    switchTab('teams')
  })
})

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
    return
  }

  match.score = `${score1} - ${score2}`

  resultDiv.textContent = `${match.team1} ${score1} - ${score2} ${match.team2} | Winner: ${winner}`
  resultDiv.className = 'result success'

  document.getElementById('match-select').value = ''
  document.getElementById('score1').value = ''
  document.getElementById('score2').value = ''

  switchSubtab('standings')
})
