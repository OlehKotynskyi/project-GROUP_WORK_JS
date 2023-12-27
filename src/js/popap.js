import { createMarkupModal } from './template';
import { addBtnClickDiscount, addBtnClick } from './products';
// console.log(5); //то була перевірка чи працює файл
const container = document.querySelector('.popup');
const item = document.querySelector('body ');
//=========
const itemDiscount = document.querySelector('.discount-section ');
//==========
const close = document.querySelector('.popup-close');
item.addEventListener('click', handleClick);

//=========
itemDiscount.addEventListener('click', handleClickDiscount);
function handleClickDiscount(event) {
  if (
    event.target.className === 'discount-link-basket' ||
    event.target.className === 'discount-basket-icon' ||
    event.target.className === 'discount-basket-icon'
  ) {
    addBtnClickDiscount(event);
    return;
  }

  const itemIdDiscount = event.target.closest('.discount-list-item').id;
  const itemElementDiscount = document.getElementById(itemIdDiscount);
  itemElementDiscount.classList.add("popap-card");

  container.innerHTML = itemElementDiscount.outerHTML;

  container.style.display = 'flex';

  document.addEventListener('keydown', handleClickClose);
  function handleClickClose(event) {
    if (event.key === 'Escape') {
      container.style.display = 'none';
      itemElementDiscount.classList.remove("popap-card");
      document.removeEventListener('keydown', handleClickClose);
    }
  }
}
//===============
function handleClick(event) {
  // console.log(event.target);
  // if (event.target === event.currentTarget) {
  //   return;
  // }
  //=============
  if (
    event.target.nodeName === 'BUTTON' ||
    event.target.className === 'add-btn' ||
    event.target.nodeName === 'IMG'
  ) {
    addBtnClick(event);
    return;
  }

  const itemId = event.target.closest('.list-item').id;
  const itemElement = document.getElementById(itemId);
  itemElement.classList.add("popap-card");
  // itemElement.createElement("button")

  container.innerHTML = itemElement.outerHTML;

  // const modalContent = createMarkupModal();
  // container.innerHTML = modalContent;
  container.style.display = 'flex';

  document.addEventListener('keydown', handleClickClose);
  function handleClickClose(event) {
    if (event.key === 'Escape') {
      container.style.display = 'none';
      itemElement.classList.remove("popap-card");
      document.removeEventListener('keydown', handleClickClose);
    }
  }
}

// я намагалась додати таким способом /1

// const refs = {
//     popupCart: document.querySelector('.popup-cart'),
//     closeBtn: document.querySelector('.popup-cart-close-btn'),
//  };

//  refs.closeBtn.addEventListener('click', closeModal);

//  function closeModal() {
//     refs.popupCart.classList.add('is-hidden');
//     window.removeEventListener('keydown', closeByEscape);
//   }

//  чи ось так/2

//   function closeModal() {
//     modal.classList.remove('active');
//     overlay.classList.remove('active');
//     document.body.style.overflow = '';
//   }
//   closeBtn.addEventListener('click', closeModal);

//   document.addEventListener('keydown', (e) => {
//     if (e.key === "Escape") {
//       closeModal();
//     }
//   })

//   overlay.addEventListener('click', () =>  {
//       closeModal();
//     });
// const itemPopular = document.querySelector('.popular-section-container ');

// itemPopular.addEventListener('click', handleClickPopular);
// function handleClickPopular(event) {
//   // if (
//   //   event.target.className === 'add-popular-basket' ||///btn
//   //   event.target.className === 'popular-basket-svg' ||//icon btn
//   //   event.target.className === 'popular-basket-svg'
//   // ) {
//   //   addBtnClickDiscount(event);
//   //   return;
//   // }

//   const itemIdPopular = event.target.closest('.product-popular-card').id;
//   const itemElementPopular = document.getElementById(itemIdPopular);
//   itemElementPopular.classList.add("popap-card");

//   container.innerHTML = itemElementPopular.outerHTML;

//   container.style.display = 'flex';

//   document.addEventListener('keydown', handleClickClose);
//   function handleClickClose(event) {
//     if (event.key === 'Escape') {
//       container.style.display = 'none';
//       itemElementPopular.classList.remove("popap-card");
//       document.removeEventListener('keydown', handleClickClose);
//     }
//   }
// }
