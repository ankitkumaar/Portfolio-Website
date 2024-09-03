document.addEventListener('keydown', function(event) {
  // Disable F12 key
  if (event.keyCode === 123) {
      event.preventDefault();
      return false;
  }

  // Disable Ctrl+U
  if (event.ctrlKey && event.keyCode === 85) {
      event.preventDefault();
      return false;
  }

  // Disable Ctrl+Shift+I (Inspect)
  if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
      event.preventDefault();
      return false;
  }

  // Disable Ctrl+Shift+J (Console)
  if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
      event.preventDefault();
      return false;
  }

  // Disable Ctrl+Shift+C (Element Picker)
  if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
      event.preventDefault();
      return false;
  }

  // Disable Ctrl+S (Save)
  if (event.ctrlKey && event.keyCode === 83) {
      event.preventDefault();
      return false;
  }
});


// contact me - form data to excel sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyqX_olSFGLzbgKb0ubgR5hXb2r_pOkYemXsJAYmzmAy5MgE3RruwMRpnvLKfkjw1uK/exec';
const form = document.forms['Portfolio-contact-form'];

form.addEventListener('submit', e => { 
    e.preventDefault();
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .catch(error => console.error('Error!', error.message));
});

function reloadPage() {
  setTimeout(function(){
      location.reload();
  }, 1000);
}

// dark-theme code :
document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});

document.getElementById('theme-toggle-phone').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode-phone', this.checked);
});

// Toggle-menu code
function toggleMenu() {
    const menu = document.querySelector(".hamburger-menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}