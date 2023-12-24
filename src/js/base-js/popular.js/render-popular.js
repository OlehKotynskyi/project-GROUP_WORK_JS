import { fetchPopularCard } from './fetch-popular';

const popularContainer = document.querySelector('.popular-container');

async function fetchDataAndRender() {
  try {
    const products = await fetchPopularCard();
    renderPopularCard(products);
  } catch (error) {
    console.error('error', error);
  }
}
fetchDataAndRender();


export function removeUnderscores(arr) {
  return arr.map(obj => {
    let category = obj.category;
    if (typeof category === 'string') {
      category = category.split('_').join(' ');
    }
    return {...obj, category};
  });
}

export function renderPopularCard(data) {
  let markup = '';
  const newData = removeUnderscores(data);
  newData.forEach(({ img, name, category, size, popularity }) => {
    markup += `
    <div class="product-popular-card">
    <div class="popular-image-item">
        <img src="${img}" alt="${name}" class="product-popular-image">
    </div>
    <div class="parameters-popular-products">
        <h3 class="product-popular-title">${name}</h3>
        <p class="product-popular-category">
            <span class="popular-text-card">Category:</span> ${category}
        </p>
        <div class="size-popularity">
            <p class="product-popular-size text-size-popularity"><span class="popular-text-card">Size:</span> ${size}</p>
            <p class="product-popularity text-size-popularity"><span class="popular-text-card">Popularity:</span> ${popularity}</p>
        </div>
        <button id="buy-button" class="add-popular-basket" onclick="add_to_basket('${name}')">
            <svg class="popular-basket-svg" width="12" height="12">
                <use href="./img/sprite.svg#icon-popular-basket"></use>
            </svg>
        </button>
    </div>
</div>
    `;
  });

  popularContainer.innerHTML += markup;
}


