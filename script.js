const CONTACT_EMAIL = "replace-with-clinic-email@example.com";

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const form = document.querySelector("#appointment-form");
const statusEl = document.querySelector("#form-status");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

if (form && statusEl) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("patient-name") || "").trim();
    const phone = String(data.get("patient-phone") || "").trim();
    const mode = String(data.get("appointment-mode") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (CONTACT_EMAIL.includes("replace-with")) {
      statusEl.textContent = "Add the real clinic email in script.js before publishing.";
      return;
    }

    const subject = `Appointment request - ${mode}`;
    const body = [
      "Appointment request for Sikchi Mind Care Clinic",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Preferred appointment: ${mode}`,
      "",
      "Appointment note:",
      message,
      "",
      "Consent note: I understand this request is not for emergencies and that teleconsultation requires prior consent and doctor confirmation.",
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    statusEl.textContent = "Opening your email app with the appointment request.";
  });
}
