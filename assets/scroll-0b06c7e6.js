import{b as y}from"./vendor-4b9aba64.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const k="/project-GROUP_WORK_JS/assets/minus-7f58cb69.svg",w="/project-GROUP_WORK_JS/assets/plus-8292619f.svg",m="/project-GROUP_WORK_JS/assets/basket-a161fb4d.svg",v="/project-GROUP_WORK_JS/assets/discount-8db0687b.svg",S="/project-GROUP_WORK_JS/assets/popular-baskett-cb043ad6.svg",g="/project-GROUP_WORK_JS/assets/closed-bf66d401.svg";function j(t){return t.map(({price:s,name:i,img:o,_id:e,category:a,size:c,popularity:n,is10PercentOff:l})=>`<li class="list-item" id="${e}">
            <div class="list-item-img">
               ${l?`<img class="products-discount-icon" src="${v}" alt="icon discount" width="100" height="100">`:""} 
               <img class="product-img" width=100 src="${o}">
            </div>
            <p class="products-titel">${i}</p>
            <div class="list-item-info">
               <p>Category: <span>${a}</span></p>
               <p>Size: <span>${c}</span></p>
               <p>Popularity: <span>${n}</span></p>
            </div>
            <div class="list-item-body-price">
               <span>&#36;${s}</span>
               <button class="add-btn icon-styles">
               <img src="${m}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}function z(t){return t.map(({price:s,name:i,img:o,_id:e,category:a,size:c,popularity:n})=>`
           <div class="product-popular-card" id="${e}">
           <div class="popular-image-item">
               <img src="${o}" alt="${i}" class="product-popular-image">
           </div>
           <div class="parameters-popular-products">
               <h3 class="product-popular-title">${i}</h3>
               <p class="product-popular-category">
                   <span class="popular-text-card">Category:</span> ${a}
               </p>
               <div class="size-popularity">
                   <p class="product-popular-size text-size-popularity"><span class="popular-text-card">Size:</span> ${c}</p>
                   <p class="product-popularity text-size-popularity"><span class="popular-text-card">Popularity:</span> ${n}</p>
               </div>
               <button id="buy-button" class="add-popular-basket add-btn"('${i}')">
                   <img class="popular-basket-img" src="${S}" alt="icon bascket" width="12" height="12">
               </button>
           </div>
       </div>`).join("")}function C(t){return t.splice(2),t.map(({price:s,name:i,img:o,_id:e})=>`
         <li class="discount-list-item" id="${e}" >
            <div class="discount-card" >
               <img class="discount-icon" src="${v}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${o}"></div>
            <div class="discount-info">
               <p>${i}</p>
               <div class="discount-prise">
                <span>&#36;${s}</span>
                  <button class="discount-link-basket more-btn "> 
                  <span class="icon-styles">
                     <img class="discount-basket-icon" src="${m}" alt="icon bascket" width="18" height="18">
                  </span>
               </button> 
               </div>   
            </div>      
         </li>`).join("")}function q(t){return t.map(({price:s,name:i,img:o,_id:e,category:a,size:c})=>`<li class="cart-list-item" id="${e}" >
            <div class="cart-list-item-img-wrapper">
              <img class="cart-product-img" width=64 src="${o}">
            </div>
            <button class="remove-btn">
               <img class="remove-btn-img" src="${g}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="cart-list-item-wrapper">
              <h3 class="products-titel">${i}</h3>
              <div class="list-item-info">
                <p>Category:  <span>${a}</span></p>
                <p>Size:  <span>${c}</span></p>
              </div>
              <p class="cart-item-price">$ <span>${s}</span></p>
              </div>
              <div class="cart-amount-wrapper">
                <button class="less-btn">
                  <img class="less-btn-img" src="${k}" alt="icon bascket" width="18" height="18">
                </button>
                <span class="products-quantity"></span>
                <button class="more-btn-card">
                  <img class="more-btn-img" src="${w}" alt="icon bascket" width="18" height="18">
                </button>
              </div>
        </li>`).join("")}function K(t){return t.map(({price:s,name:i,img:o,_id:e,category:a,size:c,popularity:n,desc:l})=>`
         <li class="popup-list-item" id="${e}">
            <button class="remove-btn">
               <img class="remove-btn-img" src="${g}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="list-item-img">
               <img width=100 src="${o}">
            </div>
            <div class="list-item-info">
            <p class="products-titel">${i}</p>
               <p>Category: <span>${a}</span></p>
               <p>Size: <span>${c}</span></p>
               <p>Popularity: <span>${n}</span></p>
               <p class="modal-desc" >${l}</p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${s}</span>
               <button class="add-btn icon-styles">Add to
                   <img src="${m}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}const P="products in cart";function M(){const t=document.querySelector(".header-basket-counter"),s=JSON.parse(localStorage.getItem(P));s===null||s.length===0?t.textContent="0":t.textContent=`${s.length}`}const O=document.querySelector("#formEmail"),d=document.querySelector("#formInput");O.addEventListener("submit",$);d.addEventListener("keyup",x);function $(t){t.preventDefault();const s=d.value.trim();if(!R(s)){alert("Please enter a valid email address");return}if(s===""){alert("Please enter an email address");return}L({email:s}).then(()=>{console.log("Data sent successfully"),d.value="",_()}).catch(i=>{console.error("There was a problem with the fetch operation:",i)})}function x(t){t.key==="Enter"&&$(t)}function L(t){return new Promise((s,i)=>{setTimeout(()=>{console.log("Imitating sending data to server:",t),s()},2e3)})}function R(t){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)}function _(){const t=y.create(`
   <div class="sub-modal">
      <button class="remove-btn">
         <img class="remove-btn-img" src="${g}" alt="icon bascket" width="18" height="18">
      </button>
      <div class="sub-modal-content">
         <h2 class="products-titel">Thanks for subscribing for <span>new</span> products</h2>
         <p>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      </div>
      <img
      class="sub-modal-pic"
         src="./img/basket-s-popap/frut-popap-x1.png"
         alt="Empty basket"
         srcset="./img/basket-s-popap/frut-popap-x2.png 2x"
      />
   </div>
   `,{onClose:o=>s.removeEventListener("click",i)});t.show();const s=document.querySelector(".sub-modal");s.addEventListener("click",i);function i(o){(o.target.className==="remove-btn"||o.target.className==="remove-btn-img")&&t.close()}}let p=0;const b=60,u=document.querySelector(".header"),h=document.querySelector(".header-section"),r=()=>window.pageYOffset||document.documentElement.scrollTop,f=()=>u.classList.contains("hide");function J(){window.addEventListener("scroll",()=>{r()>p&&!f()&&r()>b?u.classList.add("hide"):r()<p&&f()&&u.classList.remove("hide"),r()>b?h.classList.add("scrolled"):h.classList.remove("scrolled"),p=r()})}export{M as a,j as b,q as c,z as d,C as e,K as f,J as h};
//# sourceMappingURL=scroll-0b06c7e6.js.map
