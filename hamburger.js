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