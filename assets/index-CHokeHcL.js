(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div>
    <h1>Tennis</h1>
    <p>Turkey Tennis Invitational.</p>
  
    <nav class="tabs">
      <button id="schedule-tab" class="tab-button">Schedule and Results</button>
      <button id="submit-tab" class="tab-button active">Submit Scores</button>
    </nav>
    
    <div id="content" class="tab-content">
      <div id="submit-section">
        <h2>Submit Scores</h2>
        <form>
          <input type="text" placeholder="Player 1" />
          <input type="text" placeholder="Player 2" />
          <input type="number" placeholder="Score" />
          <button type="submit">Submit</button>
        </form>
      </div>
      
      <div id="schedule-section" style="display: none;">
        <h2>Schedule and Results</h2>
        <p>Tournament schedule and results will appear here.</p>
      </div>
    </div>  
  </div>
`;const n=document.getElementById("submit-tab"),o=document.getElementById("schedule-tab"),r=document.getElementById("submit-section"),l=document.getElementById("schedule-section");n.addEventListener("click",()=>{n.classList.add("active"),o.classList.remove("active"),r.style.display="block",l.style.display="none"});o.addEventListener("click",()=>{o.classList.add("active"),n.classList.remove("active"),r.style.display="none",l.style.display="block"});
