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

// Password - change this to whatever you want
const CORRECT_PASSWORD = "turkey2024";

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
          <tr>
            <td>9:00 AM</td>
            <td>1</td>
            <td>Towson X</td>
            <td>Team Siblings or Married</td>
            <td>-</td>
          </tr>
          <tr>
            <td>9:00 AM</td>
            <td>2</td>
            <td>Just Roomates</td>
            <td>Team Fun</td>
            <td>-</td>
          </tr>
          <tr>
            <td>11:15 AM</td>
            <td>1</td>
            <td>Towson X</td>
            <td>Just Roomates</td>
            <td>-</td>
          </tr>
          <tr>
            <td>11:15 AM</td>
            <td>2</td>
            <td>Team Siblings or Married</td>
            <td>Team Fun</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1:30 PM</td>
            <td>1</td>
            <td>Towson X</td>
            <td>Team Fun</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1:30 PM</td>
            <td>2</td>
            <td>Team Siblings or Married</td>
            <td>Just Roomates</td>
            <td>-</td>
          </tr>
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
          <tr>
            <td>9:00 AM</td>
            <td>3</td>
            <td>Team Where is my husband</td>
            <td>Team uuWuu</td>
            <td>-</td>
          </tr>
          <tr>
            <td>9:00 AM</td>
            <td>4</td>
            <td>Towson Y</td>
            <td>Team 1 Bed 1 Bath 1 Den</td>
            <td>-</td>
          </tr>
          <tr>
            <td>11:15 AM</td>
            <td>3</td>
            <td>Team Where is my husband</td>
            <td>Towson Y</td>
            <td>-</td>
          </tr>
          <tr>
            <td>11:15 AM</td>
            <td>4</td>
            <td>Team uuWuu</td>
            <td>Team 1 Bed 1 Bath 1 Den</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1:30 PM</td>
            <td>3</td>
            <td>Team Where is my husband</td>
            <td>Team 1 Bed 1 Bath 1 Den</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1:30 PM</td>
            <td>4</td>
            <td>Team uuWuu</td>
            <td>Towson Y</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`

const bracketHTML = `
  <div class="bracket-container">
    <div class="bracket-round">
      <h3>Quarterfinals</h3>
      <div class="bracket-match">
        <div class="bracket-team">Pool A 1st</div>
        <div class="bracket-team">Pool B 4th</div>
        <div class="bracket-score">-</div>
      </div>
      <div class="bracket-match">
        <div class="bracket-team">Pool B 1st</div>
        <div class="bracket-team">Pool A 4th</div>
        <div class="bracket-score">-</div>
      </div>
      <div class="bracket-match">
        <div class="bracket-team">Pool A 2nd</div>
        <div class="bracket-team">Pool B 3rd</div>
        <div class="bracket-score">-</div>
      </div>
      <div class="bracket-match">
        <div class="bracket-team">Pool B 2nd</div>
        <div class="bracket-team">Pool A 3rd</div>
        <div class="bracket-score">-</div>
      </div>
    </div>
    
    <div class="bracket-round">
      <h3>Semifinals</h3>
      <div class="bracket-match">
        <div class="bracket-team">Winner QF1</div>
        <div class="bracket-team">Winner QF2</div>
        <div class="bracket-score">-</div>
      </div>
      <div class="bracket-match">
        <div class="bracket-team">Winner QF3</div>
        <div class="bracket-team">Winner QF4</div>
        <div class="bracket-score">-</div>
      </div>
    </div>
    
    <div class="bracket-round">
      <h3>Finals</h3>
      <div class="bracket-match">
        <div class="bracket-team">Winner SF1</div>
        <div class="bracket-team">Winner SF2</div>
        <div class="bracket-score">-</div>
      </div>
    </div>
    
    <div class="bracket-round">
      <h3>Champion</h3>
      <div class="bracket-champion">
        <div class="bracket-team">TBD</div>
      </div>
    </div>
  </div>
`

const consolationBracketHTML = `
  <div class="bracket-container">
    <div class="bracket-round">
      <h3>Consolation Semifinals</h3>
      <div class="bracket-match">
        <div class="bracket-team">Loser QF1</div>
        <div class="bracket-team">Loser QF2</div>
        <div class="bracket-score">-</div>
      </div>
      <div class="bracket-match">
        <div class="bracket-team">Loser QF3</div>
        <div class="bracket-team">Loser QF4</div>
        <div class="bracket-score">-</div>
      </div>
    </div>
    
    <div class="bracket-round">
      <h3>Consolation Finals</h3>
      <div class="bracket-match">
        <div class="bracket-team">Winner CSF1</div>
        <div class="bracket-team">Winner CSF2</div>
        <div class="bracket-score">-</div>
      </div>
    </div>
    
    <div class="bracket-round">
      <h3>5th Place</h3>
      <div class="bracket-champion consolation-winner">
        <div class="bracket-team">TBD</div>
      </div>
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
        <div class="subtabs">
          <button class="subtab-button active" data-subtab="pool-play">Pool Play</button>
          <button class="subtab-button" data-subtab="bracket-play">Bracket Play</button>
          <button class="subtab-button" data-subtab="consolation-bracket">Consolation Bracket</button>
        </div>
        <div class="subtab-content">
          <div id="pool-play" class="subtab-pane active">
            ${poolsHTML}
          </div>
          <div id="bracket-play" class="subtab-pane">
            ${bracketHTML}
          </div>
          <div id="consolation-bracket" class="subtab-pane">
            ${consolationBracketHTML}
          </div>
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
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" placeholder="Enter password">
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

const switchSubtab = (subtabName) => {
  document.querySelectorAll('.subtab-button').forEach(btn => btn.classList.remove('active'))
  document.querySelectorAll('.subtab-pane').forEach(pane => pane.classList.remove('active'))

  document.querySelector(`[data-subtab="${subtabName}"]`).classList.add('active')
  document.getElementById(subtabName).classList.add('active')
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
  const team1Idx = document.getElementById('team1').value
  const team2Idx = document.getElementById('team2').value
  const score1 = parseInt(document.getElementById('score1').value) || 0
  const score2 = parseInt(document.getElementById('score2').value) || 0
  const password = document.getElementById('password').value

  const resultDiv = document.getElementById('result')

  // Check password first
  if (password !== CORRECT_PASSWORD) {
    resultDiv.textContent = 'Incorrect password!'
    resultDiv.className = 'result error'
    return
  }

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
  
  // Clear the form after successful submission
  document.getElementById('team1').value = ''
  document.getElementById('team2').value = ''
  document.getElementById('score1').value = ''
  document.getElementById('score2').value = ''
  document.getElementById('password').value = ''
})