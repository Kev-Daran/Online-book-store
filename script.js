//navigation bar handling
const navigationWindow = document.getElementById("mobile-btn");
const closeNavigation = document.getElementById("mobile-exit");
nav = document.querySelector("nav");

nav.classList.add("hidden"); //hiding nav menu

navigationWindow.addEventListener("click", () => {
  nav.classList.remove("hidden"); //removing the display:none attribute
});

closeNavigation.addEventListener("click", () => {
  nav.classList.add("hidden"); //adding the display:none attribute
});

