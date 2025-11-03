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