import{initializeApp as R}from"https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";import{getAuth as W,signInAnonymously as q}from"https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";import{getFirestore as J,setLogLevel as O,doc as w,onSnapshot as j,getDoc as H,setDoc as $}from"https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const p of s)if(p.type==="childList")for(const n of p.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const p={};return s.integrity&&(p.integrity=s.integrity),s.referrerPolicy&&(p.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?p.credentials="include":s.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(s){if(s.ep)return;s.ep=!0;const p=o(s);fetch(s.href,p)}})();const S={apiKey:"AIzaSyAGAKkeso4kFAV6y3S6XILLaEVZ-LB_h_4",authDomain:"turkeytennis-3d372.firebaseapp.com",projectId:"turkeytennis-3d372",storageBucket:"turkeytennis-3d372.firebasestorage.app",messagingSenderId:"964948050175",appId:"1:964948050175:web:d81932731a106cb5980cca",measurementId:"G-2HY1NYSDP2"},Q=S.projectId||"default-app-id",_=null,P=`artifacts/${Q}/public/data/tournament/tournament-state`,A=[{name:"PCJackThany",players:["probably jack","mas"],pool:"A",description:"who tf knows what will happen."},{name:"Where is my husband",players:["Brooke","Varidhi"],pool:"B",description:"Brooke is without her husband who is tall. But she should play well."},{name:"Siblings or Married",players:["Laurel","Zim"],pool:"A",description:"Jury is still out. Might be both"},{name:"uWu",players:["Tab","NoNo"],pool:"B",description:"Actively over thinking their match and processing the situation like anime "},{name:"Just Roomates",players:["Moose","Austin"],pool:"A",description:"Just roomates I swear"},{name:"Towson Y",players:["Dan","Sara"],pool:"A",description:"ugh, another towson."},{name:"Team Fun",players:["Colin","Cait"],pool:"B",description:"vroom vroom"},{name:"Team 1 Bed 1 Bath 1 Den",players:["Dan FB","Jess"],pool:"B",description:"Will be good unless kaboom"},{name:"Julia and Theo",players:["Julia","Theo"],pool:"A",description:"New challenger approaching"},{name:"Surprise Team",players:["TBD","TBD"],pool:"B",description:"New challenger approaching"}],E=[{time:"1:00 PM",court:"1",team1:"PCJackThany",team2:"Siblings or Married",pool:"A",score:"-",team1Idx:0,team2Idx:2},{time:"1:00 PM",court:"2",team1:"Just Roomates",team2:"Towson Y",pool:"A",score:"-",team1Idx:4,team2Idx:5},{time:"1:00 PM",court:"3",team1:"Where is my husband",team2:"uWu",pool:"B",score:"-",team1Idx:1,team2Idx:3},{time:"1:00 PM",court:"4",team1:"Team Fun",team2:"Team 1 Bed 1 Bath 1 Den",pool:"B",score:"-",team1Idx:6,team2Idx:7},{time:"1:20 PM",court:"1",team1:"PCJackThany",team2:"Just Roomates",pool:"A",score:"-",team1Idx:0,team2Idx:4},{time:"1:20 PM",court:"2",team1:"Siblings or Married",team2:"Julia and Theo",pool:"A",score:"-",team1Idx:2,team2Idx:8},{time:"1:20 PM",court:"3",team1:"Where is my husband",team2:"Team Fun",pool:"B",score:"-",team1Idx:1,team2Idx:6},{time:"1:20 PM",court:"4",team1:"uWu",team2:"Surprise Team",pool:"B",score:"-",team1Idx:3,team2Idx:9},{time:"1:40 PM",court:"1",team1:"PCJackThany",team2:"Towson Y",pool:"A",score:"-",team1Idx:0,team2Idx:5},{time:"1:40 PM",court:"2",team1:"Just Roomates",team2:"Julia and Theo",pool:"A",score:"-",team1Idx:4,team2Idx:8},{time:"1:40 PM",court:"3",team1:"Where is my husband",team2:"Team 1 Bed 1 Bath 1 Den",pool:"B",score:"-",team1Idx:1,team2Idx:7},{time:"1:40 PM",court:"4",team1:"Team Fun",team2:"Surprise Team",pool:"B",score:"-",team1Idx:6,team2Idx:9},{time:"2:00 PM",court:"1",team1:"PCJackThany",team2:"Julia and Theo",pool:"A",score:"-",team1Idx:0,team2Idx:8},{time:"2:00 PM",court:"2",team1:"Siblings or Married",team2:"Towson Y",pool:"A",score:"-",team1Idx:2,team2Idx:5},{time:"2:00 PM",court:"3",team1:"Where is my husband",team2:"Surprise Team",pool:"B",score:"-",team1Idx:1,team2Idx:9},{time:"2:00 PM",court:"4",team1:"uWu",team2:"Team 1 Bed 1 Bath 1 Den",pool:"B",score:"-",team1Idx:3,team2Idx:7},{time:"2:20 PM",court:"1",team1:"Siblings or Married",team2:"Just Roomates",pool:"A",score:"-",team1Idx:2,team2Idx:4},{time:"2:20 PM",court:"2",team1:"Towson Y",team2:"New Team A",pool:"A",score:"-",team1Idx:5,team2Idx:8},{time:"2:20 PM",court:"3",team1:"uWu",team2:"Team Fun",pool:"B",score:"-",team1Idx:3,team2Idx:6},{time:"2:20 PM",court:"4",team1:"Team 1 Bed 1 Bath 1 Den",team2:"Surprise Team",pool:"B",score:"-",team1Idx:7,team2Idx:9}],M={playIns:[{id:"pi1",team1:"Pool A 4th",team2:"Pool B 5th",score:"-",winner:null},{id:"pi2",team1:"Pool B 4th",team2:"Pool A 5th",score:"-",winner:null}],quarterfinals:[{id:"qf1",team1:"Pool A 1st",team2:"Winner PI2",score:"-",winner:null},{id:"qf2",team1:"Pool B 2nd",team2:"Pool A 3rd",score:"-",winner:null},{id:"qf3",team1:"Pool A 2nd",team2:"Pool B 3rd",score:"-",winner:null},{id:"qf4",team1:"Pool B 1st",team2:"Winner PI1",score:"-",winner:null}],semifinals:[{id:"sf1",team1:"Winner QF1",team2:"Winner QF2",score:"-",winner:null},{id:"sf2",team1:"Winner QF3",team2:"Winner QF4",score:"-",winner:null}],finals:[{id:"f1",team1:"Winner SF1",team2:"Winner SF2",score:"-",winner:null}],consolationSemis:[{id:"csf1",team1:"Loser QF1",team2:"Loser QF2",score:"-",winner:null},{id:"csf2",team1:"Loser QF3",team2:"Loser QF4",score:"-",winner:null}],consolationFinals:[{id:"cf1",team1:"Winner CSF1",team2:"Winner CSF2",score:"-",winner:null}]},C=["Team Julia and Theo, goodluck to TK on his thesis","Chris Scalzi might hangout","Undisclosed","Secret","Camille might hangout","Maybe the cacopardos will come","maybe colin little brother will play"],z="turkey2024";let c={},k=!1,g;const Y=`
  <div class="welcome-section">
    <h2>Turkey Tennis Doubles Invitational at Meadowbrook Local Park! 🦃🎾 </h2>
    <h3>November 22nd, 2025</h3>
    <h3>1:00PM</h3>
    <p>Serve! Rally! Win!</p>
    <p>Pool play games will be one abbreviated set to 4 games with a 20 minute time cap.</p>
    <p>Bracket play will be one set to 6 games with no time cap.</p>
    <p><strong>New:</strong> 10 Teams, 4 Courts! Play-in games for the Championship Bracket.</p>
    <p>Secret prize for the winners!</p>
    <p></p>
    <p></P>
    <p>Goal is enjoyment</p>
    <p>If both teams agree, do a 'friendly serve'.  This is, ignore the service box, as long as the other team can return it, it is a good serve!</p>
    <p>If both teams agree, and scoring is confusing, just play a game to 21.  Switch who the server is on some fixed number of points</p>
  </div>
