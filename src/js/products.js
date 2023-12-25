import {
   createMarkupProductsAll,
   createMarkupPopularProducts,
   createMarkupProductsDiscount,
} from './template.js';
import { fetchProductsAll, fetchProducts } from './fetch.js';
const containerAll = document.querySelector('.products-container');
const containerPopular = document.querySelector('.popular-container');
const containerDiscount = document.querySelector('.discount-container');
const KEY = 'products in cart';

async function renderAll() {
   try {
      const data = await fetchProductsAll('Fresh_Produce')
      containerAll.insertAdjacentHTML("beforeend", createMarkupProductsAll(data))
   } catch (error) {
      console.log(error.message)
   }
}
renderAll()


export async function renderPopular() {
  try {
    const data = await fetchProducts('popular');
    const newData = removeUnderscores(data);

    containerPopular.insertAdjacentHTML("beforeend", createMarkupPopularProducts(newData));
  } catch (error) {
    console.error('Error fetching and rendering popular products:', error.message);
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

export async function addBtnClick(event) {
   if (event.target.nodeName !== 'BUTTON') {
      return;
   }
   const selectedItem = event.target.closest('.list-item');
   const selectedItemId = selectedItem.id;
   console.log(selectedItemId);
   try {
      const currentProduct = await fetchProducts(selectedItemId);
      const products = JSON.parse(localStorage.getItem(KEY)) ?? [];
      console.log(products);
      const index = products.findIndex(item => item._id === selectedItemId);
      console.log(index);

      if (index !== -1) {
         products[index].quantity += 1;
      } else {
         currentProduct.quantity = 1;
         products.push(currentProduct);
      }
      localStorage.setItem(KEY, JSON.stringify(products));
   } catch (error) {
      console.log(error.message);
   }
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