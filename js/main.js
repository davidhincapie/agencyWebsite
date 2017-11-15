//A great way to control multiple plugin settings at once, is to pass it through an object literal
$(".animsition").animsition({
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

//adding sticky plugin to header
$('header').sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
});

$('header').on('sticky-start', () => {
  $('.description').html('We build <strong>great</strong> web apps');
});

$('header').on('sticky-end', () => {
  $('.description').html('We build web apps');
});

$('.work').sticky({
  topSpacing: 64,
  getWidthFrom: '.container',
  responsiveWidth: true
});

$('.work').on('sticky-start', function() {
  $(this).append(' <a href="mailto:email@example.com" class="email-text">Email&nbsp;us!</a>');
});

$('.work').on('sticky-end', function() {
  $('.email-text').remove();
});