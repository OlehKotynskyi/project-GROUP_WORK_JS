(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();function p(a){return a.map(({price:e,name:r,img:s,_id:t,category:n,size:o,popularity:i})=>`<li class="list-item" id="${t}" >
            <img width=100 src="${s}">
            <h3>${r}</h3>
            <p>Category:  <span>${n}</span></p>
            <p>Size:  <span>${o}</span></p>
            <p>Popularity:  <span>${i}</span></p>
            <p>$ <span>${e}</span></p>
            <button class="add-btn">+</button>
        </li>`).join("")}function u(a){return a.map(({price:e,name:r,img:s,_id:t,category:n,size:o,popularity:i})=>`<li class="list-item" id="${t}" >
            <img width=100 src="${s}">
            <h3>${r}</h3>
            <p>Category:  <span>${n}</span></p>
            <p>Size:  <span>${o}</span></p>
            <p>Popularity:  <span>${i}</span></p>
            <p>$ <span>${e}</span></p>
            <button class="add-btn">+</button>
        </li>`).join("")}function l(a){return a.map(({price:e,name:r,img:s,_id:t})=>`<li class="list-item" id="${t}" >
            <button class="discount-btn">discount</button>
            <img width=100 src="${s}">
            <h3>${r}</h3>
            <p>$ <span>${e}</span></p>
            <button class="add-btn">+</button>
        </li>`).join("")}function c(a){return a.map(({price:e,name:r,img:s,_id:t,category:n,size:o})=>`<li class="list-item" id="${t}" >
            <img width=100 src="${s}">
            <button class="remove-btn">X</button>
            <h3>${r}</h3>
            <p>Category:  <span>${n}</span></p>
            <p>Size:  <span>${o}</span></p>
            <p>$ <span>${e}</span></p>
            <button class="less-btn">-</button>
            <span class="products-quantity"></span>
            <button class="more-btn">+</button>
        </li>`).join("")}export{p as a,u as b,c,l as d};
//# sourceMappingURL=template-8036ce4e.js.map
