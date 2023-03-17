 // Flickity Slider
 $('#homepage-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    imagesLoaded: true,
    autoplay: true,
})
$('#challenge-carousel').flickity({
    // options
    cellAlign: 'center',
    wrapAround: true,
    contain: true,
    pageDots: false,
    draggable: false,
    imagesLoaded: true,
    arrowShape: 'M 0,50 L 80,00 L 80,100 Z'
})
$('.special-promotion-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: false
})