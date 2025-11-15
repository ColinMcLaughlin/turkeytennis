import{initializeApp as D}from"https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";import{getAuth as O,signInAnonymously as q}from"https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";import{getFirestore as W,setLogLevel as H,doc as $,onSnapshot as j,getDoc as J,setDoc as P}from"https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const m of s)if(m.type==="childList")for(const n of m.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const m={};return s.integrity&&(m.integrity=s.integrity),s.referrerPolicy&&(m.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?m.credentials="include":s.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function a(s){if(s.ep)return;s.ep=!0;const m=o(s);fetch(s.href,m)}})();const S={apiKey:"AIzaSyAGAKkeso4kFAV6y3S6XILLaEVZ-LB_h_4",authDomain:"turkeytennis-3d372.firebaseapp.com",projectId:"turkeytennis-3d372",storageBucket:"turkeytennis-3d372.firebasestorage.app",messagingSenderId:"964948050175",appId:"1:964948050175:web:d81932731a106cb5980cca",measurementId:"G-2HY1NYSDP2"},Q=S.projectId||"default-app-id",_=null,w=`artifacts/${Q}/public/data/tournament/tournament-state`,x=[{name:"PCJackThany",players:["jackthany","mas"],pool:"A",description:"who tf knows what will happen."},{name:"Where is my husband",players:["Brooke","Varidhi"],pool:"B",description:"Brooke is without her husband who is tall. But she should play well."},{name:"Siblings or Married",players:["Laurel","Zim"],pool:"A",description:"Jury is still out. Might be both"},{name:"uWu",players:["Tab","NoNo"],pool:"B",description:"Actively over thinking their match and processing the situation like anime "},{name:"Just Roomates",players:["Moose","Austin"],pool:"A",description:"Just roomates I swear"},{name:"Towson Y",players:["Dan","Sara"],pool:"A",description:"ugh, another towson."},{name:"Team Fun",players:["Colin","Cait"],pool:"B",description:"vroom vroom"},{name:"Team 1 Bed 1 Bath 1 Den",players:["Dan FB","Jess"],pool:"B",description:"Will be good unless kaboom"}],M=[{time:"1:00 PM",court:"1",team1:"Open Slot A",team2:"Siblings or Married",pool:"A",score:"-",team1Idx:0,team2Idx:2},{time:"1:00 PM",court:"2",team1:"Just Roomates",team2:"Towson Y",pool:"A",score:"-",team1Idx:4,team2Idx:5},{time:"1:00 PM",court:"3",team1:"Where is my husband",team2:"uWu",pool:"B",score:"-",team1Idx:1,team2Idx:3},{time:"1:20 PM",court:"1",team1:"Team Fun",team2:"Towson Y",pool:"A",score:"-",team1Idx:6,team2Idx:5},{time:"1:20 PM",court:"2",team1:"Open Slot A",team2:"Just Roomates",pool:"A",score:"-",team1Idx:0,team2Idx:4},{time:"1:20 PM",court:"3",team1:"Team 1 Bed 1 Bath 1 Den",team2:"uWu",pool:"B",score:"-",team1Idx:7,team2Idx:3},{time:"1:40 PM",court:"1",team1:"Siblings or Married",team2:"Towson Y",pool:"A",score:"-",team1Idx:2,team2Idx:5},{time:"1:40 PM",court:"2",team1:"Where is my husband",team2:"Team 1 Bed 1 Bath 1 Den",pool:"B",score:"-",team1Idx:1,team2Idx:7},{time:"1:40 PM",court:"3",team1:"Open Slot A",team2:"Team Fun",pool:"A",score:"-",team1Idx:0,team2Idx:6},{time:"2:00 PM",court:"1",team1:"Just Roomates",team2:"Siblings or Married",pool:"A",score:"-",team1Idx:4,team2Idx:2},{time:"2:00 PM",court:"2",team1:"uWu",team2:"Where is my husband",pool:"B",score:"-",team1Idx:3,team2Idx:1},{time:"2:00 PM",court:"3",team1:"Team Fun",team2:"Siblings or Married",pool:"A",score:"-",team1Idx:6,team2Idx:2},{time:"2:20 PM",court:"1",team1:"Team 1 Bed 1 Bath 1 Den",team2:"Where is my husband",pool:"B",score:"-",team1Idx:7,team2Idx:1},{time:"2:20 PM",court:"2",team1:"Open Slot A",team2:"Towson Y",pool:"A",score:"-",team1Idx:0,team2Idx:5},{time:"2:40 PM",court:"1",team1:"Team Fun",team2:"Just Roomates",pool:"A",score:"-",team1Idx:6,team2Idx:4}],L={quarterfinals:[{id:"qf1",team1:"Pool A 1st",team2:"Pool B 4th",score:"-",winner:null},{id:"qf2",team1:"Pool B 2nd",team2:"Pool A 3th",score:"-",winner:null},{id:"qf3",team1:"Pool A 2nd",team2:"Pool B 3rd",score:"-",winner:null},{id:"qf4",team1:"Pool B 1st",team2:"Pool A 4th",score:"-",winner:null}],semifinals:[{id:"sf1",team1:"Winner QF1",team2:"Winner QF2",score:"-",winner:null},{id:"sf2",team1:"Winner QF3",team2:"Winner QF4",score:"-",winner:null}],finals:[{id:"f1",team1:"Winner SF1",team2:"Winner SF2",score:"-",winner:null}],consolationSemis:[{id:"csf1",team1:"Loser QF1",team2:"Loser QF2",score:"-",winner:null},{id:"csf2",team1:"Loser QF3",team2:"Loser QF4",score:"-",winner:null}],consolationFinals:[{id:"cf1",team1:"Winner CSF1",team2:"Winner CSF2",score:"-",winner:null}]},A=["Team Julia and Theo","Team Joel and Luke","Undisclosed","Team Adam and Vinny","Team PeeCeeTee","Others!"],z="turkey2024";let i={},B=!1,y;const Y=`
  <div class="welcome-section">
    <h2>Turkey Tennis Doubles Invitational at Meadowbrook Local Park! 🦃🎾 </h2>
    <h3>November 22nd, 2025</h3>
    <h3>1:00PM</h3>
    <p>Serve! Rally! Win!</p>
    <p>Pool play games will be one abbreviated set to 4 games with a 20 minute time cap.</p>
    <p>Bracket play will be one set to 6 games with no time cap.</p>
    <p></p>
    <p>Secret prize for the winners!</p>
  </div>
