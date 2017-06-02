window.onload = function() {
    appImg.style.opacity = '0'
}

var appImg = document.querySelector('.app-img');
var appPos = appImg.offsetTop;


window.addEventListener('scroll', function () {
    var scrollPos = scrollY;
    var pos = (appPos - scrollPos)
    console.log(pos)
    
    if (pos > 650) {
        appImg.style.opacity = '0'
        appImg.style.transition = ".5s"
    } else if (pos < 650) {
        appImg.style.transition = ".5s"
        appImg.style.opacity = '1'
    }
})

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1800, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
