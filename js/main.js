$('.Header-switch').on('click', function () {
  console.log('d')
  if ($('Header').is('.menu-show')) {
    $('.Header').removeClass('menu-show')
  } else {
    $('.Header').addClass('menu-show')
  }
})

// flicty kodudur deylı bilgi https://flickity.metafizzy.co

var $carousel = $('.Highlights-slider').flickity({
  cellAlign: 'center',
  contain: true,
  prevNextButtons: false, // ileri geri buz-tonunu kapattık
  pageDots: false, // alttaki noktaları kapattık
})
var flkty = $carousel.data('flickity')

$('.Highlights-item:eq(0)').addClass('is-expanded')
$carousel.flickity('reposition')

$carousel.on('staticClick.flickity', function (event, pointer, cellElement, cellIndex) {
  if (!cellElement) {
    return
  }
  $carousel.find('.is-expanded').removeClass('is-expanded')
  $(cellElement).addClass('is-expanded') // secili hücrenin genişlemesini sağladı
  $carousel.flickity('reposition')// geniş hücrenin diğer hüçrelerin üstüne çıkmasını engelledi
  $carousel.flickity('select', cellIndex) // secili resmin sola gelmesini sağladı
})

$carousel.on('select.flickity', function () { // staticclick
  $carousel.find('.is-expanded').removeClass('is-expanded') // expanded liyi bul ve expandedliyi sil
  $('.Highlights-item:eq(' + flkty.selectedIndex + ')').addClass('is-expanded') // seçilene expended ata
  $carousel.flickity('reposition')
})


// tab menu
$(function(){

	var tab = $('.Sections6-tabmenu-button-main a'),
		content = $('.Sections6-tabmenu-button-content');
	
	// ilk tab'a aktif sınıfını ata
	tab.filter(':first').addClass('aktif');
	
	// ilk içerik hariç diğerlerini gizle
	content.filter(':not(:first)').hide();
	
	// taba tıklandığında!
	tab.click(function(){
		var indis = $(this).index();
		tab.removeClass('aktif').eq(indis).addClass('aktif');
		content.hide().eq(indis).fadeIn(500);
		return false;
	});

});

 


