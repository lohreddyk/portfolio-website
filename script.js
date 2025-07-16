const rotateText = document.getElementById("rotate-text");
const words = ["Student", "Web Developer", "Frontend Enthusiast"];
let wordIndex = 0;

function updateText() {
  rotateText.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;
}
setInterval(updateText, 2000);

// Resume download notification
document.getElementById("resumeBtn").addEventListener("click", () => {
  alert("📄 Your resume is downloading...");
});

// Scroll animation
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});
