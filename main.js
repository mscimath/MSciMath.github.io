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
window.addEventListener('resize', responsiveScreen);

let header = document.querySelector("#main-header");
let menu = document.querySelector("#top-header");
let menuItemsList = document.querySelectorAll(".menu-item");
let logo = document.querySelector(".logo");

/*let subjectsLink = menuItemsList[1].firstElementChild;
    subjects.addEventListener('click',() => {
    console.log(subjectsLink);
    subjectsLink.href = "#";
    //document.querySelector("#subjects-drop").style.opacity = "1";
    //document.querySelector("#subjects-drop").style.visibility = "visible";
    } )*/ 



function isSmallScreen() {
  return window.matchMedia("(max-width: 450px)").matches;
};

function isMediumScreen(){
  return window.matchMedia("(max-width: 750px)").matches;
};

function isBigScreen(){
  return window.matchMedia("(max-width: 1260px)").matches;
};

function isVeryBigScreen() {
  return window.matchMedia("(max-width: 3000px)").matches;
};

function responsiveScreen() {
  let subjectsLink = menuItemsList[1].firstElementChild;
  if (isSmallScreen()) {
    header.style.padding = "10px 10px";
    header.style.maxWidth = "100vw";
    //menu.style.justifyContent = "left";
    logo.style.marginRight = "50px"
    menuItemsList.forEach(element => element.style.fontSize = "10px");
    menuItemsList.forEach(element => element.style.padding = "4px");
    subjectsLink.href = "#";

  } else if (isMediumScreen()) {
    header.style.padding = "0px 15px";
    menuItemsList.forEach(element => element.style.fontSize = "14px");
    menuItemsList.forEach(element => element.style.padding = "0.8rem");
    
    subjectsLink.href = "#subjects";

  } else if (isBigScreen()) {
    header.style.padding = "0px 30px";
    menuItemsList.forEach(element => element.style.fontSize = "16px");
    menuItemsList.forEach(element => element.style.padding = "1rem");

    subjectsLink.href = "#subjects";

  } 
}

responsiveScreen();

/*Hamburger Overlay*/
//Select DOM Items
const hamBtn = document.querySelector('.hamburger-btn');
const hamMenu = document.querySelector('.hamburger-menu');
const hamLeft = document.querySelector('.hamburger-left');
const hamRight = document.querySelector('.hamburger-right');
const hamItemsLeft = document.querySelectorAll('.ham-item-left');
const hamItemsRight = document.querySelectorAll('.ham-item-right');
//spr czy da sie z jedną zmienna: const hamItems = hamItemsLeft + hamItemsRight

//Set Initial State of Menu
let showMenu = false;

hamBtn.addEventListener('click', toggleHamburger);

function toggleHamburger() {
  if(!showMenu){
    hamBtn.classList.add('close');
    hamMenu.classList.add('show');
    hamLeft.classList.add('show');
    hamRight.classList.add('show');
    hamItemsLeft.forEach(item => item.classList.add('show'));
    hamItemsRight.forEach(item => item.classList.add('show'));

    //Set State of Menu
    showMenu = true;
  } else {
    hamBtn.classList.remove('close');
    hamMenu.classList.remove('show');
    hamLeft.classList.remove('show');
    hamRight.classList.remove('show');
    hamItemsLeft.forEach(item => item.classList.remove('show'));
    hamItemsRight.forEach(item => item.classList.remove('show'));

    //Set State of Menu
    showMenu = false;
  }
}



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
