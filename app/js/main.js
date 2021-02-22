$(function(){
  
    $('.menu__btn').on('click', function(){
        $(this).toggleClass('menu__btn--active')
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
            prevArrow: '<button type="button" class="slider-btn slider-btn--left">Next</button>',
            nextArrow: '<button type="button" class="slider-btn slider-btn--right">Next</button>',
            
        });
    }
});