(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();function c(n){return n.map(({price:e,name:r,img:i,_id:s,category:t,size:o,popularity:a})=>`
                  <li class="list-item" id="${s}">
            <div class="list-item-img">
               <img width=100 src="${i}">
            </div>
            <p class="products-titel">${r}</p>
            <div class="list-item-info">
               <p>Category: <span>${t}</span></p>
               <p>Size: <span>${o}</span></p>
               <p>Popularity: <span>${a}</span></p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${e}</span>
               <button class="add-btn icon-styles">
                  <svg width="18" height="18">
                     <use href="./img/sprite.svg#icon-basket"></use>
                  </svg>
               </button>
            </div>
         </li>
         `).join("")}function p(n){return n.map(({price:e,name:r,img:i,_id:s,category:t,size:o,popularity:a})=>`<li class="list-item" id="${s}" >
            <img width=100 src="${i}">
            <h3>${r}</h3>
            <p>Category:  <span>${t}</span></p>
            <p>Size:  <span>${o}</span></p>
            <p>Popularity:  <span>${a}</span></p>
            <p>$ <span>${e}</span></p>
            <button class="add-btn">+</button>
        </li>`).join("")}function l(n){return n.splice(2),n.map(({price:e,name:r,img:i,_id:s})=>`<li class="discount-list-item" id="${s}" >
            <div class="discount-card">
            <svg class="icon-styles discount-icon" width="14" height="14" > 
      <use href="../img/sprite.svg#icon-discount"> </use > 
      </svg > 
            <img class="discount-img" src="${i}"></div>
            <div class="discount-info">
            <h3>${r}</h3>
            <p>$ <span>${e}</span></p>
            <a href="../cart-page.html" class="header-link-basket icon-styles">
                     <svg width="14" height="14" > 
      <use href="../img/sprite.svg#icon-basket"> </use > 
      </svg > 
             </a>     
            </div>      
        </li>`).join("")}function u(n){return n.map(({price:e,name:r,img:i,_id:s,category:t,size:o})=>`<li class="list-item" id="${s}" >
            <img width=100 src="${i}">
            <button class="remove-btn">X</button>
            <h3>${r}</h3>
            <p>Category:  <span>${t}</span></p>
            <p>Size:  <span>${o}</span></p>
            <p>$ <span>${e}</span></p>
            <button class="less-btn">-</button>
            <span class="products-quantity"></span>
            <button class="more-btn">+</button>
        </li>`).join("")}export{c as a,p as b,u as c,l as d};
//# sourceMappingURL=template-3bd7251c.js.map
