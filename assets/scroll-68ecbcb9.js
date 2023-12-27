(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();const f="/project-GROUP_WORK_JS/assets/minus-7f58cb69.svg",b="/project-GROUP_WORK_JS/assets/plus-8292619f.svg",g="/project-GROUP_WORK_JS/assets/basket-a161fb4d.svg",h="/project-GROUP_WORK_JS/assets/discount-8db0687b.svg";function $(i){return i.map(({price:e,name:a,img:c,_id:s,category:t,size:o,popularity:n})=>`
                  <li class="list-item" id="${s}">
            <div class="list-item-img">
               <img width=100 src="${c}">
            </div>
            <p class="products-titel">${a}</p>
            <div class="list-item-info">
               <p>Category: <span>${t}</span></p>
               <p>Size: <span>${o}</span></p>
               <p>Popularity: <span>${n}</span></p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${e}</span>
               <button class="add-btn icon-styles">
                  <img src="${g}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}function y(i){return i.map(({price:e,name:a,img:c,_id:s,category:t,size:o,popularity:n})=>`
           <div class="product-popular-card">
           <div class="popular-image-item">
               <img src="${c}" alt="${a}" class="product-popular-image">
           </div>
           <div class="parameters-popular-products">
               <h3 class="product-popular-title">${a}</h3>
               <p class="product-popular-category">
                   <span class="popular-text-card">Category:</span> ${t}
               </p>
               <div class="size-popularity">
                   <p class="product-popular-size text-size-popularity"><span class="popular-text-card">Size:</span> ${o}</p>
                   <p class="product-popularity text-size-popularity"><span class="popular-text-card">Popularity:</span> ${n}</p>
               </div>
               <button id="buy-button" class="add-popular-basket add-btn"('${a}')">
                   <svg class="popular-basket-svg" width="12" height="12">
                       <use href="./img/sprite.svg#icon-popular-basket"></use>
                   </svg>
               </button>
           </div>
       </div>`).join("")}function k(i){return i.splice(2),i.map(({price:e,name:a,img:c,_id:s})=>`
         <li class="discount-list-item" id="${s}" >
            <div class="discount-card" >
               <img class="discount-icon" src="${h}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${c}"></div>
            <div class="discount-info">
               <p>${a}</p>
               <div class="discount-prise">
                <span>&#36;${e}</span>
                  <button class="discount-link-basket more-btn "> 
                  <span class="icon-styles">
                     <img class="discount-basket-icon" src="${g}" alt="icon bascket" width="18" height="18">
                  </span>
               </button> 
               </div>   
            </div>      
         </li>`).join("")}function w(i){return i.map(({price:e,name:a,img:c,_id:s,category:t,size:o})=>`<li class="cart-list-item" id="${s}" >
            <div class="cart-list-item-img-wrapper">
              <img class="cart-product-img" width=64 src="${c}">
            </div>
            <button class="remove-btn">+</button>
            <div class="cart-list-item-wrapper">
              <h3 class="products-titel">${a}</h3>
              <div class="list-item-info">
                <p>Category:  <span>${t}</span></p>
                <p>Size:  <span>${o}</span></p>
              </div>
              <p class="cart-item-price">$ <span>${e}</span></p>
              </div>
              <div class="cart-amount-wrapper">
                <button class="less-btn">
                  <img class="less-btn-img" src="${f}" alt="icon bascket" width="18" height="18">
                </button>
                <span class="products-quantity"></span>
                <button class="more-btn more-btn-card">
                  <img class="more-btn-img" src="${b}" alt="icon bascket" width="18" height="18">
                </button>
              </div>
        </li>`).join("")}const v="products in cart";function S(){const i=document.querySelector(".header-basket-counter"),e=JSON.parse(localStorage.getItem(v));e===null||e.length===0?i.textContent="0":i.textContent=`${e.length}`}let l=0;const d=60,p=document.querySelector(".header"),u=document.querySelector(".header-section"),r=()=>window.pageYOffset||document.documentElement.scrollTop,m=()=>p.classList.contains("hide");function O(){window.addEventListener("scroll",()=>{r()>l&&!m()&&r()>d?p.classList.add("hide"):r()<l&&m()&&p.classList.remove("hide"),r()>d?u.classList.add("scrolled"):u.classList.remove("scrolled"),l=r()})}export{S as a,$ as b,w as c,y as d,k as e,O as h};
//# sourceMappingURL=scroll-68ecbcb9.js.map