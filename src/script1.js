/** @format */

var darkMode = document.getElementById("toggle");
var body = document.getElementById("body");
var box = document.getElementById("box");
var menu = document.getElementById("main-menu");
var menuToggle = document.getElementById("menu-toggle");
var menuClose = document.getElementById("menu-close");
var backDrop = document.getElementById("backdrop");
var faSolid = document.getElementById("fa-solid");
var illust = document.getElementById("illustration");
var cards = document.getElementById("cards");
var ui = document.getElementById("ui");
var man2 = document.getElementById("man2");
var man1 = document.getElementById("man1");
var selectedType = document.getElementById("selected-type");
var selectType = document.getElementById("select-type");
var colorText = document.getElementById("color-text");

darkMode.onclick = function () {
  body.classList.toggle("dark-body");
  box.classList.toggle("dark-box");
  faSolid.classList.toggle("dark-fa-solid");
  illust.classList.toggle("dark-trans-large");
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
ui.onclick = function () {
  cards.classList.toggle("cards-clicked");
  man1.classList.toggle("man1");
  man2.classList.toggle("man2-visible");
  box.classList.toggle("box-none");
  selectedType.classList.toggle("selected-type-shown");
  selectType.classList.toggle("select-type-hidden");

  if (ui.innerText == "Go Home") {
    ui.innerText = "UI/UX";
  } else {
    ui.innerText = "Go Home";
  }

  window.scrollTo({
    top: 800,

    behavior: "smooth",
  });
};

colorText.onclick = function () {
  navigator.clipboard.writeText(colorText.innerText);

alert("Copied the text: " + colorText.innerText);
};

