import {
  createMarkupProductsAll,
  createMarkupPopularProducts,
  createMarkupProductsDiscount,
} from './template.js';
import check from '../img/svg/check.svg';
import { fetchProductsAll, fetchProducts } from './fetch.js';
import addCounter from './cart-header-counter.js';

const containerAll = document.querySelector('.products-container');
const containerPopular = document.querySelector('.popular-container');
const containerDiscount = document.querySelector('.discount-container');

const KEY = 'products in cart';

// Функція для оновлення списку продуктів
export function updateProductsList(products) {
  const container = document.querySelector('.products-container');
  if (!products || products.length === 0) {
    // Якщо продуктів немає, показуємо повідомлення
    container.innerHTML = `<div class="cart-empty empty-filter">
           <h3 class="products-titel">Nothing was found for the selected <span>filters...</span></h3>
           <p class="filters-text-not-found">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
       </div>`;
  } else {
    // Якщо продукти є, заповнюємо контейнер продуктами і приховуємо повідомлення, якщо воно було показано
    container.innerHTML = createMarkupProductsAll(products);
  }
}

export function getProductsLimit() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    // Мобільні пристрої
    return 6;
  } else if (screenWidth >= 768 && screenWidth < 1440) {
    // Таблет
    return 8;
  } else if (screenWidth > 1440) {
    // Десктоп і вище
    return 9;
  }
}
// renderAll();

// перемішування масиву та вибору випадкових продуктів
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Перемішування елементів
  }
}

async function renderPopular() {
  try {
    const data = await fetchProducts('popular');
    const newData = removeUnderscores(data);
    const randomData = getRandomProducts(newData, 5); // Вибірка 5 випадкових продуктів
    containerPopular.innerHTML = createMarkupPopularProducts(randomData);
  } catch (error) {
    console.log(error.message);
  }
}

renderPopular();

async function renderAll() {
  try {
    const data = await fetchProductsAll('Fresh_Produce');
    containerAll.insertAdjacentHTML(
      'beforeend',
      createMarkupProductsAll(removeUnderscores(data))
    );
    addCounter();
    // console.log(data)
  } catch (error) {
    console.log(error.message);
  }
}

function getRandomProducts(products, count) {
  shuffleArray(products);
  return products.slice(0, count);
}

async function renderDiscount() {
  try {
    const data = await fetchProducts('discount');
    const randomData = getRandomProducts(data, 2); // Вибірка 2 випадкових продуктів
    containerDiscount.innerHTML = createMarkupProductsDiscount(randomData);
  } catch (error) {
    console.log(error.message);
  }
  return;
}

containerDiscount.addEventListener('click', addBtnClickDiscount);

export async function addBtnClickDiscount(event) {
  if (
    event.target.className === 'discount-link-basket' ||
    event.target.className === 'discount-basket-icon' ||
    event.target.className === 'discount-basket-icon'
  ) {
    const selectedItem = event.target.closest('.discount-list-item');

    const selectedItemId = selectedItem.id;

    try {
      const currentProduct = await fetchProducts(selectedItemId);
      const products = JSON.parse(localStorage.getItem(KEY)) ?? [];

      const index = products.findIndex(item => item._id === selectedItemId);

      if (index !== -1) {
        products[index].quantity += 0;
      } else {
        currentProduct.quantity = 1;
        products.push(currentProduct);
        const button = selectedItem.querySelector('button');
        button.disabled = true;
        button.innerHTML = `<span class="icon-styles">
                     <img class="discount-basket-icon" src="${check}" alt="icon bascket" width="18" height="18">

                  </span>`;
        button.classList.add('disabled');
      }
      localStorage.setItem(KEY, JSON.stringify(products));
      addCounter();
    } catch (error) {
      console.log(error.message);
    }
  }
  return;
}

renderDiscount();

containerAll.addEventListener('click', addBtnClick);

export async function addBtnClick(event) {
  if (
    event.target.nodeName === 'BUTTON' ||
    event.target.className === 'add-btn' ||
    event.target.nodeName === 'IMG'
  ) {
    const selectedItem = event.target.closest('.list-item-body-price');

    // Проверяем, есть ли родительский элемент
    if (selectedItem && selectedItem.parentElement) {
      const selectedItemId = selectedItem.parentElement.id;

      try {
        const currentProduct = await fetchProducts(selectedItemId);
        const products = JSON.parse(localStorage.getItem(KEY)) ?? [];

        const index = products.findIndex(item => item._id === selectedItemId);

        if (index !== -1) {
          products[index].quantity += 0;
        } else {
          currentProduct.quantity = 1;
          products.push(currentProduct);
          //==========
          const button = selectedItem.querySelector('button');
          button.disabled = true;
          button.innerHTML = `<img src="${check}" alt="icon check" width="18" height="18">`;
          button.classList.add('disabled');
          //=========
        }
        localStorage.setItem(KEY, JSON.stringify(products));
        addCounter();
      } catch (error) {
        console.error(error.message);
      }
    }
  }
  return;
}

containerPopular.addEventListener('click', addBtnClickPopularCard);

async function addBtnClickPopularCard(event) {
  if (
    event.target.nodeName === 'BUTTON' ||
    event.target.className === 'popular-basket-img'
  ) {
    const selectedItem = event.target.closest('.product-popular-card');
    const selectedItemId = selectedItem.id;
    const button = selectedItem.querySelector('button');
    button.disabled = true;

    try {
      const currentProduct = await fetchProducts(selectedItemId);
      const products = JSON.parse(localStorage.getItem(KEY)) ?? [];

      const index = products.findIndex(item => item._id === selectedItemId);

      if (index !== -1) {
        products[index].quantity += 0;
      } else {
        currentProduct.quantity = 1;
        products.push(currentProduct);
        button.innerHTML = `<img class="popular-disadbled-img" src="${check}" alt="icon bascket" width="20" height="20">`;
        button.classList.add('popular-disadbled-btn');
      }
      localStorage.setItem(KEY, JSON.stringify(products));
      addCounter();
    } catch (error) {
      console.log(error.message);
      button.disabled = false;
    }
  }
  return;
}

// Функція для видалення підкреслення між словами
export function removeUnderscores(arr) {
  return arr.map(obj => {
    let category = obj.category;
    if (typeof category === 'string') {
      category = category.split('_').join(' ');
    }
    return { ...obj, category };
  });
}
