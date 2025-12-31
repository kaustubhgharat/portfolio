// Mobile menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
}

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}

// Form validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const output = document.getElementById("formMessage");

    if (!email.includes("@")) {
      output.textContent = "Invalid email address";
      output.style.color = "red";
      return;
    }

    if (message.length < 10) {
      output.textContent = "Message too short";
      output.style.color = "red";
      return;
    }

    output.textContent = "Message sent successfully!";
    output.style.color = "green";
    form.reset();
  });
}