`,U=()=>c.teams.map((t,e)=>`
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
`).join(""),L=()=>{const t={};return c.teams.forEach((e,o)=>{t[o]={wins:0,losses:0,ties:0}}),c.matchSchedule.forEach(e=>{if(e.score!=="-"){const o=e.score.split("-").map(a=>parseInt(a.trim()));o.length===2&&o[0]!==o[1]&&(o[0]>o[1]?(t[e.team1Idx].wins++,t[e.team2Idx].losses++):o[1]>o[0]?(t[e.team2Idx].wins++,t[e.team1Idx].losses++):o[0]===o[1]&&(t[e.team1Idx].ties++,t[e.team2Idx].ties++))}}),t},G=()=>c.matchSchedule?`
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
              ${c.matchSchedule.map((t,e)=>`
                <tr>
                  <td>${t.time}</td>
                  <td>${t.court}</td>
                  <td>${t.team1}</td>
                  <td>${t.team2}</td>
                  <td class="score-cell" data-match-idx="${e}">${t.score}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `:"<div>Loading schedule...</div>",K=()=>{if(!c.teams)return"<div>Loading standings...</div>";const t=L(),e=c.teams.filter(a=>a.pool==="A").map(a=>{const s=c.teams.indexOf(a);return{...a,teamIdx:s,record:t[s]}}).sort((a,s)=>s.record.wins-a.record.wins),o=c.teams.filter(a=>a.pool==="B").map(a=>{const s=c.teams.indexOf(a);return{...a,teamIdx:s,record:t[s]}}).sort((a,s)=>s.record.wins-a.record.wins);return`
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
              ${e.map((a,s)=>`
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
  `},V=()=>{if(!c.bracketMatches)return"<div>Loading brackets...</div>";const t=s=>`
    <div class="bracket-match">
      <div class="bracket-team">${s.team1}</div>
      <div class="bracket-team">${s.team2}</div>
      <div class="bracket-score">${s.score}</div>
    </div>
  `,e=c.bracketMatches,o=`
    <div class="bracket-container">
      <div class="bracket-round">
        <h3>Play-Ins</h3>
        ${e.playIns?e.playIns.map(t).join(""):"<p>No Play-ins</p>"}
      </div>

      <div class="bracket-round">
        <h3>Quarterfinals</h3>
        ${e.quarterfinals.map(t).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>Semifinals</h3>
        ${e.semifinals.map(t).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>Finals</h3>
        ${e.finals.map(t).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>Champion</h3>
        <div class="bracket-champion">
          <div class="bracket-team">${e.finals[0].winner||"TBD"}</div>
        </div>
      </div>
    </div>
  `,a=`
    <div class="bracket-container">
      <div class="bracket-round">
        <h3>Consolation Semifinals</h3>
        ${e.consolationSemis.map(t).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>Consolation Finals</h3>
        ${e.consolationFinals.map(t).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>5th Place</h3>
        <div class="bracket-champion consolation-winner">
          <div class="bracket-team">${e.consolationFinals[0].winner||"TBD"}</div>
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
  `},I=async t=>{if(!g)return console.error("Firestore not initialized.");try{const e=w(g,P);await $(e,t,{merge:!0}),console.log("Tournament state saved successfully.")}catch(e){console.error("Error saving state:",e);const o=document.getElementById("result");o&&(o.textContent="Error: Could not save score to database.",o.className="result error")}},Z=async()=>{if(!g)return;const t=w(g,P);(await H(t)).exists()||(console.log("No existing tournament data found. Initializing new tournament."),await $(t,{teams:A,matchSchedule:E,bracketMatches:M,bracketPlayActive:!1,alternates:C}))},N=()=>{const t=document.getElementById("app");if(!(!t||!c.teams))try{t.innerHTML=`
      <div>
        <h1>Turkey Tennis Doubles Invitational</h1>
        <div class="tabs">
          <button class="tab-button active" data-tab="home">Home</button>
          <button class="tab-button" data-tab="schedule">Schedule and Results</button>
          <button class="tab-button" data-tab="scores">Submit Scores</button>
          <button class="tab-button" data-tab="teams">🍗 the Teams</button>
        </div>
        <div class="tab-content">
          <div id="home" class="tab-pane active">
            ${Y}
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
                ${G()}
              </div>
              <div id="standings" class="subtab-pane">
                ${K()}
              </div>
              <div id="brackets" class="subtab-pane">
                ${V()}
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
              <div id="pool-play-section" style="display: ${c.bracketPlayActive?"none":"block"};">
                <h3>Pool Play Scores</h3>
                <div class="form-group">
                  <label for="match-select">Select Match:</label>
                  <select id="match-select">
                    <option value="">Choose a match...</option>
                    ${c.matchSchedule.map((e,o)=>`
                      <option value="${o}">${e.time} - Court ${e.court}: ${e.team1} vs ${e.team2} (${e.score!=="-"?"SCORED":"PENDING"})</option>
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
              
              <div id="bracket-play-section" style="display: ${c.bracketPlayActive?"block":"none"};">
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
              ${U()}
            </div>
          </div>
        </div>
      </div>
    `,ee(),T("home"),F("pool-play"),c.bracketPlayActive&&X(),document.getElementById("loading").style.display="none",document.getElementById("app").style.display="block"}catch(e){console.error("Critical Rendering Error:",e),document.getElementById("loading").style.display="none",document.getElementById("app").style.display="block",t.innerHTML='<div style="color: red; padding: 2rem;">CRITICAL RENDERING ERROR: Failed to build the page content. Check the console (F12) for JavaScript errors.</div>'}},T=t=>{document.querySelectorAll(".tab-button").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".tab-pane").forEach(a=>a.classList.remove("active"));const e=document.querySelector(`[data-tab="${t}"]`),o=document.getElementById(t);e&&o&&(e.classList.add("active"),o.classList.add("active"))},F=t=>{document.querySelectorAll(".subtab-button").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".subtab-pane").forEach(a=>a.classList.remove("active"));const e=document.querySelector(`[data-subtab="${t}"]`),o=document.getElementById(t);e&&o&&(e.classList.add("active"),o.classList.add("active"))},X=()=>{const t=document.getElementById("bracket-match-select");if(!t)return;t.innerHTML='<option value="">Choose a bracket match...</option>';const e=c.bracketMatches;[{round:"pi",matches:e.playIns||[],prefix:"Play-In"},{round:"qf",matches:e.quarterfinals,prefix:"Quarterfinal"},{round:"sf",matches:e.semifinals,prefix:"Semifinal"},{round:"f",matches:e.finals,prefix:"Finals"},{round:"csf",matches:e.consolationSemis,prefix:"Consolation Semifinal"},{round:"cf",matches:e.consolationFinals,prefix:"Consolation Finals"}].forEach(({round:a,matches:s,prefix:p})=>{s.forEach((n,r)=>{const d=n.team1.includes("Pool")||n.team1.includes("Winner")||n.team1.includes("Loser")||n.team1.includes("TBD");if(n.score==="-"&&!d){let i=`${p} ${a!=="f"&&a!=="cf"?r+1:""}`.trim();t.innerHTML+=`<option value="${a}-${r}">${i}: ${n.team1} vs ${n.team2}</option>`}})})},ee=()=>{const t=document.getElementById("app");if(!t)return;t.onclick=n=>{n.target.classList.contains("tab-button")&&n.target.getAttribute("data-tab")?T(n.target.getAttribute("data-tab")):n.target.classList.contains("subtab-button")&&n.target.getAttribute("data-subtab")?F(n.target.getAttribute("data-subtab")):n.target.classList.contains("team-card")&&n.target.getAttribute("data-team-id")&&T("teams")};const e=document.getElementById("passwordBtn");e&&(e.onclick=()=>{const n=document.getElementById("password").value,r=document.getElementById("password-result");n===z?(k=!0,N(),r.textContent="Unlocked!",r.className="result success"):(r.textContent="Incorrect password",r.className="result error")});const o=document.getElementById("submitBtn");o&&(o.onclick=async()=>{if(!k)return;const n=parseInt(document.getElementById("match-select").value),r=parseInt(document.getElementById("score1").value),d=parseInt(document.getElementById("score2").value),i=document.getElementById("result");if(isNaN(n)||n<0||isNaN(r)||isNaN(d)){i.textContent="Please select a match and enter valid scores",i.className="result error";return}if(c.matchSchedule[n].score!=="-"){i.textContent="Score already submitted for this match.",i.className="result error";return}const l=c.matchSchedule[n];let h,m=[...c.matchSchedule];if(r===d){m[n].score=`${r} - ${d}`,await I({matchSchedule:m}),i.textContent=`${l.team1} ${r} - ${d} ${l.team2} (Tied)`,i.className="result tie";return}h=r>d?l.team1:l.team2,m[n].score=`${r} - ${d}`,await I({matchSchedule:m}),i.textContent=`${l.team1} ${r} - ${d} ${l.team2} | Winner: ${h}`,i.className="result success",document.getElementById("match-select").value="",document.getElementById("score1").value="",document.getElementById("score2").value=""});const a=document.getElementById("concludeBtn");a&&(a.onclick=async()=>{const n=L(),r=c.teams.filter(l=>l.pool==="A").map(l=>{const h=c.teams.indexOf(l);return{...l,teamIdx:h,record:n[h]}}).sort((l,h)=>h.record.wins-l.record.wins),d=c.teams.filter(l=>l.pool==="B").map(l=>{const h=c.teams.indexOf(l);return{...l,teamIdx:h,record:n[h]}}).sort((l,h)=>h.record.wins-l.record.wins);let i=JSON.parse(JSON.stringify(c.bracketMatches));i.playIns&&i.playIns.length>=2&&(i.playIns[0].team1=r[3].name,i.playIns[0].team2=d[4].name,i.playIns[1].team1=d[3].name,i.playIns[1].team2=r[4].name),i.quarterfinals[0].team1=r[0].name,i.quarterfinals[1].team1=d[1].name,i.quarterfinals[1].team2=r[2].name,i.quarterfinals[2].team1=r[1].name,i.quarterfinals[2].team2=d[2].name,i.quarterfinals[3].team1=d[0].name,await I({bracketMatches:i,bracketPlayActive:!0}),document.getElementById("result").textContent="Pool play concluded! Play-in games are set.",document.getElementById("result").className="result success"});const s=document.getElementById("submitBracketBtn");s&&(s.onclick=async()=>{const n=document.getElementById("bracket-match-select").value,r=parseInt(document.getElementById("bracket-score1").value),d=parseInt(document.getElementById("bracket-score2").value),i=document.getElementById("result");if(!n||isNaN(r)||isNaN(d)||r===d){i.textContent="Please select a match and enter valid (non-tied) scores",i.className="result error";return}const[l,h]=n.split("-"),m=parseInt(h);let u=JSON.parse(JSON.stringify(c.bracketMatches)),f,B,x;const y=(b,v,D)=>{f=b[v],B=r>d?f.team1:f.team2,x=r>d?f.team2:f.team1,f.score=`${r} - ${d}`,f.winner=B,D(B,x)};l==="pi"?y(u.playIns,m,(b,v)=>{m===0&&(u.quarterfinals[3].team2=b),m===1&&(u.quarterfinals[0].team2=b)}):l==="qf"?y(u.quarterfinals,m,(b,v)=>{m===0?(u.semifinals[0].team1=b,u.consolationSemis[0].team1=v):m===1?(u.semifinals[0].team2=b,u.consolationSemis[0].team2=v):m===2?(u.semifinals[1].team1=b,u.consolationSemis[1].team1=v):m===3&&(u.semifinals[1].team2=b,u.consolationSemis[1].team2=v)}):l==="sf"?y(u.semifinals,m,b=>{m===0?u.finals[0].team1=b:m===1&&(u.finals[0].team2=b)}):l==="f"?y(u.finals,m,()=>{}):l==="csf"?y(u.consolationSemis,m,b=>{m===0?u.consolationFinals[0].team1=b:m===1&&(u.consolationFinals[0].team2=b)}):l==="cf"&&y(u.consolationFinals,m,()=>{}),await I({bracketMatches:u}),i.textContent=`Score submitted: ${f.team1} ${r} - ${d} ${f.team2} | Winner: ${B}`,i.className="result success",document.getElementById("bracket-match-select").value="",document.getElementById("bracket-score1").value="",document.getElementById("bracket-score2").value=""});const p=document.getElementById("resetBtn");p&&(p.onclick=async()=>{await I({teams:A,matchSchedule:E,bracketMatches:M,bracketPlayActive:!1,alternates:C}),document.getElementById("result").textContent="Tournament has been reset!",document.getElementById("result").className="result error"})},te=async()=>{const t=document.getElementById("loading"),e=document.getElementById("app");if(Object.keys(S).length===0){t&&(t.innerHTML='<div style="color: red; padding: 2rem; font-weight: bold;">FATAL ERROR: Firebase Configuration is Missing. Cannot connect to database.</div>');return}try{const o=R(S);g=J(o),O("error");const a=W(o);_||await q(a),console.log("Firebase authenticated successfully."),await Z();const s=w(g,P);j(s,p=>{p.exists()?(c=p.data(),N()):console.warn("Tournament state document does not exist. A new one should be initialized shortly.")})}catch(o){console.error("Firebase Initialization Failed:",o),t&&(t.innerHTML=`
            <div style="color: red; padding: 2rem; font-weight: bold;">CRITICAL ERROR: Failed to connect to the database. Please check console (F12) for details.</div>
        `),e&&(e.style.display="none"),t&&(t.style.display="block")}};document.addEventListener("DOMContentLoaded",te);
