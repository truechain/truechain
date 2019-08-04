jQuery(document).ready(function ($) {
    "use strict";

    //Smooth Scrolling for navigation with offset for header
    $(function() {
        $('.nav-tabs > li, .nav-tabs > li > a').click(function (e) {
            e.preventDefault();
            var target = $(this.hash);
            $('html, body').animate({
                scrollTop: target.offset().top - 98
            }, 800);
            return false;
        });
      });
    //Smooth scrolling for buttons with offset for header
    $(function() {
        $('.hero-content > a, .about-text > a').click(function (e) {
        if(window.innerWidth <= 991) {
            e.preventDefault();
            var target = $(this.hash);
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
            return false;
        }
        else {
            e.preventDefault();
            var target = $(this.hash);
            $('html, body').animate({
                scrollTop: target.offset().top - 98
            }, 800);
            return false;
        }
        });
    });
    //Smooth scrolling for logo and "back to top"
    $(function() {
        $('.logo > a , .back-to-top > a').click(function (e) {
            e.preventDefault();
            var target = $(this.hash);
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});
