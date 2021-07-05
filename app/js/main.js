$(function(){

$('.menu__btn, .menu__list-item a').on('click', function(){
 $('.menu__list').toggleClass('menu__list--active'); 
});


  
  $('.product__content-filter__btn').on('click',function(){
    $(this).removeClass('product__content-filter__btn--active');
    $('.product__content-filter__btn').addClass('product__content-filter__btn--active');
  }); 
  $('.button-list').on('click',  function(){
  $('.shop-card__item').addClass('shop-card__item--list');
  });
  $('.button-grid').on('click', function(){
  $('.shop-card__item').removeClass('shop-card__item--list');
  });
  



  $('.product-tabs__top-item').on('click', function(e){
  e.preventDefault();
  $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
  $(this).addClass('product-tabs__top-item--active');

  $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
  $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });


  $('.product-related__tabs-item').on('click', function(e){
    e.preventDefault();
    $('.product-related__tabs-item').removeClass('product-related__tabs-item--active');
    $(this).addClass('product-related__tabs-item--active');
  
    $('.product-related__card').removeClass('product-related__card--active');
    $($(this).attr('href')).addClass('product-related__card--active');
    });
    
  $('.select-style').styler();
  
  $('.product-page__num').styler();

  $('.product-slide__prewiev').slick({
    asNavFor: '.product-slide__show',
    focusOnSelect:true,
    slidesToShow:3,
    slidesToScroll:1,
    vertical:true, 
    draggable: false,
  });


  $('.product-slide__show').slick({
    asNavFor: '.product-slide__prewiev',
    draggable: false,
    arrows: false,
    fade: true,
    responsive:[
      {
        breakpoint:414,
        setings:{
          draggable:true,
        }
      },
    ]
  });

  $('.category-price__input').ionRangeSlider({
    type: "doule", prefix: "$",
    onStart: function (data) {
      
      $('.category-price__from').text(data.from)
      $('.category-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.category-price__from').text(data.from);
      $('.category-price__to').text(data.to);
  },  
  });


$('.top-slider__inner').slick({
  dots:true,
  arrows:false,  
});

/*$('.product__items').slick({
  infinite: true,
  slidesToScroll:2,
  slidesToShow:4,
  arrows:false,
  prevArrow:'<a class="product-related__tabs-item product-related__tabs-item--active" href="#tab-5"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9"><path d="M.3 5.47h16.94l-.1 2.86a.3.3  0 00-.08.2.323.323 0 00.08.21l.18.17a.267.267 0 00.4 0l4.2-4.21a.3.3 0 00.08-.2.323.323 0 00-.08-.21L17.72.08a.29.29 0 00-.4 0l-.18.17a.323.323 0 00-.08.21.318.318 0 00.08.2l.12 2.86H.29a.3.3 0 00-.29.3v1.37a.291.291 0 00.3.28z" fill="#a3bbc8" fill-rule="evenodd"/></svg></a>',
  nexArrow: '<a class="product-related__tabs-item" href="#tab-4"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9"><path d="M21.7 3.53H4.76l.1-2.86a.3.3 0 00.08-.2.323.323 0 00-.08-.21L4.68.09a.267.267 0 00-.4 0L.08 4.3a.3.3 0 00-.08.2.323.323 0 00.08.21l4.2 4.21a.29.29 0 00.4 0l.18-.17a.323.323 0 00.08-.21.3.3 0 00-.08-.2l-.12-2.86h16.97a.3.3 0 00.29-.3V3.81a.291.291 0 00-.3-.28z" fill="#a3bbc8" fill-rule="evenodd"/></svg></a>',
  infinite:true,
  fade: true,
});*/
  

$(".star").rateYo({
  starWidth: "11px",
  normalFill: "#d6d6d6",
  ratedFill: "#ffcc00",
  readOnly: true
  
});

    var containerEl1 = document.querySelector('.design');
    var containerEl2 = document.querySelector('.products-info');
    var config = {
        controls: {
            scope: 'local',
        },
    };
    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
  




let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

}); 