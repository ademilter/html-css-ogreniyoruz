$('.Header-switch').on('click', function () {
  if ($('Header').is('.menu-show')) {
    $('.Header').removeClass('menu-show')
  } else {
    $('.Header').addClass('menu-show')
  }
})