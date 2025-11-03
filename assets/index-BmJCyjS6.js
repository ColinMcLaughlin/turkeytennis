(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const i=[{name:"Team 1",players:["Alice Johnson","Bob Smith"],pool:"A",description:"Team 1 brings a dynamic duo with excellent net play and consistent baseline shots. Known for their strategic doubles positioning and competitive spirit."},{name:"Team 2",players:["Charlie Brown","Diana Prince"],pool:"B",description:"Team 2 combines aggressive serving with solid return game. Their teamwork and communication on court make them a formidable opponent in any match."},{name:"Team 3",players:["Ethan Hunt","Fiona Green"],pool:"A",description:"Team 3 excels in fast-paced rallies with quick reflexes at the net. Their high-energy style and tactical awareness make them favorites in close matches."},{name:"Team 4",players:["George Miller","Hannah Lee"],pool:"B",description:"Team 4 showcases balanced play with strength in both offense and defense. Their consistent performance and experience shine through in every tournament."},{name:"Team 5",players:["Ivan Petrov","Julia White"],pool:"A",description:"Team 5 features powerful serves and precision groundstrokes. Their coordinated volleys and court coverage make them a challenging team to face."},{name:"Team 6",players:["Kevin Hart","Lisa Chen"],pool:"B",description:"Team 6 brings finesse and timing to their game with exceptional footwork. Their ability to read the court and adapt strategy gives them an edge."},{name:"Team 7",players:["Marcus Johnson","Nina Patel"],pool:"A",description:"Team 7 combines youth and energy with tactical maturity. Their serve-and-volley game and aggressive baseline play create numerous winning opportunities."},{name:"Team 8",players:["Oscar Garcia","Patricia Lopez"],pool:"B",description:"Team 8 is known for their versatility and mental toughness in clutch situations. Their well-rounded game and experience make them consistent contenders."}],m=["Rachel Green","Samuel Taylor","Tina Turner","Ulysses Grant"],u=i.map((e,a)=>`
  <div class="team-card" data-team-id="${a}">
    <h3>${e.name}</h3>
    <ul>
      <li>${e.players[0]}</li>
      <li>${e.players[1]}</li>
    </ul>
  </div>
`).join(""),p=m.map(e=>`<li>${e}</li>`).join(""),c=i.map((e,a)=>`<option value="${a}">${e.name}</option>`).join(""),h=`
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
`,v=i.map((e,a)=>`
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
            ${u}
          </div>
        </div>
        <div class="alternates-section">
          <h2>Alternates</h2>
          <ul class="alternates-list">
            ${p}
          </ul>
        </div>
      </div>
      <div id="schedule" class="tab-pane">
        <h2>Schedule and Results</h2>
        ${h}
      </div>
      <div id="scores" class="tab-pane">
        <h2>Submit Scores</h2>
        <div class="score-form">
          <div class="form-group">
            <label for="team1">Team 1:</label>
            <select id="team1">
              <option value="">Select Team</option>
              ${c}
            </select>
          </div>
          <div class="form-group">
            <label for="team2">Team 2:</label>
            <select id="team2">
              <option value="">Select Team</option>
              ${c}
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
          ${v}
        </div>
      </div>
    </div>
  </div>
`;const d=e=>{document.querySelectorAll(".tab-button").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".tab-pane").forEach(a=>a.classList.remove("active")),document.querySelector(`[data-tab="${e}"]`).classList.add("active"),document.getElementById(e).classList.add("active")};document.querySelectorAll(".tab-button").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-tab");d(a)})});document.querySelectorAll(".team-card").forEach(e=>{e.addEventListener("click",()=>{d("teams")})});document.getElementById("submitBtn").addEventListener("click",()=>{const e=document.getElementById("team1").value,a=document.getElementById("team2").value,r=parseInt(document.getElementById("score1").value)||0,o=parseInt(document.getElementById("score2").value)||0,t=document.getElementById("result");if(!e||!a){t.textContent="Please select both teams",t.className="result error";return}if(e===a){t.textContent="Please select two different teams",t.className="result error";return}const s=i[e].name,n=i[a].name;let l;if(r>o)l=s;else if(o>r)l=n;else{t.textContent=`${s} ${r} - ${o} ${n} (Tied)`,t.className="result tie";return}t.textContent=`${s} ${r} - ${o} ${n} | Winner: ${l}`,t.className="result success"});
