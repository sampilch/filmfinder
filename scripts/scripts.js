/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

/* database filters */
const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');


window.addEventListener('DOMContentLoaded', () => {
  allFilterBtns[0].classList.add('active-btn');
});

allFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
      showFilteredContent(btn);
  });
});

function showFilteredContent(btn){
  allFilterItems.forEach((item) => {
      if(item.classList.contains(btn.id)){
          resetActiveBtn();
          btn.classList.add('active-btn');
          item.style.display = "block";
      } else {
          item.style.display = "none";
      }
  });
}

function resetActiveBtn(){
  allFilterBtns.forEach((btn) => {
      btn.classList.remove('active-btn');
  });
}

/* slick carousel */
  $(document).ready(function(){
    $('.slick-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      draggable: false,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      speed: 200,
      fade: true,
      cssEase: 'linear'
    });

    $('#light').click(function() {
      var slider = $('.slick-carousel');
      slider[0].slick.slickGoTo(parseInt(1));
    });

    $('#com').click(function() {
      var slider = $('.slick-carousel');
      slider[0].slick.slickGoTo(parseInt(2));
    });
    
    $('#rc').click(function() {
      var slider = $('.slick-carousel');
      slider[0].slick.slickGoTo(parseInt(3));
    });

    $('#anim').click(function() {
      var slider = $('.slick-carousel');
      slider[0].slick.slickGoTo(parseInt(4));
    });

    $('#exc').click(function() {
      var slider = $('.slick-carousel');
      slider[0].slick.slickGoTo(parseInt(5));
    });

    $('#act').click(function() {
      var slider = $('.slick-carousel');
      slider[0].slick.slickGoTo(parseInt(6));
    });

    $('#thrill').click(function() {
      var slider = $('.slick-carousel');
      slider[0].slick.slickGoTo(parseInt(7));
    });

    $('#adv').click(function() {
      var slider = $('.slick-carousel');
      slider[0].slick.slickGoTo(parseInt(8));
    });

    $('#dram').click(function() {
      var slider = $('.slick-carousel');
      slider[0].slick.slickGoTo(parseInt(9));
    });

    $('#rom').click(function() {
      var slider = $('.slick-carousel');
      slider[0].slick.slickGoTo(parseInt(10));
    });

    $('#hor').click(function() {
      var slider = $('.slick-carousel');
      slider[0].slick.slickGoTo(parseInt(11));
    });

    $('#his').click(function() {
      var slider = $('.slick-carousel');
      slider[0].slick.slickGoTo(parseInt(12));
    });

  });


