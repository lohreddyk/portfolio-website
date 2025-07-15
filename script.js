// Scroll Reveal Animation
window.addEventListener('scroll', reveal);
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;
    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
window.addEventListener('load', reveal);

// Download Resume Alert
window.addEventListener('DOMContentLoaded', () => {
  const resumeBtn = document.querySelector('.download-btn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      alert('📄 Your resume is downloading...');
    });
  }
});

// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.classList.add('mode-toggle');
toggleButton.innerText = '🌙';
document.querySelector('.navbar').appendChild(toggleButton);

function applyMode(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.innerText = '☀️';
  } else {
    document.body.classList.remove('dark-mode');
    toggleButton.innerText = '🌙';
  }
  localStorage.setItem('theme', mode);
}

toggleButton.addEventListener('click', () => {
  const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  applyMode(currentMode === 'dark' ? 'light' : 'dark');
});

// Default to dark mode
const savedTheme = localStorage.getItem('theme') || 'dark';
applyMode(savedTheme);
