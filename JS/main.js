
    
    // Scrollspy
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {
        transition: 60000,
    });

//   Scroll Button
 // Slider
 const slider = document.querySelector('.slider');
 M.Slider.init(slider, {
     indicators: false,
     height: 500,
     transition: 600,
     interval: 3000
   });

$(document).ready(function(){
    $(window).bind('scroll', function() {
 if ($(window).scrollTop() < 100) {
              $(' #scroll').addClass('hide');
          }
          else {
              $(' #scroll').removeClass('hide');
          }
     });
 });

//  animate smooth scroll

// Side Menu
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Material Box
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});
  });






$('#scroll').on('click', function(){
    const landing = $('nav').position().top;
// to animate
$('html , body').animate({
    scrollTop:landing
},
900
);
});
