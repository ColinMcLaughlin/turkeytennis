import './style.css'

const teams = [
  { name: 'Team 1', players: ['Alice Johnson', 'Bob Smith'] },
  { name: 'Team 2', players: ['Charlie Brown', 'Diana Prince'] },
  { name: 'Team 3', players: ['Ethan Hunt', 'Fiona Green'] },
  { name: 'Team 4', players: ['George Miller', 'Hannah Lee'] },
  { name: 'Team 5', players: ['Ivan Petrov', 'Julia White'] },
  { name: 'Team 6', players: ['Kevin Hart', 'Lisa Chen'] },
  { name: 'Team 7', players: ['Marcus Johnson', 'Nina Patel'] },
  { name: 'Team 8', players: ['Oscar Garcia', 'Patricia Lopez'] }
]

const alternates = [
  'Rachel Green',
  'Samuel Taylor',
  'Tina Turner',
  'Ulysses Grant'
]

const teamsHTML = teams.map((team, idx) => `
  <div class="team-card">
    <h3>${team.name}</h3>
    <ul>
      <li>${team.players[0]}</li>
      <li>${team.players[1]}</li>
    </ul>
  </div>
`).join('')

const alternatesHTML = alternates.map(alt => `<li>${alt}</li>`).join('')

const teamOptions = teams.map((team, idx) => `<option value="${idx}">${team.name}</option>`).join('')

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Turkey Tennis Doubles Invitational</h1>
    <div class="tabs">
      <button class="tab-button active" data-tab="home">Home</button>
      <button class="tab-button" data-tab="schedule">Schedule and Results</button>
      <button class="tab-button" data-tab="scores">Submit Scores</button>
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
        <p>Schedule and results will be displayed here.</p>
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
    </div>
  </div>
`

document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const tabName = button.getAttribute('data-tab')

    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'))
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'))

    button.classList.add('active')
    document.getElementById(tabName).classList.add('active')
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
