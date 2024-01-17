const KEY = 'products in cart';
const counter = document.querySelector('.header-basket-counter');

function addCounter() {
  const productsCounter = JSON.parse(localStorage.getItem(KEY)) || [];
  counter.textContent = productsCounter.length.toString();
}

export default addCounter;

// Слушаем событие storage, чтобы обновлять счетчик при изменении localStorage
window.addEventListener('storage', () => {
  addCounter();
});

// Вызываем addCounter при загрузке страницы
addCounter();
