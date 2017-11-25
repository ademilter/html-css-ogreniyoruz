$('.Header-switch').on('click', function () {
  console.log("d")
  if ($('Header').is('.menu-show')) {
    $('.Header').removeClass('menu-show')
  } else {
    $('.Header').addClass('menu-show')
  }
})