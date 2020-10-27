$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 4500,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',

    });
    $('.reviews_slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 4500,
        draggable: false,
        waitForAnimate: true,
    });
    $('.books_slider').slick({
        slidesToShow: 6,
        infinite: false,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 4500,
        draggable: true,
        waitForAnimate: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                },
            
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            
            },
        ]
    });
    $('.footer_slider').slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        dots: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 4500,
        draggable: false,
        waitForAnimate: true,
    });
    $('.menu_burger').click(function(){
        $('.menu_burger').toggleClass('active');
        $('.navbar_ul').toggleClass('active');
    })
});