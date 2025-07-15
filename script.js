// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you for contacting me! I’ll get back to you soon.");
  this.reset();
});
