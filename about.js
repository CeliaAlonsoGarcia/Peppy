// Projects page JS - Buttons make more text appear
// nextElementSibling targets element next to accordion => panel
// forEach works like a loop

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
    const panel = accordion.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// toggle mobile view menu

var mobileMenuBtn = document.querySelector("#mobile-menu-btn");
var mobileMenu = document.querySelector(".mobile-menu");
mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
    mobileMenuBtn.innerHTML = "Close";
  } else {
    mobileMenu.style.display = "none";
    mobileMenuBtn.innerHTML = "Menu";
  }
});
