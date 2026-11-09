/**
 * Initializes interactive elements in the Hero section
 */
export function initHero() {
  const welcomeButton = document.getElementById("welcomeButton");
  const message = document.getElementById("message");

  if (welcomeButton && message) {
    welcomeButton.addEventListener("click", () => {
      message.textContent = "Thanks for checking out my portfolio! Feel free to reach out below.";
    });
  }
}