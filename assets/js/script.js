(function () {
  'use strict';

  // header sticky
  // ========================================== 
  const headerNav = document.querySelector('.header-nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 50) {
      headerNav.classList.add('header-sticky-top');
    } else {
      headerNav.classList.remove('header-sticky-top');
    }
  });

  window.addEventListener('load', function () {
    // Swiper Post Slider Init swiper.js
    // ==========================================
    function swiperPostSlider() {
      new Swiper('.post-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '.post-slider .swiper-button-next',
          prevEl: '.post-slider .swiper-button-prev',
        },
      });

      document.querySelector(".swiper-button-next")?.removeAttribute("disabled");
    }
    swiperPostSlider();

    // instafeed
    // ==========================================
    var instafeed = document.getElementById('instafeed');
    if (instafeed) {
      var accessToken = instafeed.getAttribute('data-accessToken');
      var userFeed = new window.Instafeed({
        get: 'user',
        limit: 6,
        resolution: 'low_resolution',
        accessToken: accessToken,
        template: '<div class="col-xl col-lg-2 col-md-3 col-sm-3 col-4"><a class="instagram-post" href="{{link}}" aria-label="instagram-post-link"><img loading="lazy" class="img-fluid" src="{{image}}" alt="instagram-image"></a></div>'
      });
      userFeed.run();
    }
  });
})();