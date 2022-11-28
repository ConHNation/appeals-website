"use strict";

// Mobile Navigation

const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const navigation = document.querySelector(".navigation");
const navList = document.querySelectorAll(".nav-link");
const navBtn = document.querySelector(".nav-btn");

navList.forEach((nodeElement) => {
  nodeElement.addEventListener("click", menuCloseFn);
});

menuOpen.addEventListener("click", menuOpenFn);
menuClose.addEventListener("click", menuCloseFn);
navBtn.addEventListener("click", menuCloseFn);

function menuOpenFn() {
  navigation.classList.toggle("nav-open");
  menuClose.classList.toggle("menu-space-open");
  menuOpen.classList.toggle("menu-space-close");
}

function menuCloseFn() {
  navigation.classList.toggle("nav-open");
  menuClose.classList.toggle("menu-space-open");
  menuOpen.classList.toggle("menu-space-close");
}

// Scroll Reveal

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.nav-heading, .main-heading, .main-paragraph, .hero-btns, .hero-btn-primary, .hero-btn-secondary, .statistic-div, .heading-tag, .feature-heading, .feature-text, .feature-image, .cta-heading, .cta-text, .cta-btns, .cta-image, .cta-card, .copyright`,
  {
    delay: 50,
  }
);

console.log("Made with love by Afan Khan - afankhan.com");
