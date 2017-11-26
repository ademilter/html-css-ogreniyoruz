$('.Header-switch').on('click', function () {
  console.log('d')
  if ($('Header').is('.menu-show')) {
    $('.Header').removeClass('menu-show')
  } else {
    $('.Header').addClass('menu-show')
  }
})

var $carousel = $('.Highlights-slider').flickity({
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false
})
var flkty = $carousel.data('flickity')

$('.Highlights-item:eq(0)').addClass('is-expanded')
$carousel.flickity('reposition')

$carousel.on('staticClick.flickity', function (event, pointer, cellElement, cellIndex) {
  if (!cellElement) {
    return
  }
  $carousel.find('.is-expanded').removeClass('is-expanded')
  $(cellElement).addClass('is-expanded')
  $carousel.flickity('reposition')
  $carousel.flickity('select', cellIndex)
})

$carousel.on('select.flickity', function () {
  $carousel.find('.is-expanded').removeClass('is-expanded')
  $('.Highlights-item:eq(' + flkty.selectedIndex + ')').addClass('is-expanded')
  $carousel.flickity('reposition')
})