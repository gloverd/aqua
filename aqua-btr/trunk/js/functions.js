$(document).ready(function(){
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
             $('.btn-show-info').addClass('btn-danger');
             $('.btn-show-info').removeClass('btn-warning');
             $('.caption').removeClass('caption-hidden');
             $('.caption').addClass('caption-show');
        } else {      
            $('.btn-show-info').addClass('btn-warning');
            $('.btn-show-info').removeClass('btn-danger'); 
             $('.caption').addClass('caption-hidden');
             $('.caption').removeClass('caption-show');
        }
    });
    
   $('.btn-grid-sm').click(function(){
      if ($('div.row > div').hasClass('div-col-sm')) {
            //doSomething();
        } else {      
            $('div.row > div').removeClass();
            $('div.row > div').addClass('div-shuffle div-col-sm');
            $('div.row > div').addClass('col-lg-2 col-xs-2 col-xs-2  col-xs-3');
        }
    });
   
    $('.btn-grid-md').click(function(){
      if ($('div.row > div').hasClass('div-col-md')) {
            //doSomething();
        } else {      
            $('div.row > div').removeClass();
            $('div.row > div').addClass('div-shuffle div-col-md');
            $('div.row > div').addClass(' 'col-lg-4 col-md-4 col-sm-4  col-xs-4');
        }
    });
    
    $('.btn-grid-lg').click(function(){
      if ($('div.row > div').hasClass('div-col-lg')) {
            //doSomething();
        } else {      
            $('div.row > div').removeClass();
            $('div.row > div').addClass('div-shuffle div-col-lg');
            $('div.row > div').addClass('col-lg-6 col-md-6 col-sm-12 col-xs-12');
        }
    });
   
});
