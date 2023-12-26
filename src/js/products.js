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
  // Перевіряємо, що products не є null і має властивість length
  if (!products || products.length === 0) {
    container.innerHTML = `<p>Nothing was found for the selected filters...</p>
                              <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>`;
  } else {
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
  } else {
    // Десктоп і вище
    return 9;
  }
}
renderAll();

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
  } catch (error) {
    console.log(error.message);
  }
}

// async function renderAll() {
//   try {
//     const data = await fetchProductsAll('Fresh_Produce');
//     containerAll.insertAdjacentHTML(
//       'beforeend',
//       createMarkupProductsAll(products)
//     );
//     addCounter();
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// renderAll();

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

async function addBtnClickDiscount(event) {
  if (
    event.target.nodeName === 'BUTTON' ||
    event.target.nodeName === 'SPAN' ||
    //   event.target.nodeName === 'IMG'
    event.target.className === 'discount-basket-icon'
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
        currentProduct.quantity = 0;
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

async function addBtnClick(event) {
  if (
    event.target.nodeName === 'BUTTON' ||
    event.target.className === 'add-btn' ||
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
    } catch (error) {
      console.error();
    }
  }
  return;
}

containerPopular.addEventListener('click', addBtnClickPopularCard);

async function addBtnClickPopularCard(event) {
  if (
    event.target.nodeName === 'BUTTON' ||
    event.target.nodeName === 'svg' ||
    event.target.nodeName === 'use'
  ) {
    const selectedItem = event.target.closest('.product-popular-card');

    const selectedItemId = selectedItem.id;

    try {
      const currentProduct = await fetchProducts(selectedItemId);
      const products = JSON.parse(localStorage.getItem(KEY)) ?? [];

      const index = products.findIndex(item => item._id === selectedItemId);

      if (index !== -1) {
        products[index].quantity += 1;
      } else {
        currentProduct.quantity = 0;
        products.push(currentProduct);
        const button = selectedItem.querySelector('button');
        button.disabled = true;
        button.innerHTML = `<svg class="popular-basket-svg" width="12" height="12">
         <use href="../img/sprite.svg#icon-check"></use>
         </svg>`;
        //   button.classList.add('disabled')
      }
      localStorage.setItem(KEY, JSON.stringify(products));
      addCounter();
    } catch (error) {
      console.log(error.message);
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
