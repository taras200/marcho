$(function(){
  $('.top-slider__inner').slick({
    dots:true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  })
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.star').rateYo({
    readOnly:true, 
    rating:4,
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b"
  });

  
})