`,U=()=>i.teams.map((e,t)=>`
  <div class="team-card" data-team-id="${t}">
    <h3>${e.name}</h3>
    <ul>
      <li>${e.players[0]}</li>
      <li>${e.players[1]}</li>
    </ul>
  </div>
`).join(""),G=()=>A.map(e=>`<li>${e}</li>`).join(""),K=()=>i.teams.map((e,t)=>`
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
`).join(""),C=()=>{const e={};return i.teams.forEach((t,o)=>{e[o]={wins:0,losses:0}}),i.matchSchedule.forEach(t=>{if(t.score!=="-"){const o=t.score.split("-").map(a=>parseInt(a.trim()));o.length===2&&o[0]!==o[1]&&(o[0]>o[1]?(e[t.team1Idx].wins++,e[t.team2Idx].losses++):o[1]>o[0]&&(e[t.team2Idx].wins++,e[t.team1Idx].losses++))}}),e},V=()=>i.matchSchedule?`
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
              ${i.matchSchedule.map((e,t)=>`
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
  `:"<div>Loading schedule...</div>",Z=()=>{if(!i.teams)return"<div>Loading standings...</div>";const e=C(),t=i.teams.filter(a=>a.pool==="A").map(a=>{const s=i.teams.indexOf(a);return{...a,teamIdx:s,record:e[s]}}).sort((a,s)=>s.record.wins-a.record.wins),o=i.teams.filter(a=>a.pool==="B").map(a=>{const s=i.teams.indexOf(a);return{...a,teamIdx:s,record:e[s]}}).sort((a,s)=>s.record.wins-a.record.wins);return`
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
  `},X=()=>{if(!i.bracketMatches)return"<div>Loading brackets...</div>";const e=s=>`
    <div class="bracket-match">
      <div class="bracket-team">${s.team1}</div>
      <div class="bracket-team">${s.team2}</div>
      <div class="bracket-score">${s.score}</div>
    </div>
  `,t=i.bracketMatches,o=`
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
  `},I=async e=>{if(!y)return console.error("Firestore not initialized.");try{const t=$(y,w);await P(t,e,{merge:!0}),console.log("Tournament state saved successfully.")}catch(t){console.error("Error saving state:",t);const o=document.getElementById("result");o&&(o.textContent="Error: Could not save score to database.",o.className="result error")}},ee=async()=>{if(!y)return;const e=$(y,w);(await J(e)).exists()||(console.log("No existing tournament data found. Initializing new tournament."),await P(e,{teams:x,matchSchedule:M,bracketMatches:L,bracketPlayActive:!1,alternates:A}))},F=()=>{const e=document.getElementById("app");if(!(!e||!i.teams))try{e.innerHTML=`
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
              <h2>Meat 🍗 the teams</h2>
              <div class="teams-grid">
                ${U()}
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
                ${X()}
              </div>
            </div>
          </div>
          <div id="scores" class="tab-pane">
            <h2>Submit Scores</h2>
            <div class="password-section" id="password-section" style="display: ${B?"none":"block"};">
              <div class="form-group">
                <label for="password">Enter Password:</label>
                <input type="password" id="password" placeholder="Enter password">
              </div>
              <button id="passwordBtn" class="submit-btn">Unlock</button>
              <div id="password-result" class="result"></div>
            </div>
            <div class="score-form" id="score-form" style="display: ${B?"block":"none"};">
              <div id="pool-play-section" style="display: ${i.bracketPlayActive?"none":"block"};">
                <h3>Pool Play Scores</h3>
                <div class="form-group">
                  <label for="match-select">Select Match:</label>
                  <select id="match-select">
                    <option value="">Choose a match...</option>
                    ${i.matchSchedule.map((t,o)=>`
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
              
              <div id="bracket-play-section" style="display: ${i.bracketPlayActive?"block":"none"};">
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
    `,ae(),T("home"),N("pool-play"),i.bracketPlayActive&&te(),document.getElementById("loading").style.display="none",document.getElementById("app").style.display="block"}catch(t){console.error("Critical Rendering Error:",t),document.getElementById("loading").style.display="none",document.getElementById("app").style.display="block",e.innerHTML='<div style="color: red; padding: 2rem;">CRITICAL RENDERING ERROR: Failed to build the page content. Check the console (F12) for JavaScript errors.</div>'}},T=e=>{document.querySelectorAll(".tab-button").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".tab-pane").forEach(a=>a.classList.remove("active"));const t=document.querySelector(`[data-tab="${e}"]`),o=document.getElementById(e);t&&o&&(t.classList.add("active"),o.classList.add("active"))},N=e=>{document.querySelectorAll(".subtab-button").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".subtab-pane").forEach(a=>a.classList.remove("active"));const t=document.querySelector(`[data-subtab="${e}"]`),o=document.getElementById(e);t&&o&&(t.classList.add("active"),o.classList.add("active"))},te=()=>{const e=document.getElementById("bracket-match-select");if(!e)return;e.innerHTML='<option value="">Choose a bracket match...</option>';const t=i.bracketMatches;[{round:"qf",matches:t.quarterfinals,prefix:"Quarterfinal"},{round:"sf",matches:t.semifinals,prefix:"Semifinal"},{round:"f",matches:t.finals,prefix:"Finals"},{round:"csf",matches:t.consolationSemis,prefix:"Consolation Semifinal"},{round:"cf",matches:t.consolationFinals,prefix:"Consolation Finals"}].forEach(({round:a,matches:s,prefix:m})=>{s.forEach((n,r)=>{const d=n.team1.includes("Pool")||n.team1.includes("Winner")||n.team1.includes("Loser")||n.team1.includes("TBD");if(n.score==="-"&&!d){let l=`${m} ${a!=="f"&&a!=="cf"?r+1:""}`.trim();e.innerHTML+=`<option value="${a}-${r}">${l}: ${n.team1} vs ${n.team2}</option>`}})})},ae=()=>{const e=document.getElementById("app");if(!e)return;e.onclick=n=>{n.target.classList.contains("tab-button")&&n.target.getAttribute("data-tab")?T(n.target.getAttribute("data-tab")):n.target.classList.contains("subtab-button")&&n.target.getAttribute("data-subtab")?N(n.target.getAttribute("data-subtab")):n.target.classList.contains("team-card")&&n.target.getAttribute("data-team-id")&&T("teams")};const t=document.getElementById("passwordBtn");t&&(t.onclick=()=>{const n=document.getElementById("password").value,r=document.getElementById("password-result");n===z?(B=!0,F(),r.textContent="Unlocked!",r.className="result success"):(r.textContent="Incorrect password",r.className="result error")});const o=document.getElementById("submitBtn");o&&(o.onclick=async()=>{if(!B)return;const n=parseInt(document.getElementById("match-select").value),r=parseInt(document.getElementById("score1").value),d=parseInt(document.getElementById("score2").value),l=document.getElementById("result");if(isNaN(n)||n<0||isNaN(r)||isNaN(d)){l.textContent="Please select a match and enter valid scores",l.className="result error";return}if(i.matchSchedule[n].score!=="-"){l.textContent="Score already submitted for this match.",l.className="result error";return}const c=i.matchSchedule[n];let b,u=[...i.matchSchedule];if(r===d){u[n].score=`${r} - ${d}`,await I({matchSchedule:u}),l.textContent=`${c.team1} ${r} - ${d} ${c.team2} (Tied)`,l.className="result tie";return}b=r>d?c.team1:c.team2,u[n].score=`${r} - ${d}`,await I({matchSchedule:u}),l.textContent=`${c.team1} ${r} - ${d} ${c.team2} | Winner: ${b}`,l.className="result success",document.getElementById("match-select").value="",document.getElementById("score1").value="",document.getElementById("score2").value=""});const a=document.getElementById("concludeBtn");a&&(a.onclick=async()=>{const n=C(),r=i.teams.filter(c=>c.pool==="A").map(c=>{const b=i.teams.indexOf(c);return{...c,teamIdx:b,record:n[b]}}).sort((c,b)=>b.record.wins-c.record.wins),d=i.teams.filter(c=>c.pool==="B").map(c=>{const b=i.teams.indexOf(c);return{...c,teamIdx:b,record:n[b]}}).sort((c,b)=>b.record.wins-c.record.wins);let l=JSON.parse(JSON.stringify(i.bracketMatches));l.quarterfinals[0].team1=r[0].name,l.quarterfinals[0].team2=d[3].name,l.quarterfinals[1].team1=d[1].name,l.quarterfinals[1].team2=r[2].name,l.quarterfinals[2].team1=r[1].name,l.quarterfinals[2].team2=d[2].name,l.quarterfinals[3].team1=d[0].name,l.quarterfinals[3].team2=r[3].name,await I({bracketMatches:l,bracketPlayActive:!0}),document.getElementById("result").textContent="Pool play concluded! Bracket play has begun.",document.getElementById("result").className="result success"});const s=document.getElementById("submitBracketBtn");s&&(s.onclick=async()=>{const n=document.getElementById("bracket-match-select").value,r=parseInt(document.getElementById("bracket-score1").value),d=parseInt(document.getElementById("bracket-score2").value),l=document.getElementById("result");if(!n||isNaN(r)||isNaN(d)||r===d){l.textContent="Please select a match and enter valid (non-tied) scores",l.className="result error";return}const[c,b]=n.split("-"),u=parseInt(b);let p=JSON.parse(JSON.stringify(i.bracketMatches)),v,k,E;const g=(h,f,R)=>{v=h[f],k=r>d?v.team1:v.team2,E=r>d?v.team2:v.team1,v.score=`${r} - ${d}`,v.winner=k,R(k,E)};c==="qf"?g(p.quarterfinals,u,(h,f)=>{u===0?(p.semifinals[0].team1=h,p.consolationSemis[0].team1=f):u===1?(p.semifinals[0].team2=h,p.consolationSemis[0].team2=f):u===2?(p.semifinals[1].team1=h,p.consolationSemis[1].team1=f):u===3&&(p.semifinals[1].team2=h,p.consolationSemis[1].team2=f)}):c==="sf"?g(p.semifinals,u,h=>{u===0?p.finals[0].team1=h:u===1&&(p.finals[0].team2=h)}):c==="f"?g(p.finals,u,()=>{}):c==="csf"?g(p.consolationSemis,u,h=>{u===0?p.consolationFinals[0].team1=h:u===1&&(p.consolationFinals[0].team2=h)}):c==="cf"&&g(p.consolationFinals,u,()=>{}),await I({bracketMatches:p}),l.textContent=`Score submitted: ${v.team1} ${r} - ${d} ${v.team2} | Winner: ${k}`,l.className="result success",document.getElementById("bracket-match-select").value="",document.getElementById("bracket-score1").value="",document.getElementById("bracket-score2").value=""});const m=document.getElementById("resetBtn");m&&(m.onclick=async()=>{await I({teams:x,matchSchedule:M,bracketMatches:L,bracketPlayActive:!1,alternates:A}),document.getElementById("result").textContent="Tournament has been reset!",document.getElementById("result").className="result error"})},se=async()=>{const e=document.getElementById("loading"),t=document.getElementById("app");if(Object.keys(S).length===0){e&&(e.innerHTML='<div style="color: red; padding: 2rem; font-weight: bold;">FATAL ERROR: Firebase Configuration is Missing. Cannot connect to database.</div>');return}try{const o=D(S);y=W(o),H("error");const a=O(o);_||await q(a),console.log("Firebase authenticated successfully."),await ee();const s=$(y,w);j(s,m=>{m.exists()?(i=m.data(),F()):console.warn("Tournament state document does not exist. A new one should be initialized shortly.")})}catch(o){console.error("Firebase Initialization Failed:",o),e&&(e.innerHTML=`
            <div style="color: red; padding: 2rem; font-weight: bold;">CRITICAL ERROR: Failed to connect to the database. Please check console (F12) for details.</div>
        `),t&&(t.style.display="none"),e&&(e.style.display="block")}};document.addEventListener("DOMContentLoaded",se);
