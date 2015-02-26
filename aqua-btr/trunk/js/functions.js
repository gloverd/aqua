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
             $(this).addClass('btn-danger');
              $(this).removeClass('btn-warning'); 
        } else {      
            $(this).addClass('btn-warning');
            $(this).removeClass('btn-danger'); 
        }
    });
    
   $('.btn-grid-sm').click(function(){
      if ($(this).hasClass('btn-warning')) {
            //doSomething();
            $(this).addClass('btn-danger');
            $(this).removeClass('btn-warning');
            $('div.row > div').removeClass();
            $('div.row > div').addClass('col-sm-2 col-xs-3 div-shuffle');
        } else {      
            $(this).addClass('btn-warning');
            $(this).removeClass('btn-danger');
            $('div.row > div').removeClass();
            $('div.row > div').addClass('col-md-4 col-sm-4 col-xs-4 div-shuffle');
        }
    });
   
   
   
   //onclick="$('div.row > div').removeClass();$('div.row > div').addClass('col-md-4 col-sm-4 col-xs-4 div-shuffle');"
   //onclick="$('div.row > div').removeClass();$('div.row > div').addClass('col-md-6 col-sm-12 col-xs-12 div-shuffle');"
    
});
