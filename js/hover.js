/**
 * Created by cornelia on 19/11/14.
 */
$(document).ready(function() {
    var portfolio = $('.portfolio');
   portfolio.mouseenter(function () {
       $(this).children('.portfolio-image').animate( {
           opacity: 0.25
           }, 100);
       $(this).children('.portfolio-link').css('color', 'gray');
   });
    portfolio.mouseleave(function () {
        $(this).children('.portfolio-image').animate( {
            opacity: 1
        }, 100);
        $(this).children('.portfolio-link').css('color', '#fff');
    })
});