import Rellax from 'rellax';
import AOS from 'aos';

const modalClose = document.querySelector('.modal__close'),
      modal = document.querySelector('.modal'),
      modalVisible = modal.querySelector('.modal__wrapper'),
      modalOpen = document.querySelector('.lets__button'),
      blur = document.querySelector('.blur-wrapper'),
      shadow = modal.querySelector('.modal__shadow'),
      mobileMenu = document.querySelector('.mobile-menu'),
      mobileClose = document.querySelector('.mobile-menu__close'),
      mobileOpen = document.querySelector('.mobile-menu__button');



document.addEventListener('DOMContentLoaded', () => {
  AOS.init();

  modalOpen.addEventListener('click', () => {
    modalVisible.classList.add('modal__wrapper--visible');
    shadow.classList.add('modal__shadow--visible');
    blur.classList.add('blur-wrapper--visible');
  });
  modalClose.addEventListener('click', () => {
    modalVisible.classList.remove('modal__wrapper--visible');
    shadow.classList.remove('modal__shadow--visible');
    blur.classList.remove('blur-wrapper--visible');
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape' && modalVisible.classList.contains('modal__wrapper--visible')) {
      modalVisible.classList.remove('modal__wrapper--visible');
      shadow.classList.remove('modal__shadow--visible');
      blur.classList.remove('blur-wrapper--visible');
    }
  });

  mobileOpen.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu--visible');
    shadow.classList.add('modal__shadow--visible');
    blur.classList.add('blur-wrapper--visible');
  });

  mobileClose.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--visible');
    shadow.classList.remove('modal__shadow--visible');
    blur.classList.remove('blur-wrapper--visible');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape' && mobileMenu.classList.contains('mobile-menu--visible')) {
      mobileMenu.classList.remove('mobile-menu--visible');
      shadow.classList.remove('modal__shadow--visible');
      blur.classList.remove('blur-wrapper--visible');
    }
  });
  var rellax = new Rellax('.rellax');
  $(document).ready(function(){
    // Parallax
       if(window.innerWidth < 575){
           $('.skills__about').removeClass('rellax');
           rellax.destroy();
       }
   });

   $(window).resize(function(){
       if(window.innerWidth < 575){
           $('.skills__about').removeClass('rellax');
           rellax.destroy();
       }else{
           $('.skills__about').addClass('rellax');
           rellax.refresh();
       }
   });
});
