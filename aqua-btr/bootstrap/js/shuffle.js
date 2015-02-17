(function(d){d.fn.shuffle=function(c){c=[];return this.each(function(){c.push(d(this).clone(true))}).each(function(a,b){d(b).replaceWith(c[a=Math.floor(Math.random()*c.length)]);c.splice(a,1)})};d.shuffle=function(a){return d(a).shuffle()}})(jQuery);

	  
$(document).ready(function() {
	    $('.center').slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        arrows: true
    });
});

function shuffle () {
    $('.col-lg-4').shuffle();
        $('.center').slick('unslick');
    $('.center').slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        arrows: true
    });
}
