import{b as y}from"./vendor-4b9aba64.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const w="/project-GROUP_WORK_JS/assets/minus-7f58cb69.svg",k="/project-GROUP_WORK_JS/assets/plus-8292619f.svg",u="/project-GROUP_WORK_JS/assets/basket-a161fb4d.svg",v="/project-GROUP_WORK_JS/assets/discount-8db0687b.svg",S="/project-GROUP_WORK_JS/assets/popular-baskett-cb043ad6.svg",m="/project-GROUP_WORK_JS/assets/closed-bf66d401.svg";function K(s){return s.map(({price:e,name:a,img:o,_id:t,category:i,size:c,popularity:n,is10PercentOff:l})=>`<li class="list-item animation-style" id="${t}">
            <div class="list-item-img">
               ${l?`<img class="products-discount-icon animations-rotate" src="${v}" alt="icon discount" width="100" height="100">`:""} 
               <img class="product-img" width=100 src="${o}">
            </div>
            <p class="products-titel">${a}</p>
            <div class="list-item-info">
               <p>Category: <span>${i}</span></p>
               <p>Size: <span>${c}</span></p>
               <p>Popularity: <span>${n}</span></p>
            </div>
            <div class="list-item-body-price">
               <span>&#36;${e}</span>
               <button class="add-btn icon-styles">
               <img src="${u}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}function q(s){return s.map(({price:e,name:a,img:o,_id:t,category:i,size:c,popularity:n})=>`
           <div class="product-popular-card animation-style" id="${t}">
           <div class="popular-image-item">
               <img src="${o}" alt="${a}" class="product-popular-image">
           </div>
           <div class="parameters-popular-products">
               <h3 class="product-popular-title">${a}</h3>
               <p class="product-popular-category">
                   <span class="popular-text-card">Category:</span> ${i}
               </p>
               <div class="size-popularity">
                   <p class="product-popular-size text-size-popularity"><span class="popular-text-card">Size:</span> ${c}</p>
                   <p class="product-popularity text-size-popularity"><span class="popular-text-card">Popularity:</span> ${n}</p>
               </div>
               <button id="buy-button" class="add-popular-basket add-btn"('${a}')">
                   <img class="popular-basket-img" src="${S}" alt="icon bascket" width="12" height="12">
               </button>
           </div>
       </div>`).join("")}function J(s){return s.splice(2),s.map(({price:e,name:a,img:o,_id:t})=>`
         <li class="discount-list-item animation-style" id="${t}" >
            <div class="discount-card" >
               <img class="discount-icon animations-rotate" src="${v}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${o}"></div>
            <div class="discount-info">
               <p>${a}</p>
               <div class="discount-prise">
                <span>&#36;${e}</span>
                  <button class="discount-link-basket more-btn "> 
                  <span class="icon-styles">
                     <img class="discount-basket-icon" src="${u}" alt="icon bascket" width="18" height="18">
                  </span>
               </button> 
               </div>   
            </div>      
         </li>`).join("")}function M(s){return s.map(({price:e,name:a,img:o,_id:t,category:i,size:c})=>`<li class="cart-list-item" id="${t}" >
            <div class="cart-list-item-img-wrapper">
              <img class="cart-product-img" width=64 src="${o}">
            </div>
            <button class="remove-btn">
               <img class="remove-btn-img" src="${m}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="cart-list-item-wrapper">
              <h3 class="products-titel">${a}</h3>
              <div class="list-item-info">
                <p>Category:  <span>${i}</span></p>
                <p>Size:  <span>${c}</span></p>
              </div>
              <p class="cart-item-price">$ <span>${e}</span></p>
              </div>
              <div class="cart-amount-wrapper">
                <button class="less-btn">
                  <img class="less-btn-img" src="${w}" alt="icon bascket" width="18" height="18">
                </button>
                <span class="products-quantity"></span>
                <button class="more-btn-card">
                  <img class="more-btn-img" src="${k}" alt="icon bascket" width="18" height="18">
                </button>
              </div>
        </li>`).join("")}function W(s){return s.map(({price:e,name:a,img:o,_id:t,category:i,size:c,popularity:n,desc:l})=>`
         <li class="popup-list-item" id="${t}">
            <button class="remove-btn">
               <img class="remove-btn-img" src="${m}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="list-item-img">
               <img width=100 src="${o}">
            </div>
            <div class="list-item-info">
            <p class="products-titel">${a}</p>
               <p>Category: <span>${i}</span></p>
               <p>Size: <span>${c}</span></p>
               <p>Popularity: <span>${n}</span></p>
               <p class="modal-desc" >${l}</p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${e}</span>
               <button class="add-btn icon-styles">Add to
                   <img src="${u}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}const O="products in cart",P=document.querySelector(".header-basket-counter");function $(){const s=JSON.parse(localStorage.getItem(O))||[];P.textContent=s.length.toString()}window.addEventListener("storage",()=>{$()});$();const R="/project-GROUP_WORK_JS/assets/frut-popap-x1-e219a22f.png",_="/project-GROUP_WORK_JS/assets/frut-popap-x2-cdad5963.png",L=document.querySelector("#formEmail"),g=document.querySelector("#formInput");L.addEventListener("submit",j);function j(s){s.preventDefault();const e=g.value.trim();if(!E(e)){alert("Please enter a valid email address");return}if(e===""){alert("Please enter an email address");return}x({email:e}).then(()=>{console.log("Data sent successfully"),g.value="",z()}).catch(a=>{console.error("There was a problem with the fetch operation:",a)})}function x(s){return new Promise((e,a)=>{setTimeout(()=>{console.log("Imitating sending data to server:",s),e()},2e3)})}function E(s){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)}function z(){const s=y.create(`
   <div class="sub-modal">
      <button class="remove-btn">
         <img class="remove-btn-img" src="${m}" alt="icon bascket" width="18" height="18">
      </button>
      <div class="sub-modal-content">
         <h2 class="products-titel">Thanks for subscribing for <span>new</span> products</h2>
         <p>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      </div>
      <img
      class="sub-modal-pic"
         src="${R}"
         alt="Empty basket"
         srcset="${_}"
      />
   </div>
   `,{onClose:o=>e.removeEventListener("click",a)});s.show();const e=document.querySelector(".sub-modal");e.addEventListener("click",a);function a(o){(o.target.className==="remove-btn"||o.target.className==="remove-btn-img")&&s.close()}}let d=0;const b=60,p=document.querySelector(".header"),h=document.querySelector(".header-section"),r=()=>window.pageYOffset||document.documentElement.scrollTop,f=()=>p.classList.contains("hide");function G(){window.addEventListener("scroll",()=>{r()>d&&!f()&&r()>b?p.classList.add("hide"):r()<d&&f()&&p.classList.remove("hide"),r()>b?h.classList.add("scrolled"):h.classList.remove("scrolled"),d=r()})}export{$ as a,K as b,M as c,q as d,J as e,W as f,G as h};
//# sourceMappingURL=scroll-56838bf1.js.map
