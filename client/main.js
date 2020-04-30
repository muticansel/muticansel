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

    $(window).scroll(function () {
        const navHeight = $('nav').height()
        if ($(document).scrollTop() > navHeight) {
            $('.stickyBtn').fadeIn();
        } else {
            $('.stickyBtn').fadeOut();
        }
    })

    $('.stickyBtn').on('click', () => {
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    })

    $('#sendMsg').on('click', (e) => {
        e.preventDefault()

        const data = {
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            date: document.getElementById('date').value
        }
        $.ajax({
            url: 'sendMail',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (res) {
                M.toast({ html: 'Your message is sent successfully...', classes: 'rounded' })
            },
            error: function (err) {
                M.toast({ html: 'An error has occured...', classes: 'rounded' })
            }
        })
    })

    function sendMessageIsEnable() {
        var buttonDisabled = $('#email').val().trim() === '' || $('#message').val().trim() === '';
        $('#sendMsg').prop('disabled', buttonDisabled);
      }

    $('#email').on('keyup', sendMessageIsEnable)
    $('#message').on('keyup', sendMessageIsEnable)
})