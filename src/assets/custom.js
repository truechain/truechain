jQuery(document).ready(function ($) {
    "use strict";

    //Smooth Scrolling for navigation with offset for header
    $(function() {
        if (window.innerWidth > 991) {
            $('.nav-tabs > .main, .nav-tabs > .main > a, .mobile-menu > a').click(function (e) {
                var target = $(this.hash);
                $('html, body').animate({
                    scrollTop: target.offset().top - 98
                }, 800);
                return false;
            });
        }
        else {
            $('.nav-tabs > .main, .nav-tabs > .main > a, .mobile-menu > a').click(function (e) {
                var target = $(this.hash);
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            });
        }
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
});
