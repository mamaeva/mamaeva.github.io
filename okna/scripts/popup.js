$(function() {


$('.jform__btn').click(function(){
  

$('.popup__overlay').addClass('active');
//$('.bg__popup').fadeIn();



setTimeout(function(){$('.popup__overlay.active').fadeOut('fast')},2400);
/*
$('.bg__popup').click(function(){
$('.popup__overlay').removeClass('active');
$('.bg__popup').fadeOut();

});*/
}); 
  
});