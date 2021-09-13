$(function () {

    //============================preloader section start============================//
    $(window).on("load", function () {
        $(".preloader").delay(500).fadeOut(800);
    });
    //============================preloader section end============================//


    //============================scroll to top section start============================//
    $(".scroll_to_top").click(function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            2000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop()

        if (scrolling > 100) {
            $(".scroll_to_top").fadeIn(800);
        } else {
            $(".scroll_to_top").fadeOut(800);
        }


        if (scrolling > 150) {
            $(".main_nav").addClass("nav_sticky");
        } else {
            $(".main_nav").removeClass("nav_sticky")
        }
    });
    //============================scroll to top section end============================//


    //========================slick slider start========================//
    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 4000,
    });

    $('.screenshort_slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 4000,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.team_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 4000,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.feedback_slide_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.feesback_slide_nav',
        speed: 500,
    });
    $('.feesback_slide_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.feedback_slide_for',
        dots: true,
        centerMode: true,
        centerPadding: "0",
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    //========================slick slider end========================//


    //========================venobox  start========================//
    $('.venobox').venobox();
    //========================venobox end========================//


    //========================venobox end========================//
    new WOW().init();
    //========================venobox end========================//


    //============================animation scroll section start============================//

    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500, );
                return false;
            }
        }
    });

    //============================animation scroll section end============================//


})