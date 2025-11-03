import './style.css'

const teams = [
  {
    name: 'Team 1',
    players: ['Alice Johnson', 'Bob Smith'],
    pool: 'A',
    description: 'Team 1 brings a dynamic duo with excellent net play and consistent baseline shots. Known for their strategic doubles positioning and competitive spirit.'
  },
  {
    name: 'Team 2',
    players: ['Charlie Brown', 'Diana Prince'],
    pool: 'B',
    description: 'Team 2 combines aggressive serving with solid return game. Their teamwork and communication on court make them a formidable opponent in any match.'
  },
  {
    name: 'Team 3',
    players: ['Ethan Hunt', 'Fiona Green'],
    pool: 'A',
    description: 'Team 3 excels in fast-paced rallies with quick reflexes at the net. Their high-energy style and tactical awareness make them favorites in close matches.'
  },
  {
    name: 'Team 4',
    players: ['George Miller', 'Hannah Lee'],
    pool: 'B',
    description: 'Team 4 showcases balanced play with strength in both offense and defense. Their consistent performance and experience shine through in every tournament.'
  },
  {
    name: 'Team 5',
    players: ['Ivan Petrov', 'Julia White'],
    pool: 'A',
    description: 'Team 5 features powerful serves and precision groundstrokes. Their coordinated volleys and court coverage make them a challenging team to face.'
  },
  {
    name: 'Team 6',
    players: ['Kevin Hart', 'Lisa Chen'],
    pool: 'B',
    description: 'Team 6 brings finesse and timing to their game with exceptional footwork. Their ability to read the court and adapt strategy gives them an edge.'
  },
  {
    name: 'Team 7',
    players: ['Marcus Johnson', 'Nina Patel'],
    pool: 'A',
    description: 'Team 7 combines youth and energy with tactical maturity. Their serve-and-volley game and aggressive baseline play create numerous winning opportunities.'
  },
  {
    name: 'Team 8',
    players: ['Oscar Garcia', 'Patricia Lopez'],
    pool: 'B',
    description: 'Team 8 is known for their versatility and mental toughness in clutch situations. Their well-rounded game and experience make them consistent contenders.'
  }
]

const alternates = [
  'Rachel Green',
  'Samuel Taylor',
  'Tina Turner',
  'Ulysses Grant'
]

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

const poolsHTML = `
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
          ${teams.filter(t => t.pool === 'A').map(team => `
            <tr>
              <td>${team.name}</td>
              <td>0-0</td>
            </tr>
          `).join('')}
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
          ${teams.filter(t => t.pool === 'B').map(team => `
            <tr>
              <td>${team.name}</td>
              <td>0-0</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </div>
`

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
        ${poolsHTML}
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

  const team1Name = teams[team1Idx].name
  const team2Name = teams[team2Idx].name
  let winner

  if (score1 > score2) {
    winner = team1Name
  } else if (score2 > score1) {
    winner = team2Name
  } else {
    resultDiv.textContent = `${team1Name} ${score1} - ${score2} ${team2Name} (Tied)`
    resultDiv.className = 'result tie'
    return
  }

  resultDiv.textContent = `${team1Name} ${score1} - ${score2} ${team2Name} | Winner: ${winner}`
  resultDiv.className = 'result success'
})
