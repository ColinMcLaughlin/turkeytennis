(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const l of d.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(s){if(s.ep)return;s.ep=!0;const d=o(s);fetch(s.href,d)}})();const n=[{name:"Towson X",players:["Elias","Yoshi"],pool:"B",description:"Welcome Towson X"},{name:"Where is my husband",players:["Brooke","Varidhi"],pool:"B",description:"Brooke is without her husband who is tall. But she should play well."},{name:"Siblings or Married",players:["Laurel","Zim"],pool:"A",description:"Jury is still out.  Might be both"},{name:"uWu",players:["Tab","NoNo"],pool:"B",description:"Actively over thinking their match and processing the situation like anime "},{name:"Just Roomates",players:["Moose","Austin"],pool:"A",description:"Just roomates I swear"},{name:"Towson Y",players:["Dan","Sara"],pool:"A",description:"ugh, another townson."},{name:"Team Fun",players:["Colin","Cait"],pool:"A",description:"Should play good ."},{name:"Team 1 Bed 1 Bath 1 Den",players:["Dan FB","Jess"],pool:"B",description:"will be good unless kaboom"}],b=["Team Julia and Theo","Team Joel and Luke","Undisclosed","Team Adam and Vinny","Team PeeCeeTee"],h="turkey2024";let r=[{time:"9:00 AM",court:"1",team1:"Towson X",team2:"Siblings or Married",pool:"A",score:"-",team1Idx:0,team2Idx:2},{time:"9:00 AM",court:"2",team1:"Just Roomates",team2:"Team Fun",pool:"A",score:"-",team1Idx:4,team2Idx:6},{time:"11:15 AM",court:"1",team1:"Towson X",team2:"Just Roomates",pool:"A",score:"-",team1Idx:0,team2Idx:4},{time:"11:15 AM",court:"2",team1:"Siblings or Married",team2:"Team Fun",pool:"A",score:"-",team1Idx:2,team2Idx:6},{time:"1:30 PM",court:"1",team1:"Towson X",team2:"Team Fun",pool:"A",score:"-",team1Idx:0,team2Idx:6},{time:"1:30 PM",court:"2",team1:"Just Roomates",team2:"Siblings or Married",pool:"A",score:"-",team1Idx:4,team2Idx:2},{time:"9:00 AM",court:"3",team1:"Where is my husband",team2:"uWu",pool:"B",score:"-",team1Idx:1,team2Idx:3},{time:"9:00 AM",court:"4",team1:"Team 1 Bed 1 Bath 1 Den",team2:"Towson Y",pool:"B",score:"-",team1Idx:7,team2Idx:5},{time:"11:15 AM",court:"3",team1:"Where is my husband",team2:"Team 1 Bed 1 Bath 1 Den",pool:"B",score:"-",team1Idx:1,team2Idx:7},{time:"11:15 AM",court:"4",team1:"uWu",team2:"Towson Y",pool:"B",score:"-",team1Idx:3,team2Idx:5},{time:"1:30 PM",court:"3",team1:"Where is my husband",team2:"Towson Y",pool:"B",score:"-",team1Idx:1,team2Idx:5},{time:"1:30 PM",court:"4",team1:"uWu",team2:"Team 1 Bed 1 Bath 1 Den",pool:"B",score:"-",team1Idx:3,team2Idx:7}];const v=()=>{const e={};return n.forEach((t,o)=>{e[o]={wins:0,losses:0}}),r.forEach(t=>{if(t.score!=="-"){const o=t.score.split("-").map(a=>parseInt(a.trim()));o.length===2&&(o[0]>o[1]?(e[t.team1Idx].wins++,e[t.team2Idx].losses++):o[1]>o[0]&&(e[t.team2Idx].wins++,e[t.team1Idx].losses++))}}),e},i=()=>`
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
            ${r.filter(e=>e.pool==="A").map((e,t)=>`
              <tr>
                <td>${e.time}</td>
                <td>${e.court}</td>
                <td>${e.team1}</td>
                <td>${e.team2}</td>
                <td class="score-cell" data-match-idx="${r.indexOf(e)}">${e.score}</td>
              </tr>
            `).join("")}
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
            ${r.filter(e=>e.pool==="B").map((e,t)=>`
              <tr>
                <td>${e.time}</td>
                <td>${e.court}</td>
                <td>${e.team1}</td>
                <td>${e.team2}</td>
                <td class="score-cell" data-match-idx="${r.indexOf(e)}">${e.score}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,c=()=>{const e=v();return`
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
            ${n.filter(t=>t.pool==="A").map((t,o)=>{const a=n.indexOf(t),s=e[a];return`
                <tr>
                  <td>${t.name}</td>
                  <td>${s.wins}-${s.losses}</td>
                </tr>
              `}).join("")}
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
            ${n.filter(t=>t.pool==="B").map((t,o)=>{const a=n.indexOf(t),s=e[a];return`
                <tr>
                  <td>${t.name}</td>
                  <td>${s.wins}-${s.losses}</td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `},y=()=>`
    <div class="brackets-section">
      <p>Brackets will be displayed here after pool play concludes.</p>
    </div>
  `,g=n.map((e,t)=>`
  <div class="team-card" data-team-id="${t}">
    <h3>${e.name}</h3>
    <ul>
      <li>${e.players[0]}</li>
      <li>${e.players[1]}</li>
    </ul>
  </div>
`).join(""),f=b.map(e=>`<li>${e}</li>`).join("");n.map((e,t)=>`<option value="${t}">${e.name}</option>`).join("");const I=n.map((e,t)=>`
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
            ${g}
          </div>
        </div>
        <div class="alternates-section">
          <h2>Alternates</h2>
          <ul class="alternates-list">
            ${f}
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
          ${i()}
        </div>
        <div id="standings" class="subtab-pane">
          ${c()}
        </div>
        <div id="brackets" class="subtab-pane">
          ${y()}
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
              ${r.map((e,t)=>`
                <option value="${t}">${e.time} - Court ${e.court}: ${e.team1} vs ${e.team2}</option>
              `).join("")}
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
          ${I}
        </div>
      </div>
    </div>
  </div>
`;let m=!1;document.getElementById("passwordBtn").addEventListener("click",()=>{const e=document.getElementById("password").value,t=document.getElementById("password-result");e===h?(m=!0,document.getElementById("password-section").style.display="none",document.getElementById("score-form").style.display="block",t.textContent=""):(t.textContent="Incorrect password",t.className="result error")});document.getElementById("password").addEventListener("keypress",e=>{e.key==="Enter"&&document.getElementById("passwordBtn").click()});const u=e=>{document.querySelectorAll(".tab-button").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".tab-pane").forEach(t=>t.classList.remove("active")),document.querySelector(`[data-tab="${e}"]`).classList.add("active"),document.getElementById(e).classList.add("active")},p=e=>{document.querySelectorAll(".subtab-button").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".subtab-pane").forEach(t=>t.classList.remove("active")),document.querySelector(`[data-subtab="${e}"]`).classList.add("active"),document.getElementById(e).classList.add("active"),e==="standings"?document.getElementById("standings").innerHTML=c():e==="pool-play"&&(document.getElementById("pool-play").innerHTML=i())};document.querySelectorAll(".tab-button").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-tab");u(t)})});document.querySelectorAll(".subtab-button").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-subtab");p(t)})});document.querySelectorAll(".team-card").forEach(e=>{e.addEventListener("click",()=>{u("teams")})});document.getElementById("submitBtn").addEventListener("click",()=>{if(!m){document.getElementById("result").textContent="Please enter password first",document.getElementById("result").className="result error";return}const e=parseInt(document.getElementById("match-select").value),t=parseInt(document.getElementById("score1").value),o=parseInt(document.getElementById("score2").value),a=document.getElementById("result");if(isNaN(e)||e<0){a.textContent="Please select a match",a.className="result error";return}if(isNaN(t)||isNaN(o)){a.textContent="Please enter valid scores",a.className="result error";return}const s=r[e];let d;if(t>o)d=s.team1;else if(o>t)d=s.team2;else{a.textContent=`${s.team1} ${t} - ${o} ${s.team2} (Tied)`,a.className="result tie",document.getElementById("match-select").value="",document.getElementById("score1").value="",document.getElementById("score2").value="";return}s.score=`${t} - ${o}`,a.textContent=`${s.team1} ${t} - ${o} ${s.team2} | Winner: ${d}`,a.className="result success",document.getElementById("match-select").value="",document.getElementById("score1").value="",document.getElementById("score2").value="",p("standings")});
