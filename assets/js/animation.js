
$(window).ready(function(){
  $('.loading').fadeOut(500,function(){
    $('.navbar').fadeIn(1000);
    $('.jumbotron').fadeIn(1000); /* shd be 1000 after done */
  });
});

$('.navbar-brand').click(function(){
  $('.active').fadeOut(500,function(){
    $('.jumbotron').fadeIn(500);
    $('.jumbotron').addClass('active');
  });
  $('.active').removeClass('active');
});

$('.discover').click(function(){
  $('.active').fadeOut(500,function(){
    $('.item').fadeIn(500);
    $('.item').addClass('active');
  });
  $('.active').removeClass('active');
});

$('.nav-cart').click(function(){
  $('.active').fadeOut(500,function(){
    $('.cart').fadeIn(500);
    $('.cart').addClass('active');
  });
  $('.active').removeClass('active');
});