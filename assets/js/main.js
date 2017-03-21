$(function() {

  'use strict';

  //menu mobile
  $('#nav-btn').click(function(){
    var slider = document.getElementById("nav-slide");
    slider.style.height = window.innerHeight - 60 + "px";
    if(slider.style.left == "0px") {
      slider.style.left = "-250px";
    }
    else {
      slider.style.left = "0px";
    }
  })


  // set interval slide
  var slideAuto = setInterval(slideNext, 3000);


  // set pagination click and mark bullet
  $('.pagination span').click(function(){
    clearInterval(slideAuto);
    if(!$(this).hasClass('active')) {
      var goto = $(this).attr('id');
      $('.slideItem.active').fadeOut(400, function() {
        $('.slideItem').fadeOut().removeClass('active');
        $('.slideItem:eq(' + goto + ')').fadeIn().addClass('active');
        slideMark();
      });

    }
  })

  // next slide automatic
  function slideNext() {
    if($('.slideItem.active').next('.slideItem').size()) {
      $('.slideItem.active').fadeOut(400, function() {
        $('.slideItem').removeClass('active');
        $(this).next().fadeIn().addClass('active');
        slideMark()
      })

    } else {
      $('.slideItem.active').fadeOut(400, function() {
        $('.slideItem').removeClass('active');
        $('.slideItem:eq(0)').fadeIn().addClass('active');
        slideMark()
      })
    }
  }


  // mark slide bullet
  function slideMark() {
    var slideThis = $('.slideItem.active').index();
    $('.pagination span').removeClass('active');
    $('.pagination span:eq(' + slideThis + ')').addClass('active')
  }

})
