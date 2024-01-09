import icons from '../img/sprite.svg';
import minus from '../img/svg/minus.svg';
import plus from '../img/svg/plus.svg';
import basket from '../img/svg/basket.svg';
import discount from '../img/svg/discount.svg';
import popular from '../img/svg/popular-baskett.svg';
import organic from '../img/svg/organic-food.svg';
import closed from '../img/svg/closed.svg'

export function createMarkupProductsAll(arr) {
   return arr
     .map(
       ({
         price,
         name,
         img,
         _id,
         category,
         size,
         popularity,
         is10PercentOff,
       }) =>
         `<li class="list-item animation-style" id="${_id}">
            <div class="list-item-img">
               ${
                 is10PercentOff
                   ? `<img class="products-discount-icon animations-rotate" src="${discount}" alt="icon discount" width="100" height="100">`
                   : ''
               } 
               <img class="product-img" width=100 src="${img}">
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
         return `
           <div class="product-popular-card animation-style" id="${_id}">
           <div class="popular-image-item">
               <img src="${img}" alt="${name}" class="product-popular-image">
           </div>
           <div class="parameters-popular-products">
               <h3 class="product-popular-title">${name}</h3>
               <p class="product-popular-category">
                   <span class="popular-text-card">Category:</span> ${category}
               </p>
               <div class="size-popularity">
                   <p class="product-popular-size text-size-popularity"><span class="popular-text-card">Size:</span> ${size}</p>
                   <p class="product-popularity text-size-popularity"><span class="popular-text-card">Popularity:</span> ${popularity}</p>
               </div>
               <button id="buy-button" class="add-popular-basket add-btn"('${name}')">
                   <img class="popular-basket-img" src="${popular}" alt="icon bascket" width="12" height="12">
               </button>
           </div>
       </div>`;
      })
      .join('');
}

export function createMarkupProductsDiscount(arr) {
   arr.splice(2);
   return arr
      .map(({ price, name, img, _id }) => {
         return `
         <li class="discount-list-item animation-style" id="${_id}" >
            <div class="discount-card" >
               <img class="discount-icon animations-rotate" src="${discount}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${img}"></div>
            <div class="discount-info">
               <p>${name}</p>
               <div class="discount-prise">
                <span>&#36;${price}</span>
                  <button class="discount-link-basket more-btn "> 
                  <span class="icon-styles">
                     <img class="discount-basket-icon" src="${basket}" alt="icon bascket" width="18" height="18">
                  </span>
               </button> 
               </div>   
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
            <button class="remove-btn">
               <img class="remove-btn-img" src="${closed}" alt="icon bascket" width="18" height="18">
            </button>
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
                <button class="more-btn-card">
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
         <li class="popup-list-item" id="${_id}">
            <button class="remove-btn">
               <img class="remove-btn-img" src="${closed}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="list-item-img">
               <img width=100 src="${img}">
            </div>
            <div class="list-item-info">
            <p class="products-titel">${name}</p>
               <p>Category: <span>${category}</span></p>
               <p>Size: <span>${size}</span></p>
               <p>Popularity: <span>${popularity}</span></p>
               <p class="modal-desc" >${desc}</p>
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
      .join('');
} // list-item-info
