import icons from '../img/sprite.svg';
import minus from '../img/svg/minus.svg';
import plus from '../img/svg/plus.svg';
import basket from '../img/svg/basket.svg';
import discount from '../img/svg/discount.svg';
import popular from '../img/svg/organic-food.svg';
export function createMarkupProductsAll(arr) {
   return arr
      .map(
         ({ price, name, img, _id, category, size, popularity }) =>
            `
                  <li class="list-item" id="${_id}">
            <div class="list-item-img">
               <img width=100 src="${img}">
            </div>
            <p class="products-titel">${name}</p>
            <div class="list-item-info">
               <p>Category: <span>${category}</span></p>
               <p>Size: <span>${size}</span></p>
               <p>Popularity: <span>${popularity}</span></p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${price}</span>
               <button class="add-btn icon-styles">
                  <img src="${basket}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `
      )
      .join('');
}

export function createMarkupPopularProducts(arr) {
   return arr
      .map(({ price, name, img, _id, category, size, popularity }) => {
         return `<li class="list-item" id="${_id}" >
            <img width=100 src="${img}">
            <h3>${name}</h3>
            <p>Category:  <span>${category}</span></p>
            <p>Size:  <span>${size}</span></p>
            <p>Popularity:  <span>${popularity}</span></p>
            <p>&#36;<span>${price}</span></p>
            <button class="add-btn">
             <img src="${basket}" alt="icon bascket" width="18" height="18">
            </button>
        </li>`;
      })
      .join('');
}

export function createMarkupProductsDiscount(arr) {
   arr.splice(2);
   return arr
      .map(({ price, name, img, _id }) => {
         return `
         <li class="discount-list-item" id="${_id}" >
            <div class="discount-card">
               <img class="discount-icon" src="${discount}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${img}"></div>
            <div class="discount-info">
               <p>${name}</p>
               <button class="more-btn discount-link-basket">
                  &#36;<span class="discount-prise">${price}</span>
                  <span class="discount-basket-icon icon-styles">
                     <img src="${basket}" alt="icon bascket" width="18" height="18">
                  </span>
               </button>    
            </div>      
         </li>`;
      })
      .join('');
}

export function createMarkupCart(arr) {
  return arr
    .map(
      ({ price, name, img, _id, category, size }) =>
        `<li class="cart-list-item" id="${_id}" >
            <div class="cart-list-item-img-wrapper">
              <img class="cart-product-img" width=64 src="${img}">
            </div>
            <button class="remove-btn">+</button>
            <div class="cart-list-item-wrapper">
              <h3 class="products-titel">${name}</h3>
              <div class="list-item-info">
                <p>Category:  <span>${category}</span></p>
                <p>Size:  <span>${size}</span></p>
              </div>
              <p class="cart-item-price">$ <span>${price}</span></p>
              </div>
              <div class="cart-amount-wrapper">
                <button class="less-btn">
                  <img class="less-btn-img" src="${minus}" alt="icon bascket" width="18" height="18">
                </button>
                <span class="products-quantity"></span>
                <button class="more-btn">
                  <img class="more-btn-img" src="${plus}" alt="icon bascket" width="18" height="18">
                </button>
              </div>
        </li>`
      )
      .join('');
}

export function createMarkupModal(arr) {
   return arr
      .map(
         ({ price, name, img, _id, category, size, popularity, desc }) =>
            `
                  <li class="list-item" id="${_id}">
            <div class="list-item-img">
               <img width=100 src="${img}">
            </div>
            <p class="products-titel">${name}</p>
            <div class="list-item-info">
               <p>Category: <span>${category}</span></p>
               <p>Size: <span>${size}</span></p>
               <p>Popularity: <span>${popularity}</span></p>
               <p>${desc}</p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${price}</span>
               <button class="add-btn icon-styles">Add to
                   <img src="${basket}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `
      )
      .join('')

}// list-item-info