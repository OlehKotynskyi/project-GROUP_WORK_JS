import { createMarkupCart } from './template.js';
import addCounter from './cart-header-counter';
const title = document.querySelector('.products-quantity-title');
const totalPrice = document.querySelector('.products-total-price');
const containerCart = document.querySelector('.cart-container');
const cartWrapper = document.querySelector('.cart-desktop-wrapper');
const emptyCart = document.querySelector('.cart-empty');
const deleteAllBtn = document.querySelector('.del-all-wrapper');
const KEY = 'products in cart';

const formEmailRet = document.querySelector('.form-checkout');
const formInputRet = document.getElementById('.inputEmail');
const btnSumbit = document.querySelector('.btnCheckout');

renderCart();

// очистка всієї корзини (localStorage)
deleteAllBtn.addEventListener('click', clearCart);
function clearCart() {
  localStorage.removeItem(KEY);
  renderCart();
}

// якщо localStorage пустий, показувати розмітку пустої корзини
// і приховувати розмітку товарів.
// Викликається в cart.page.js
export function renderCart() {
  addCounter();
  const products = JSON.parse(localStorage.getItem(KEY));

  if (products === null || products === undefined || products.length === 0) {
    cartWrapper.style.display = 'none';
    emptyCart.style.display = 'block';
    containerCart.innerHTML = '';
    title.textContent = 'Cart (0)';
    totalPrice.textContent = '$0';
  } else {
    containerCart.innerHTML = '';
    // cartWrapper.style.display = 'flex';
    emptyCart.style.display = 'none';

    containerCart.insertAdjacentHTML('beforeend', createMarkupCart(products));
    const productsQuantity = document.querySelectorAll('.products-quantity');

    products.forEach((el, index) => {
      productsQuantity[index].textContent = el.quantity;
    });

    countTotal(products);
  }
}

// видалення конкретного продукту
// можна оптимізувати ??
containerCart.addEventListener('click', removeProduct);
function removeProduct(event) {
  if (
    event.target.className !== 'remove-btn'
    && event.target.className !== 'remove-btn-img') {
    return;
  }

  const selectedItem = event.target.closest('.cart-list-item');
  const selectedItemId = selectedItem.id;
  const products = JSON.parse(localStorage.getItem(KEY));
  const index = products.findIndex(item => item._id === selectedItemId);

  products.splice(index, 1);
  localStorage.setItem(KEY, JSON.stringify(products));
  selectedItem.remove();
  addCounter();

  countTotal(products);

  if (products === null || products === undefined || products.length === 0) {
    renderCart();
    return;
  }
}

// віднімання і додавання кількості продукту
// логіка в тому, щоб дозволити юзеру мати 0 продуктів не видаляючи його
// з першого разу, але на другий клік по мінусу він видаляється
// (на випадок того, коли випадково проклікав, щоб мати змогу доддати кількість знову).
// !!!
// на майбутнє - треба прописати логіку, щоб при кліку на checkout
// юзеру вилітало повідомлення, щоб або видалив, або додав кількість більше за 0.
// Тобто, при кліку на кнопку Checkout, треба пройтись по localStorage(KEY), і якщо є хоч один обєкт з quantity: 0, вивести повідомлення
containerCart.addEventListener('click', changeQuantity);
function changeQuantity(event) {
  if (
    event.target.className !== 'more-btn-img'
    && event.target.className !== 'less-btn'
    && event.target.className !== 'more-btn-card'
    && event.target.className !== 'less-btn-img'
  ) {
    return;
  }
  
  const selectedItem = event.target.closest('.cart-list-item');
  const selectedItemId = selectedItem.id;
  const products = JSON.parse(localStorage.getItem(KEY));
  const index = products.findIndex(item => item._id === selectedItemId);
  const productQuantity = selectedItem.querySelector('.products-quantity');

  // тут обробляємо додавання
  if (
    event.target.className === 'more-btn-card'
    || event.target.className === 'more-btn-img'
  ) {
    products[index].quantity++;
    productQuantity.innerHTML = products[index].quantity;
    localStorage.setItem(KEY, JSON.stringify(products));
    countTotal(products)
  }

  // тут обробляємо віднімання
  if (
    event.target.className === 'less-btn'
    || event.target.className === 'less-btn-img'
  ) {
    // тут видаляємо при повторному кліку на мінус, коли кількість товару нуль
    if (products[index].quantity === 0) {
      products.splice(index, 1);
      selectedItem.remove();
      localStorage.setItem(KEY, JSON.stringify(products));
      addCounter();
      countTotal(products);
      // тут показуємо пусту корзину, коли товарів не залишилось взагалі
      if (products === null || products === undefined || products.length === 0) {
        renderCart();
      }
      return;
    }
    // тут обробляємо звичайне віднімання
    products[index].quantity--;
    productQuantity.innerHTML = products[index].quantity;
    localStorage.setItem(KEY, JSON.stringify(products));
    countTotal(products)
  }
}

// обрахунок суми кошика
function countTotal(obj) {
  title.textContent = `Cart (${obj.length})`;
  const total = obj.reduce((acc, { quantity, price }) => {
    return (acc += quantity * price);
  }, 0);
  totalPrice.textContent = `$${total.toFixed(2)}`;
}

//email and checkout
formEmailRet.addEventListener('sumbit', function (evt) {
  if (!formEmailRet.value) {
    alert('Please enter a valid email');
  
    //return;
  }
});
// document
//   .getElementById('subscribeFormEm')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();

//     var emailInput = document.getElementById('form');
//     var email = emailInput.value;
// console.log(email)
//     if (!validateEmail(email)) {
//       alert('Please enter a valid email address');
//       return;
//     }

//     // Відправляємо дані на сервер за допомогою fetch
//     fetch('', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email: email }),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         console.log('Data sent successfully');
//         // Очищаємо поле введення після успішної відправки
//         emailInput.value = '';
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   });

// // Функція для перевірки коректності введеної електронної пошти
// function validateEmail(email) {
//   var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return emailRegex.test(email);
// }



//modal window

//const closeBtn = document.querySelector(".btn-close")
const btnCheckout = document.querySelector('.btnCheckout')
const modalCheckout = document.querySelector('.modal')
const formOrder = document.querySelector('#formEmailOrder')
const inputOrder = document.querySelector('#formInputOrder')

formOrder.addEventListener('submit', handleOrder);
inputOrder.addEventListener('keyup', handleKeyPress);

function handleOrder(event) {
  event.preventDefault();
  const email = inputOrder.value.trim();
  const products = JSON.parse(localStorage.getItem(KEY));

  const productsInCart = products.reduce((acc, { quantity }) => {
    return (acc += quantity);
  }, 0);

  if (productsInCart === 0) {
      alert(`You must add products' quantity!`)
      return;
  }
  
  if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
  }
  
  if (email === '') {
      alert('Please enter an email address');
      return;
  }

  sendDataToServer({ email })
    .then(() => {
        console.log('Data sent successfully');
        inputOrder.value = '';
        clearCart()
        modalCheckout.style.display = "block";
    })
    .catch(error => {
        console.error('There was a problem with the fetchoperation:', error);
    });
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modalCheckout.style.display = "none";
}


window.onclick = function(event) {
  if (event.currentTarget.className !== 'modal') {
    modalCheckout.style.display = "none";
  }
}

function validateEmail(email) {
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return emailRegex.test(email);
}

function handleKeyPress(event) {
   if (event.key === 'Enter') {
      handleFormSubmit(event);
   }
}

function sendDataToServer(data) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log('Imitating sending data to server:', data);
         resolve();
      }, 2000);
   });
}