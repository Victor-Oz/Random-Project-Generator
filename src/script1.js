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


darkMode.onclick = function () {
  body.classList.toggle("dark-body");
  box.classList.toggle("dark-box");
  faSolid.classList.toggle("dark-fa-solid");
  branding.classList.toggle("dark-trans-large");
  menu.classList.toggle("dark-main-menu-out");
};
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
  navigator.clipboard.writeText(colorText.innerText);

  alert("Copied the text: " + colorText.innerText);
};

card4.onclick = function () {
  navigator.clipboard.writeText(colorText2.innerText);

  alert("Copied the text: " + colorText2.innerText);
};
