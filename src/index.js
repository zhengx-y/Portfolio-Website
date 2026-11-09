import { initHero } from "./sections/Hero.js";
import { initWeb3Forms } from "./components/Web3Forms.js";

document.addEventListener("DOMContentLoaded", () => {
  // Hero section setup
  initHero();

  // Contact form submission setup
  initWeb3Forms("contactForm", "1b04b5ae-beb2-43b6-b42d-db33e0b43a33");
});