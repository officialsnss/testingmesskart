/***************************************************************************************************************
||||||||||||||||||||||||||||        CUSTOM SCRIPT FOR ASSURANCE            |||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
01. Sticky header
02. mainmenu
03. Revolution slider 
04. scoll to Top
05. Testimonial Slider
06. Clients Slider
07. Sponser Slider
08. Search Box
09. Accordion
10. Fact counter 
10. ThmScrollAnim
11. Offset Gap 
12. ContactFormValidation


****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/
(function($) {
    "use strict";
        
/*=================== Sticky Header ===================*/
    function stickyHeader() {
        if($('.mainmenu-area.stick').length){
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.mainmenu-area.stick');
            var sticky_header = $('.sticky-header');
            var scrollLink = $('.scroll-to-top');
            if (windowpos > 250) {
                siteHeader.addClass('sticky');
                sticky_header.addClass("animated slideInDown");
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('sticky');
                sticky_header.removeClass("animated slideInDown");
                scrollLink.fadeOut(300);
            }
        }
    }

//====Main menu===
    function mainmenu() {
        //Submenu Dropdown Toggle
        if($('.main-menu li.dropdown ul').length){
            $('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');
            
            //Dropdown Button
            $('.main-menu li.dropdown .dropdown-btn').on("click", function() {
                $(this).prev('ul').slideToggle(500);
            });
        }

    }

//===RevolutionSliderActiver===
    function revolutionSliderActiver () {
        if ($('.rev_slider_wrapper #slider1').length) {
            $("#slider1").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                
                navigationType:"bullet",
                navigationArrows:"0",
                navigationStyle:"preview3",
                
                dottedOverlay:'yes',
                
                hideTimerBar:"off",
                onHoverStop:"off",
                navigation: {
                    arrows:{enable:true}
                }, 
                responsiveLevels:[1920,1280,975,600,300],
                gridwidth: [1170, 720, 500, 500, 300],
                gridheight: [650, 600, 550, 450, 400]
            });
        };
    }



//===scoll to Top===
    function scrollToTop() {
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on("click", function() {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }
    }

//===Testmonial Slider Style 1===
    function testmonialcarousel () {
        $('.testmonial-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots: false,
            autoplayHoverPause:true,
            autoplay: 6000,
            smartSpeed: 700,
            navigation : true,
            navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1024:{
                    items:3
                },
                1100:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        })
    }

//===Testmonial Slider Style 1===
    function clinetscarousel () {
        $('.clients-carousel').owlCarousel({
            loop:true,
            margin:30,
            dots: true,
            autoplayHoverPause:true,
            autoplay: 6000,
            smartSpeed: 700,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1024:{
                    items:3
                },
                1100:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        })
    }

//===Sponser Slider Style 2===
    function sponsercarousel () {
        $('.sponser-carousel').owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            autoplay:true,
            autoplayTimeout:2000,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:false,
                    loop:true
                }
            }
        })
    }




//===Search box ===
    function searchbox() {
        //Search Box Toggle
        if($('.search-toggle').length){
            //Dropdown Button
            $('.search-toggle').on("click", function() {
                $(this).toggleClass('active');
                $(this).next('.search-box').toggleClass('now-visible');
            });
        }

    }

    $('.toggle').on("click", function(e) {
    e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});


/*=================== Accordion ===================*/
    function accordion () {
        $(".toggle").each(function(){
            $(this).find('.content').hide();
            $(this).find('h5:first').addClass('active').next().slideDown(500).parent().addClass("activate");
            $('h5', this).on("click", function() {
                if ($(this).next().is(':hidden')) {
                    $(this).parent().parent().find("h5").removeClass('active').next().slideUp(500).removeClass('animated fadeInUp').parent().removeClass("activate");
                    $(this).toggleClass('active').next().slideDown(500).addClass('animated fadeInUp').parent().toggleClass("activate");
                }
            });
        });
    }

//=== Fact counter ===
    function CounterNumberChanger () {
        var timer = $('.timer');
        if(timer.length) {
            timer.appear(function () {
                timer.countTo();
            })
        }
    }



//=== Thm scroll anim===
    function thmScrollAnim() {
        if ($('.wow').length) {
            var wow = new WOW({
                mobile: false
            });
            wow.init();
        };
    }

//=== offsetgap===
    function offsetgap() {
        var offset_gap = $(".container").offset().left;
        $(".right-content-are").css({
           right: offset_gap
        });
        $(".left-contetnt-are").css({
           left: offset_gap
        });
    }


//=== Contact Form Validation ===
    function ContactFormValidation() {
      if(('.form-sec').length) {
            var form = $('#ajax-contact');
            var formMessages = $('.form-messages');
            $(form).submit(function(e) {
              e.preventDefault();
              var formData = $(form).serialize();
              $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
              }).done(function(response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);
                $(this).find("input").val("");
                $(form).trigger("reset");
              }).fail(function(data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');
                if (data.responseText !== '') {
                  $(formMessages).text(data.responseText);
                } else {
                  $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
              });
            });
        }
    }

/* ==========================================================================
   When document is loading, do
   ========================================================================== */
    
    $(window).on('load', function() {
        mainmenu();
        revolutionSliderActiver();
        scrollToTop();
        testmonialcarousel();
        clinetscarousel();
        sponsercarousel();
        searchbox();
        accordion();
        CounterNumberChanger();
        thmScrollAnim();
        offsetgap();
        ContactFormValidation();
    });
/* ==========================================================================
   When document is Scrolling, do
   ========================================================================== */

$(window).on('scroll', function() {
        stickyHeader();
    });

})(window.jQuery);