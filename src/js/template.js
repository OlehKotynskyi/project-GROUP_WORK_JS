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
      return `
           <div class="product-popular-card">
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
                   <svg class="popular-basket-svg" width="12" height="12">
                       <use href="./img/sprite.svg#icon-popular-basket"></use>
                   </svg>
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
         <li class="discount-list-item" id="${_id}" >
            <div class="discount-card">
               <img class="discount-icon" src="${discount}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${img}"></div>
            <div class="discount-info">
               <p>${name}</p>
               <span class="discount-prise">&#36;${price}
                 <button class="more-btn discount-link-basket"> <span class="discount-basket-icon icon-styles">
                     <img src="${basket}" alt="icon bascket" width="18" height="18">
                  </span>
               </button>
               </span>   
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
    .join('');
} // list-item-info
