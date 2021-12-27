//  Animated hamburger menu

const menu_btn = document.querySelector('.hamburger');
const header = document.querySelector('.Header');
menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  header.classList.toggle('is-mobile');
});

// navigation active class

const navItem = document.querySelectorAll('.Navigation-item');
for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', function (e) {
    e.preventDefault();
    let current = document.getElementsByClassName('Navigation-item active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

// @carousel settings - flickity

var $carousel = $('.Highlights-slider').flickity({
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false,
});
var flkty = $carousel.data('flickity');

$('.Highlights-item:eq(0)').addClass('is-expanded');
$carousel.flickity('reposition');

$carousel.on(
  'staticClick.flickity',
  function (event, pointer, cellElement, cellIndex) {
    if (!cellElement) {
      return;
    }
    $carousel.find('.is-expanded').removeClass('is-expanded');
    $(cellElement).addClass('is-expanded');
    $carousel.flickity('reposition');
    $carousel.flickity('select', cellIndex);
  }
);

$carousel.on('select.flickity', function () {
  $carousel.find('.is-expanded').removeClass('is-expanded');
  $('.Highlights-item:eq(' + flkty.selectedIndex + ')').addClass('is-expanded');
  $carousel.flickity('reposition');
});

// Cards-item - add active class

$(document).ready(function () {
  $('.Cards-item').bind('click', function () {
    // remove the active class from all elements with active class
    $('.active').removeClass('active');
    // add active class to clicked element
    $(this).addClass('active');
  });
});
