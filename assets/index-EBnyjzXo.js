import{initializeApp as q}from"https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";import{getAuth as O,signInAnonymously as W}from"https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";import{getFirestore as H,setLogLevel as j,doc as w,onSnapshot as J,getDoc as Q,setDoc as x}from"https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const m of s)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const m={};return s.integrity&&(m.integrity=s.integrity),s.referrerPolicy&&(m.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?m.credentials="include":s.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function a(s){if(s.ep)return;s.ep=!0;const m=o(s);fetch(s.href,m)}})();const T={apiKey:"AIzaSyAGAKkeso4kFAV6y3S6XILLaEVZ-LB_h_4",authDomain:"turkeytennis-3d372.firebaseapp.com",projectId:"turkeytennis-3d372",storageBucket:"turkeytennis-3d372.firebasestorage.app",messagingSenderId:"964948050175",appId:"1:964948050175:web:d81932731a106cb5980cca",measurementId:"G-2HY1NYSDP2"},_=T.projectId||"default-app-id",z=null,E=`artifacts/${_}/public/data/tournament/tournament-state`,L=[{name:"Towson X",players:["Elias","Yoshi"],pool:"A",description:"Welcome Towson X"},{name:"Where is my husband",players:["Brooke","Varidhi"],pool:"B",description:"Brooke is without her husband who is tall. But she should play well."},{name:"Siblings or Married",players:["Laurel","Zim"],pool:"A",description:"Jury is still out.  Might be both"},{name:"uWu",players:["Tab","NoNo"],pool:"B",description:"Actively over thinking their match and processing the situation like anime "},{name:"Just Roomates",players:["Moose","Austin"],pool:"A",description:"Just roomates I swear"},{name:"Towson Y",players:["Dan","Sara"],pool:"A",description:"ugh, another townson."},{name:"Team Fun",players:["Colin","Cait"],pool:"B",description:"Should play good ."},{name:"Team 1 Bed 1 Bath 1 Den",players:["Dan FB","Jess"],pool:"B",description:"will be good unless kaboom"}],M=[{time:"1:00 PM",court:"1",team1:"Towson X",team2:"Siblings or Married",pool:"A",score:"-",team1Idx:0,team2Idx:2},{time:"1:00 PM",court:"2",team1:"Just Roomates",team2:"Towson Y",pool:"A",score:"-",team1Idx:4,team2Idx:5},{time:"1:00 PM",court:"3",team1:"Where is my husband",team2:"uWu",pool:"B",score:"-",team1Idx:1,team2Idx:3},{time:"1:20 PM",court:"1",team1:"Team Fun",team2:"Towson Y",pool:"AB",score:"-",team1Idx:6,team2Idx:5},{time:"1:20 PM",court:"2",team1:"Towson X",team2:"Just Roomates",pool:"A",score:"-",team1Idx:0,team2Idx:4},{time:"1:20 PM",court:"3",team1:"Team 1 Bed 1 Bath 1 Den",team2:"uWu",pool:"B",score:"-",team1Idx:7,team2Idx:3},{time:"1:40 PM",court:"1",team1:"Siblings or Married",team2:"Towson Y",pool:"A",score:"-",team1Idx:2,team2Idx:5},{time:"1:40 PM",court:"2",team1:"Where is my husband",team2:"Team 1 Bed 1 Bath 1 Den",pool:"B",score:"-",team1Idx:1,team2Idx:7},{time:"1:40 PM",court:"3",team1:"Towson X",team2:"Team Fun",pool:"AB",score:"-",team1Idx:0,team2Idx:6},{time:"2:00 PM",court:"1",team1:"Just Roomates",team2:"Siblings or Married",pool:"A",score:"-",team1Idx:4,team2Idx:2},{time:"2:00 PM",court:"2",team1:"uWu",team2:"Where is my husband",pool:"B",score:"-",team1Idx:3,team2Idx:1},{time:"2:00 PM",court:"3",team1:"Team Fun",team2:"Team 1 Bed 1 Bath 1 Den",pool:"AB",score:"-",team1Idx:6,team2Idx:7}],C={quarterfinals:[{id:"qf1",team1:"Pool A 1st",team2:"Pool B 4th",score:"-",winner:null},{id:"qf2",team1:"Pool B 1st",team2:"Pool A 4th",score:"-",winner:null},{id:"qf3",team1:"Pool A 2nd",team2:"Pool B 3rd",score:"-",winner:null},{id:"qf4",team1:"Pool B 2nd",team2:"Pool A 3rd",score:"-",winner:null}],semifinals:[{id:"sf1",team1:"Winner QF1",team2:"Winner QF2",score:"-",winner:null},{id:"sf2",team1:"Winner QF3",team2:"Winner QF4",score:"-",winner:null}],finals:[{id:"f1",team1:"Winner SF1",team2:"Winner SF2",score:"-",winner:null}],consolationSemis:[{id:"csf1",team1:"Loser QF1",team2:"Loser QF2",score:"-",winner:null},{id:"csf2",team1:"Loser QF3",team2:"Loser QF4",score:"-",winner:null}],consolationFinals:[{id:"cf1",team1:"Winner CSF1",team2:"Winner CSF2",score:"-",winner:null}]},A=["Team Julia and Theo","Team Joel and Luke","Undisclosed","Team Adam and Vinny","Team PeeCeeTee"],U="turkey2024";let n={},S=!1,g;const Y=`
  <div class="welcome-section">
    <h2>Welcome to the Turkey Tennis Doubles Invitational! 🦃🎾</h2>
    <p>We're thrilled to host another year of friendly (and sometimes fierce) competition. Use the tabs above to view teams, see the schedule, and submit scores.</p>
    <p>Good luck to all the teams!</p>
  </div>
