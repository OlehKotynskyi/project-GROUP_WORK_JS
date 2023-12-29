import { createMarkupModal } from './template';
import { addBtnClickDiscount, addBtnClick } from './products';
import * as basicLightBox from 'basiclightbox';
import { fetchProducts } from './fetch';
// // console.log(5); //то була перевірка чи працює файл
// const container = document.querySelector('.popup');
// const item = document.querySelector('body ');
// //=========
// const itemDiscount = document.querySelector('.discount-section ');
// //==========
// const close = document.querySelector('.popup-close');
// item.addEventListener('click', handleClick);
// //=========
// itemDiscount.addEventListener('click', handleClickDiscount);
// function handleClickDiscount(event) {
//    if (
//       event.target.className === 'discount-link-basket' ||
//       event.target.className === 'discount-basket-icon' ||
//       event.target.className === 'discount-basket-icon'
//    ) {
//       addBtnClickDiscount(event);
//       return;
//    }

//    const itemIdDiscount = event.target.closest('.discount-list-item').id;
//    const itemElementDiscount = document.getElementById(itemIdDiscount);
//    itemElementDiscount.classList.add("popap-card");

//    container.innerHTML = itemElementDiscount.outerHTML;

//    container.style.display = 'flex';

//    document.addEventListener('keydown', handleClickClose);
//    function handleClickClose(event) {
//       if (event.key === 'Escape') {
//          container.style.display = 'none';
//          itemElementDiscount.classList.remove("popap-card");
//          document.removeEventListener('keydown', handleClickClose);
//       }
//    }
// }

// //===============
// function handleClick(event) {
//    // console.log(event.target);
//    // if (event.target === event.currentTarget) {
//    //   return;
//    // }
//    //=============
//    if (
//       event.target.nodeName === 'BUTTON' ||
//       event.target.className === 'add-btn' ||
//       event.target.nodeName === 'IMG'
//    ) {
//       addBtnClick(event);
//       return;
//    }

//    const itemId = event.target.closest('.list-item').id;
//    const itemElement = document.getElementById(itemId);
//    itemElement.classList.add("popap-card");
//    // itemElement.createElement("button")

//    container.innerHTML = itemElement.outerHTML;

//    // const modalContent = createMarkupModal();
//    // container.innerHTML = modalContent;
//    container.style.display = 'flex';

//    document.addEventListener('keydown', handleClickClose);
//    function handleClickClose(event) {
//       if (event.key === 'Escape') {
//          container.style.display = 'none';
//          itemElement.classList.remove("popap-card");
//          document.removeEventListener('keydown', handleClickClose);
//       }
//    }
// }

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


// BasicLightBox modal
const mainProducts = document.querySelector('.products-container');
const popularProducts = document.querySelector('.popular-container');
const discountProducts = document.querySelector('.discount-container')

mainProducts.addEventListener('click', openModal)
popularProducts.addEventListener('click', openModal)
discountProducts.addEventListener('click', openModal)

function openModal(event) {
   if (
      event.target === event.currentTarget
      || event.target.nodeName === 'BUTTON'
      || event.target.className === 'add-btn'
      || event.target.className === 'popular-basket-img'
      || event.target.className === 'icon-styles'
      || event.target.className === 'discount-basket-icon'
      || event.target.alt === 'icon bascket'
   ) {
      return;
   }
   
   if (event.target.closest('.discount-list-item') !== null) {
      const targetProduct = event.target.closest('.discount-list-item');
      const targetProductId = targetProduct.id;
      renderProductModal(targetProductId, event)
   }

   if (event.target.closest('.list-item') !== null) {
      const targetProduct = event.target.closest('.list-item');
      const targetProductId = targetProduct.id;
      renderProductModal(targetProductId, event)
   }

   if (event.target.closest('.product-popular-card') !== null) {
      const targetProduct = event.target.closest('.product-popular-card');
      const targetProductId = targetProduct.id;
      renderProductModal(targetProductId, event)
   }
}

async function renderProductModal(id, e) {
   try {
      const data = [await fetchProducts(id)];
      const closeWithEsc = (evt) => {
         if (instance.visible() && evt.key === "Escape") {
            instance.close();
         }
      }
      const instance = basicLightBox.create(createMarkupModal(data), {
         onClose: (instance) => document.removeEventListener('keydown', closeWithEsc),
          onClose: (instance) => modalContainer.querySelector('.add-btn').removeEventListener('click', addBtnClick),
          onClose: (instance) => modalContainer.removeEventListener('click', modalClose)
      });
      instance.show();
      document.addEventListener('keydown', closeWithEsc);

      const modalContainer = document.querySelector('.basicLightbox__placeholder');
       modalContainer.querySelector('.add-btn').addEventListener('click', addBtnClick);
       modalContainer.addEventListener('click', modalClose)

       function modalClose(evt) {
            if (
                evt.target.className === 'remove-btn'
                || evt.target.className === 'remove-btn-img'
            ) {
                instance.close();
            }
                return;
        }
   } catch (error) {
      console.log(error.message);
   }
    
}

// modal for checkout


// btnCheckout.addEventListener('click', onModal)
// function onModal(evt) {
//   evt.preventDefault()
//   if (evt.target === currentTarget) {
//     return
//   }
//   const modalOn = basicLightbox.create(`<div id="myModal" class="modal">
//   <div class="modal-content">
//     <button class="btn-close">
//       <svg width="16" height="16">
//         <use href="./img/sprite.svg#icon-closed"></use>
//       </svg>
//     </button>
//     <div>
//       <h2 class="modalH">Order success</h2>
//       <p class="modalMessage">
//         Thank you for shopping at Food Boutique. Your order has been received
//         and is now being freshly prepared just for you! Get ready to indulge in
//         nourishing goodness, delivered right to your doorstep. We're thrilled to
//         be part of your journey to better health and happiness.
//       </p>
//     </div>
//   </div>
// </div>`, {
//      onShow: () => {
//       document.addEventListener('keydown', OnEscClose);
//     },
//     onClose: () => {
//       document.removeEventListener('keydown', OnEscClose);
//     },
//   });
//   modalOn.show();
//   function OnEscClose(evt) {
//     if (evt.code === 'Escape') return modalOn.close();
//   }
// }

