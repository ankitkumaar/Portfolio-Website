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

/* dark-theme code :
var icon = document.getElementById("moon-icon");
icon.onclick = function() {
  document.body.classList.toggle("dark-theme");

  if(document.body.classList.contains("dark-theme")) {
    icon.src = "Assets/sun.png";
  } else {
    icon.src = "Assets/moon.png";
  }
}
*/

/* Toggle-menu code :
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
*/