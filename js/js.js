/* 상단 메뉴버튼 클릭 */
let stmBtn = document.querySelector('.stm-btn');
let stmWrap = document.querySelector('.stm-wrap');
let closeBtn = document.querySelector('.stm-close-btn');
stmBtn.addEventListener('click', () => {
  stmWrap.classList.add('open');
  closeBtn.addEventListener('click', () => {
    stmWrap.classList.remove('open');
  })
})
/* 피자 스크롤 */
let pizzaSection = document.querySelector('.pizza-btm');
let pizzaPiece = document.querySelector('.pizza-edge-piece');
let baseBottom = -250;
let maxBottom = -50;
window.addEventListener('scroll', () => {
  let scrollY = window.scrollY; 
  let sectionTop = pizzaSection.getBoundingClientRect().top + window.scrollY;
  let sectionScroll = scrollY - sectionTop;
  let clampedScroll = Math.max(0, sectionScroll);
  let newBottom = Math.min(baseBottom + clampedScroll, maxBottom);

  pizzaPiece.style.bottom = `${newBottom}px`;
});
/* 메인메뉴 스크롤 */
document.addEventListener('DOMContentLoaded', () => {
  const mainMenu = document.querySelector('.main-menu');

  window.addEventListener('scroll', () => {
    const rect = mainMenu.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const enterDistance = windowHeight - rect.top;
    const start = 0;
    const end = 400;

    if (enterDistance >= start) {
      const progress = Math.min((enterDistance - start) / (end - start), 1);
      const translateY = -15 - (25 * progress); 
      mainMenu.style.transform = `translateY(${translateY}%)`;
    } else {
      mainMenu.style.transform = `translateY(-10%)`;
    }
  });
});
/* 치즈멜팅 스크롤 */
window.addEventListener('scroll', () => {
  const cheeseWrap = document.querySelector('.cheese .cheese-wrap img');
  const cheese = document.querySelector('.cheese');
  const scrollTop = window.scrollY || window.pageYOffset;
  const cheeseTop = cheese.getBoundingClientRect().top + scrollTop;
  const windowHeight = window.innerHeight;

  let progress = (scrollTop + windowHeight * 1.5 - cheeseTop) / (windowHeight + cheese.offsetHeight);
  progress = Math.min(Math.max(progress, 0), 1);

  const scaleYValue = 1 + 0.6 * progress;
  cheeseWrap.style.transformOrigin = 'top center';
  cheeseWrap.style.transform = `scaleY(${scaleYValue})`;
});

/* 이벤트 슬라이드 */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30, 
  slidesPerGroup: 1,
  loop: true, 
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false 
  },
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev" 
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
