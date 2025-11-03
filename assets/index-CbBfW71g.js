(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div>
    <h1>Tennis</h1>
    <p>Turkey Tennis Invitational.</p>
    
    <nav class="tabs">
      <button id="submit-tab" class="tab-button active">Submit Scores</button>
      <button id="schedule-tab" class="tab-button">Schedule and Results</button>
    </nav>
    
    <div id="content" class="tab-content">
      <div id="submit-section">
        <h2>Submit Scores</h2>
        <form id="score-form">
          <input type="text" id="player1" placeholder="Player 1" required />
          <input type="text" id="player2" placeholder="Player 2" required />
          <input type="number" id="score" placeholder="Score" required />
          <input type="password" id="password" placeholder="Password" required />
          <button type="submit">Submit</button>
        </form>
        <p id="error-message" style="color: red; display: none;">Incorrect password!</p>
      </div>
      
      <div id="schedule-section" style="display: none;">
        <h2>Schedule and Results</h2>
        <p>Tournament schedule and results will appear here.</p>
      </div>
    </div>
  </div>
`;const m="turkey2024",i=document.getElementById("submit-tab"),c=document.getElementById("schedule-tab"),u=document.getElementById("submit-section"),p=document.getElementById("schedule-section");i.addEventListener("click",()=>{i.classList.add("active"),c.classList.remove("active"),u.style.display="block",p.style.display="none"});c.addEventListener("click",()=>{c.classList.add("active"),i.classList.remove("active"),u.style.display="none",p.style.display="block"});const l=document.getElementById("score-form"),a=document.getElementById("error-message");l.addEventListener("submit",d=>{if(d.preventDefault(),document.getElementById("password").value===m){const o=document.getElementById("player1").value,r=document.getElementById("player2").value,e=document.getElementById("score").value;alert(`Score submitted! ${o} vs ${r}: ${e}`),a.style.display="none",l.reset()}else a.style.display="block"});
