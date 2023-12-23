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
  
  // async function renderAll() {
  //     try {
  //         const data = await fetchProductsAll('Fresh_Produce')
  //         containerAll.insertAdjacentHTML("beforeend", createMarkupProductsAll(data))
  //     } catch (error) {
  //         console.log(error.message)
  //     }
  // }
  // renderAll()
  
  // async function renderPopular() {
  //     try {
  //         const data = await fetchProducts('popular')
  //         containerPopular.insertAdjacentHTML("beforeend", createMarkupPopularProducts(data))
  //     } catch (error) {
  //         console.log(error.message)
  //     }
  // }
  // renderPopular()
  
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

  // Функція оновлення списку продуктів
  export function updateProductsList(products) {
    const container = document.querySelector('.products-container');
    
    // Перевірка, чи є дані про продукти
    if (products.length > 0) {
        // Якщо є продукти, виводимо їх
        container.innerHTML = createMarkupProductsAll(products);
    } else {
        // Якщо продуктів немає, виводимо повідомлення
        container.innerHTML = `<p>Nothing was found for the selected filters...</p>
                               <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>`;
    }
}