var nav = document.querySelector('nav');

document.querySelector(".navbar-toggler").addEventListener('click', function(){
    nav.style.background ='#082032'
})


        window.addEventListener('scroll', function(){
            if(window.pageYOffset > 100){
                nav.style.background ='#082032'
                nav.style.text = 'blue'
            }
            else{
                nav.style.background= "transparent"
            }
        })


$(document).ready(function() {
    setTimeout(function() {
        $("#welcome").modal('show');

    }, 100);
    // $(".navbar-toggler").click(function() {
    //     $(".navbar-nav").toggleClass("actv");
    // })
});


// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// Testimonial

jQuery(function ($) {
    "use strict";
    var $window = $(window);
    var windowsize = $(window).width();
    var $root = $("html, body");
    var $this = $(this);
    
    /*Testimonials 3columns*/
    $("#testimonial-slider").owlCarousel({
    items: 3,
    autoplay: 2500,
    autoplayHoverPause: true,
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    responsive: {
        1280: {
            items: 3,
        },
        600: {
            items: 2,
        },
        320: {
            items: 1,
        },
    }
    });

});