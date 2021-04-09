// BACKGROUND DINAMIC COFFEE

const backgroundsCoffe = document.querySelectorAll('[data-bg-coffee]');
const mainBoxBackground = document.querySelector('.wrapper-coffee')

function changeBackground(e) {
  const dataSrcCoffe = e.currentTarget.attributes[1];
  const srcImgBoxBackground = window.getComputedStyle(mainBoxBackground).backgroundImage;

  const regex = /coffee-[0-9]/;
  
  const currentSrc = srcImgBoxBackground.replace(regex, dataSrcCoffe.value.replace('.jpg', ''));
  mainBoxBackground.style.backgroundImage = currentSrc;
  
}

backgroundsCoffe.forEach(boxCoffe => {
  boxCoffe.addEventListener('mouseover', changeBackground);
})



// PRELOADER

const preloaderDiv = document.querySelector('.preloader');

function removePreloader() {
  preloaderDiv.classList.add('documentLoaded');
  document.body.classList.remove('beforeLoader');

  setTimeout(() => {
    preloaderDiv.querySelector('.preloader-circle').classList.add('none');
  }, 1000)
}

window.onload = removePreloader;






















// MENU HAMBURGUER

const menuHamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

function activeMenu() {
  navMenu.classList.toggle('activeMenuMobile');
}

menuHamburguer.addEventListener('click', activeMenu);