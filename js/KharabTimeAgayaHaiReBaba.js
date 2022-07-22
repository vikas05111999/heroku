let greet = document.querySelector(".greet");
let timeNow = new Date().getHours();
let greeting =
  timeNow >= 5 && timeNow < 12
    ? "Good Morning"
    : timeNow >= 12 && timeNow < 18
    ? "Good Afternoon"
    : "Good evening";
greet.innerHTML = `<h6>${greeting}</h6>`;





let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = $(window).scrollTop();
  let calcHeight =
  $(document).height() -
  $(window).height();
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(rgb(0, 119, 181) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


var loader = document.querySelector(".loading")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}


