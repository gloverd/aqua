$(document).ready(function() {
    $('.center').slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        arrows: true
    });
    
});

$('.create_slick').on('click', function() {
      $('.center').slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        arrows: true
    });

});

$('.destroy_slick').on('click', function() {

     $('.center').slick('unslick');
});
