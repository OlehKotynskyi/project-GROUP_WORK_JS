// Експорт функції шапки сайту ховати при прокрутці та показувати
import { handleHeaderScroll } from './js/base-js/scroll';
// Експорт функції попапу
// Імпорт стилів модалки
import 'basiclightbox/dist/basicLightbox.min.css';

// визов функції ховати та показувати шапку сайту
handleHeaderScroll();

// // визов функціоналу попапа
// const popupLinks = document.querySelectorAll('.popup-link');
// // визов функції відкриття першого попапу
// yourModule.popupOpen(popupLinks[0]);
// //визов функції закриття попапу
// const popupCloseIcon = document.querySelector('.close-popup');
// yourModule.popupClose(popupCloseIcon.closest('.popup'));
// // визов функції блокування скролу в боді
// yourModule.bodyLock();
// // визов функції розблокування скролу боді
// yourModule.bodyUnLock();
