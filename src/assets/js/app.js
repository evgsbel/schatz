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
      spaceBetween: 0,
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
      spaceBetween: 0,
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

