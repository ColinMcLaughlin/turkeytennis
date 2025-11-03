(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const o=[{name:"Team 1",players:["Alice Johnson","Bob Smith"]},{name:"Team 2",players:["Charlie Brown","Diana Prince"]},{name:"Team 3",players:["Ethan Hunt","Fiona Green"]},{name:"Team 4",players:["George Miller","Hannah Lee"]},{name:"Team 5",players:["Ivan Petrov","Julia White"]},{name:"Team 6",players:["Kevin Hart","Lisa Chen"]},{name:"Team 7",players:["Marcus Johnson","Nina Patel"]},{name:"Team 8",players:["Oscar Garcia","Patricia Lopez"]}],d=["Rachel Green","Samuel Taylor","Tina Turner","Ulysses Grant"],m=o.map((t,s)=>`
  <div class="team-card">
    <h3>${t.name}</h3>
    <ul>
      <li>${t.players[0]}</li>
      <li>${t.players[1]}</li>
    </ul>
  </div>
`).join(""),u=d.map(t=>`<li>${t}</li>`).join(""),c=o.map((t,s)=>`<option value="${s}">${t.name}</option>`).join("");document.querySelector("#app").innerHTML=`
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
            ${m}
          </div>
        </div>
        <div class="alternates-section">
          <h2>Alternates</h2>
          <ul class="alternates-list">
            ${u}
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
    </div>
  </div>
`;document.querySelectorAll(".tab-button").forEach(t=>{t.addEventListener("click",()=>{const s=t.getAttribute("data-tab");document.querySelectorAll(".tab-button").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".tab-pane").forEach(n=>n.classList.remove("active")),t.classList.add("active"),document.getElementById(s).classList.add("active")})});document.getElementById("submitBtn").addEventListener("click",()=>{const t=document.getElementById("team1").value,s=document.getElementById("team2").value,n=parseInt(document.getElementById("score1").value)||0,l=parseInt(document.getElementById("score2").value)||0,e=document.getElementById("result");if(!t||!s){e.textContent="Please select both teams",e.className="result error";return}if(t===s){e.textContent="Please select two different teams",e.className="result error";return}const a=o[t].name,r=o[s].name;let i;if(n>l)i=a;else if(l>n)i=r;else{e.textContent=`${a} ${n} - ${l} ${r} (Tied)`,e.className="result tie";return}e.textContent=`${a} ${n} - ${l} ${r} | Winner: ${i}`,e.className="result success"});
