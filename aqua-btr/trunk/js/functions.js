(function($){
 
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };
 
})(jQuery);



jQuery('.slider').slick({
    centerMode: true,
    centerPadding: '100px',
    dots: true
});

jQuery('.centerModeBtn').click(function() {
    jQuery('.slider').slickSetOption('centerMode', false); 
    jQuery('.buttons').append('<p>centerMode clicked</p>');  
});
jQuery('.addCenterModeBtn').click(function() {
    jQuery('.slider').slickSetOption('centerMode', True); 
    jQuery('.buttons').append('<p>centerMode clicked</p>');  
});
jQuery('.unslickBtn').click(function() {
    jQuery('.slider').unslick();
    jQuery('.buttons').append('<p>unslick clicked</p>');
});
jQuery('.slickBtn').click(function() {
    jQuery('.slider').slick({
    centerMode: true,
    centerPadding: '100px',
    dots: true
});
    jQuery('.buttons').append('<p>slick clicked</p>');
});
