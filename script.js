// === script.js ===

// Rotating Text Logic const words = ["Student", "Web Developer", "Frontend Enthusiast"]; let index = 0; const textSpan = document.getElementById("rotate-text");

function rotateWord() { textSpan.textContent = words[index]; index = (index + 1) % words.length; } setInterval(rotateWord, 2000);

// Resume Download Alert const resumeBtn = document.getElementById("resumeBtn"); resumeBtn.addEventListener("click", () => { alert("📄 Your resume is downloading..."); });

// Navbar Active Highlight on Scroll const sections = document.querySelectorAll("section"); const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => { let currentSection = ""; sections.forEach(section => { const sectionTop = section.offsetTop - 100; if (pageYOffset >= sectionTop) { currentSection = section.getAttribute("id"); } });

navLinks.forEach(link => { link.classList.remove("active"); if (link.getAttribute("href").includes(currentSection)) { link.classList.add("active"); } }); });

// Dark Mode Default + Toggle const darkToggle = document.getElementById("darkToggle"); const body = document.body;

// Default to dark mode on load window.addEventListener("DOMContentLoaded", () => { body.classList.add("dark-mode"); });

darkToggle.addEventListener("click", () => { body.classList.toggle("dark-mode"); });

