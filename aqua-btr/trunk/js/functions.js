
$('.make2').click(function(){ 
    if ( $('.row div').hasClass('col-sm-3') ) {
    $('.row div').removeClass('col-sm-3');
    $('.row div').addClass('col-sm-6'); 
    }
})


$('.make4').click(function(){ 
    if ( $('.row div').hasClass('col-sm-6') ) {
    $('.row div').removeClass('col-sm-6');
    $('.row div').addClass('col-sm-3'); 
      // do more stuff.
    }
})
