const bar = document.getElementById("bar"); //change to selector later
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
let MainImg = document.getElementById("MainImg");
let smallimgs = document.querySelectorAll(".small-img-col img");

smallimgs.forEach(function (smallimg) {
  smallimg.addEventListener("click", function () {
    MainImg.src = this.src;
  });
});
