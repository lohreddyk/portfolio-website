// === script.js ===

// Rotating Text Logic const words = ["Student", "Web Developer", "Frontend Enthusiast"]; let i = 0; const span = document.getElementById("rotate-text");

function rotateText() { span.textContent = words[i]; i = (i + 1) % words.length; } setInterval(rotateText, 2000);

// Highlight Active Nav Link const sections = document.querySelectorAll("section"); const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => { let current = ""; sections.forEach((section) => { const sectionTop = section.offsetTop - 60; if (scrollY >= sectionTop) { current = section.getAttribute("id"); } }); navLinks.forEach((link) => { link.classList.remove("active"); if (link.getAttribute("href").includes(current)) { link.classList.add("active"); } }); });

// Resume Button with Download Alert const resumeBtn = document.getElementById("resumeBtn"); resumeBtn.addEventListener("click", () => { alert("Downloading resume..."); });

