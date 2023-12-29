(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const $="/project-GROUP_WORK_JS/assets/minus-7f58cb69.svg",y="/project-GROUP_WORK_JS/assets/plus-8292619f.svg",m="/project-GROUP_WORK_JS/assets/basket-a161fb4d.svg",b="/project-GROUP_WORK_JS/assets/discount-8db0687b.svg",k="/project-GROUP_WORK_JS/assets/popular-baskett-cb043ad6.svg",w="/project-GROUP_WORK_JS/assets/closed-bf66d401.svg";function _(s){return s.map(({price:e,name:a,img:c,_id:t,category:i,size:o,popularity:n,is10PercentOff:l})=>`<li class="list-item" id="${t}">
            <div class="list-item-img">
               ${l?`<img class="products-discount-icon" src="${b}" alt="icon discount" width="100" height="100">`:""} 
               <img class="product-img" width=100 src="${c}">
            </div>
            <p class="products-titel">${a}</p>
            <div class="list-item-info">
               <p>Category: <span>${i}</span></p>
               <p>Size: <span>${o}</span></p>
               <p>Popularity: <span>${n}</span></p>
            </div>
            <div class="list-item-body-price">
               <span>&#36;${e}</span>
               <button class="add-btn icon-styles">
               <img src="${m}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}function j(s){return s.map(({price:e,name:a,img:c,_id:t,category:i,size:o,popularity:n})=>`
           <div class="product-popular-card" id="${t}">
           <div class="popular-image-item">
               <img src="${c}" alt="${a}" class="product-popular-image">
           </div>
           <div class="parameters-popular-products">
               <h3 class="product-popular-title">${a}</h3>
               <p class="product-popular-category">
                   <span class="popular-text-card">Category:</span> ${i}
               </p>
               <div class="size-popularity">
                   <p class="product-popular-size text-size-popularity"><span class="popular-text-card">Size:</span> ${o}</p>
                   <p class="product-popularity text-size-popularity"><span class="popular-text-card">Popularity:</span> ${n}</p>
               </div>
               <button id="buy-button" class="add-popular-basket add-btn"('${a}')">
                   <img class="popular-basket-img" src="${k}" alt="icon bascket" width="12" height="12">
               </button>
           </div>
       </div>`).join("")}function z(s){return s.splice(2),s.map(({price:e,name:a,img:c,_id:t})=>`
         <li class="discount-list-item" id="${t}" >
            <div class="discount-card" >
               <img class="discount-icon" src="${b}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${c}"></div>
            <div class="discount-info">
               <p>${a}</p>
               <div class="discount-prise">
                <span>&#36;${e}</span>
                  <button class="discount-link-basket more-btn "> 
                  <span class="icon-styles">
                     <img class="discount-basket-icon" src="${m}" alt="icon bascket" width="18" height="18">
                  </span>
               </button> 
               </div>   
            </div>      
         </li>`).join("")}function x(s){return s.map(({price:e,name:a,img:c,_id:t,category:i,size:o})=>`<li class="cart-list-item" id="${t}" >
            <div class="cart-list-item-img-wrapper">
              <img class="cart-product-img" width=64 src="${c}">
            </div>
            <button class="remove-btn">
               <img class="remove-btn-img" src="${w}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="cart-list-item-wrapper">
              <h3 class="products-titel">${a}</h3>
              <div class="list-item-info">
                <p>Category:  <span>${i}</span></p>
                <p>Size:  <span>${o}</span></p>
              </div>
              <p class="cart-item-price">$ <span>${e}</span></p>
              </div>
              <div class="cart-amount-wrapper">
                <button class="less-btn">
                  <img class="less-btn-img" src="${$}" alt="icon bascket" width="18" height="18">
                </button>
                <span class="products-quantity"></span>
                <button class="more-btn-card">
                  <img class="more-btn-img" src="${y}" alt="icon bascket" width="18" height="18">
                </button>
              </div>
        </li>`).join("")}function C(s){return s.map(({price:e,name:a,img:c,_id:t,category:i,size:o,popularity:n,desc:l})=>`
                  <li class="popup-list-item" id="${t}">
            <div class="list-item-img">
               <img width=100 src="${c}">
            </div>
            <div class="list-item-info">
            <p class="products-titel">${a}</p>
               <p>Category: <span>${i}</span></p>
               <p>Size: <span>${o}</span></p>
               <p>Popularity: <span>${n}</span></p>
               <p class="modal-desc" >${l}</p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${e}</span>
               <button class="add-btn icon-styles">Add to
                   <img src="${m}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}const S="products in cart";function E(){const s=document.querySelector(".header-basket-counter"),e=JSON.parse(localStorage.getItem(S));e===null||e.length===0?s.textContent="0":s.textContent=`${e.length}`}const P=document.querySelector("#formEmail"),p=document.querySelector("#formInput");P.addEventListener("submit",v);p.addEventListener("keyup",O);function v(s){s.preventDefault();const e=p.value.trim();if(!L(e)){alert("Please enter a valid email address");return}if(e===""){alert("Please enter an email address");return}R({email:e}).then(()=>{console.log("Data sent successfully"),p.value=""}).catch(a=>{console.error("There was a problem with the fetch operation:",a)})}function O(s){s.key==="Enter"&&v(s)}function R(s){return new Promise((e,a)=>{setTimeout(()=>{console.log("Imitating sending data to server:",s),e()},2e3)})}function L(s){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)}let d=0;const g=60,u=document.querySelector(".header"),f=document.querySelector(".header-section"),r=()=>window.pageYOffset||document.documentElement.scrollTop,h=()=>u.classList.contains("hide");function K(){window.addEventListener("scroll",()=>{r()>d&&!h()&&r()>g?u.classList.add("hide"):r()<d&&h()&&u.classList.remove("hide"),r()>g?f.classList.add("scrolled"):f.classList.remove("scrolled"),d=r()})}export{E as a,_ as b,x as c,j as d,z as e,C as f,K as h};
//# sourceMappingURL=scroll-0ead67dc.js.map
