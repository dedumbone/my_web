const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check if a theme is stored in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.remove('dark-mode', 'light-mode');
  body.classList.add(currentTheme);
  themeToggleBtn.classList.toggle('bi-moon-fill', currentTheme === 'dark-mode');
  themeToggleBtn.classList.toggle('bi-sun-fill', currentTheme === 'light-mode');
}

// Toggle the theme on click
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  
  // Change icon and store theme in localStorage
  if (body.classList.contains('light-mode')) {
    themeToggleBtn.classList.replace('bi-moon-fill', 'bi-sun-fill');
    localStorage.setItem('theme', 'light-mode');
  } else {
    themeToggleBtn.classList.replace('bi-sun-fill', 'bi-moon-fill');
    localStorage.setItem('theme', 'dark-mode');
  }
});
// Validation for First Name, Last Name, and Email
function validateInput(inputId, validIconId, invalidIconId, regex) {
  const input = document.getElementById(inputId);
  const validIcon = document.getElementById(validIconId);
  const invalidIcon = document.getElementById(invalidIconId);

  input.addEventListener('input', function () {
      if (regex.test(input.value)) {
          validIcon.style.display = 'inline'; // Show valid icon
          invalidIcon.style.display = 'none'; // Hide invalid icon
      } else {
          validIcon.style.display = 'none';  // Hide valid icon
          invalidIcon.style.display = 'inline'; // Show invalid icon
      }
  });
}

// Apply validation for first name (min 5 characters, no numbers at start)
const nameRegex = /^[A-Za-z][A-Za-z\s]{4,}$/;
validateInput('txt_fname', 'fname-valid', 'fname-invalid', nameRegex);
validateInput('txt_lname', 'lname-valid', 'lname-invalid', nameRegex);

// Apply validation for email (valid email format)
const emailRegex = /^[A-Za-z][^\s@]*@[^\s@]+\.[^\s@]+$/;
validateInput('txt_email', 'email-valid', 'email-invalid', emailRegex);

// Function to reset the form
function resetForm() {
  document.getElementById('fname-valid').style.display = 'none';
  document.getElementById('fname-invalid').style.display = 'none';
  document.getElementById('lname-valid').style.display = 'none';
  document.getElementById('lname-invalid').style.display = 'none';
  document.getElementById('email-valid').style.display = 'none';
  document.getElementById('email-invalid').style.display = 'none';
}

// Function to handle form submission
function submitForm(event) {
  const form = document.getElementById('feedbackForm');

  // Check if all inputs are valid before submission
  if (form.checkValidity()) {
      // If valid, submit the form
      return true; // Allow submission
  } else {
      alert("Please fill in the required fields correctly.");
      form.reportValidity(); // Show validation messages
      return false; // Prevent submission
  }
}

// Attach the submit event to the form
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    if (!submitForm(event)) {
        event.preventDefault(); // Prevent default submission if validation fails
    }

});
