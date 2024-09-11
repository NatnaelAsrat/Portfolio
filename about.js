// nav
document.addEventListener('DOMContentLoaded', function() {
  var dropbtn = document.querySelector('.dropbtn');
  var dropdownContent = document.querySelector('.dropdown-content');
  var navcontent = document.querySelector('nav');
  var maincontent = document.querySelector('main');
  
  dropbtn.addEventListener('click', function() {
      dropdownContent.classList.toggle('show-dropdown');
      maincontent.classList.toggle('blur')
  });
  
  // Close the dropdown if clicked outside
  window.addEventListener('click', function(event) {
      if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target) && !navcontent.contains(event.target)) {
          // Check if the dropdown is shown before removing the blur
          if (dropdownContent.classList.contains('show-dropdown')) {
              dropdownContent.classList.remove('show-dropdown');
              maincontent.classList.remove('blur');  // Remove the blur class
          }
      }
  });
});
// nav


document.getElementById("submit").addEventListener("click", function() {
    // Trigger form submission
    this.closest('form').submit();
  });