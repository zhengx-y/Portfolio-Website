/**
 * Attaches submit handling to the contact form using Web3Forms API
 * @param {string} formId
 * @param {string} accessKey
 */
export function initWeb3Forms(formId, accessKey) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : "Send Message";

    const formData = new FormData(form);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const msg = formData.get("message")?.trim();

    if (!name || !email || !msg) {
      alert("Please fill in all required fields.");
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", `New Portfolio Message from ${name}`);

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        form.reset();
      } else {
        alert("Submission failed: " + (data.message || "Please try again later."));
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      alert("Network error: Could not reach the form service. Please try again.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    }
  });
}