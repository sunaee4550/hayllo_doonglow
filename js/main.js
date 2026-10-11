document.addEventListener('DOMContentLoaded', function () {
  // 스크롤 등장 모션 (원본: fade-up, 1.5s, ease, 위아래 스크롤 시 반복)
  AOS.init({
    duration: 1500,
    easing: 'ease',
    offset: 120,
    once: false
  });

  // COLOR DETAILS 슬라이더 (원본: 1장씩, 300ms 슬라이드, 페이지네이션 + 화살표)
  new Swiper('.ap-post .ap-swiper', {
    slidesPerView: 1,
    speed: 300,
    pagination: {
      el: '.ap-post .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.ap-post .swiper-button-next',
      prevEl: '.ap-post .swiper-button-prev'
    },
    keyboard: true,
    a11y: {
      enabled: true,
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드'
    },
    on: {
      // 이미지 로드 후 AOS 위치 재계산
      init: function () { setTimeout(AOS.refresh, 100); }
    }
  });

  window.addEventListener('load', function () { AOS.refresh(); });
});

// 플로팅 쇼핑 버튼: 인트로를 조금 지나면 나타남
(function () {
  var btn = document.querySelector('.floating-shop');
  if (!btn) return;
  var onScroll = function () { btn.classList.toggle('is-show', window.scrollY > 300); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
