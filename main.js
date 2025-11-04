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

let matchResults = []

const getRecords = () => {
  const records = {}
  teams.forEach((team, idx) => {
    records[idx] = { wins: 0, losses: 0 }
  })

  matchResults.forEach(match => {
    if (match.team1Score > match.team2Score) {
      records[match.team1].wins++
      records[match.team2].losses++
    } else if (match.team2Score > match.team1Score) {
      records[match.team2].wins++
      records[match.team1].losses++
    }
  })

  return records
}

const generatePoolsHTML = () => {
  const records = getRecords()

  return `
    <div class="pools-container">
      <div class="pool">
        <h3>Pool A</h3>
        <table class="standings-table">
          <thead>
            <tr>
              <th>Team</th>
              <th>Record</th>
            </tr>
          </thead>
          <tbody>
            ${teams.filter(t => t.pool === 'A').map((team, idx) => {
              const record = records[idx]
              const teamIdx = teams.findIndex(t => t === team)
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
        <h3>Pool B</h3>
        <table class="standings-table">
          <thead>
            <tr>
              <th>Team</th>
              <th>Record</th>
            </tr>
          </thead>
          <tbody>
            ${teams.filter(t => t.pool === 'B').map((team, idx) => {
              const record = records[idx]
              const teamIdx = teams.findIndex(t => t === team)
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

    <div class="matches-section">
      <h3>Match Results</h3>
      <div class="matches-list">
        ${matchResults.length === 0 ? '<p>No matches played yet.</p>' : matchResults.map((match, idx) => `
          <div class="match-result">
            <strong>${teams[match.team1].name}</strong> ${match.team1Score} - ${match.team2Score} <strong>${teams[match.team2].name}</strong>
          </div>
        `).join('')}
      </div>
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
        <div id="schedule-content">
          ${generatePoolsHTML()}
        </div>
      </div>
      <div id="scores" class="tab-pane">
        <h2>Submit Scores</h2>
        <div class="score-form">
          <div class="form-group">
            <label for="team1">Team 1:</label>
            <select id="team1">
              <option value="">Select Team</option>
              ${teamOptions}
            </select>
          </div>
          <div class="form-group">
            <label for="team2">Team 2:</label>
            <select id="team2">
              <option value="">Select Team</option>
              ${teamOptions}
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

const switchTab = (tabName) => {
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'))
  document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'))

  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active')
  document.getElementById(tabName).classList.add('active')

  if (tabName === 'schedule') {
    document.getElementById('schedule-content').innerHTML = generatePoolsHTML()
  }
}

document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const tabName = button.getAttribute('data-tab')
    switchTab(tabName)
  })
})

document.querySelectorAll('.team-card').forEach(card => {
  card.addEventListener('click', () => {
    switchTab('teams')
  })
})

document.getElementById('submitBtn').addEventListener('click', () => {
  const team1Idx = document.getElementById('team1').value
  const team2Idx = document.getElementById('team2').value
  const score1 = parseInt(document.getElementById('score1').value) || 0
  const score2 = parseInt(document.getElementById('score2').value) || 0

  const resultDiv = document.getElementById('result')

  if (!team1Idx || !team2Idx) {
    resultDiv.textContent = 'Please select both teams'
    resultDiv.className = 'result error'
    return
  }

  if (team1Idx === team2Idx) {
    resultDiv.textContent = 'Please select two different teams'
    resultDiv.className = 'result error'
    return
  }

  if (score1 === 0 && score2 === 0) {
    resultDiv.textContent = 'Please enter at least one score'
    resultDiv.className = 'result error'
    return
  }

  const team1Name = teams[team1Idx].name
  const team2Name = teams[team2Idx].name
  let winner

  matchResults.push({
    team1: parseInt(team1Idx),
    team2: parseInt(team2Idx),
    team1Score: score1,
    team2Score: score2
  })

  if (score1 > score2) {
    winner = team1Name
  } else if (score2 > score1) {
    winner = team2Name
  } else {
    resultDiv.textContent = `${team1Name} ${score1} - ${score2} ${team2Name} (Tied)`
    resultDiv.className = 'result tie'
    document.getElementById('team1').value = ''
    document.getElementById('team2').value = ''
    document.getElementById('score1').value = ''
    document.getElementById('score2').value = ''
    return
  }

  resultDiv.textContent = `${team1Name} ${score1} - ${score2} ${team2Name} | Winner: ${winner}`
  resultDiv.className = 'result success'

  document.getElementById('team1').value = ''
  document.getElementById('team2').value = ''
  document.getElementById('score1').value = ''
  document.getElementById('score2').value = ''
})
