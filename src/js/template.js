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
      return `<li class="list-item" id="${_id}" >
            <button class="discount-btn">discount</button>
            <img width=100 src="${img}">
            <h3>${name}</h3>
            <p>$ <span>${price}</span></p>
            <button class="add-btn">+</button>
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
