function addCounter() {
  const counter = document.querySelector('.header-basket-counter');
  const productsCounter = JSON.parse(localStorage.getItem(KEY));
  counter.textContent = `${productsCounter.length}`;
}
