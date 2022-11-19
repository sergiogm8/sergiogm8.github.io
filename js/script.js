var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        700: {
            items: 2
        },

        1000: {
            items: 3
        },
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})