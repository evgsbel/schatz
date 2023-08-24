// //masked inputs
// $(() => {
//   Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');
// });
//
// // tabs
// document.addEventListener('DOMContentLoaded', function () {
//   const tabsBtn = document.querySelectorAll('.tabs__btn');
//   tabsBtn.forEach(function (el) {
//     el.addEventListener('click', function (event) {
//       tabsBtn.forEach(tabsBtn => {
//         tabsBtn.classList.remove('is-active');
//       });
//       const path = event.currentTarget.dataset.path;
//       document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
//         tabContent.classList.remove('is-active');
//       });
//       document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
//       el.classList.add('is-active');
//     });
//   });
// });
//
//

// fixed header
$(document).ready(function () {
  $(function () {
    var timer = null;
    window.addEventListener('scroll', function () {
      if (timer !== null) {
        var stickySidebar = function stickySidebar() {
          var scrollDistance = $(document).scrollTop(),
            headerHeight = $('.header').outerHeight(true),
            // sidebarHeight = $('aside').outerHeight(true),
            footerOffsetTop = $('.js-stop-header').offset().top,
            $header = $('header');
          if (scrollDistance >= headerHeight) {
            $header.addClass('header_fixed');
          } else {
            $header.removeClass('header_fixed');
          }
          if (scrollDistance + headerHeight >= footerOffsetTop) {
            $header.removeClass('header_fixed');
          }
        };
        clearTimeout(timer);
        //document.querySelector('header').classList.add('out', 'header_fixed');
        stickySidebar();
        $(document).scroll(function () {
          stickySidebar();
        });
      }
      timer = setTimeout(function () {
        // document.querySelector('header').classList.remove('out');
      }, 800);
    }, false);
  });
});

// mobile menu
$(() => {
  const btnMenu = document.querySelectorAll('.js-open-mobile-menu');
  const menu = document.querySelector('.js-mobile-menu');
  const body = document.querySelector('body');
  btnMenu.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      el.classList.toggle('is-active')
      menu.classList.toggle('is-open');
      body.classList.toggle('opened-menu')
    });
  })
  // const closeBtn = document.querySelector('.js-close-mobile-menu');
  // closeBtn.addEventListener('click', function (e) {
  //   e.stopPropagation();
  //   menu.classList.remove('is-open');
  //   body.classList.remove('opened-menu')
  // });
});



//news slider

let swiperNews = new Swiper(".js-news-slider", {
  navigation: {
    nextEl: ".swiper-button-next-news",
    prevEl: ".swiper-button-prev-news",
  },
  speed: 900,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
      grabCursor: true
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 15,
      grabCursor: true
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

//category slider

let swiperCategory = new Swiper(".js-category-slider", {
  navigation: {
    nextEl: ".swiper-button-next-cat",
    prevEl: ".swiper-button-prev-cat",
  },
  speed: 900,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
      grabCursor: true
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 15,
      grabCursor: true
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});



$(() => {
  function checkWidth() {
    let windowWidth = $('body').innerWidth()
    if (windowWidth < 576) {
      var swiper = new Swiper(".js-aerosol-slider", {
        loop: false,
        grabCursor: true,
        navigation: {
          nextEl: ".swiper-button-next-1",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            grabCursor: true,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            grabCursor: true,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            grabCursor: true,
            spaceBetween: 30,
          },
        }
      });

    } else {
      var swiper = new Swiper(".js-aerosol-slider", {
        initialSlide: 3,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 450,
          modifier: 1,
          slideShadows: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            grabCursor: true,
            spaceBetween: -30,
          },
          768: {
            slidesPerView: 3,
            grabCursor: true,

            spaceBetween: 0,
          },
        }
      });
    }
  }

  checkWidth();
  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
});

//read more
$(() => {
  if ($('.read-more').length) {
    var readMoreBtn  = document.querySelector(".read-more");
    var readMoreHide = document.querySelector(".read-more__hidden");
    readMoreBtn.addEventListener('click', function (el) {
      readMoreBtn.classList.toggle('is-open')
      readMoreHide.classList.toggle('is-open')
    })
  }
});


