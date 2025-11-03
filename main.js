import './style.css'

document.querySelector('#app').innerHTML = `
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
`

// Password (change this to whatever you want)
const CORRECT_PASSWORD = "turkey2024";

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

// Handle form submission with password check
const scoreForm = document.getElementById('score-form');
const errorMessage = document.getElementById('error-message');

scoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const password = document.getElementById('password').value;
  
  if (password === CORRECT_PASSWORD) {
    // Password correct - process the score
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    const score = document.getElementById('score').value;
    
    alert(`Score submitted! ${player1} vs ${player2}: ${score}`);
    errorMessage.style.display = 'none';
    scoreForm.reset();
    
    // Here you would actually save the score (to a database, etc.)
  } else {
    // Wrong password
    errorMessage.style.display = 'block';
  }
});