(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const d of t)if(d.type==="childList")for(const o of d.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const d={};return t.integrity&&(d.integrity=t.integrity),t.referrerPolicy&&(d.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?d.credentials="include":t.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(t){if(t.ep)return;t.ep=!0;const d=s(t);fetch(t.href,d)}})();`${teams.filter(e=>e.pool==="A").map(e=>`
            <tr>
              <td>${e.name}</td>
              <td>0-0</td>
            </tr>
          `).join("")}${teams.filter(e=>e.pool==="B").map(e=>`
            <tr>
              <td>${e.name}</td>
              <td>0-0</td>
            </tr>
          `).join("")}`;
