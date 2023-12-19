// Шапка сайту ховати та показувати при прокрутці сторінки
let lastScroll = 0;
const defaultOffset = 50;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

export function handleHeaderScroll() {
   window.addEventListener('scroll', () => {
      if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
         header.classList.add('hide');
      } else if (scrollPosition() < lastScroll && containHide()) {
         header.classList.remove('hide');
      }

      lastScroll = scrollPosition();
   });
}