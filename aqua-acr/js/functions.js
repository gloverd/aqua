$(document).ready(function(){
    /*onload*/
    $('div.row > div').removeClass();
    $('div.row > div').addClass('div-shuffle div-col-md');
    $('div.row > div').addClass('col-lg-4 col-md-4 col-sm-4  col-xs-4');
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
            $('div.row > div').addClass('col-lg-4 col-md-4 col-sm-4  col-xs-4');
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
    
    $('.btn-grid-lg').click(function(){
      if ($('div.row > div').hasClass('div-col-lg')) {
            //doSomething();
        } else {      
            $('div.row > div').removeClass();
            $('div.row > div').addClass('div-shuffle div-col-lg');
            $('div.row > div').addClass('col-lg-6 col-md-6 col-sm-12 col-xs-12');
        }
    });


  var $gallery = $('.gallery').flickity();
  var isFlickity = true;
  // toggle Flickity on/off
  $('.button--toggle').on( 'click', function() {
    if ( isFlickity ) {
      // destroy Flickity
      $gallery.flickity('destroy');
    } else {
      // init new Flickity
      $gallery.flickity();
    }
    isFlickity = !isFlickity;
  });
  
  
  //KEEP ALL LINKS IN MAIN DOC
  $( document ).on(
    "click",
    "a",
    function( event ){
        // Stop the default behavior of the browser, which
        // is to change the URL of the page.
        event.preventDefault();
        // Manually change the location of the page to stay in
        // "Standalone" mode and change the URL at the same time.
        location.href = $( event.target ).attr( "href" );
    }
);

  
});

// HEADS UP: this code will be fixed in Flickity v0.3
var destroy = Flickity.prototype.destroy;
Flickity.prototype.destroy = function() {
  destroy.call( this );
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'flickity' );
  }
};




// Mobile Safari in standalone mode
if(("standalone" in window.navigator) && window.navigator.standalone){

	// If you want to prevent remote links in standalone web apps opening Mobile Safari, change 'remotes' to true
	var noddy, remotes = false;
	
	document.addEventListener('click', function(event) {
		
		noddy = event.target;
		
		// Bubble up until we hit link or top HTML element. Warning: BODY element is not compulsory so better to stop on HTML
		while(noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
	        noddy = noddy.parentNode;
	    }
		
		if('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes))
		{
			event.preventDefault();
			document.location.href = noddy.href;
		}
	
	},false);
}
