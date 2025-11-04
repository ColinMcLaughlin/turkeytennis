import{initializeApp as W}from"https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";import{getAuth as O,signInWithCustomToken as H,signInAnonymously as J}from"https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";import{getFirestore as j,setLogLevel as Q,doc as S,onSnapshot as U,getDoc as z,setDoc as P}from"https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const b of s)if(b.type==="childList")for(const o of b.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const b={};return s.integrity&&(b.integrity=s.integrity),s.referrerPolicy&&(b.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?b.credentials="include":s.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function a(s){if(s.ep)return;s.ep=!0;const b=n(s);fetch(s.href,b)}})();const X=typeof __app_id<"u"?__app_id:"default-app-id",Y=JSON.parse(typeof __firebase_config<"u"?__firebase_config:"{}"),A=typeof __initial_auth_token<"u"?__initial_auth_token:null,$=`artifacts/${X}/public/data/tournament/tournament-state`,x=[{name:"Towson X",players:["Elias","Yoshi"],pool:"A",description:"Welcome Towson X"},{name:"Where is my husband",players:["Brooke","Varidhi"],pool:"B",description:"Brooke is without her husband who is tall. But she should play well."},{name:"Siblings or Married",players:["Laurel","Zim"],pool:"A",description:"Jury is still out.  Might be both"},{name:"uWu",players:["Tab","NoNo"],pool:"B",description:"Actively over thinking their match and processing the situation like anime "},{name:"Just Roomates",players:["Moose","Austin"],pool:"A",description:"Just roomates I swear"},{name:"Towson Y",players:["Dan","Sara"],pool:"A",description:"ugh, another townson."},{name:"Team Fun",players:["Colin","Cait"],pool:"B",description:"Should play good ."},{name:"Team 1 Bed 1 Bath 1 Den",players:["Dan FB","Jess"],pool:"B",description:"will be good unless kaboom"}],L=[{time:"1:00 PM",court:"1",team1:"Towson X",team2:"Siblings or Married",pool:"A",score:"-",team1Idx:0,team2Idx:2},{time:"1:00 PM",court:"2",team1:"Just Roomates",team2:"Towson Y",pool:"A",score:"-",team1Idx:4,team2Idx:5},{time:"1:00 PM",court:"3",team1:"Where is my husband",team2:"uWu",pool:"B",score:"-",team1Idx:1,team2Idx:3},{time:"1:20 PM",court:"1",team1:"Team Fun",team2:"Towson Y",pool:"AB",score:"-",team1Idx:6,team2Idx:5},{time:"1:20 PM",court:"2",team1:"Towson X",team2:"Just Roomates",pool:"A",score:"-",team1Idx:0,team2Idx:4},{time:"1:20 PM",court:"3",team1:"Team 1 Bed 1 Bath 1 Den",team2:"uWu",pool:"B",score:"-",team1Idx:7,team2Idx:3},{time:"1:40 PM",court:"1",team1:"Siblings or Married",team2:"Towson Y",pool:"A",score:"-",team1Idx:2,team2Idx:5},{time:"1:40 PM",court:"2",team1:"Where is my husband",team2:"Team 1 Bed 1 Bath 1 Den",pool:"B",score:"-",team1Idx:1,team2Idx:7},{time:"1:40 PM",court:"3",team1:"Towson X",team2:"Team Fun",pool:"AB",score:"-",team1Idx:0,team2Idx:6},{time:"2:00 PM",court:"1",team1:"Just Roomates",team2:"Siblings or Married",pool:"A",score:"-",team1Idx:4,team2Idx:2},{time:"2:00 PM",court:"2",team1:"uWu",team2:"Where is my husband",pool:"B",score:"-",team1Idx:3,team2Idx:1},{time:"2:00 PM",court:"3",team1:"Team Fun",team2:"Team 1 Bed 1 Bath 1 Den",pool:"AB",score:"-",team1Idx:6,team2Idx:7}],M={quarterfinals:[{id:"qf1",team1:"Pool A 1st",team2:"Pool B 4th",score:"-",winner:null},{id:"qf2",team1:"Pool B 1st",team2:"Pool A 4th",score:"-",winner:null},{id:"qf3",team1:"Pool A 2nd",team2:"Pool B 3rd",score:"-",winner:null},{id:"qf4",team1:"Pool B 2nd",team2:"Pool A 3rd",score:"-",winner:null}],semifinals:[{id:"sf1",team1:"Winner QF1",team2:"Winner QF2",score:"-",winner:null},{id:"sf2",team1:"Winner QF3",team2:"Winner QF4",score:"-",winner:null}],finals:[{id:"f1",team1:"Winner SF1",team2:"Winner SF2",score:"-",winner:null}],consolationSemis:[{id:"csf1",team1:"Loser QF1",team2:"Loser QF2",score:"-",winner:null},{id:"csf2",team1:"Loser QF3",team2:"Loser QF4",score:"-",winner:null}],consolationFinals:[{id:"cf1",team1:"Winner CSF1",team2:"Winner CSF2",score:"-",winner:null}]},w=["Team Julia and Theo","Team Joel and Luke","Undisclosed","Team Adam and Vinny","Team PeeCeeTee"],G="turkey2024";let r={},k=!1,y;const K=`
  <div class="welcome-section">
    <h2>Welcome to the Turkey Tennis Doubles Invitational! 🦃🎾</h2>
    <p>We're thrilled to host another year of friendly (and sometimes fierce) competition. Use the tabs above to view teams, see the schedule, and submit scores.</p>
    <p>Good luck to all the teams!</p>
  </div>
