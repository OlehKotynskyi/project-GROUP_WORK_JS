import { createMarkupCart } from './template.js';
import addCounter from './cart-header-counter';
const title = document.querySelector('.products-quantity-title');
const totalPrice = document.querySelector('.products-total-price');
const containerCart = document.querySelector('.cart-container');
const cartWrapper = document.querySelector('.cart-desktop-wrapper');
const emptyCart = document.querySelector('.cart-empty');
const deleteAllBtn = document.querySelector('.del-all-btn');
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

// додавання, віднімання продуктів
// const moreBtn = document.querySelectorAll('.more-btn')
// const lessBtn = document.querySelectorAll('.less-btn')
// const numberValue = document.querySelector('.products-quantity')
 


// видалення конкретного продукту
// можна оптимізувати
containerCart.addEventListener('click', removeProduct);
function removeProduct(event) {
  if (event.target.className !== 'remove-btn') {
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
