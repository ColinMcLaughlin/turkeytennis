(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();const i=[{name:"Team 1",players:["Alice Johnson","Bob Smith"],pool:"A",description:"Team 1 brings a dynamic duo with excellent net play and consistent baseline shots. Known for their strategic doubles positioning and competitive spirit."},{name:"Team 2",players:["Charlie Brown","Diana Prince"],pool:"B",description:"Team 2 combines aggressive serving with solid return game. Their teamwork and communication on court make them a formidable opponent in any match."},{name:"Team 3",players:["Ethan Hunt","Fiona Green"],pool:"A",description:"Team 3 excels in fast-paced rallies with quick reflexes at the net. Their high-energy style and tactical awareness make them favorites in close matches."},{name:"Team 4",players:["George Miller","Hannah Lee"],pool:"B",description:"Team 4 showcases balanced play with strength in both offense and defense. Their consistent performance and experience shine through in every tournament."},{name:"Team 5",players:["Ivan Petrov","Julia White"],pool:"A",description:"Team 5 features powerful serves and precision groundstrokes. Their coordinated volleys and court coverage make them a challenging team to face."},{name:"Team 6",players:["Kevin Hart","Lisa Chen"],pool:"B",description:"Team 6 brings finesse and timing to their game with exceptional footwork. Their ability to read the court and adapt strategy gives them an edge."},{name:"Team 7",players:["Marcus Johnson","Nina Patel"],pool:"A",description:"Team 7 combines youth and energy with tactical maturity. Their serve-and-volley game and aggressive baseline play create numerous winning opportunities."},{name:"Team 8",players:["Oscar Garcia","Patricia Lopez"],pool:"B",description:"Team 8 is known for their versatility and mental toughness in clutch situations. Their well-rounded game and experience make them consistent contenders."}],u=["Rachel Green","Samuel Taylor","Tina Turner","Ulysses Grant"],p="turkey2024",h=i.map((e,a)=>`
  <div class="team-card" data-team-id="${a}">
    <h3>${e.name}</h3>
    <ul>
      <li>${e.players[0]}</li>
      <li>${e.players[1]}</li>
    </ul>
  </div>
`).join(""),v=u.map(e=>`<li>${e}</li>`).join(""),d=i.map((e,a)=>`<option value="${a}">${e.name}</option>`).join(""),b=`
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
          ${i.filter(e=>e.pool==="A").map(e=>`
            <tr>
              <td>${e.name}</td>
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
          ${i.filter(e=>e.pool==="B").map(e=>`
            <tr>
              <td>${e.name}</td>
              <td>0-0</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  </div>
`,y=i.map((e,a)=>`
  <div class="team-detail">
    <h2>${e.name}</h2>
    <div class="team-players">
      <strong>Players:</strong> ${e.players.join(" & ")}
    </div>
    <div class="team-pool">
      <strong>Pool:</strong> ${e.pool}
    </div>
    <p class="team-description">${e.description}</p>
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
            ${h}
          </div>
        </div>
        <div class="alternates-section">
          <h2>Alternates</h2>
          <ul class="alternates-list">
            ${v}
          </ul>
        </div>
      </div>
      <div id="schedule" class="tab-pane">
        <h2>Schedule and Results</h2>
        ${b}
      </div>
      <div id="scores" class="tab-pane">
        <h2>Submit Scores</h2>
        <div class="score-form">
          <div class="form-group">
            <label for="team1">Team 1:</label>
            <select id="team1">
              <option value="">Select Team</option>
              ${d}
            </select>
          </div>
          <div class="form-group">
            <label for="team2">Team 2:</label>
            <select id="team2">
              <option value="">Select Team</option>
              ${d}
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
          ${y}
        </div>
      </div>
    </div>
  </div>
`;const m=e=>{document.querySelectorAll(".tab-button").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".tab-pane").forEach(a=>a.classList.remove("active")),document.querySelector(`[data-tab="${e}"]`).classList.add("active"),document.getElementById(e).classList.add("active")};document.querySelectorAll(".tab-button").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-tab");m(a)})});document.querySelectorAll(".team-card").forEach(e=>{e.addEventListener("click",()=>{m("teams")})});document.getElementById("submitBtn").addEventListener("click",()=>{const e=document.getElementById("team1").value,a=document.getElementById("team2").value,r=parseInt(document.getElementById("score1").value)||0,o=parseInt(document.getElementById("score2").value)||0,s=document.getElementById("password").value,t=document.getElementById("result");if(s!==p){t.textContent="Incorrect password!",t.className="result error";return}if(!e||!a){t.textContent="Please select both teams",t.className="result error";return}if(e===a){t.textContent="Please select two different teams",t.className="result error";return}const n=i[e].name,l=i[a].name;let c;if(r>o)c=n;else if(o>r)c=l;else{t.textContent=`${n} ${r} - ${o} ${l} (Tied)`,t.className="result tie";return}t.textContent=`${n} ${r} - ${o} ${l} | Winner: ${c}`,t.className="result success",document.getElementById("team1").value="",document.getElementById("team2").value="",document.getElementById("score1").value="",document.getElementById("score2").value="",document.getElementById("password").value=""});