`,V=()=>r.teams.map((e,t)=>`
  <div class="team-card" data-team-id="${t}">
    <h3>${e.name}</h3>
    <ul>
      <li>${e.players[0]}</li>
      <li>${e.players[1]}</li>
    </ul
  </div>
`).join(""),Z=()=>w.map(e=>`<li>${e}</li>`).join(""),ee=()=>r.teams.map((e,t)=>`
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
`).join(""),C=()=>{const e={};return r.teams.forEach((t,n)=>{e[n]={wins:0,losses:0}}),r.matchSchedule.forEach(t=>{if(t.score!=="-"){const n=t.score.split("-").map(a=>parseInt(a.trim()));n.length===2&&n[0]!==n[1]&&(n[0]>n[1]?(e[t.team1Idx].wins++,e[t.team2Idx].losses++):n[1]>n[0]&&(e[t.team2Idx].wins++,e[t.team1Idx].losses++))}}),e},N=()=>r.matchSchedule?`
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
              ${r.matchSchedule.map((e,t)=>`
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
  `:"<div>Loading schedule...</div>",F=()=>{if(!r.teams)return"<div>Loading standings...</div>";const e=C(),t=r.teams.filter(a=>a.pool==="A").map(a=>{const s=r.teams.indexOf(a);return{...a,teamIdx:s,record:e[s]}}).sort((a,s)=>s.record.wins-a.record.wins),n=r.teams.filter(a=>a.pool==="B").map(a=>{const s=r.teams.indexOf(a);return{...a,teamIdx:s,record:e[s]}}).sort((a,s)=>s.record.wins-a.record.wins);return`
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
              ${n.map((a,s)=>`
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
  `},D=()=>{if(!r.bracketMatches)return"<div>Loading brackets...</div>";const e=s=>`
    <div class="bracket-match">
      <div class="bracket-team">${s.team1}</div>
      <div class="bracket-team">${s.team2}</div>
      <div class="bracket-score">${s.score}</div>
    </div>
  `,t=r.bracketMatches,n=`
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
      ${n}
      <h3 style="margin-top: 3rem;">Consolation Bracket</h3>
      ${a}
    </div>
  `},I=async e=>{if(!y)return console.error("Firestore not initialized.");try{const t=S(y,$);await P(t,e,{merge:!0}),console.log("Tournament state saved successfully.")}catch(t){console.error("Error saving state:",t);const n=document.getElementById("result");n&&(n.textContent="Error: Could not save score to database.",n.className="result error")}},te=async()=>{if(!y)return;const e=S(y,$);(await z(e)).exists()||(console.log("No existing tournament data found. Initializing new tournament."),await P(e,{teams:x,matchSchedule:L,bracketMatches:M,bracketPlayActive:!1,alternates:w}))},R=()=>{const e=document.getElementById("app");if(!(!e||!r.teams))try{e.innerHTML=`
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
            ${K}
            
            <div class="teams-section">
              <h2>Participating Teams</h2>
              <div class="teams-grid">
                ${V()}
              </div>
            </div>
            <div class="alternates-section">
              <h2>Alternates</h2>
              <ul class="alternates-list">
                ${Z()}
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
                ${N()}
              </div>
              <div id="standings" class="subtab-pane">
                ${F()}
              </div>
              <div id="brackets" class="subtab-pane">
                ${D()}
              </div>
            </div>
          </div>
          <div id="scores" class="tab-pane">
            <h2>Submit Scores</h2>
            <div class="password-section" id="password-section" style="display: ${k?"none":"block"};">
              <div class="form-group">
                <label for="password">Enter Password:</label>
                <input type="password" id="password" placeholder="Enter password">
              </div>
              <button id="passwordBtn" class="submit-btn">Unlock</button>
              <div id="password-result" class="result"></div>
            </div>
            <div class="score-form" id="score-form" style="display: ${k?"block":"none"};">
              <div id="pool-play-section" style="display: ${r.bracketPlayActive?"none":"block"};">
                <h3>Pool Play Scores</h3>
                <div class="form-group">
                  <label for="match-select">Select Match:</label>
                  <select id="match-select">
                    <option value="">Choose a match...</option>
                    ${r.matchSchedule.map((t,n)=>`
                      <option value="${n}">${t.time} - Court ${t.court}: ${t.team1} vs ${t.team2} (${t.score!=="-"?"SCORED":"PENDING"})</option>
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
              
              <div id="bracket-play-section" style="display: ${r.bracketPlayActive?"block":"none"};">
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
              ${ee()}
            </div>
          </div>
        </div>
      </div>
    `,se(),T("home"),_("pool-play"),r.bracketPlayActive&&ae(),document.getElementById("loading").style.display="none",document.getElementById("app").style.display="block"}catch(t){console.error("Critical Rendering Error:",t),e.innerHTML='<div style="color: red; padding: 2rem;">CRITICAL ERROR: Failed to render the application. Check the console for data or template errors.</div>',document.getElementById("loading").style.display="none",document.getElementById("app").style.display="block"}},T=e=>{document.querySelectorAll(".tab-button").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".tab-pane").forEach(a=>a.classList.remove("active"));const t=document.querySelector(`[data-tab="${e}"]`),n=document.getElementById(e);t&&n&&(t.classList.add("active"),n.classList.add("active"))},_=e=>{document.querySelectorAll(".subtab-button").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".subtab-pane").forEach(a=>a.classList.remove("active"));const t=document.querySelector(`[data-subtab="${e}"]`),n=document.getElementById(e);t&&n&&(t.classList.add("active"),n.classList.add("active"))},ae=()=>{const e=document.getElementById("bracket-match-select");if(!e)return;e.innerHTML='<option value="">Choose a bracket match...</option>';const t=r.bracketMatches;[{round:"qf",matches:t.quarterfinals,prefix:"Quarterfinal"},{round:"sf",matches:t.semifinals,prefix:"Semifinal"},{round:"f",matches:t.finals,prefix:"Finals"},{round:"csf",matches:t.consolationSemis,prefix:"Consolation Semifinal"},{round:"cf",matches:t.consolationFinals,prefix:"Consolation Finals"}].forEach(({round:a,matches:s,prefix:b})=>{s.forEach((o,i)=>{const d=o.team1.includes("Pool")||o.team1.includes("Winner")||o.team1.includes("Loser")||o.team1.includes("TBD");if(o.score==="-"&&!d){let l=`${b} ${a!=="f"&&a!=="cf"?i+1:""}`.trim();e.innerHTML+=`<option value="${a}-${i}">${l}: ${o.team1} vs ${o.team2}</option>`}})})},se=()=>{const e=document.getElementById("app");if(!e)return;e.addEventListener("click",o=>{if(o.target.classList.contains("tab-button")&&o.target.getAttribute("data-tab"))T(o.target.getAttribute("data-tab"));else if(o.target.classList.contains("subtab-button")&&o.target.getAttribute("data-subtab")){const i=o.target.getAttribute("data-subtab");i==="standings"?document.getElementById("standings").innerHTML=F():i==="pool-play"?document.getElementById("pool-play").innerHTML=N():i==="brackets"&&(document.getElementById("brackets").innerHTML=D()),_(i)}else o.target.classList.contains("team-card")&&o.target.getAttribute("data-team-id")&&T("teams")});const t=document.getElementById("passwordBtn");t&&(t.onclick=()=>{const o=document.getElementById("password").value,i=document.getElementById("password-result");o===G?(k=!0,R(),i.textContent="Unlocked!",i.className="result success"):(i.textContent="Incorrect password",i.className="result error")});const n=document.getElementById("submitBtn");n&&(n.onclick=async()=>{if(!k)return;const o=parseInt(document.getElementById("match-select").value),i=parseInt(document.getElementById("score1").value),d=parseInt(document.getElementById("score2").value),l=document.getElementById("result");if(isNaN(o)||o<0||isNaN(i)||isNaN(d)){l.textContent="Please select a match and enter valid scores",l.className="result error";return}if(r.matchSchedule[o].score!=="-"){l.textContent="Score already submitted for this match.",l.className="result error";return}const c=r.matchSchedule[o];let p,m=[...r.matchSchedule];if(i===d){m[o].score=`${i} - ${d}`,await I({matchSchedule:m}),l.textContent=`${c.team1} ${i} - ${d} ${c.team2} (Tied)`,l.className="result tie";return}p=i>d?c.team1:c.team2,m[o].score=`${i} - ${d}`,await I({matchSchedule:m}),l.textContent=`${c.team1} ${i} - ${d} ${c.team2} | Winner: ${p}`,l.className="result success",document.getElementById("match-select").value="",document.getElementById("score1").value="",document.getElementById("score2").value=""});const a=document.getElementById("concludeBtn");a&&(a.onclick=async()=>{const o=C(),i=r.teams.filter(c=>c.pool==="A").map(c=>{const p=r.teams.indexOf(c);return{...c,teamIdx:p,record:o[p]}}).sort((c,p)=>p.record.wins-c.record.wins),d=r.teams.filter(c=>c.pool==="B").map(c=>{const p=r.teams.indexOf(c);return{...c,teamIdx:p,record:o[p]}}).sort((c,p)=>p.record.wins-c.record.wins);let l=JSON.parse(JSON.stringify(r.bracketMatches));l.quarterfinals[0].team1=i[0].name,l.quarterfinals[0].team2=d[3].name,l.quarterfinals[1].team1=d[0].name,l.quarterfinals[1].team2=i[3].name,l.quarterfinals[2].team1=i[1].name,l.quarterfinals[2].team2=d[2].name,l.quarterfinals[3].team1=d[1].name,l.quarterfinals[3].team2=i[2].name,await I({bracketMatches:l,bracketPlayActive:!0}),document.getElementById("result").textContent="Pool play concluded! Bracket play has begun.",document.getElementById("result").className="result success"});const s=document.getElementById("submitBracketBtn");s&&(s.onclick=async()=>{const o=document.getElementById("bracket-match-select").value,i=parseInt(document.getElementById("bracket-score1").value),d=parseInt(document.getElementById("bracket-score2").value),l=document.getElementById("result");if(!o||isNaN(i)||isNaN(d)||i===d){l.textContent="Please select a match and enter valid (non-tied) scores",l.className="result error";return}const[c,p]=o.split("-"),m=parseInt(p);let u=JSON.parse(JSON.stringify(r.bracketMatches)),f,B,E;const g=(h,v,q)=>{f=h[v],B=i>d?f.team1:f.team2,E=i>d?f.team2:f.team1,f.score=`${i} - ${d}`,f.winner=B,q(B,E)};c==="qf"?g(u.quarterfinals,m,(h,v)=>{m===0?(u.semifinals[0].team1=h,u.consolationSemis[0].team1=v):m===1?(u.semifinals[0].team2=h,u.consolationSemis[0].team2=v):m===2?(u.semifinals[1].team1=h,u.consolationSemis[1].team1=v):m===3&&(u.semifinals[1].team2=h,u.consolationSemis[1].team2=v)}):c==="sf"?g(u.semifinals,m,h=>{m===0?u.finals[0].team1=h:m===1&&(u.finals[0].team2=h)}):c==="f"?g(u.finals,m,()=>{}):c==="csf"?g(u.consolationSemis,m,h=>{m===0?u.consolationFinals[0].team1=h:m===1&&(u.consolationFinals[0].team2=h)}):c==="cf"&&g(u.consolationFinals,m,()=>{}),await I({bracketMatches:u}),l.textContent=`Score submitted: ${f.team1} ${i} - ${d} ${f.team2} | Winner: ${B}`,l.className="result success",document.getElementById("bracket-match-select").value="",document.getElementById("bracket-score1").value="",document.getElementById("bracket-score2").value=""});const b=document.getElementById("resetBtn");b&&(b.onclick=async()=>{await I({teams:x,matchSchedule:L,bracketMatches:M,bracketPlayActive:!1,alternates:w}),document.getElementById("result").textContent="Tournament has been reset!",document.getElementById("result").className="result error"})},oe=async()=>{try{const e=W(Y);y=j(e),Q("error");const t=O(e);A?await H(t,A):await J(t),console.log("Firebase authenticated successfully."),await te();const n=S(y,$);U(n,a=>{a.exists()?(r=a.data(),R()):console.warn("Tournament state document does not exist. A new one should be initialized shortly.")})}catch(e){console.error("Firebase Initialization Failed:",e),document.getElementById("loading").innerHTML=`
        <div style="color: red; padding: 2rem; font-weight: bold;">CRITICAL ERROR: Failed to connect to the database. Please check console for details.</div>
    `,document.getElementById("loading").style.display="block",document.getElementById("app").style.display="none"}};document.addEventListener("DOMContentLoaded",oe);
