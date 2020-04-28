$(document).ready(function () {
    $(".sidenav").sidenav()
    $(".materialboxed").materialbox()
    $('.parallax').parallax()
    $('.tabs').tabs()
    $('.datepicker').datepicker({
        disableWeekends: true
    })
    $('.scrollspy').scrollSpy()
    $('.tooltipped').tooltip();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });

    $(window).scroll(function() {
        const navHeight = $('nav').height()
        if($(document).scrollTop() > navHeight){
            $('.stickyBtn').fadeIn();
        } else {
            $('.stickyBtn').fadeOut();
        }
    })

    $('.stickyBtn').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    })
})