const cursor = document.querySelector('.cursor');
const trail = document.querySelector('.trail');

document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  trail.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = document.getElementById('email');
  const msg = document.getElementById('email-msg');
  const email = emailInput.value;

  const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!regex.test(email)) {
    msg.textContent = "Please enter a valid email.";
  } else {
    msg.textContent = "Thanks! We'll get in touch.";
    msg.style.color = "#28a745";
    emailInput.value = "";
  }
});
