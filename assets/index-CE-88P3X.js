(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const i=[{name:"Towson X",players:["Elias","Yoshi"],pool:"A",description:"Team 1 brings a dynamic duo with excellent net play and consistent baseline shots. Known for their strategic doubles positioning and competitive spirit."},{name:"Team Where is my husband",players:["Brooke","Varidhi"],pool:"B",description:"Team 2 combines aggressive serving with solid return game. Their teamwork and communication on court make them a formidable opponent in any match."},{name:"Team Siblings or Married",players:["Laurel","Zim"],pool:"A",description:"Team 3 excels in fast-paced rallies with quick reflexes at the net. Their high-energy style and tactical awareness make them favorites in close matches."},{name:"Team uuWuu",players:["Tab","NoNo"],pool:"B",description:"Team 4 showcases balanced play with strength in both offense and defense. Their consistent performance and experience shine through in every tournament."},{name:"Just Roomates",players:["Moose","Austin"],pool:"A",description:"Team 5 features powerful serves and precision groundstrokes. Their coordinated volleys and court coverage make them a challenging team to face."},{name:"Towson Y",players:["Dan","Sara"],pool:"B",description:"Team 6 brings finesse and timing to their game with exceptional footwork. Their ability to read the court and adapt strategy gives them an edge."},{name:"Team Fun",players:["Colin","Cait"],pool:"A",description:"Team 7 combines youth and energy with tactical maturity. Their serve-and-volley game and aggressive baseline play create numerous winning opportunities."},{name:"Team 1 Bed 1 Bath 1 Den",players:["Dan FB","Jess"],pool:"B",description:"Team 8 is known for their versatility and mental toughness in clutch situations. Their well-rounded game and experience make them consistent contenders."}],u=["Team Julia and Theo","Team Joel and Luke","Undisclosed","Team Adam and Vinny","Team PeeCeeTee"],v="turkey2024",b=i.map((t,e)=>`
  <div class="team-card" data-team-id="${e}">
    <h3>${t.name}</h3>
    <ul>
      <li>${t.players[0]}</li>
      <li>${t.players[1]}</li>
    </ul>
  </div>
`).join(""),h=u.map(t=>`<li>${t}</li>`).join(""),l=i.map((t,e)=>`<option value="${e}">${t.name}</option>`).join(""),p=`
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
          ${i.filter(t=>t.pool==="A").map(t=>`
            <tr>
              <td>${t.name}</td>
              <td>0-0</td>
            </tr>
          `).join("")}
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
          ${i.filter(t=>t.pool==="B").map(t=>`
            <tr>
              <td>${t.name}</td>
              <td>0-0</td>
            </tr>
          `).join("")}
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
`,y=`
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
`,T=i.map((t,e)=>`
  <div class="team-detail">
    <h2>${t.name}</h2>
    <div class="team-players">
      <strong>Players:</strong> ${t.players.join(" & ")}
    </div>
    <div class="team-pool">
      <strong>Pool:</strong> ${t.pool}
    </div>
    <p class="team-description">${t.description}</p>
  </div>
`).join("");document.querySelector("#app").innerHTML=`
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
            ${b}
          </div>
        </div>
        <div class="alternates-section">
          <h2>Alternates</h2>
          <ul class="alternates-list">
            ${h}
          </ul>
        </div>
      </div>
      <div id="schedule" class="tab-pane">
        <h2>Schedule and Results</h2>
        <div class="subtabs">
          <button class="subtab-button active" data-subtab="pool-play">Pool Play</button>
          <button class="subtab-button" data-subtab="bracket-play">Bracket Play</button>
        </div>
        <div class="subtab-content">
          <div id="pool-play" class="subtab-pane active">
            ${p}
          </div>
          <div id="bracket-play" class="subtab-pane">
            ${y}
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
              ${l}
            </select>
          </div>
          <div class="form-group">
            <label for="team2">Team 2:</label>
            <select id="team2">
              <option value="">Select Team</option>
              ${l}
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
          ${T}
        </div>
      </div>
    </div>
  </div>
`;const m=t=>{document.querySelectorAll(".tab-button").forEach(e=>e.classList.remove("active")),document.querySelectorAll(".tab-pane").forEach(e=>e.classList.remove("active")),document.querySelector(`[data-tab="${t}"]`).classList.add("active"),document.getElementById(t).classList.add("active")},g=t=>{document.querySelectorAll(".subtab-button").forEach(e=>e.classList.remove("active")),document.querySelectorAll(".subtab-pane").forEach(e=>e.classList.remove("active")),document.querySelector(`[data-subtab="${t}"]`).classList.add("active"),document.getElementById(t).classList.add("active")};document.querySelectorAll(".tab-button").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-tab");m(e)})});document.querySelectorAll(".subtab-button").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-subtab");g(e)})});document.querySelectorAll(".team-card").forEach(t=>{t.addEventListener("click",()=>{m("teams")})});document.getElementById("submitBtn").addEventListener("click",()=>{const t=document.getElementById("team1").value,e=document.getElementById("team2").value,r=parseInt(document.getElementById("score1").value)||0,d=parseInt(document.getElementById("score2").value)||0,s=document.getElementById("password").value,a=document.getElementById("result");if(s!==v){a.textContent="Incorrect password!",a.className="result error";return}if(!t||!e){a.textContent="Please select both teams",a.className="result error";return}if(t===e){a.textContent="Please select two different teams",a.className="result error";return}const o=i[t].name,n=i[e].name;let c;if(r>d)c=o;else if(d>r)c=n;else{a.textContent=`${o} ${r} - ${d} ${n} (Tied)`,a.className="result tie";return}a.textContent=`${o} ${r} - ${d} ${n} | Winner: ${c}`,a.className="result success",document.getElementById("team1").value="",document.getElementById("team2").value="",document.getElementById("score1").value="",document.getElementById("score2").value="",document.getElementById("password").value=""});
