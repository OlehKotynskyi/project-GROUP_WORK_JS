(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}})();const c="/project-GROUP_WORK_JS/assets/sprite-3fe8f026.svg";function p(n){return n.map(({price:e,name:o,img:i,_id:s,category:t,size:r,popularity:a})=>`
                  <li class="list-item" id="${s}">
            <div class="list-item-img">
               <img width=100 src="${i}">
            </div>
            <p class="products-titel">${o}</p>
            <div class="list-item-info">
               <p>Category: <span>${t}</span></p>
               <p>Size: <span>${r}</span></p>
               <p>Popularity: <span>${a}</span></p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${e}</span>
               <button class="add-btn icon-styles">
                  <svg width="18" height="18">
                     <use xlink:href="${c}#icon-basket"></use>
                  </svg>
               </button>
            </div>
         </li>
         `).join("")}function l(n){return n.map(({price:e,name:o,img:i,_id:s,category:t,size:r,popularity:a})=>`<li class="list-item" id="${s}" >
            <img width=100 src="${i}">
            <h3>${o}</h3>
            <p>Category:  <span>${t}</span></p>
            <p>Size:  <span>${r}</span></p>
            <p>Popularity:  <span>${a}</span></p>
            <p>$ <span>${e}</span></p>
            <button class="add-btn">+</button>
        </li>`).join("")}function u(n){return n.splice(2),n.map(({price:e,name:o,img:i,_id:s})=>`<li class="discount-list-item" id="${s}" >
            <div class="discount-card">
            <svg class="icon-styles discount-icon" width="14" height="14" > 
      <use href="../img/sprite.svg#icon-discount"> </use > 
      </svg > 
            <img class="discount-img" src="${i}"></div>
            <div class="discount-info">
            <h3>${o}</h3>
            <p>$ <span>${e}</span></p>
            <a href="../cart-page.html" class="header-link-basket icon-styles">
                     <svg width="14" height="14" > 
      <use href="../img/sprite.svg#icon-basket"> </use > 
      </svg > 
             </a>     
            </div>      
        </li>`).join("")}function d(n){return n.map(({price:e,name:o,img:i,_id:s,category:t,size:r})=>`<li class="list-item" id="${s}" >
            <img width=100 src="${i}">
            <button class="remove-btn">X</button>
            <h3>${o}</h3>
            <p>Category:  <span>${t}</span></p>
            <p>Size:  <span>${r}</span></p>
            <p>$ <span>${e}</span></p>
            <button class="less-btn">-</button>
            <span class="products-quantity"></span>
            <button class="more-btn">+</button>
        </li>`).join("")}export{p as a,l as b,d as c,u as d};
//# sourceMappingURL=template-575a984e.js.map
