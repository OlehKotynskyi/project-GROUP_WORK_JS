(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();const h="/project-GROUP_WORK_JS/assets/minus-7f58cb69.svg",g="/project-GROUP_WORK_JS/assets/plus-8292619f.svg",p="/project-GROUP_WORK_JS/assets/basket-a161fb4d.svg",b="/project-GROUP_WORK_JS/assets/discount-8db0687b.svg";function v(i){return i.map(({price:e,name:c,img:n,_id:t,category:s,size:o,popularity:r})=>`
                  <li class="list-item" id="${t}">
            <div class="list-item-img">
               <img width=100 src="${n}">
            </div>
            <p class="products-titel">${c}</p>
            <div class="list-item-info">
               <p>Category: <span>${s}</span></p>
               <p>Size: <span>${o}</span></p>
               <p>Popularity: <span>${r}</span></p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${e}</span>
               <button class="add-btn icon-styles">
                  <img src="${p}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}function y(i){return i.map(({price:e,name:c,img:n,_id:t,category:s,size:o,popularity:r})=>`<li class="list-item" id="${t}" >
            <img width=100 src="${n}">
            <h3>${c}</h3>
            <p>Category:  <span>${s}</span></p>
            <p>Size:  <span>${o}</span></p>
            <p>Popularity:  <span>${r}</span></p>
            <p>&#36;<span>${e}</span></p>
            <button class="add-btn">
             <img src="${p}" alt="icon bascket" width="18" height="18">
            </button>
        </li>`).join("")}function w(i){return i.splice(2),i.map(({price:e,name:c,img:n,_id:t})=>`
         <li class="discount-list-item" id="${t}" >
            <div class="discount-card">
               <img class="discount-icon" src="${b}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${n}"></div>
            <div class="discount-info">
               <p>${c}</p>
               <button class="more-btn discount-link-basket">
                  &#36;<span class="discount-prise">${e}</span>
                  <span class="discount-basket-icon icon-styles">
                     <img src="${p}" alt="icon bascket" width="18" height="18">
                  </span>
               </button>    
            </div>      
         </li>`).join("")}function S(i){return i.map(({price:e,name:c,img:n,_id:t,category:s,size:o})=>`<li class="cart-list-item" id="${t}" >
            <div class="cart-list-item-img-wrapper">
              <img class="cart-product-img" width=64 src="${n}">
            </div>
            <button class="remove-btn">+</button>
            <div class="cart-list-item-wrapper">
              <h3 class="products-titel">${c}</h3>
              <div class="list-item-info">
                <p>Category:  <span>${s}</span></p>
                <p>Size:  <span>${o}</span></p>
              </div>
              <p class="cart-item-price">$ <span>${e}</span></p>
              </div>
              <div class="cart-amount-wrapper">
                <button class="less-btn">
                  <img class="less-btn-img" src="${h}" alt="icon bascket" width="18" height="18">
                </button>
                <span class="products-quantity"></span>
                <button class="more-btn">
                  <img class="more-btn-img" src="${g}" alt="icon bascket" width="18" height="18">
                </button>
              </div>
        </li>`).join("")}const $="products in cart";function k(){const i=document.querySelector(".header-basket-counter"),e=JSON.parse(localStorage.getItem($));e===null||e.length===0?i.textContent="0":i.textContent=`${e.length}`}let l=0;const u=60,d=document.querySelector(".header"),m=document.querySelector(".header-section"),a=()=>window.pageYOffset||document.documentElement.scrollTop,f=()=>d.classList.contains("hide");function O(){window.addEventListener("scroll",()=>{a()>l&&!f()&&a()>u?d.classList.add("hide"):a()<l&&f()&&d.classList.remove("hide"),a()>u?m.classList.add("scrolled"):m.classList.remove("scrolled"),l=a()})}export{k as a,v as b,S as c,y as d,w as e,O as h};
//# sourceMappingURL=scroll-1c848ebd.js.map