`,X=()=>n.teams.map((e,t)=>`
  <div class="team-card" data-team-id="${t}">
    <h3>${e.name}</h3>
    <ul>
      <li>${e.players[0]}</li>
      <li>${e.players[1]}</li>
    </ul
  </div>
`).join(""),G=()=>A.map(e=>`<li>${e}</li>`).join(""),K=()=>n.teams.map((e,t)=>`
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
`).join(""),F=()=>{const e={};return n.teams.forEach((t,o)=>{e[o]={wins:0,losses:0}}),n.matchSchedule.forEach(t=>{if(t.score!=="-"){const o=t.score.split("-").map(a=>parseInt(a.trim()));o.length===2&&o[0]!==o[1]&&(o[0]>o[1]?(e[t.team1Idx].wins++,e[t.team2Idx].losses++):o[1]>o[0]&&(e[t.team2Idx].wins++,e[t.team1Idx].losses++))}}),e},V=()=>n.matchSchedule?`
    <div class="pools-container">
      <div class="pool">
        <h3>Pool Play Schedule & Scores</h3>
        <div class="table-responsive">
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
              ${n.matchSchedule.map((e,t)=>`
                <tr>
                  <td>${e.time}</td>
                  <td>${e.court}</td>
                  <td>${e.team1}</td>
                  <td>${e.team2}</td>
                  <td class="score-cell" data-match-idx="${t}">${e.score}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `:"<div>Loading schedule...</div>",Z=()=>{if(!n.teams)return"<div>Loading standings...</div>";const e=F(),t=n.teams.filter(a=>a.pool==="A").map(a=>{const s=n.teams.indexOf(a);return{...a,teamIdx:s,record:e[s]}}).sort((a,s)=>s.record.wins-a.record.wins),o=n.teams.filter(a=>a.pool==="B").map(a=>{const s=n.teams.indexOf(a);return{...a,teamIdx:s,record:e[s]}}).sort((a,s)=>s.record.wins-a.record.wins);return`
    <div class="pools-container">
      <div class="pool">
        <h3>Pool A Standings</h3>
        <div class="table-responsive">
          <table class="standings-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>Record</th>
              </tr>
            </thead>
            <tbody>
              ${t.map((a,s)=>`
                <tr>
                  <td>${s+1}</td>
                  <td>${a.name}</td>
                  <td>${a.record.wins}-${a.record.losses}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
      <div class="pool">
        <h3>Pool B Standings</h3>
        <div class="table-responsive">
          <table class="standings-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>Record</th>
              </tr>
            </thead>
            <tbody>
              ${o.map((a,s)=>`
                <tr>
                  <td>${s+1}</td>
                  <td>${a.name}</td>
                  <td>${a.record.wins}-${a.record.losses}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `},ee=()=>{if(!n.bracketMatches)return"<div>Loading brackets...</div>";const e=s=>`
    <div class="bracket-match">
      <div class="bracket-team">${s.team1}</div>
      <div class="bracket-team">${s.team2}</div>
      <div class="bracket-score">${s.score}</div>
    </div>
  `,t=n.bracketMatches,o=`
    <div class="bracket-container">
      <div class="bracket-round">
        <h3>Quarterfinals</h3>
        ${t.quarterfinals.map(e).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>Semifinals</h3>
        ${t.semifinals.map(e).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>Finals</h3>
        ${t.finals.map(e).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>Champion</h3>
        <div class="bracket-champion">
          <div class="bracket-team">${t.finals[0].winner||"TBD"}</div>
        </div>
      </div>
    </div>
  `,a=`
    <div class="bracket-container">
      <div class="bracket-round">
        <h3>Consolation Semifinals</h3>
        ${t.consolationSemis.map(e).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>Consolation Finals</h3>
        ${t.consolationFinals.map(e).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>5th Place</h3>
        <div class="bracket-champion consolation-winner">
          <div class="bracket-team">${t.consolationFinals[0].winner||"TBD"}</div>
        </div>
      </div>
    </div>
  `;return`
    <div class="bracket-section">
      <h3>Championship Bracket</h3>
      ${o}
      <h3 style="margin-top: 3rem;">Consolation Bracket</h3>
      ${a}
    </div>
  `},B=async e=>{if(!g)return console.error("Firestore not initialized.");try{const t=w(g,E);await x(t,e,{merge:!0}),console.log("Tournament state saved successfully.")}catch(t){console.error("Error saving state:",t);const o=document.getElementById("result");o&&(o.textContent="Error: Could not save score to database.",o.className="result error")}},te=async()=>{if(!g)return;const e=w(g,E);(await Q(e)).exists()||(console.log("No existing tournament data found. Initializing new tournament."),await x(e,{teams:L,matchSchedule:M,bracketMatches:C,bracketPlayActive:!1,alternates:A}))},N=()=>{const e=document.getElementById("app");if(!(!e||!n.teams))try{e.innerHTML=`
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
            ${Y}
            
            <div class="teams-section">
              <h2>Participating Teams</h2>
              <div class="teams-grid">
                ${X()}
              </div>
            </div>
            <div class="alternates-section">
              <h2>Alternates</h2>
              <ul class="alternates-list">
                ${G()}
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
            <div class="subtab-content">
              <div id="pool-play" class="subtab-pane active">
                ${V()}
              </div>
              <div id="standings" class="subtab-pane">
                ${Z()}
              </div>
              <div id="brackets" class="subtab-pane">
                ${ee()}
              </div>
            </div>
          </div>
          <div id="scores" class="tab-pane">
            <h2>Submit Scores</h2>
            <div class="password-section" id="password-section" style="display: ${S?"none":"block"};">
              <div class="form-group">
                <label for="password">Enter Password:</label>
                <input type="password" id="password" placeholder="Enter password">
              </div>
              <button id="passwordBtn" class="submit-btn">Unlock</button>
              <div id="password-result" class="result"></div>
            </div>
            <div class="score-form" id="score-form" style="display: ${S?"block":"none"};">
              <div id="pool-play-section" style="display: ${n.bracketPlayActive?"none":"block"};">
                <h3>Pool Play Scores</h3>
                <div class="form-group">
                  <label for="match-select">Select Match:</label>
                  <select id="match-select">
                    <option value="">Choose a match...</option>
                    ${n.matchSchedule.map((t,o)=>`
                      <option value="${o}">${t.time} - Court ${t.court}: ${t.team1} vs ${t.team2} (${t.score!=="-"?"SCORED":"PENDING"})</option>
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
                <button id="submitBtn" class="submit-btn">Submit Pool Score</button>
                <button id="concludeBtn" class="submit-btn" style="margin-top: 1rem; background-color: #28a745;">Conclude Pool Play & Start Bracket</button>
              </div>
              
              <div id="bracket-play-section" style="display: ${n.bracketPlayActive?"block":"none"};">
                <h3>Bracket Play Scores</h3>
                <div class="form-group">
                  <label for="bracket-match-select">Select Bracket Match:</label>
                  <select id="bracket-match-select">
                    <option value="">Choose a bracket match...</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="bracket-score1">Team 1 Score:</label>
                  <input type="number" id="bracket-score1" min="0" placeholder="0">
                </div>
                <div class="form-group">
                  <label for="bracket-score2">Team 2 Score:</label>
                  <input type="number" id="bracket-score2" min="0" placeholder="0">
                </div>
                <button id="submitBracketBtn" class="submit-btn">Submit Bracket Score</button>
              </div>
              
              <button id="resetBtn" class="submit-btn" style="margin-top: 2rem; background-color: #dc3545;">Reset Tournament</button>
              <div id="result" class="result"></div>
            </div>
          </div>
          <div id="teams" class="tab-pane">
            <h2>Team Details</h2>
            <div class="team-details-container">
              ${K()}
            </div>
          </div>
        </div>
      </div>
    `,se(),$("home"),D("pool-play"),n.bracketPlayActive&&ae(),document.getElementById("loading").style.display="none",document.getElementById("app").style.display="block"}catch(t){console.error("Critical Rendering Error:",t),document.getElementById("loading").style.display="none",document.getElementById("app").style.display="block",e.innerHTML='<div style="color: red; padding: 2rem;">CRITICAL RENDERING ERROR: Failed to build the page content. Check the console (F12) for JavaScript errors.</div>'}},$=e=>{document.querySelectorAll(".tab-button").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".tab-pane").forEach(a=>a.classList.remove("active"));const t=document.querySelector(`[data-tab="${e}"]`),o=document.getElementById(e);t&&o&&(t.classList.add("active"),o.classList.add("active"))},D=e=>{document.querySelectorAll(".subtab-button").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".subtab-pane").forEach(a=>a.classList.remove("active"));const t=document.querySelector(`[data-subtab="${e}"]`),o=document.getElementById(e);t&&o&&(t.classList.add("active"),o.classList.add("active"))},ae=()=>{const e=document.getElementById("bracket-match-select");if(!e)return;e.innerHTML='<option value="">Choose a bracket match...</option>';const t=n.bracketMatches;[{round:"qf",matches:t.quarterfinals,prefix:"Quarterfinal"},{round:"sf",matches:t.semifinals,prefix:"Semifinal"},{round:"f",matches:t.finals,prefix:"Finals"},{round:"csf",matches:t.consolationSemis,prefix:"Consolation Semifinal"},{round:"cf",matches:t.consolationFinals,prefix:"Consolation Finals"}].forEach(({round:a,matches:s,prefix:m})=>{s.forEach((p,r)=>{const i=p.team1.includes("Pool")||p.team1.includes("Winner")||p.team1.includes("Loser")||p.team1.includes("TBD");if(p.score==="-"&&!i){let d=`${m} ${a!=="f"&&a!=="cf"?r+1:""}`.trim();e.innerHTML+=`<option value="${a}-${r}">${d}: ${p.team1} vs ${p.team2}</option>`}})})},se=()=>{const e=document.getElementById("app");if(!e)return;const t=r=>{if(r.target.classList.contains("tab-button")&&r.target.getAttribute("data-tab"))$(r.target.getAttribute("data-tab"));else if(r.target.classList.contains("subtab-button")&&r.target.getAttribute("data-subtab")){const i=r.target.getAttribute("data-subtab");D(i)}else r.target.classList.contains("team-card")&&r.target.getAttribute("data-team-id")&&$("teams")};e.removeEventListener("click",e.eventHandler),e.addEventListener("click",t),e.eventHandler=t;const o=document.getElementById("passwordBtn");o&&(o.onclick=()=>{const r=document.getElementById("password").value,i=document.getElementById("password-result");r===U?(S=!0,N(),i.textContent="Unlocked!",i.className="result success"):(i.textContent="Incorrect password",i.className="result error")});const a=document.getElementById("submitBtn");a&&(a.onclick=async()=>{if(!S)return;const r=parseInt(document.getElementById("match-select").value),i=parseInt(document.getElementById("score1").value),d=parseInt(document.getElementById("score2").value),l=document.getElementById("result");if(isNaN(r)||r<0||isNaN(i)||isNaN(d)){l.textContent="Please select a match and enter valid scores",l.className="result error";return}if(n.matchSchedule[r].score!=="-"){l.textContent="Score already submitted for this match.",l.className="result error";return}const c=n.matchSchedule[r];let h,u=[...n.matchSchedule];if(i===d){u[r].score=`${i} - ${d}`,await B({matchSchedule:u}),l.textContent=`${c.team1} ${i} - ${d} ${c.team2} (Tied)`,l.className="result tie";return}h=i>d?c.team1:c.team2,u[r].score=`${i} - ${d}`,await B({matchSchedule:u}),l.textContent=`${c.team1} ${i} - ${d} ${c.team2} | Winner: ${h}`,l.className="result success",document.getElementById("match-select").value="",document.getElementById("score1").value="",document.getElementById("score2").value=""});const s=document.getElementById("concludeBtn");s&&(s.onclick=async()=>{const r=F(),i=n.teams.filter(c=>c.pool==="A").map(c=>{const h=n.teams.indexOf(c);return{...c,teamIdx:h,record:r[h]}}).sort((c,h)=>h.record.wins-c.record.wins),d=n.teams.filter(c=>c.pool==="B").map(c=>{const h=n.teams.indexOf(c);return{...c,teamIdx:h,record:r[h]}}).sort((c,h)=>h.record.wins-c.record.wins);let l=JSON.parse(JSON.stringify(n.bracketMatches));l.quarterfinals[0].team1=i[0].name,l.quarterfinals[0].team2=d[3].name,l.quarterfinals[1].team1=d[0].name,l.quarterfinals[1].team2=i[3].name,l.quarterfinals[2].team1=i[1].name,l.quarterfinals[2].team2=d[2].name,l.quarterfinals[3].team1=d[1].name,l.quarterfinals[3].team2=i[2].name,await B({bracketMatches:l,bracketPlayActive:!0}),document.getElementById("result").textContent="Pool play concluded! Bracket play has begun.",document.getElementById("result").className="result success"});const m=document.getElementById("submitBracketBtn");m&&(m.onclick=async()=>{const r=document.getElementById("bracket-match-select").value,i=parseInt(document.getElementById("bracket-score1").value),d=parseInt(document.getElementById("bracket-score2").value),l=document.getElementById("result");if(!r||isNaN(i)||isNaN(d)||i===d){l.textContent="Please select a match and enter valid (non-tied) scores",l.className="result error";return}const[c,h]=r.split("-"),u=parseInt(h);let b=JSON.parse(JSON.stringify(n.bracketMatches)),f,k,P;const I=(v,y,R)=>{f=v[y],k=i>d?f.team1:f.team2,P=i>d?f.team2:f.team1,f.score=`${i} - ${d}`,f.winner=k,R(k,P)};c==="qf"?I(b.quarterfinals,u,(v,y)=>{u===0?(b.semifinals[0].team1=v,b.consolationSemis[0].team1=y):u===1?(b.semifinals[0].team2=v,b.consolationSemis[0].team2=y):u===2?(b.semifinals[1].team1=v,b.consolationSemis[1].team1=y):u===3&&(b.semifinals[1].team2=v,b.consolationSemis[1].team2=y)}):c==="sf"?I(b.semifinals,u,v=>{u===0?b.finals[0].team1=v:u===1&&(b.finals[0].team2=v)}):c==="f"?I(b.finals,u,()=>{}):c==="csf"?I(b.consolationSemis,u,v=>{u===0?b.consolationFinals[0].team1=v:u===1&&(b.consolationFinals[0].team2=v)}):c==="cf"&&I(b.consolationFinals,u,()=>{}),await B({bracketMatches:b}),l.textContent=`Score submitted: ${f.team1} ${i} - ${d} ${f.team2} | Winner: ${k}`,l.className="result success",document.getElementById("bracket-match-select").value="",document.getElementById("bracket-score1").value="",document.getElementById("bracket-score2").value=""});const p=document.getElementById("resetBtn");p&&(p.onclick=async()=>{await B({teams:L,matchSchedule:M,bracketMatches:C,bracketPlayActive:!1,alternates:A}),document.getElementById("result").textContent="Tournament has been reset!",document.getElementById("result").className="result error"})},oe=async()=>{const e=document.getElementById("loading"),t=document.getElementById("app");if(Object.keys(T).length===0){e&&(e.innerHTML='<div style="color: red; padding: 2rem; font-weight: bold;">FATAL ERROR: Firebase Configuration is Missing. Cannot connect to database.</div>');return}try{const o=q(T);g=H(o),j("error");const a=O(o);z||await W(a),console.log("Firebase authenticated successfully."),await te();const s=w(g,E);J(s,m=>{m.exists()?(n=m.data(),N()):console.warn("Tournament state document does not exist. A new one should be initialized shortly.")})}catch(o){console.error("Firebase Initialization Failed:",o),e&&(e.innerHTML=`
            <div style="color: red; padding: 2rem; font-weight: bold;">CRITICAL ERROR: Failed to connect to the database. Please check console (F12) for details.</div>
        `),t&&(t.style.display="none"),e&&(e.style.display="block")}};document.addEventListener("DOMContentLoaded",oe);
