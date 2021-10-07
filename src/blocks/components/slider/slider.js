import owl from 'owl.carousel'

function interview() {
    $("#slider").owlCarousel({
        items:1,
        loop:true,
        dots: false,
        margin:30,
        merge:true,
        slideBy: 1,
        nav: true,
        smartSpeed: 700,
        navText: ['<img src="./img/svg/prev.svg">','<img src="./img/svg/next.svg">']
    });
}
interview();