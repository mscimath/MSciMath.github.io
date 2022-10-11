//jQuery Smooth Scroll
$(".navbar a").on("click", function (e) {
  if (this.hash !== "");
  e.preventDefault();

  const hash = this.hash;

  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top,
    },
    750
  );
});

//Responsive Queries
let header = document.querySelector(".main-header");
let menu = document.querySelector("#top-header");
let menuItemsList = document.querySelectorAll(".menu-item");
let logo = document.querySelector(".logo");

window.addEventListener('resize', responsiveScreen);

function isSmallScreen() {
  return window.matchMedia("(max-width: 400px)").matches;
};

function isMediumScreen (){
  return window.matchMedia("(max-width: 900px)").matches;
}



function responsiveScreen() {
  if (isSmallScreen()) {
    header.style.padding = "0px";
    header.style.maxWidth = "100%";
    menu.style.justifyContent = "space-evenly";
    menuItemsList.forEach(element => element.style.fontSize = "9px");
    menuItemsList.forEach(element => element.style.padding = "4px");    
  } else if (isMediumScreen()) {
    menu.style.flexWrap = "no-wrap";
    menuItemsList.forEach(element => element.style.fontSize = "12px");
  }
    else {
    return false;
  }
}

responsiveScreen();




//Search Bar
const input = document.querySelector("#search");
const blog = document.querySelectorAll(".blog");

let timer;
let sec = 500;

function liveSearch() {
  for (let i = 0; i < blog.length; i++) {
    if (blog[i].innerText.toLowerCase().includes(input.value.toLowerCase())) {
      blog[i].classList.remove("hidden");
      blog[i].classList.add("active");
    } else {
      blog[i].classList.add("hidden");
      blog[i].classList.remove("active");
    }
  }
}

input.addEventListener("keyup", () => {
  clearTimeout(timer);
  timer = setTimeout(liveSearch, 1000);
});

//Load onScroll
window.addEventListener("scroll", reveal);

function reveal() {
  var revealItems = document.querySelectorAll(".reveal");

  for (var i = 0; i < revealItems.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = revealItems[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      revealItems[i].classList.add("active");
    } else {
      revealItems[i].classList.remove("active");
    }
  }
}
