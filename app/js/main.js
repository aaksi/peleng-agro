$(function(){
  
    $('.menu__btn').on('click', function(){
        $(this).toggleClass('menu__btn--active')
        $('.menu__list-wrapper').slideToggle(700);
    });
    $('.menu-mobile__btn').on('click', function(){
        $(this).toggleClass('menu-mobile__btn--active')
        $('.menu__list-wrapper').slideToggle(700);
    });

    // $('.top__slider').slick();

    
    var $slider = $('.top__slider');
    
    if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter');
        
        var updateSliderCounter = function(slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $(sliderCounter).text(currentSlide + '/' +slidesCount)
        };
    
        $slider.on('init', function(event, slick) {
            $slider.append(sliderCounter);
            updateSliderCounter(slick);
        });
    
        $slider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });
    
        $slider.slick({
            autoplay: true,
            prevArrow: '<button type="button" class="slider-btn slider-btn--left">Next</button>',
            nextArrow: '<button type="button" class="slider-btn slider-btn--right">Next</button>',
           
        });
    }
     $('.news__inner').slick({
         slidesToShow:3,
         slidesToScroll: 1, 
         autoplay: true,
         arrows: false,
         responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            {
              breakpoint: 651,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
        ]
     });

    $('.tab').on('click', function(e){
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
    
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    }) 


    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    $('.gallery__small img').on('click', function(){
        if($('.gallery__big img').attr('src')!== $(this).attr('src')){

            $('.gallery__big img').hide().attr('src', $(this).attr('src')).fadeIn(500);
            $(this).parent().siblings().removeClass('product__gallery-small--active')
            $(this).parent().addClass('product__gallery-small--active')
        }
       
    });


    $('.goods__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            {
              breakpoint: 801,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
        ]
      });


});