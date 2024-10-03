(function ($) {
    "use strict";
    $(document).ready(function () {

        /*
       Jquery Mobile Menu
       ============================*/
        $('#main-menu').meanmenu({
            meanMenuContainer: '.mobile-nav-menu',
            meanScreenWidth: "1305",
            meanExpand: ['<i class="fal fa-plus"></i>'],
        });
         $('#main-menu-two').meanmenu({
            meanMenuContainer: '.mobile-nav-menu',
            meanScreenWidth: "1280",
            meanExpand: ['<i class="fal fa-plus"></i>'],
        });

        // Social Click Toggle

    //    $('body').on("click", ".social-profile-btn", function () {
    //     $(this).parent().removeClass("active");
    //     $(this).parent().toggleClass("active");
         
    //     });
       

        //  $('.team-slider-wrapper').each(function() {
        //     const item = $(this).find('.team-member-card');
        //     item.on('mouseenter', function() {  
        //         $('.social-profile-link').toggleClass("active");
        //        $('.social-profile-btn').toggleClass("active");
        //     });
        // });


        /*
       Jquery Sidebar Toggle
       ============================*/
        $(".mobile-menu-toggle-btn").on("click", function () {
            $(".menu-sidebar-area").addClass("active");
            $(".body-overlay").addClass("active");
        });
        $(".menu-sidebar-close-btn").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });

        /*
       Jquery Body Overlay
       ============================*/
        $(".body-overlay").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });

        /*
        Bubble Class Append 
        ============================*/
        $(".bubble").append('<span></span><span></span><span></span><span></span>');
        $(".bubble-yellow").append('<span></span><span></span><span></span><span></span>');
        $(".bubble-white").append('<span></span><span></span><span></span><span></span>');
        $(".bubble-green").append('<span></span><span></span><span></span><span></span>');
        /*
        Typing animation 
        ============================*/
        
        var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #FFFFFF}";
        document.body.appendChild(css);
    };


        /*
        Stikey Js
        ============================*/
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        if( height  > 1400 ) {
            const nav = $(".header-menu-area.sticky-header");
            let scrolled = false;
            $(window).scroll(function () {
                if (160 < $(window).scrollTop() && !scrolled) {
                    nav
                        .addClass("sticky_menu animated fadeIn")
                        .animate({"margin-top": "0px"});
                    scrolled = true;
                }
                if (160 > $(window).scrollTop() && scrolled) {
                    nav.removeClass("sticky_menu animated fadeIn").css("margin-top", "0px");
                    scrolled = false;
                }
            });
        }

        /*
        Jquery Empty Post Content Hide
        ============================*/
        $('.blog-area .post-content p').filter(function() {
            return /\u00A0/.test($(this).text());
        }).hide();


        /*
        Skill Progress Bar Js
        ============================*/
        $('.causes-area, .donate-area').each(function() {
        let section = $(this);
        section.one('inview', function(event, isInView) {
            if (isInView) {
                section.find('.progress-inner').each(function() {
                    $(this).find('.progress-content').animate({
                        width: $(this).attr('data-percentage')
                    }, 2000);
                    $(this).find('.progress-number-count').animate(
                        {
                            left: $(this).attr('data-percentage')
                        },
                        {
                            duration: 2000,
                            step: function(now) {
                                let data = Math.round(now);
                                $(this).find('.progress-percent').html(data + '%');
                            }
                        });
                    });
                }
            });
        });

         // Process Step Slider
        $(".process-step-slider").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 800,
            asNavFor: '.process-slider-tab',
            prevArrow:
                "<button type='button' class='process-arrow-btn prev-btn'><i class='icon-arrow-left-2'></i></button>",
            nextArrow:
                "<button type='button' class='process-arrow-btn next-btn active'><i class='icon-arrow-right-2'></i></button>",
                responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                        arrows: false,
                    },
                },
            ],
        });

        // Process Step Slider Tab
        $('.process-slider-tab').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            loop: true,
            infinite: true,
            autoplay: true,
            asNavFor: '.process-step-slider',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            arrows:false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    },
                },
            ],
        });
        /*
       Slider
       ============================*/
        $(".slider-wrapper").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            prevArrow:
                "<button type='button' class='slider-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='slider-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });
        
        $('#trigger_testimonial_prev').on('click', function() {
            $('.testimonial-slider-wrapper .prev-btn').trigger('click');
        });
        $('#trigger_testimonial_next').on('click', function() {
            $('.testimonial-slider-wrapper .next-btn').trigger('click');
        });
       
        /*
       Info Card Slider
       ============================*/
        $("#info_card_slider_wrapper").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='info-card-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='info-card-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        /*
       Team Slider
       ============================*/
       const team_slider = $("#team_slider_wrapper") ;
        team_slider.slick({
          slidesToShow: 3,
          infinite: true,
          autoplay: false,
          draggable: true,
          arrows: true,
          slidesToScroll: 1,
          loop: true,
          dots: true,
          speed: 1500,
          centerMode: true,
          prevArrow:
            "<button type='button' class='info-card-arrow-btn prev-btn'><i class='fa-solid fa-arrow-left'></i></button>",
          nextArrow:
            "<button type='button' class='info-card-arrow-btn next-btn'><i class='fa-solid fa-arrow-right'></button>",
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
          
        });

        $('.team-member-slider-wrapper .slick-slide').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            alert('working')
        });


        /*
       Testimonial Slider
       ============================*/
        $("#home2_testimonial_slider").slick({
          slidesToShow: 2,
          infinite: true,
          autoplay: true,
          draggable: true,
          arrows: true,
          slidesToScroll: 1,
          loop: true,
          dots: false,
          speed: 1500,
          prevArrow:
            "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
          nextArrow:
            "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
          responsive: [
            {
              breakpoint: 1023,
              settings: {
                autoplay: true,
                slidesToShow: 1,
              },
            },
          ],
        });
        $("#home3_testimonial").slick({
            slidesToShow: 2,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                    },
                }
            ],
        });
         $("#testimonial_slider-area-3").slick({
          slidesToShow: 1,
          infinite: true,
          autoplay: true,
          draggable: true,
          arrows: true,
          slidesToScroll: 1,
          loop: true,
          dots: false,
          speed: 1500,
          prevArrow:
            "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
          nextArrow:
            "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
          responsive: [
            {
              breakpoint: 1023,
              settings: {
                autoplay: true,
                slidesToShow: 1,
              },
            },
          ],
        });
        
         /*
       Causes Slider
       ============================*/
        $(".causes-slider").slick({
          slidesToShow: 3,
          infinite: true,
          autoplay: true,
          draggable: true,
          arrows: false,
          slidesToScroll: 1,
          loop: true,
          dots: false,
          speed: 1500,
          prevArrow:
            "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
          nextArrow:
            "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
          responsive: [
            {
              breakpoint: 1023,
              settings: {
                autoplay: true,
                slidesToShow: 2,
              },
            },
            {
                    breakpoint: 768,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                    },
            },
          ],
        });

        $("#causes_testimonial_slider").slick({
          slidesToShow: 3,
          infinite: true,
          autoplay: true,
          draggable: true,
          arrows: true,
          slidesToScroll: 1,
          loop: true,
          dots: true,
          speed: 1500,
          prevArrow:
            "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
          nextArrow:
            "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
          responsive: [
            {
              breakpoint: 1023,
              settings: {
                autoplay: true,
                slidesToShow: 2,
              },
            },
            {
                    breakpoint: 768,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                    },
            },
          ],
        });
        /*
       Testimonial Slider
       ============================*/
        $("#testimonial_two").slick({
            slidesToShow: 2,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                    },
                }
            ],
        });

        $('#trigger_testimonial_prev').on('click', function() {
            $('.testimonial-slider-wrapper .prev-btn').trigger('click');
        });
        $('#trigger_testimonial_next').on('click', function() {
            $('.testimonial-slider-wrapper .next-btn').trigger('click');
        });

        $("#testimonial_three").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });

        // Home Three Event Slider
            $(".home-three-review-slider").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            variableWidth: true,
            prevArrow:
                "<button type='button' class='home-three-review-arrow-btn prev-btn'><i class='icon-arrow-left-2'></i></button>",
            nextArrow:
                "<button type='button' class='home-three-review-arrow-btn next-btn'><i class='icon-arrow-right-2'></i></button>",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        /*
       Related Portfolio Slider
       ============================*/
        $("#related_portfolio").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='portfolio-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='portfolio-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });


        /*
       Post Gallery Slider
       ============================*/
        $(".post-gallery").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 300,
            prevArrow:
                "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
        });
        /*
       Client Logo Slider
       ============================*/
        $(".client-logo-slider-wrapper").slick({
            slidesToShow: 5,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
                                                      
         // Process Step Slider
         $("#testimonial_one").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1600,
            asNavFor: '.testimonial-user-wrapper',
            prevArrow:
                "<button type='button' class='process-arrow-btn prev-btn'><i class='icon-arrow-left-2'></i></button>",
            nextArrow:
                "<button type='button' class='process-arrow-btn next-btn active'><i class='icon-arrow-right-2'></i></button>",
                responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                        arrows: false,
                    },
                },
            ],
        });

        // Process Step Slider Tab
        $('.testimonial-user-wrapper').slick({
            slidesToShow: 9,
            slidesToScroll: 3,
            loop: false,
            infinite: false,
            asNavFor: '#testimonial_one',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            arrows:false,
            draggable: false,
        });
          
        $('.testimonial-user-wrapper').each(function() {
            const item = $(this).find('.single-user');
            item.on('mouseenter', function() {
                $(this).trigger('click');
            });
        });
        
        // Lang-btn click handler
        $(".lang-select").click(function(){
            $(".lang-menu").toggleClass("dropdown");
            // $(".body-overlay").toggleClass("active");
          });
        // $(".body-overlay").click(function(){
        //     $(".lang-menu").removeClass("dropdown");
        //   });

        // donate-form
         const defaultValue = "$100";
            $("#donate-input-field").val(defaultValue);
            $(".value.active").removeClass("active");
            $(".value:contains(" + defaultValue + ")").addClass("active");
            $(".value").click(function () {
                $(".value").removeClass("active");
                $(this).addClass("active");
                const selectedValueText = $(this).text();
                $("#donate-input-field").val(selectedValueText);
            });

            $("#custom-amount").click(function (e) {
                e.preventDefault();
                $("#donate-input-field").focus();
                $(".value").removeClass("active");
                return false;
            });

            // Donation- Details : Donate Form
             const defaultValue2 = "$250";
            $("#donate-input-field2").val(defaultValue2);
            $(".value.active-field").removeClass("active-field");
            $(".value:contains(" + defaultValue2 + ")").addClass("active-field");
            $(".value").click(function () {
                $(".value").removeClass("active-field");
                $(this).addClass("active-field");
                const selectedValueText2 = $(this).text();
                $("#donate-input-field2").val(selectedValueText2);
            });

            $("#custom-amount").click(function (e) {
                e.preventDefault();
                $("#donate-input-field2").focus();
                $(".value").removeClass("active-field");
                return false;
            });

        /*
        Counter Js
        ============================*/
        $(".counter").counterUp({
            delay: 10,
            time: 1000,
        });

        /*
       Magnific Popup
       ============================*/
        $(".video-play").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });

        /*
        Jquery Wow Js
        ============================*/
        new WOW().init();

        /*
       Jquery Nice Select Js
       ============================*/
        $('select.select_option, select.wpcf7-select').niceSelect();

        /*
       Jquery Tilt Js
       ============================*/
        $('.tilt-animate').tilt({
            maxTilt: 12,
            perspective: 1500,
        })

        /*
        Scroll To Top Js
        ============================*/
        $(function () {
            $("#scrollTop").hide();
            var position = $(window).scrollTop();
            var timer;
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop();
                clearTimeout(timer);
                if (scrollTop > 100) {
                    if (scrollTop > position) {
                        $('#scrollTop').fadeOut();
                    } else {
                        $('#scrollTop').fadeIn();
                        timer = window.setTimeout(function() {
                            $("#scrollTop").fadeOut();
                        }, 3000);
                    }
                    position = scrollTop;
                } else {
                    $('#scrollTop').fadeOut();
                }
            });
            $(".scrollup-btn").click(function() {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        });

        /*
        Mouse Hover Effect
        =====================*/
        
        $("#about-us-area").mousemove(function(e) {
            $(".sketch-3").parallax(-10, e);
            $(".sketch-2").parallax(10, e);
            $(".icon-shape-2").parallax(-25, e);
            $(".icon-shape-1").parallax(-10, e);
            $(".icon-shape-3").parallax(10, e);
            $(".shape").parallax(-25, e);
            $(".shape-1").parallax(-25, e);
            $(".shape-2").parallax(25, e);
            $(".sketch-1").parallax(-25, e);
            $(".sketch-4").parallax(-25, e);
        });
        $("#slider-area").mousemove(function(e) {
            $(".sketch-2").parallax(-25, e);
            $(".sketch-4").parallax(-25, e);
            $(".top-shape").parallax(20, e);
            $(".bottom-shape").parallax(-10, e);
            $(".bottom-shape2").parallax(-10, e);
        });
        $(".contact-info-area").mousemove(function(e) {
            $(".feature-image").parallax(15, e);
        });
        $(".page-breadcrumb-area").mousemove(function(e) {
            $(".feature-shape2").parallax(-10, e);
            $(".feature-shape1").parallax(5, e);
        });
        $(".page-area").mousemove(function(e) {
            $(".feature-image").parallax(-10, e);
        });
        $(".donor-wall-area").mousemove(function(e) {
            $(".feature-icon1").parallax(-10, e);
            $(".feature-icon2").parallax(10, e);
        });
        $(".counter-area").mousemove(function(e) {
            $(".feature-image1").parallax(-10, e);
            $(".feature-image2").parallax(10, e);
        });
        $("#causes-area").mousemove(function(e) {
            $(".feature-shape").parallax(-10, e);
            $(".feature-image-1").parallax(-10, e);
             $(".shape-1").parallax(-10, e);
        });
        $("#event-area").mousemove(function(e) {
            $("#sketch-1").parallax(-10, e);
            $("#sketch-2").parallax(10, e);
        });
        $("#event-slider").mousemove(function(e) {
            $(".shape-1").parallax(-10, e);
        });
        $("#testimonial-slider-area").mousemove(function(e) {
            $(".shape-1").parallax(-10, e);
            $(".shape-2").parallax(10, e);
            $(".shape-3").parallax(10, e);
            $(".feature-shape-1").parallax(10, e);
        });
        $("#team-slider-area").mousemove(function(e) {
            $(".feature-item3").parallax(-10, e);
            $(".feature-shape").parallax(-10, e);
            $(".feature-shape2").parallax(-10, e);
        });
        $(".blog-area ").mousemove(function(e) {
            $(".shape-1").parallax(-10, e);
            $(".shape-2").parallax(10, e);
            $(".shape-3").parallax(10, e);
            $(".shape-4").parallax(10, e);
        });
        $(".latest-posts-area ").mousemove(function(e) {
            $(".feature-shape-1").parallax(-10, e);
            $(".feature-shape-2").parallax(-10, e);
        });
        $("#donation-area ").mousemove(function(e) {
            $(".shape1").parallax(-10, e);
            $(".shape2").parallax(10, e);
        });
        $(".testimonial-slider-area").mousemove(function(e) {
            $(".top-feature-icon").parallax(-10, e);
        });
         $(".newsletter-area").mousemove(function(e) {
            $(".sketch-2").parallax(-10, e);
        });
         $(".newsletter-area").mousemove(function(e) {
            $(".sketch-2").parallax(-10, e);
        });
         $(".faq-area").mousemove(function(e) {
            $(".feature-shape").parallax(-10, e);
            $(".feature-shape2").parallax(10, e);
            $(".feature-shape3").parallax(-15, e);
        });
        $(".process-step-slider-area").mousemove(function(e) {
            $(".feature-icon1").parallax(-10, e);
            $(".feature-icon2").parallax(10, e);
        });

        /*
        Preloader
        ============================*/
        $(window).on("load", function () {
            $("#preloader").fadeOut();
            $("#preloader-status").delay(200).fadeOut("slow");
            $("body").delay(200).css({"overflow-x": "hidden"});
        });

    });
})(jQuery);
