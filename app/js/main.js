$(function(){

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
  arrows:false
});

$(".star").rateYo({
  starWidth: "11px",
  normalFill: "#d6d6d6",
  ratedFill: "#ffcc00",
  readOnly: true
  
});

}); 