//animation
$(() => {
  $(window).on('load', function () {
    let tlHeader = new TimelineMax(),
    tlAdv = new TimelineMax(),
    tlBrand = new TimelineMax(),
    tlArticle = new TimelineMax(),
    tlAbout = new TimelineMax(),
    tlService = new TimelineMax(),
    tlCatsld = new TimelineMax(),
    tlFooter = new TimelineMax()
    const controller = new ScrollMagic.Controller();
    tlHeader
      .staggerFromTo('.logo', .6, {y:30,opacity:0}, {y:0,opacity:1}, .3)
      .staggerFromTo('.nav__item', .4, {x:30,opacity:0}, {x:0,opacity: 1}, 0.3)
      .staggerFromTo('.hero__title', .5, {x:-30,opacity:0}, {x:0,opacity:1}, 0.3)
      .staggerFromTo('.hero__subtitle', .5, {y:30,opacity:0}, {y:0,opacity:1}, 1)
      .staggerFromTo('.hero__btn ', .5, {y:30,opacity:0}, {y:0,opacity:1}, 1)
      .staggerFromTo('.search ', .5, {x:-30,opacity:0}, {x:0,opacity:1}, 1)
    tlAdv
      .fromTo('.advantages__icon', .5, {y:30,opacity:0}, {y:0,opacity:1}, .5)
      .staggerFromTo('.advantages p', .5, {y:30,opacity:0}, {opacity:1,y:0}, .5)
    tlCatsld
      .fromTo('.category-slider__title', .5, {y:30,opacity:0}, {opacity:1,y:0}, .5)
      .staggerFromTo('.category-slider__item', .3, {x:-10,opacity:0}, {x:0,opacity:1}, .2)
    tlAbout
      .staggerFromTo('.about__caption', .4, {y:-50,opacity:0}, {y:0,opacity:1}, .2)
      .fromTo('.about__logo', .5, {y:30,opacity:0}, {opacity:1,y:0}, .5)
      .staggerFromTo('.about p', .5, {y:30,opacity:0}, {y:0,opacity:1}, .5)
      .staggerFromTo('.about__img', .3, {x:-50,opacity:0}, {x:0,opacity:1}, .2)
    tlBrand
      .fromTo('.about__brand-img', .3, {y:-10,opacity:0}, {y:0,opacity:1}, .2)
      .staggerFromTo('.about__description', .3, {y:-10,opacity:0}, {y:0,opacity:1}, .2)
      .staggerFromTo('.about__btn', .3, {y:-5,opacity:0}, {y:0,opacity:1}, .3)
    tlService
      .fromTo('.service__caption', .5, {y:30,opacity:0}, {opacity:1,y:0}, .5)
      .staggerFromTo('.service__img', .4, {rotationY:-40,x:-10,opacity:0}, {rotationY:0,x:0,opacity:1}, .5)
      .staggerFromTo('.service__description', .5, {y:30,opacity:0}, {opacity:1,y:0}, .5)
    tlArticle
      .fromTo('.article-slider__title', .5, {y:30,opacity:0}, {opacity:1,y:0}, .5)
      .staggerFromTo('.article-slider__item', .3, {x:-10,opacity:0}, {x:0,opacity:1}, .2)
    tlFooter
      .fromTo('.footer__nav', .5, {x:-30,opacity:0}, {opacity:1,x:0}, .5)
      .staggerFromTo('.footer__link', .5, {x:30,opacity:0}, {x:0,opacity:1}, .3)
      .staggerFromTo('.footer__copy', .6, {y:30,opacity:0}, {y:0,opacity:1}, .3)
    const scene1p1 = new ScrollMagic.Scene({
      triggerElement: ".header",
      triggerHook: 0,
      // reverse: false,
    })
      .setTween(tlHeader)
      .addTo(controller);
    const scene1p2 = new ScrollMagic.Scene({
      triggerElement: ".hero",
      triggerHook: "onLeave",
      // reverse: false,
    })
      .setTween(tlAdv)
      .addTo(controller);
    const scene1p22 = new ScrollMagic.Scene({
      triggerElement: ".advantages",
      triggerHook: 0,
      // reverse: false,
    })
      .setTween(tlCatsld)
      .addTo(controller);
    const scene1p3 = new ScrollMagic.Scene({
      triggerElement: ".category-slider",
      triggerHook: "onLeave",
      // reverse: false,
    })
      .setTween(tlAbout)
      .addTo(controller);
    const scene1p5 = new ScrollMagic.Scene({
      triggerElement: ".about",
      triggerHook: "onLeave",
      // reverse: false,
    })
      .setTween(tlBrand)
      .addTo(controller);
    const scene1p6 = new ScrollMagic.Scene({
      triggerElement: ".about__brand",
      triggerHook: "onLeave",
      // reverse: false,
    })
      .setTween(tlService)
      .addTo(controller);
    const scene1p7 = new ScrollMagic.Scene({
      triggerElement: ".service",
      triggerHook: "onLeave",
      // reverse: false,
    })
      .setTween(tlArticle)
      .addTo(controller);
    const scene1p8 = new ScrollMagic.Scene({
      triggerElement: ".article-slider",
      triggerHook: "onLeave",
      // reverse: false,
    })
      .setTween(tlFooter)
      .addTo(controller);
  });
});
