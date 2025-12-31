// DOM Elements
const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

// Form Validation
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    showError("Name is required");
    return;
  }

  if (!email.includes("@")) {
    showError("Please enter a valid email address");
    return;
  }

  if (message.length < 10) {
    showError("Message must be at least 10 characters");
    return;
  }

  showSuccess("Message sent successfully!");
  form.reset();
});

// Show error message
function showError(text) {
  messageBox.style.color = "red";
  messageBox.textContent = text;
}

// Show success message
function showSuccess(text) {
  messageBox.style.color = "green";
  messageBox.textContent = text;
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
}

// Load dark mode preference
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}
