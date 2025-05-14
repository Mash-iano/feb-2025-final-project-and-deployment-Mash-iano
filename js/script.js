// Typewriter Animation
const words = ["Graphic Designer", "Brand Identity Expert", "Creative Thinker", "Visual Storyteller"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;
const typeElement = document.getElementById("typewriter");

function typeEffect() {
  if (wordIndex >= words.length) wordIndex = 0;

  currentWord = words[wordIndex];
  const displayedText = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  typeElement.textContent = displayedText;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Image Slider
const slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  if (slides.length === 0) return;
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 3000);

// Contact Form
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
      document.getElementById("formStatus").textContent = "Please fill out all fields.";
      return;
    }

    document.getElementById("formStatus").textContent = "Message sent successfully!";
    this.reset();
  });
}
