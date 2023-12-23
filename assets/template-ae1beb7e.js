(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function c(n){return n.splice(2),n.map(({price:s,name:o,img:i,_id:e})=>`<li class="discount-list-item" id="${e}" >
            <div class="discount-card">
            <svg class="icon-styles discount-icon" width="14" height="14" > 
      <use href="../img/sprite.svg#discount"> </use > 
      </svg > 
            <img class="discount-img" src="${i}"></div>
            <div class="discount-info">
            <h3>${o}</h3>
            <p>$ <span>${s}</span></p>
            <a href="../cart-page.html" class="header-link-basket icon-styles">
                     <svg width="14" height="14" > 
      <use href="../img/sprite.svg#icon-basket"> </use > 
      </svg > 
             </a>     
            </div>      
        </li>`).join("")}function a(n){return n.map(({price:s,name:o,img:i,_id:e,category:t,size:r})=>`<li class="list-item" id="${e}" >
            <img width=100 src="${i}">
            <button class="remove-btn">X</button>
            <h3>${o}</h3>
            <p>Category:  <span>${t}</span></p>
            <p>Size:  <span>${r}</span></p>
            <p>$ <span>${s}</span></p>
            <button class="less-btn">-</button>
            <span class="products-quantity"></span>
            <button class="more-btn">+</button>
        </li>`).join("")}export{c as a,a as c};
//# sourceMappingURL=template-ae1beb7e.js.map
