jQuery(document).ready(function ($) {
    "use strict";

    var currentURL = window.location.href;

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    //Smooth Scrolling for navigation with offset for header
    $(function() {
            $('.nav-tabs > .main, .nav-tabs > .main > a').click(function (e) {
                var target = $(this.hash);
                if (window.innerWidth > 991 && !currentURL.includes("about")) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 98
                    }, 800);
                }
                else if (window.innerWidth <= 991 && !currentURL.includes("about")){
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 800);
                }
                else {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 800);
                }
            return false;
        });
      });
      
    //Smooth scrolling for buttons with offset for header
    $(function() {
        if (window.innerWidth > 991) {
            $('.hero-content > a, .why-section a, .what-buttons > a, .use-cases-button > a, .about-hero-content > a').click(
                function (e) {
                e.preventDefault();
                var target = $(this.hash);
                $('html, body').animate({
                    scrollTop: target.offset().top - 98
                }, 800);
                return false;
            });
        }
        else {
            $('.hero-content > a, .why-section a, .what-buttons > a, .use-cases-button > a, .about-hero-content > a').click(
                function (e) {
                e.preventDefault();
                var target = $(this.hash);
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            });
        }
    });
    //Smooth scrolling for "back to top"
    $(function() {
        $('.back-to-top > a').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    //Smooth Scrolling for navigation with offset for header between pages
    $(function() {
        var hash= window.location.hash
        var target = $(hash);

        if ( hash == '' || hash == '#' || hash == undefined) {
            return false; 
        }
        else if(target.length && window.innerWidth > 991) {
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            
            $('html,body').stop().animate({
                scrollTop: target.offset().top - 98 //offsets for fixed header
            }, 'linear');
        }
        // On mobile, waits until page is loaded to scroll to anchor. This is only if link goes to seperate page.
        else {
            scroll(0,0);
            // void some browsers issue
            setTimeout( function() { scroll(0,0); }, 1);

            sleep(700).then(() => {
                $(function() {
                    // your current click function
                    $('html,body').stop().animate({
                        scrollTop: target.offset().top //offsets for fixed header
                    }, 800);
                });
              })
        }
        return false; 
    });
});

