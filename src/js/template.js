import icons from '../img/sprite.svg';
import minus from '../img/svg/minus.svg';
import plus from '../img/svg/plus.svg';
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
                  <svg width="18" height="18">
                     <use xlink:href="${icons}#icon-basket"></use>
                  </svg>
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
            <p>$ <span>${price}</span></p>
            <button class="add-btn">+</button>
        </li>`;
      })
      .join('');
}

export function createMarkupProductsDiscount(arr) {
   arr.splice(2);
   return arr
      .map(({ price, name, img, _id }) => {
         return `<li class="discount-list-item" id="${_id}" >
            <div class="discount-card">
            <svg class="icon-styles discount-icon" width="14" height="14" > 
      <use href="./img/sprite.svg#icon-discount"> </use > 
      </svg > 
            <img class="discount-img" src="${img}"></div>
            <div class="discount-info">
            <p>${name}</p>
            <a href="./cart-page.html" class="discount-link-basket">
            &dollar;<span class="discount-prise">${price}</span>
            <span class="discount-basket-icon icon-styles">
                     <svg  width="18" height="18" > 
      <use href="./img/sprite.svg#icon-basket"> </use > 
      </svg > 
      </span>
             </a>     
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
                  <svg width="18" height="18">
                     <use xlink:href="${icons}#icon-basket"></use>
                  </svg>
               </button>
            </div>
         </li>
         `
      )
      .join('')

}// list-item-info