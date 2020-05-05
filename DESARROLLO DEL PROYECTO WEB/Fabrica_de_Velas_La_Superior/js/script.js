$('#carousel-card-testimonio').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    navElement: 'div',
    navText: [],
    navContainerClass: 'control-nav',
    navClass: ['control-prev','control-next'],
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    responsive:{
        0:{
            items:1,
            nav:true,
            mouseDrag: true,
            touchDrag: true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
});
$('#carousel-card-producto').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    navElement: 'div',
    navText: [],
    navContainerClass: 'control-nav',
    navClass: ['control-prev','control-next'],
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    responsive:{
        0:{
            items:1,
            nav:false,
            mouseDrag: true,
            touchDrag: true,
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
});

$('#carousel-card-noticia').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    navElement: 'div',
    navText: [],
    navContainerClass: 'control-nav',
    navClass: ['control-prev','control-next'],
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    responsive:{
        0:{
            items:1,
            nav:false,
            mouseDrag: true,
            touchDrag: true,
        },
        600:{
            items:2,
            nav:true,
            mouseDrag: false,
            touchDrag: false,
        },
        1000:{
            items:2,
            nav:true,
            loop:true,
            mouseDrag: false,
            touchDrag: false,
        }
    }
});

$('#carousel-testimonio').carousel({
    interval:false
})
$('#carousel-producto').carousel({
    interval:false
})