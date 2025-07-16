// === script.js ===

// Rotating text const rotateText = document.getElementById("rotate-text"); const words = ["Student", "Web Developer", "Frontend Enthusiast"]; let wordIndex = 0;

function updateText() { rotateText.textContent = words[wordIndex]; wordIndex = (wordIndex + 1) % words.length; } setInterval(updateText, 2000);

// Resume alert const resumeBtn = document.getElementById("resumeBtn"); resumeBtn.addEventListener("click", () => { alert("📄 Your resume is downloading..."); });

// Active link highlight on scroll const sections = document.querySelectorAll("section"); const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => { let current = ""; sections.forEach(section => { const top = window.scrollY; const offset = section.offsetTop - 80; const height = section.offsetHeight; if (top >= offset && top < offset + height) { current = section.getAttribute("id"); } }); navLinks.forEach(link => { link.classList.remove("active"); if (link.getAttribute("href").includes(current)) { link.classList.add("active"); } }); });

// Dark mode toggle const modeToggle = document.getElementById("modeToggle"); modeToggle.addEventListener("click", () => { document.body.classList.toggle("light-mode"); if (document.body.classList.contains("light-mode")) { modeToggle.textContent = "☀️"; } else { modeToggle.textContent = "🌙"; } });

// Default to dark mode window.addEventListener("DOMContentLoaded", () => { document.body.classList.remove("light-mode"); modeToggle.textContent = "🌙"; });

