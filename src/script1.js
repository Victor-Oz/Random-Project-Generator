/** @format */

var darkMode = document.getElementById("toggle");
var body = document.getElementById("body");
var box = document.getElementById("box");
var menu = document.getElementById("main-menu");
var menuToggle = document.getElementById("menu-toggle");
var menuClose = document.getElementById("menu-close");
var backDrop = document.getElementById("backdrop");
var faSolid = document.getElementById("fa-solid");
var branding = document.getElementById("branding");
var uiCards = document.getElementById("ui-cards");
var brandingCards = document.getElementById("branding-cards");
var card2 = document.getElementById("card2");
var card4 = document.getElementById("card4");
var ui = document.getElementById("ui");
var man2 = document.getElementById("man2");
var man1 = document.getElementById("man1");
var selectedType = document.getElementById("selected-type");
var selectType = document.getElementById("select-type");
var colorText = document.getElementById("color-text");
var colorText2 = document.getElementById("color-text2");
let DarkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  body.classList.add("dark-body");
  box.classList.add("dark-box");
  faSolid.classList.add("dark-fa-solid");
  branding.classList.add("dark-trans-large");
  menu.classList.add("dark-main-menu-out");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  body.classList.remove("dark-body");
  box.classList.remove("dark-box");
  faSolid.classList.remove("dark-fa-solid");
  branding.classList.remove("dark-trans-large");
  menu.classList.remove("dark-main-menu-out");
  localStorage.setItem("dark-mode", "disabled");
};

darkMode.onclick = function () {
  if (body.classList == "body") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};

if (DarkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

menuToggle.onclick = function () {
  menu.classList.toggle("main-menu-out");
  backDrop.classList.toggle("backdrop");
};
menuClose.onclick = function () {
  menu.classList.toggle("main-menu-out");
  backDrop.classList.toggle("backdrop");
};
backDrop.onclick = function () {
  menu.classList.toggle("main-menu-out");
  backDrop.classList.toggle("backdrop");
};

branding.onclick = function () {
  brandingCards.classList.toggle("branding-cards-clicked");
  man1.classList.toggle("man1");
  man2.classList.toggle("man2-visible");
  box.classList.toggle("box-none");
  selectedType.classList.toggle("selected-type-shown");
  selectType.classList.toggle("select-type-hidden");
  ui.classList.remove("branding-cards-clicked");
  ui.classList.add("branding-cards");

  if (branding.innerText == "Close") {
    branding.innerText = "Branding";
  } else {
    branding.innerText = "Close";
  }

  window.scrollTo({
    top: 800,

    behavior: "smooth",
  });
};

ui.onclick = function () {
  uiCards.classList.toggle("ui-cards-clicked");
  man1.classList.toggle("man1");
  man2.classList.toggle("man2-visible");
  box.classList.toggle("box-none");
  selectedType.classList.toggle("selected-type-shown");
  selectType.classList.toggle("select-type-hidden");
  branding.classList.remove("ui-cards-clicked");
  branding.classList.add("ui-cards");

  if (ui.innerText == "Close") {
    ui.innerText = "UI/UX";
  } else {
    ui.innerText = "Close";
  }

  window.scrollTo({
    top: 800,

    behavior: "smooth",
  });
};

card2.onclick = function () {
  navigator.clipboard.writeText(this.innerText);

  alert("Copied the Colour : " + this.innerText);
};

card4.onclick = function () {
  navigator.clipboard.writeText(this.innerText);

  alert("Copied the Colour: " + this.innerText);
};
