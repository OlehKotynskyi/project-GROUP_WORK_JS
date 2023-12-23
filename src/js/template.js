export function createMarkupProductsAll(arr) {
  return arr
    .map(
      ({ price, name, img, _id, category, size, popularity }) =>
        `<li class="list-item" id="${_id}" >
            <img width=100 src="${img}">
            <h3>${name}</h3>
            <p>Category:  <span>${category}</span></p>
            <p>Size:  <span>${size}</span></p>
            <p>Popularity:  <span>${popularity}</span></p>
            <p>$ <span>${price}</span></p>
            <button class="add-btn">+</button>
        </li>`
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
      <use href="../img/sprite.svg#icon-discount"> </use > 
      </svg > 
            <img class="discount-img" src="${img}"></div>
            <div class="discount-info">
            <h3>${name}</h3>
            <p>$ <span>${price}</span></p>
            <a href="../cart-page.html" class="header-link-basket icon-styles">
                     <svg width="14" height="14" > 
      <use href="../img/sprite.svg#icon-basket"> </use > 
      </svg > 
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
              <img width=64 src="${img}">
            </div>
            <div class="cart-list-item-wrapper">
              <button class="remove-btn">X</button>
              <h3>${name}</h3>
              <p>Category:  <span>${category}</span></p>
              <p>Size:  <span>${size}</span></p>
              <p>$ <span>${price}</span></p>
              <button class="less-btn">
                <svg width="18" height="18">
                  <use href="../img/sprite.svg#icon-minus"></use>
                </svg>
              </button>
              <span class="products-quantity"></span>
              <button class="more-btn">
                <svg width="18" height="18">
                  <use href="../img/sprite.svg#icon-plus"></use>
                </svg>
              </button>
            </div>
        </li>`
    )
    .join('');
}
