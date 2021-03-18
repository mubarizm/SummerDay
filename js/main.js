// IndexHtml Slider

$(document).ready(function () {
    $(".slider-index").owlCarousel({
        items: 1,
        mouseDrag: false,
        dots: false,
        autoplay: true,
        loop: true,
        animateOut: "fadeOut",
        smartSpeed: 500
    });
    $(".slider-gallery").owlCarousel({
        items: 1,
        mouseDrag: true,
        dots: true,
        nav:true,
        autoplay: true,
        loop: true,
        animateOut: "fadeOut",
        smartSpeed: 500
    });


    // IndexHtml menu button
    $(".nav-btn").click(function () {
        $("header nav .responsive-nav").slideToggle()
    })

    //About Slider
    $(".slider-about").owlCarousel({
        items: 3,
        mouseDrag: true,
        dots: true,
        autoplay: true,
        loop: true,
        nav: true,
        animateOut: "fadeOut",
        smartSpeed: 500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                slideBy: 1,
                dotsEach: 1
            },
            600: {
                items: 2,
                slideBy: 1,
                dotsEach: 2
            },
            1000: {
                items: 3,
                slideBy: 1,
                dotsEach: 3
            }
        }
    });
})

