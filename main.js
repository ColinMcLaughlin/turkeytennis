import './style.css'

document.querySelector('#app').innerHTML = `
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
`
// Add tab switching functionality
const submitTab = document.getElementById('submit-tab');
const scheduleTab = document.getElementById('schedule-tab');
const submitSection = document.getElementById('submit-section');
const scheduleSection = document.getElementById('schedule-section');

submitTab.addEventListener('click', () => {
  submitTab.classList.add('active');
  scheduleTab.classList.remove('active');
  submitSection.style.display = 'block';
  scheduleSection.style.display = 'none';
});

scheduleTab.addEventListener('click', () => {
  scheduleTab.classList.add('active');
  submitTab.classList.remove('active');
  submitSection.style.display = 'none';
  scheduleSection.style.display = 'block';
});