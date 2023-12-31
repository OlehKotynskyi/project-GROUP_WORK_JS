import{b as $}from"./vendor-4b9aba64.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const y="/project-GROUP_WORK_JS/assets/minus-7f58cb69.svg",w="/project-GROUP_WORK_JS/assets/plus-8292619f.svg",u="/project-GROUP_WORK_JS/assets/basket-a161fb4d.svg",v="/project-GROUP_WORK_JS/assets/discount-8db0687b.svg",k="/project-GROUP_WORK_JS/assets/popular-baskett-cb043ad6.svg",m="/project-GROUP_WORK_JS/assets/closed-bf66d401.svg";function C(e){return e.map(({price:t,name:a,img:o,_id:s,category:i,size:c,popularity:n,is10PercentOff:l})=>`<li class="list-item animation-style" id="${s}">
            <div class="list-item-img">
               ${l?`<img class="products-discount-icon" src="${v}" alt="icon discount" width="100" height="100">`:""} 
               <img class="product-img" width=100 src="${o}">
            </div>
            <p class="products-titel">${a}</p>
            <div class="list-item-info">
               <p>Category: <span>${i}</span></p>
               <p>Size: <span>${c}</span></p>
               <p>Popularity: <span>${n}</span></p>
            </div>
            <div class="list-item-body-price">
               <span>&#36;${t}</span>
               <button class="add-btn icon-styles">
               <img src="${u}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}function E(e){return e.map(({price:t,name:a,img:o,_id:s,category:i,size:c,popularity:n})=>`
           <div class="product-popular-card animation-style" id="${s}">
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
                   <img class="popular-basket-img" src="${k}" alt="icon bascket" width="12" height="12">
               </button>
           </div>
       </div>`).join("")}function K(e){return e.splice(2),e.map(({price:t,name:a,img:o,_id:s})=>`
         <li class="discount-list-item animation-style" id="${s}" >
            <div class="discount-card" >
               <img class="discount-icon" src="${v}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${o}"></div>
            <div class="discount-info">
               <p>${a}</p>
               <div class="discount-prise">
                <span>&#36;${t}</span>
                  <button class="discount-link-basket more-btn "> 
                  <span class="icon-styles">
                     <img class="discount-basket-icon" src="${u}" alt="icon bascket" width="18" height="18">
                  </span>
               </button> 
               </div>   
            </div>      
         </li>`).join("")}function q(e){return e.map(({price:t,name:a,img:o,_id:s,category:i,size:c})=>`<li class="cart-list-item" id="${s}" >
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
              <p class="cart-item-price">$ <span>${t}</span></p>
              </div>
              <div class="cart-amount-wrapper">
                <button class="less-btn">
                  <img class="less-btn-img" src="${y}" alt="icon bascket" width="18" height="18">
                </button>
                <span class="products-quantity"></span>
                <button class="more-btn-card">
                  <img class="more-btn-img" src="${w}" alt="icon bascket" width="18" height="18">
                </button>
              </div>
        </li>`).join("")}function J(e){return e.map(({price:t,name:a,img:o,_id:s,category:i,size:c,popularity:n,desc:l})=>`
         <li class="popup-list-item" id="${s}">
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
                <span>&#36;${t}</span>
               <button class="add-btn icon-styles">Add to
                   <img src="${u}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}const S="products in cart";function M(){const e=document.querySelector(".header-basket-counter"),t=JSON.parse(localStorage.getItem(S));t===null||t.length===0?e.textContent="0":e.textContent=`${t.length}`}const O="/project-GROUP_WORK_JS/assets/frut-popap-x1-e219a22f.png",P="/project-GROUP_WORK_JS/assets/frut-popap-x2-cdad5963.png",R=document.querySelector("#formEmail"),g=document.querySelector("#formInput");R.addEventListener("submit",_);function _(e){e.preventDefault();const t=g.value.trim();if(!L(t)){alert("Please enter a valid email address");return}if(t===""){alert("Please enter an email address");return}x({email:t}).then(()=>{console.log("Data sent successfully"),g.value="",j()}).catch(a=>{console.error("There was a problem with the fetch operation:",a)})}function x(e){return new Promise((t,a)=>{setTimeout(()=>{console.log("Imitating sending data to server:",e),t()},2e3)})}function L(e){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)}function j(){const e=$.create(`
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
         src="${O}"
         alt="Empty basket"
         srcset="${P}"
      />
   </div>
   `,{onClose:o=>t.removeEventListener("click",a)});e.show();const t=document.querySelector(".sub-modal");t.addEventListener("click",a);function a(o){(o.target.className==="remove-btn"||o.target.className==="remove-btn-img")&&e.close()}}let p=0;const b=60,d=document.querySelector(".header"),h=document.querySelector(".header-section"),r=()=>window.pageYOffset||document.documentElement.scrollTop,f=()=>d.classList.contains("hide");function W(){window.addEventListener("scroll",()=>{r()>p&&!f()&&r()>b?d.classList.add("hide"):r()<p&&f()&&d.classList.remove("hide"),r()>b?h.classList.add("scrolled"):h.classList.remove("scrolled"),p=r()})}export{M as a,C as b,q as c,E as d,K as e,J as f,W as h};
//# sourceMappingURL=scroll-541f6c76.js.map
