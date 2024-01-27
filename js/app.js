$(document).ready(function () {
    $('.nav-link > span').on('click', function (event) {
        event.preventDefault(); // Prevent the default behavior (e.g., following the link)
        event.stopPropagation(); // Stop the event propagation

        // Toggle 'active' class on the clicked span
        $(this).toggleClass('active');

        // Toggle the submenu
        var $submenu = $(this).closest('.nav-item').find('.submenu');
        $submenu.slideToggle();
    });


});

// $(document).ready(function() {
//     $('.nav-link > span').on('click', function() {
//         var $submenu = $(this).closest('.nav-item').find('.submenu');
//         $submenu.slideToggle();
//     });
// });
// * PRELOADER STARTS HERE


$(window).on('load', function () {
    $(".preloader").fadeOut();
})

// * NEWSLETTER STARS HERE


// $(document).ready(function () {
//     $('#newsletter').delay(3000).queue(function () {
//         $(this).addClass('active').dequeue();
//     });
//     // Add click event handler to the button
//     $('.cross_btn').on('click', function () {
//         // Toggle the 'active-button' class on the button
//         $('#newsletter').toggleClass('active');
//     });
// });

// * TOGGLE BUTTON

$(document).ready(function () {
    $('.toggle_button').click(function () {
        $('.toggle_button, #customNavbar').toggleClass('active');
    });
});

$(function () {


    //* MENU FIXED

    $(window).scroll(function () {
        let srcTop = $(window).scrollTop()

        if (srcTop > 612) {
            $('nav').addClass('menuFixed')
        } else {
            $('nav').removeClass('menuFixed')
        }
        // * BACK TO TOP BUTTON
        // if (srcTop > 1000) {
        //     $('.backToTopBtn').addClass('active').fadeIn();
        // } else {
        //     $('.backToTopBtn').removeClass('active').fadeOut();
        // }
        $('.backToTopBtn').toggleClass('active', srcTop > 1000);
    })

    // * BACK TO TOP BUTTON
    $('.backToTopBtn').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    });


    // * SLICK SLIDER
    $('.slider').slick({
        arrows: false,
        dots: true,
        dotsClass: "bannerDots container",
        autoplay: true,
    });

    // * PRODUCT SLIDER
    $('.productslider').slick({
        slidesToShow: 4,
        prevArrow: ".leftArrow",
        nextArrow: ".rightArrow",
        autoplay: true,
        dots: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // * AOS 
    AOS.init();

    // * TOOLTIPS
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // * FINAL COUNTDOWN
    $(".timer").countdown("2025/01/01", function (event) {
        $(".days").text(event.strftime('%D'));
        $(".hours").text(event.strftime('%H'));
        $(".mins").text(event.strftime('%M'));
        $(".secs").text(event.strftime('%S'));
    });

    // * DEAL SLIDER
    $('.dealslider').slick({
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
        dots: true,
        dotsClass: "ddDots",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

    // * LATEST NEWS SLIDER
    $('.latestcardslider').slick({
        slidesToShow: 4,
        speed: 500,
        arrows: false,
        autoplay: true,
        dots: true,
        dotsClass: "lndots",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // * TEAM CARD SLIDER
    $('.teamcardslider').slick({
        slidesToShow: 4,
        speed: 500,
        prevArrow: ".leftArrow",
        nextArrow: ".rightArrow",
        autoplay: true,
        dots: true,
        dotsClass: "tmdots",
    });

    // * COUNTER UP
    $('.counter').counterUp({
        delay: 10,
        time: 5000,
    });

    // * CUSTOMER SLIDER
    $('.customerslider').slick({
        slidesToShow: 1,
        speed: 500,
        arrows: false,
        autoplay: true,
        dots: true,
        dotsClass: "cdots",
    });

    // * INSTAGRAM SLIDER
    $('.instagramslider').slick({
        slidesToShow: 6,
        speed: 500,
        arrows: false,
        autoplay: true,
        dots: true,
        dotsClass: "imdots",
    });

    // * SHOP SLIDER
    $('.topslider').slick({
        slidesToShow: 1,
        speed: 500,
        arrows: false,
        autoplay: true,
        dots: false,
        fade: true,
        asNavFor: '.bottomslider',
    });
    $('.bottomslider').slick({
        slidesToShow: 5,
        speed: 500,
        prevArrow: ".leftArrow",
        nextArrow: ".rightArrow",
        autoplay: true,
        dots: false,
        asNavFor: '.topslider',
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
    });

    // * BLOG CLASSIC SLIDER
    $('.blog_classic_slider').slick({
        slidesToShow: 1,
        speed: 500,
        prevArrow: ".leftArrow",
        nextArrow: ".rightArrow",
        autoplay: true,
        dots: false,
    });
    // * RELETED PRODUCTS SLIDER
    $('.rpslider').slick({
        slidesToShow: 4,
        speed: 500,
        prevArrow: ".leftArrows",
        nextArrow: ".rightArrows",
        autoplay: true,
        dots: false,
    });

})
// * QUANTITY STARTS HERE
let plusBtn = document.querySelector('.incrementBtn');
let output = document.querySelector('.input-one');

function incrementValue() {
    output.value = Number(output.value) + 1;
}
plusBtn.addEventListener("click", incrementValue);

let decrementBtn = document.querySelector('.decrementBtn');

function decrementValue() {
    if (output.value <= 1) {
        return false;
    } else {
        output.value = Number(output.value) - 1;
    }
}
decrementBtn.addEventListener("click", decrementValue);

// * QUANTITY ENDS HERE