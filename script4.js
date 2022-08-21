/** @format */
var screen2 = document.getElementById("color-screen");
var screen3 = document.getElementById("color-screen2");
var colorText = document.getElementById("color-text");
var colorText2 = document.getElementById("color-text2");

colorPicker = function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let color = "#" + randomColor;
  screen2.style.backgroundColor = color;
  colorText.innerText = color;
};
colorPicker();

colorPicker2 = function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let color2 = "#" + randomColor;
  screen3.style.backgroundColor = color2;
  colorText2.innerText = color2;
};
colorPicker2();
