(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const c=[{name:"Towson X",players:["Elias","Yoshi"],pool:"A",description:"Welcome Towson X"},{name:"Where is my husband",players:["Brooke","Varidhi"],pool:"B",description:"Brooke is without her husband who is tall. But she should play well."},{name:"Siblings or Married",players:["Laurel","Zim"],pool:"A",description:"Jury is still out.  Might be both"},{name:"uWu",players:["Tab","NoNo"],pool:"B",description:"Actively over thinking their match and processing the situation like anime "},{name:"Just Roomates",players:["Moose","Austin"],pool:"A",description:"Just roomates I swear"},{name:"Towson Y",players:["Dan","Sara"],pool:"A",description:"ugh, another townson."},{name:"Team Fun",players:["Colin","Cait"],pool:"B",description:"Should play good ."},{name:"Team 1 Bed 1 Bath 1 Den",players:["Dan FB","Jess"],pool:"B",description:"will be good unless kaboom"}],B=["Team Julia and Theo","Team Joel and Luke","Undisclosed","Team Adam and Vinny","Team PeeCeeTee"],g="turkey2024";let m=[{time:"1:00 PM",court:"1",team1:"Towson X",team2:"Siblings or Married",pool:"A",score:"-",team1Idx:0,team2Idx:2},{time:"1:00 PM",court:"2",team1:"Just Roomates",team2:"Towson Y",pool:"A",score:"-",team1Idx:4,team2Idx:5},{time:"1:00 PM",court:"3",team1:"Where is my husband",team2:"uWu",pool:"B",score:"-",team1Idx:1,team2Idx:3},{time:"1:20 PM",court:"1",team1:"Team Fun",team2:"Towson Y",pool:"AB",score:"-",team1Idx:6,team2Idx:5},{time:"1:20 PM",court:"2",team1:"Towson X",team2:"Just Roomates",pool:"A",score:"-",team1Idx:0,team2Idx:4},{time:"1:20 PM",court:"3",team1:"Team 1 Bed 1 Bath 1 Den",team2:"uWu",pool:"B",score:"-",team1Idx:7,team2Idx:3},{time:"1:40 PM",court:"1",team1:"Siblings or Married",team2:"Towson Y",pool:"A",score:"-",team1Idx:2,team2Idx:5},{time:"1:40 PM",court:"2",team1:"Where is my husband",team2:"Team 1 Bed 1 Bath 1 Den",pool:"B",score:"-",team1Idx:1,team2Idx:7},{time:"1:40 PM",court:"3",team1:"Towson X",team2:"Team Fun",pool:"AB",score:"-",team1Idx:0,team2Idx:6},{time:"2:00 PM",court:"1",team1:"Just Roomates",team2:"Siblings or Married",pool:"A",score:"-",team1Idx:4,team2Idx:2},{time:"2:00 PM",court:"2",team1:"uWu",team2:"Where is my husband",pool:"B",score:"-",team1Idx:3,team2Idx:1},{time:"2:00 PM",court:"3",team1:"Team Fun",team2:"Team 1 Bed 1 Bath 1 Den",pool:"AB",score:"-",team1Idx:6,team2Idx:7}],a={quarterfinals:[{id:"qf1",team1:"Pool A 1st",team2:"Pool B 4th",score:"-",winner:null},{id:"qf2",team1:"Pool B 1st",team2:"Pool A 4th",score:"-",winner:null},{id:"qf3",team1:"Pool A 2nd",team2:"Pool B 3rd",score:"-",winner:null},{id:"qf4",team1:"Pool B 2nd",team2:"Pool A 3rd",score:"-",winner:null}],semifinals:[{id:"sf1",team1:"Winner QF1",team2:"Winner QF2",score:"-",winner:null},{id:"sf2",team1:"Winner QF3",team2:"Winner QF4",score:"-",winner:null}],finals:[{id:"f1",team1:"Winner SF1",team2:"Winner SF2",score:"-",winner:null}],consolationSemis:[{id:"csf1",team1:"Loser QF1",team2:"Loser QF2",score:"-",winner:null},{id:"csf2",team1:"Loser QF3",team2:"Loser QF4",score:"-",winner:null}],consolationFinals:[{id:"cf1",team1:"Winner CSF1",team2:"Winner CSF2",score:"-",winner:null}]};const b=()=>{const t={};return c.forEach((e,s)=>{t[s]={wins:0,losses:0}}),m.forEach(e=>{if(e.score!=="-"){const s=e.score.split("-").map(o=>parseInt(o.trim()));s.length===2&&(s[0]>s[1]?(t[e.team1Idx].wins++,t[e.team2Idx].losses++):s[1]>s[0]&&(t[e.team2Idx].wins++,t[e.team1Idx].losses++))}}),t},p=()=>`
    <div class="pools-container">
      <div class="pool">
        <h3>Pool Play Schedule & Scores</h3>
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
            ${m.map((t,e)=>`
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
  `,v=()=>{const t=b(),e=c.filter(o=>o.pool==="A").map(o=>{const n=c.indexOf(o);return{...o,teamIdx:n,record:t[n]}}).sort((o,n)=>n.record.wins-o.record.wins),s=c.filter(o=>o.pool==="B").map(o=>{const n=c.indexOf(o);return{...o,teamIdx:n,record:t[n]}}).sort((o,n)=>n.record.wins-o.record.wins);return`
    <div class="pools-container">
      <div class="pool">
        <h3>Pool A Standings</h3>
        <table class="standings-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>Record</th>
            </tr>
          </thead>
          <tbody>
            ${e.map((o,n)=>`
              <tr>
                <td>${n+1}</td>
                <td>${o.name}</td>
                <td>${o.record.wins}-${o.record.losses}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <div class="pool">
        <h3>Pool B Standings</h3>
        <table class="standings-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>Record</th>
            </tr>
          </thead>
          <tbody>
            ${s.map((o,n)=>`
              <tr>
                <td>${n+1}</td>
                <td>${o.name}</td>
                <td>${o.record.wins}-${o.record.losses}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `},f=()=>{const t=`
    <div class="bracket-container">
      <div class="bracket-round">
        <h3>Quarterfinals</h3>
        ${a.quarterfinals.map(s=>`
          <div class="bracket-match">
            <div class="bracket-team">${s.team1}</div>
            <div class="bracket-team">${s.team2}</div>
            <div class="bracket-score">${s.score}</div>
          </div>
        `).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>Semifinals</h3>
        ${a.semifinals.map(s=>`
          <div class="bracket-match">
            <div class="bracket-team">${s.team1}</div>
            <div class="bracket-team">${s.team2}</div>
            <div class="bracket-score">${s.score}</div>
          </div>
        `).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>Finals</h3>
        ${a.finals.map(s=>`
          <div class="bracket-match">
            <div class="bracket-team">${s.team1}</div>
            <div class="bracket-team">${s.team2}</div>
            <div class="bracket-score">${s.score}</div>
          </div>
        `).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>Champion</h3>
        <div class="bracket-champion">
          <div class="bracket-team">${a.finals[0].winner||"TBD"}</div>
        </div>
      </div>
    </div>
  `,e=`
    <div class="bracket-container">
      <div class="bracket-round">
        <h3>Consolation Semifinals</h3>
        ${a.consolationSemis.map(s=>`
          <div class="bracket-match">
            <div class="bracket-team">${s.team1}</div>
            <div class="bracket-team">${s.team2}</div>
            <div class="bracket-score">${s.score}</div>
          </div>
        `).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>Consolation Finals</h3>
        ${a.consolationFinals.map(s=>`
          <div class="bracket-match">
            <div class="bracket-team">${s.team1}</div>
            <div class="bracket-team">${s.team2}</div>
            <div class="bracket-score">${s.score}</div>
          </div>
        `).join("")}
      </div>
      
      <div class="bracket-round">
        <h3>5th Place</h3>
        <div class="bracket-champion consolation-winner">
          <div class="bracket-team">${a.consolationFinals[0].winner||"TBD"}</div>
        </div>
      </div>
    </div>
  `;return`
    <div class="bracket-section">
      <h3>Championship Bracket</h3>
      ${t}
      <h3 style="margin-top: 3rem;">Consolation Bracket</h3>
      ${e}
    </div>
  `},k=c.map((t,e)=>`
  <div class="team-card" data-team-id="${e}">
    <h3>${t.name}</h3>
    <ul>
      <li>${t.players[0]}</li>
      <li>${t.players[1]}</li>
    </ul>
  </div>
`).join(""),I=B.map(t=>`<li>${t}</li>`).join("");c.map((t,e)=>`<option value="${e}">${t.name}</option>`).join("");const w=c.map((t,e)=>`
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
            ${k}
          </div>
        </div>
        <div class="alternates-section">
          <h2>Alternates</h2>
          <ul class="alternates-list">
            ${I}
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
          ${p()}
        </div>
        <div id="standings" class="subtab-pane">
          ${v()}
        </div>
        <div id="brackets" class="subtab-pane">
          ${f()}
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
          <div id="pool-play-section">
            <h3>Pool Play Scores</h3>
            <div class="form-group">
              <label for="match-select">Select Match:</label>
              <select id="match-select">
                <option value="">Choose a match...</option>
                ${m.map((t,e)=>`
                  <option value="${e}">${t.time} - Court ${t.court}: ${t.team1} vs ${t.team2}</option>
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
            <button id="concludeBtn" class="submit-btn" style="margin-top: 1rem; background-color: #28a745;">Conclude Pool Play & Start Bracket</button>
          </div>
          
          <div id="bracket-play-section" style="display: none;">
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
          ${w}
        </div>
      </div>
    </div>
  </div>
`;let h=!1;document.getElementById("passwordBtn").addEventListener("click",()=>{const t=document.getElementById("password").value,e=document.getElementById("password-result");t===g?(h=!0,document.getElementById("password-section").style.display="none",document.getElementById("score-form").style.display="block",e.textContent=""):(e.textContent="Incorrect password",e.className="result error")});document.getElementById("password").addEventListener("keypress",t=>{t.key==="Enter"&&document.getElementById("passwordBtn").click()});const y=t=>{document.querySelectorAll(".tab-button").forEach(e=>e.classList.remove("active")),document.querySelectorAll(".tab-pane").forEach(e=>e.classList.remove("active")),document.querySelector(`[data-tab="${t}"]`).classList.add("active"),document.getElementById(t).classList.add("active")},u=t=>{document.querySelectorAll(".subtab-button").forEach(e=>e.classList.remove("active")),document.querySelectorAll(".subtab-pane").forEach(e=>e.classList.remove("active")),document.querySelector(`[data-subtab="${t}"]`).classList.add("active"),document.getElementById(t).classList.add("active"),t==="standings"?document.getElementById("standings").innerHTML=v():t==="pool-play"?document.getElementById("pool-play").innerHTML=p():t==="brackets"&&(document.getElementById("brackets").innerHTML=f())};document.querySelectorAll(".tab-button").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-tab");y(e)})});document.querySelectorAll(".subtab-button").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-subtab");u(e)})});document.querySelectorAll(".team-card").forEach(t=>{t.addEventListener("click",()=>{y("teams")})});document.getElementById("submitBtn").addEventListener("click",()=>{if(!h){document.getElementById("result").textContent="Please enter password first",document.getElementById("result").className="result error";return}const t=parseInt(document.getElementById("match-select").value),e=parseInt(document.getElementById("score1").value),s=parseInt(document.getElementById("score2").value),o=document.getElementById("result");if(isNaN(t)||t<0){o.textContent="Please select a match",o.className="result error";return}if(isNaN(e)||isNaN(s)){o.textContent="Please enter valid scores",o.className="result error";return}const n=m[t];let i;if(e>s)i=n.team1;else if(s>e)i=n.team2;else{o.textContent=`${n.team1} ${e} - ${s} ${n.team2} (Tied)`,o.className="result tie",document.getElementById("match-select").value="",document.getElementById("score1").value="",document.getElementById("score2").value="";return}n.score=`${e} - ${s}`,o.textContent=`${n.team1} ${e} - ${s} ${n.team2} | Winner: ${i}`,o.className="result success",document.getElementById("match-select").value="",document.getElementById("score1").value="",document.getElementById("score2").value="",u("standings")});document.getElementById("concludeBtn").addEventListener("click",()=>{if(!confirm("Are you sure you want to conclude pool play and start bracket play? This will seed the bracket based on current standings."))return;const t=b(),e=c.filter(o=>o.pool==="A").map(o=>{const n=c.indexOf(o);return{...o,teamIdx:n,record:t[n]}}).sort((o,n)=>n.record.wins-o.record.wins),s=c.filter(o=>o.pool==="B").map(o=>{const n=c.indexOf(o);return{...o,teamIdx:n,record:t[n]}}).sort((o,n)=>n.record.wins-o.record.wins);a.quarterfinals[0].team1=e[0].name,a.quarterfinals[0].team2=s[3].name,a.quarterfinals[1].team1=s[0].name,a.quarterfinals[1].team2=e[3].name,a.quarterfinals[2].team1=e[1].name,a.quarterfinals[2].team2=s[2].name,a.quarterfinals[3].team1=s[1].name,a.quarterfinals[3].team2=e[2].name,document.getElementById("pool-play-section").style.display="none",document.getElementById("bracket-play-section").style.display="block",$(),document.getElementById("result").textContent="Pool play concluded! Bracket play has begun.",document.getElementById("result").className="result success",u("brackets")});const $=()=>{const t=document.getElementById("bracket-match-select");t.innerHTML='<option value="">Choose a bracket match...</option>',a.quarterfinals.forEach((e,s)=>{e.score==="-"&&(t.innerHTML+=`<option value="qf-${s}">Quarterfinal ${s+1}: ${e.team1} vs ${e.team2}</option>`)}),a.semifinals.forEach((e,s)=>{e.score==="-"&&e.team1!=="Winner QF1"&&e.team1!=="Winner QF2"&&e.team1!=="Winner QF3"&&e.team1!=="Winner QF4"&&(t.innerHTML+=`<option value="sf-${s}">Semifinal ${s+1}: ${e.team1} vs ${e.team2}</option>`)}),a.finals[0].score==="-"&&a.finals[0].team1!=="Winner SF1"&&a.finals[0].team1!=="Winner SF2"&&(t.innerHTML+=`<option value="f-0">Finals: ${a.finals[0].team1} vs ${a.finals[0].team2}</option>`),a.consolationSemis.forEach((e,s)=>{e.score==="-"&&e.team1!=="Loser QF1"&&e.team1!=="Loser QF2"&&e.team1!=="Loser QF3"&&e.team1!=="Loser QF4"&&(t.innerHTML+=`<option value="csf-${s}">Consolation Semifinal ${s+1}: ${e.team1} vs ${e.team2}</option>`)}),a.consolationFinals[0].score==="-"&&a.consolationFinals[0].team1!=="Winner CSF1"&&a.consolationFinals[0].team1!=="Winner CSF2"&&(t.innerHTML+=`<option value="cf-0">Consolation Finals: ${a.consolationFinals[0].team1} vs ${a.consolationFinals[0].team2}</option>`)};document.getElementById("submitBracketBtn").addEventListener("click",()=>{const t=document.getElementById("bracket-match-select").value,e=parseInt(document.getElementById("bracket-score1").value),s=parseInt(document.getElementById("bracket-score2").value),o=document.getElementById("result");if(!t){o.textContent="Please select a match",o.className="result error";return}if(isNaN(e)||isNaN(s)){o.textContent="Please enter valid scores",o.className="result error";return}if(e===s){o.textContent="Ties are not allowed in bracket play",o.className="result error";return}const[n,i]=t.split("-");let r,l,d;n==="qf"?(r=a.quarterfinals[parseInt(i)],l=e>s?r.team1:r.team2,d=e>s?r.team2:r.team1,r.score,r.score=`${e} - ${s}`,r.winner=l,i==="0"?(a.semifinals[0].team1=l,a.consolationSemis[0].team1=d):i==="1"?(a.semifinals[0].team2=l,a.consolationSemis[0].team2=d):i==="2"?(a.semifinals[1].team1=l,a.consolationSemis[1].team1=d):i==="3"&&(a.semifinals[1].team2=l,a.consolationSemis[1].team2=d)):n==="sf"?(r=a.semifinals[parseInt(i)],l=e>s?r.team1:r.team2,r.score=`${e} - ${s}`,r.winner=l,i==="0"?a.finals[0].team1=l:i==="1"&&(a.finals[0].team2=l)):n==="f"?(r=a.finals[0],l=e>s?r.team1:r.team2,r.score=`${e} - ${s}`,r.winner=l):n==="csf"?(r=a.consolationSemis[parseInt(i)],l=e>s?r.team1:r.team2,r.score=`${e} - ${s}`,r.winner=l,i==="0"?a.consolationFinals[0].team1=l:i==="1"&&(a.consolationFinals[0].team2=l)):n==="cf"&&(r=a.consolationFinals[0],l=e>s?r.team1:r.team2,r.score=`${e} - ${s}`,r.winner=l),o.textContent=`Score submitted: ${r.team1} ${e} - ${s} ${r.team2} | Winner: ${l}`,o.className="result success",document.getElementById("bracket-match-select").value="",document.getElementById("bracket-score1").value="",document.getElementById("bracket-score2").value="",$(),u("brackets")});document.getElementById("resetBtn").addEventListener("click",()=>{confirm("Are you sure you want to reset the entire tournament? This will clear all scores and bracket data.")&&(m.forEach(t=>{t.score="-"}),a.quarterfinals.forEach(t=>{t.score="-",t.winner=null}),a.quarterfinals[0].team1="Pool A 1st",a.quarterfinals[0].team2="Pool B 4th",a.quarterfinals[1].team1="Pool B 1st",a.quarterfinals[1].team2="Pool A 4th",a.quarterfinals[2].team1="Pool A 2nd",a.quarterfinals[2].team2="Pool B 3rd",a.quarterfinals[3].team1="Pool B 2nd",a.quarterfinals[3].team2="Pool A 3rd",a.semifinals.forEach(t=>{t.score="-",t.winner=null}),a.semifinals[0].team1="Winner QF1",a.semifinals[0].team2="Winner QF2",a.semifinals[1].team1="Winner QF3",a.semifinals[1].team2="Winner QF4",a.finals[0].score="-",a.finals[0].winner=null,a.finals[0].team1="Winner SF1",a.finals[0].team2="Winner SF2",a.consolationSemis.forEach(t=>{t.score="-",t.winner=null}),a.consolationSemis[0].team1="Loser QF1",a.consolationSemis[0].team2="Loser QF2",a.consolationSemis[1].team1="Loser QF3",a.consolationSemis[1].team2="Loser QF4",a.consolationFinals[0].score="-",a.consolationFinals[0].winner=null,a.consolationFinals[0].team1="Winner CSF1",a.consolationFinals[0].team2="Winner CSF2",document.getElementById("pool-play-section").style.display="block",document.getElementById("bracket-play-section").style.display="none",document.getElementById("result").textContent="Tournament has been reset!",document.getElementById("result").className="result success",u("pool-play"))});
