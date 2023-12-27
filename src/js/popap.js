import { createMarkupModal } from './template';
import { addBtnClickDiscount } from './products';
// console.log(5); //то була перевірка чи працює файл
const container = document.querySelector('.popup');
const item = document.querySelector('.products-container ');
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
  console.log(itemElementDiscount);
  container.innerHTML = itemElementDiscount.outerHTML;

  container.style.display = 'flex';

  document.addEventListener('keydown', handleClickClose);
  function handleClickClose(event) {
    if (event.key === 'Escape') {
      container.style.display = 'none';
      document.removeEventListener('keydown', handleClickClose);
    }
  }
}
//===============
function handleClick(event) {
  // console.log(event.target);
  if (event.target === event.currentTarget) {
    return;
  }

  const itemId = event.target.closest('.list-item').id;
  const itemElement = document.getElementById(itemId);
  container.innerHTML = itemElement.outerHTML;

  // const modalContent = createMarkupModal();
  // container.innerHTML = modalContent;
  container.style.display = 'flex';

  document.addEventListener('keydown', handleClickClose);
  function handleClickClose(event) {
    if (event.key === 'Escape') {
      container.style.display = 'none';
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
