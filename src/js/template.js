import icons from '../img/sprite.svg';
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
         //  `<li class="list-item" id="${_id}" >
         //      <img width=100 src="${img}">
         //      <h3>${name}</h3>
         //      <p>Category:  <span>${category}</span></p>
         //      <p>Size:  <span>${size}</span></p>
         //      <p>Popularity:  <span>${popularity}</span></p>
         //      <p>$ <span>${price}</span></p>
         //      <button class="add-btn">+</button>
         //  </li>`
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
            `<li class="list-item" id="${_id}" >
            <img width=100 src="${img}">
            <button class="remove-btn">X</button>
            <h3>${name}</h3>
            <p>Category:  <span>${category}</span></p>
            <p>Size:  <span>${size}</span></p>
            <p>$ <span>${price}</span></p>
            <button class="less-btn">-</button>
            <span class="products-quantity"></span>
            <button class="more-btn">+</button>
        </li>`
      )
      .join('');
}
