
    //     return arr.map(({ price, name, img, _id, category, size, popularity }) =>
    //     ` <div class="popup-content" id="${_id}">
    //       <button type="button" class="popup-close close-popup btn-close-modal">
    //           <svg class="modal-btn" width="8" heigth="8">
    //              <use href="../img/sprite.svg#icon-closed"></use>
    //           </svg>
    //       </button>
    //       <div class="block">
    //         <img width=100 src="${img}">
    //       </div>
    //       <div class="info">
    //          <h3 class="info-title">${name}</h3>
    //          <div class="info-block">
    //             <div class="info-block-div_first">
    //                <h5 class="info-block-div-h5">Category<span class="info-block-div-span">${category}</span></h5>
    //                <h5 class="info-block-div-h5">Size<span class="info-block-div-span">${size}</span></h5>
    //             </div>
    //             <div class="info-block-div_sec">
    //                <h5 class="info-block-div-h5">Popular<span class="info-block-div-span">${popularity}</span></h5>
    //             </div>
    //             <p class="inf0-block-p">A round, orange vegetable with a thick shell and seeds inside. It is often used in cooking and baking for its sweet and earthy flavor.</p>
    //             <div class="info-block-div_price">
    //                <h5 class="info-block-price">${price}</h5>
    //                <button type="button " class="btn-styles btn_add">Add to
    //                   <svg width="14" height="14" > 
    //                      <use href="./img/sprite.svg#icon-basket" > </use > 
    //                   </svg >
    //                </button>
    //             </div>
    //          </div>
    //       </div>
    //      </div>
    //     `
    // ).join('')
      import { fetchProducts } from "./fetch";

    //   async function renderAll() {
    //     try {
    //         const data = await fetchProductsAll('Fresh_Produce')
    //         containerAll.insertAdjacentHTML("beforeend", createMarkupProductsAll(data))
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }
    // renderAll()

