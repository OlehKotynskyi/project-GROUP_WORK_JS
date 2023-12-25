(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const c="/project-GROUP_WORK_JS/assets/basket-a161fb4d.svg",l="/project-GROUP_WORK_JS/assets/discount-8db0687b.svg";function p(n){return n.map(({price:i,name:o,img:e,_id:t,category:s,size:a,popularity:r})=>`
                  <li class="list-item" id="${t}">
            <div class="list-item-img">
               <img width=100 src="${e}">
            </div>
            <p class="products-titel">${o}</p>
            <div class="list-item-info">
               <p>Category: <span>${s}</span></p>
               <p>Size: <span>${a}</span></p>
               <p>Popularity: <span>${r}</span></p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${i}</span>
               <button class="add-btn icon-styles">
                  <img src="${c}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}function u(n){return n.map(({price:i,name:o,img:e,_id:t,category:s,size:a,popularity:r})=>`<li class="list-item" id="${t}" >
            <img width=100 src="${e}">
            <h3>${o}</h3>
            <p>Category:  <span>${s}</span></p>
            <p>Size:  <span>${a}</span></p>
            <p>Popularity:  <span>${r}</span></p>
            <p>&#36;<span>${i}</span></p>
            <button class="add-btn">
             <img src="${c}" alt="icon bascket" width="18" height="18">
            </button>
        </li>`).join("")}function d(n){return n.splice(2),n.map(({price:i,name:o,img:e,_id:t})=>`
         <li class="discount-list-item" id="${t}" >
            <div class="discount-card">
               <img class="discount-icon" src="${l}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${e}"></div>
            <div class="discount-info">
               <p>${o}</p>
               <button class="more-btn discount-link-basket">
                  &#36;<span class="discount-prise">${i}</span>
                  <span class="discount-basket-icon icon-styles">
                     <img src="${c}" alt="icon bascket" width="18" height="18">
                  </span>
               </button>    
            </div>      
         </li>`).join("")}function m(n){return n.map(({price:i,name:o,img:e,_id:t,category:s,size:a})=>`<li class="list-item" id="${t}" >
            <img width=100 src="${e}">
            <button class="remove-btn">X</button>
            <h3>${o}</h3>
            <p>Category:  <span>${s}</span></p>
            <p>Size:  <span>${a}</span></p>
            <p>&#36;<span>${i}</span></p>
            <button class="less-btn">-</button>
            <span class="products-quantity"></span>
            <button class="more-btn">
             <img src="${c}" alt="icon bascket" width="18" height="18">
            </button>
        </li>`).join("")}export{p as a,u as b,m as c,d};
//# sourceMappingURL=template-71ec6c1e.js.map
