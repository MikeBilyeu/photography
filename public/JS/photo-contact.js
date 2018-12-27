'use strict';
//wait for page to load all content before loading to prevent errs
window.onload = () => {

  let topLine = document.getElementById('topLine'),
  middleLine = document.getElementById('middleLine'),
  bottomLine = document.getElementById('bottomLine'),
  menu = document.getElementById('menu'),
  body = document.body,
  menuLink = document.querySelectorAll('.menuLink');

  function toggleMenu() {
    topLine.classList.toggle('slideLeft');
    bottomLine.classList.toggle('changeColor');
    menu.classList.toggle('slideLeft');
    menuLink.forEach((elem) => {
      elem.classList.toggle('delaySlide');
    });
    body.classList.toggle('preventScroll');
  }


  document.getElementById('hamburger').onclick = () => toggleMenu();

  // document.getElementById('menuHome').onclick = () => toggleMenu();

  document.getElementById('menuContact').onclick = () => toggleMenu();

  document.getElementById('menuInsta').onclick = () => toggleMenu();

}
