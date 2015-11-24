//Check if item exists before add
simpleCart.bind( 'beforeAdd' , function( item ){
  if ( simpleCart.has( item )){
    return false;
  }
  else {
    return true; 
  } 
});

//Dismiss menu bar after clicked
$('#myNavbar a').on('click', function(){
  $('.navbar-toggle').click();
});