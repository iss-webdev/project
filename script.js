// Fade-in on scroll
const fadeIns = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

fadeIns.forEach((fade) => {
  appearOnScroll.observe(fade);
});

// Contact form (for show only – no backend)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message! We’ll get back to you soon.");
});
