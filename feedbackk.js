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
function validateFields() {
   // Get the values from the form fields
   var fname  = document.getElementById('txt_fname').value;
   var lname  = document.getElementById('txt_lname').value;
   var email = document.getElementById('txt_email').value;
   // Validate username length
   if (fname.length < 5) {
       alert('Username must be at least 5 characters long.');
       return false;
   }
   if (lname.length < 5) {
      alert('Username must be at least 5 characters long.');
      return false;
  }

   // Validate email format
   var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailPattern.test(email)) {
       alert('Please enter a valid email address.');
       return false;
   }

  

   // If all checks pass
   return true;
}