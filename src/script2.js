/** @format */
var loaderWrapper = document.getElementById("loader-wrapper");

setTimeout(function () {
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  loaderWrapper.classList.add("loader-wrapper-none");
}, 3000);



var typed = new Typed(".loader-text", {
  strings: [, "Random Project Generator"],
  typeSpeed: 20,
  backSpeed: 2,
  backDelay: 4000,
  loop: true,
  onComplete: function (typed) {
    typed.cursor.remove();
  },
});

var typed = new Typed(".mov", {
  strings: [, "..."],
  typeSpeed: 69,
  backSpeed: 10,
  backDelay: 1000,
  loop: true,
});

var typed = new Typed(".end", {
  strings: [
    ,
    " E-store",
    " Tech startup",
    " Cake shop",
    " Bank app",
    "Music player",
    "Recycle Business",
    "Lightbulb shop",
    "Cosmetic E-shop",
    "NFT-marketplace",
    "Pizza-shop",
  ],
  typeSpeed: 0,
  backSpeed: 10,
  backDelay: 600,
  loop: true,
});
