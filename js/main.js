$(document).ready( function() {
    $('.subMenu').smint({

    });
});



$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});

$('#sidebar').affix({
      offset: {
        top: 200
      }
});	
