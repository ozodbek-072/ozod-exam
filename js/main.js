document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".menu-container button");
  const menuItems = document.querySelectorAll(".menu-item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Toggle active class on buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter menu items
      menuItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
document.querySelector('.next').addEventListener('click', () => {
  document.querySelector('.dishes-container').scrollBy({ left: 220, behavior: 'smooth' });
});

document.querySelector('.prev').addEventListener('click', () => {
  document.querySelector('.dishes-container').scrollBy({ left: -220, behavior: 'smooth' });
});




//  
// 

const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

// shrink
window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

// navbar
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggleIconId");
  const navMenuId = document.getElementById("nav-menuId");
  const navBtnId = document.getElementById("nav-btnId");

  menuToggle.addEventListener("click", () => {
    navMenuId.classList.toggle("active");
    navBtnId.classList.toggle("activeBtn");
  });
});

// dark mode
let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "./images/header/sun.svg";
  } else {
    this.firstElementChild.src = "./images/header/moon.svg";
  }
  document.body.classList.toggle("dark");
});



