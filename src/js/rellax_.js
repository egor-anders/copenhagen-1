import Rellax from 'rellax';

$(document).ready(function(){
  // Parallax
     var rellax = new Rellax('.rellax');

     if(window.innerWidth < 810){
         $('.skills__about').removeClass('rellax');

     }
 });

 $(window).resize(function(){
     if(window.innerWidth < 810){
         $('.skills__about').removeClass('rellax');
     }else{
         $('.skills__about').addClass('rellax');
     }
 });
