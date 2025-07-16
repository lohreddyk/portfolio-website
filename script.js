// === Hero rotating text ===
const rotateText = document.getElementById("rotate-text");
const words = ["Student", "Web Developer", "Frontend Enthusiast"];
let wordIndex = 0;

function updateText() {
  rotateText.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;
}
setInterval(updateText, 2000);

// === Resume download alert ===
const resumeBtn = document.getElementById("resumeBtn");
if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    alert("📄 Your resume is downloading...");
  });
}

// === Scroll animation ===
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // Reveal on load too
