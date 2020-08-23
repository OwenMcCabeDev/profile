const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const closeBtn1 = document.querySelector("#close-btn1");
const closeBtn2 = document.querySelector("#close-btn2");
const closeBtn3 = document.querySelector("#close-btn3");
const closeBtn4 = document.querySelector("#close-btn4");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
closeBtn1.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
closeBtn2.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
closeBtn3.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
closeBtn4.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// set year
date.innerHTML = new Date().getFullYear();
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
