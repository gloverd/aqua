$(document).ready(function(){
    /*onload*/
    $('.col-md-9 > div').removeClass();
    $('.col-md-9 > div').addClass('div-shuffle div-col-md');
    $('.col-md-9 > div').addClass('col-lg-4 col-md-4 col-sm-4  col-xs-4');
    $('.caption').addClass('caption-show');
    
    $(".btn-shuffle").bind('click', shuffle);        
    function shuffle(){
        $(".row").each(function(){
            var divs = $(this).find('.div-shuffle');
            for(var i = 0; i < divs.length; i++) $(divs[i]).remove();            
            //the fisher yates algorithm, from http://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array
            var i = divs.length;
            if ( i == 0 ) return false;
            while ( --i ) {
               var j = Math.floor( Math.random() * ( i + 1 ) );
               var tempi = divs[i];
               var tempj = divs[j];
               divs[i] = tempj;
               divs[j] = tempi;
             }
            for(var i = 0; i < divs.length; i++) $(divs[i]).appendTo(this);
        });                    
    }

     $('.btn-show-info').click(function(){
      if ($(this).hasClass('btn-warning')) {
            //doSomething();
             $(this).addClass('btn-danger');
             $(this).removeClass('btn-warning');
             $('.caption').removeClass('caption-hidden');
             $('.caption').addClass('caption-show');
        } else {      
            $(this).addClass('btn-warning hideinfo');
            $(this).removeClass('btn-danger showinfo'); 
            $('.caption').addClass('caption-hidden');
            $('.caption').removeClass('caption-show');
        }
    });
    
    $('.btn-grid-sm').click(function(){
      if ($('.col-md-9 > div').hasClass('div-col-sm')) {
            //doSomething();
        } else {      
            $('.col-md-9 > div').removeClass();
            $('.col-md-9 > div').addClass('div-shuffle div-col-sm');
            $('.col-md-9 > div').addClass('col-lg-2 col-xs-2 col-xs-2  col-xs-3');
        }
    });
    $('.btn-grid-md').click(function(){
      if ($('.col-md-9 > div').hasClass('div-col-md')) {
            //doSomething();
        } else {      
            $('.col-md-9 > div').removeClass();
            $('.col-md-9 > div').addClass('div-shuffle div-col-md');
            $('.col-md-9 > div').addClass('col-lg-4 col-md-4 col-sm-4  col-xs-4');
        }
    });
    $('.btn-grid-lg').click(function(){
      if ($('.col-md-9 > div').hasClass('div-col-lg')) {
            //doSomething();
        } else {      
            $('.col-md-9 > div').removeClass();
            $('.col-md-9 > div').addClass('div-shuffle div-col-lg');
            $('.col-md-9 > div').addClass('col-lg-6 col-md-6 col-sm-12 col-xs-12');
        }
    });
    
    $('.btn-grid-lg').click(function(){
      if ($('.col-md-9 > div').hasClass('div-col-lg')) {
            //doSomething();
        } else {      
            $('.col-md-9 > div').removeClass();
            $('.col-md-9 > div').addClass('div-shuffle div-col-lg');
            $('.col-md-9 > div').addClass('col-lg-6 col-md-6 col-sm-12 col-xs-12');
        }
    });


  
);

  
});

