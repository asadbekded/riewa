var elBurger = document.querySelector(".burger-btn");
var elNavbar = document.querySelector(".nav-list");

elBurger.addEventListener("click", function() {
   elNavbar.classList.toggle("open-nav")
})

