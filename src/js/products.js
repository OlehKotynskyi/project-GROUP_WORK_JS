import {
  createMarkupProductsAll,
  createMarkupPopularProducts,
  createMarkupProductsDiscount,
} from './template.js';
import { fetchProductsAll, fetchProducts } from './fetch.js';
import addCounter from './cart-header-counter.js';

const containerAll = document.querySelector('.products-container');
const containerPopular = document.querySelector('.popular-container');
const containerDiscount = document.querySelector('.discount-container');

const KEY = 'products in cart';

// Функція для оновлення списку продуктів
export function updateProductsList(products) {
  const container = document.querySelector('.products-container');
  if (products.length === 0) {
      container.innerHTML = `<p>Nothing was found for the selected filters...</p>
                             <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>`;
  } else {
      container.innerHTML = createMarkupProductsAll(products);
  }
}

async function renderAll() {
  try {
    const data = await fetchProductsAll('Fresh_Produce');
    containerAll.insertAdjacentHTML('beforeend', createMarkupProductsAll(data));
    addCounter();
  } catch (error) {
    console.log(error.message);
  }
}
renderAll();

async function renderPopular() {
  try {
    const data = await fetchProducts('popular');
    containerPopular.insertAdjacentHTML(
      'beforeend',
      createMarkupPopularProducts(data)
    );
  } catch (error) {
    console.log(error.message);
  }
}
renderPopular();

async function renderDiscount() {
  const data = await fetchProducts('discount');
  containerDiscount.insertAdjacentHTML(
    'beforeend',
    createMarkupProductsDiscount(data)
  );
}
renderDiscount();

containerAll.addEventListener('click', addBtnClick);

async function addBtnClick(event) {
  console.log(event.target.nodeName);
  console.log(event.target.className);
  if (
    event.target.nodeName === 'BUTTON' ||
    event.target.nodeName === 'IMG'
    //   && event.target.nodeName !== 'use'
  ) {
    //     return;
    //   }
    const selectedItem = event.target.closest('.list-item');

    const selectedItemId = selectedItem.id;

    try {
      const currentProduct = await fetchProducts(selectedItemId);
      const products = JSON.parse(localStorage.getItem(KEY)) ?? [];

      const index = products.findIndex(item => item._id === selectedItemId);

      if (index !== -1) {
        products[index].quantity += 1;
      } else {
        currentProduct.quantity = 1;
        products.push(currentProduct);
      }
      localStorage.setItem(KEY, JSON.stringify(products));
      addCounter();
    } catch (error) {
      console.log(error.message);
    }
    return;
  }
}
//===============================
containerDiscount.addEventListener('click', addBtnClickDiscount);

async function addBtnClickDiscount(event) {
  if (
    event.target.nodeName === 'BUTTON' ||
    event.target.nodeName === 'IMG' ||
    event.target.nodeName === 'SPAN'
  ) {
    const selectedItem = event.target.closest('.discount-list-item');

    const selectedItemId = selectedItem.id;

    try {
      const currentProduct = await fetchProducts(selectedItemId);
      const products = JSON.parse(localStorage.getItem(KEY)) ?? [];

      const index = products.findIndex(item => item._id === selectedItemId);

      if (index !== -1) {
        products[index].quantity += 1;
      } else {
        currentProduct.quantity = 1;
        products.push(currentProduct);
      }
      localStorage.setItem(KEY, JSON.stringify(products));
      addCounter();
    } catch (error) {
      console.log(error.message);
    }
  }
  return;
}

//================================
