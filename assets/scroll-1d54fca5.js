import{S as F,P as G,a as T,b as M}from"./vendor-4ea89540.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const Y="/project-GROUP_WORK_JS/assets/minus-7f58cb69.svg",Z="/project-GROUP_WORK_JS/assets/plus-8292619f.svg",S="/project-GROUP_WORK_JS/assets/basket-a161fb4d.svg",C="/project-GROUP_WORK_JS/assets/discount-8db0687b.svg",Q="/project-GROUP_WORK_JS/assets/popular-baskett-cb043ad6.svg",k="/project-GROUP_WORK_JS/assets/closed-bf66d401.svg";function _(t){return t.map(({price:e,name:s,img:a,_id:o,category:n,size:c,popularity:i,is10PercentOff:m})=>`<li class="list-item" id="${o}">
            <div class="list-item-img">
               ${m?`<img class="products-discount-icon" src="${C}" alt="icon discount" width="100" height="100">`:""} 
               <img class="product-img" width=100 src="${a}">
            </div>
            <p class="products-titel">${s}</p>
            <div class="list-item-info">
               <p>Category: <span>${n}</span></p>
               <p>Size: <span>${c}</span></p>
               <p>Popularity: <span>${i}</span></p>
            </div>
            <div class="list-item-body-price">
               <span>&#36;${e}</span>
               <button class="add-btn icon-styles">
               <img src="${S}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}function V(t){return t.map(({price:e,name:s,img:a,_id:o,category:n,size:c,popularity:i})=>`
           <div class="product-popular-card" id="${o}">
           <div class="popular-image-item">
               <img src="${a}" alt="${s}" class="product-popular-image">
           </div>
           <div class="parameters-popular-products">
               <h3 class="product-popular-title">${s}</h3>
               <p class="product-popular-category">
                   <span class="popular-text-card">Category:</span> ${n}
               </p>
               <div class="size-popularity">
                   <p class="product-popular-size text-size-popularity"><span class="popular-text-card">Size:</span> ${c}</p>
                   <p class="product-popularity text-size-popularity"><span class="popular-text-card">Popularity:</span> ${i}</p>
               </div>
               <button id="buy-button" class="add-popular-basket add-btn"('${s}')">
                   <img class="popular-basket-img" src="${Q}" alt="icon bascket" width="12" height="12">
               </button>
           </div>
       </div>`).join("")}function X(t){return t.splice(2),t.map(({price:e,name:s,img:a,_id:o})=>`
         <li class="discount-list-item" id="${o}" >
            <div class="discount-card" >
               <img class="discount-icon" src="${C}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${a}"></div>
            <div class="discount-info">
               <p>${s}</p>
               <div class="discount-prise">
                <span>&#36;${e}</span>
                  <button class="discount-link-basket more-btn "> 
                  <span class="icon-styles">
                     <img class="discount-basket-icon" src="${S}" alt="icon bascket" width="18" height="18">
                  </span>
               </button> 
               </div>   
            </div>      
         </li>`).join("")}function Et(t){return t.map(({price:e,name:s,img:a,_id:o,category:n,size:c})=>`<li class="cart-list-item" id="${o}" >
            <div class="cart-list-item-img-wrapper">
              <img class="cart-product-img" width=64 src="${a}">
            </div>
            <button class="remove-btn">
               <img class="remove-btn-img" src="${k}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="cart-list-item-wrapper">
              <h3 class="products-titel">${s}</h3>
              <div class="list-item-info">
                <p>Category:  <span>${n}</span></p>
                <p>Size:  <span>${c}</span></p>
              </div>
              <p class="cart-item-price">$ <span>${e}</span></p>
              </div>
              <div class="cart-amount-wrapper">
                <button class="less-btn">
                  <img class="less-btn-img" src="${Y}" alt="icon bascket" width="18" height="18">
                </button>
                <span class="products-quantity"></span>
                <button class="more-btn-card">
                  <img class="more-btn-img" src="${Z}" alt="icon bascket" width="18" height="18">
                </button>
              </div>
        </li>`).join("")}function tt(t){return t.map(({price:e,name:s,img:a,_id:o,category:n,size:c,popularity:i,desc:m})=>`
         <li class="popup-list-item" id="${o}">
            <button class="remove-btn">
               <img class="remove-btn-img" src="${k}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="list-item-img">
               <img width=100 src="${a}">
            </div>
            <div class="list-item-info">
            <p class="products-titel">${s}</p>
               <p>Category: <span>${n}</span></p>
               <p>Size: <span>${c}</span></p>
               <p>Popularity: <span>${i}</span></p>
               <p class="modal-desc" >${m}</p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${e}</span>
               <button class="add-btn icon-styles">Add to
                   <img src="${S}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}const et="products in cart";function g(){const t=document.querySelector(".header-basket-counter"),e=JSON.parse(localStorage.getItem(et));e===null||e.length===0?t.textContent="0":t.textContent=`${e.length}`}const P="/project-GROUP_WORK_JS/assets/check-267a6277.svg";function st(t,e,s){let a;return function(){const o=this,n=arguments,c=function(){a=null,s||t.apply(o,n)},i=s&&!a;clearTimeout(a),a=setTimeout(c,e),i&&t.apply(o,n)}}document.addEventListener("DOMContentLoaded",function(){ct(),J(),nt(),it();const t=$();t.keyword&&(document.getElementById("search-box").value=t.keyword),t.category&&(document.getElementById("categories").value=t.category)});let E=window.innerWidth<=375,I=window.innerWidth>375&&window.innerWidth<=768;function ot(){const t=window.innerWidth,e=t<=375,s=t>375&&t<=768;(e!==E||s!==I)&&(l(),E=e,I=s)}window.addEventListener("resize",st(ot,300));async function J(){try{const t=await fetch("https://food-boutique.b.goit.study/api/products/categories");if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const e=await t.json();e&&e.length>0?at(e):console.error("No categories found")}catch(t){console.error("Error fetching categories:",t)}}function at(t){const e=document.getElementById("categories");e.innerHTML="";const s=t.map(a=>({text:a.replace(/_/g," "),value:a})).concat({text:"Show all",value:""});new F({select:"#categories",placeholder:"Categories",showSearch:!1,data:s})}J();function nt(){const t=document.querySelector(".search-form"),e=document.getElementById("categories");t.addEventListener("submit",function(s){s.preventDefault();const a=document.getElementById("search-box").value;a==""?(r("keyword",null),l(),r("page",1)):(r("keyword",a),l(),r("page",1))}),e.addEventListener("change",function(){this.value=="Show all"?(r("category",null),r("page",1),l()):(r("category",this.value),r("page",1),l())})}async function l(){const t=$(),e=ut();try{const s=await W(t.category,t.keyword,t.page,e);N(s)}catch(s){console.error("Error fetching products:",s),N([])}}function ct(){localStorage.getItem("filters")||R()}function r(t,e){const s=$();s[t]=e,localStorage.setItem("filters",JSON.stringify(s))}function R(){localStorage.setItem("filters",JSON.stringify({keyword:null,category:null,page:1,limit:6}))}function $(){return JSON.parse(localStorage.getItem("filters"))||R()}function it(){l()}const j=document.getElementById("pagination");let b=0;const rt=window.innerWidth;rt<768?b=2:b=4;function lt(t,e,s){const a={totalItems:t.totalPages*e,itemsPerPage:e,visiblePages:b,page:s,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new G(j,a).on("afterMove",n=>{const c=n.page;var i=JSON.parse(localStorage.getItem("filters"))||{};i.page=c,localStorage.setItem("filters",JSON.stringify(i)),l()})}function dt(){j.innerHTML=""}async function W(t,e,s,a,o){try{const n={keyword:e||"",category:t||"",page:s||1,limit:a||6};o&&(n.sort=o);const c=await T({method:"get",url:"https://food-boutique.b.goit.study/api/products",params:n});return c.data.totalPages>1?lt(c.data,a,s):dt(),c.data.results}catch(n){return console.error("Error fetching products:",n),[]}}async function u(t){return(await T(`https://food-boutique.b.goit.study/api/products/${t}`)).data}const B=document.querySelector(".products-container"),z=document.querySelector(".popular-container"),H=document.querySelector(".discount-container"),d="products in cart";function N(t){const e=document.querySelector(".products-container");!t||t.length===0?e.innerHTML=`<div class="cart-empty empty-filter">
           <h3 class="products-titel">Nothing was found for the selected <span>filters...</span></h3>
           <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
       </div>`:e.innerHTML=_(t)}function ut(){const t=window.innerWidth;return t<375?6:t>=375&&t<768?8:9}A();function pt(t){for(let e=t.length-1;e>0;e--){const s=Math.floor(Math.random()*(e+1));[t[e],t[s]]=[t[s],t[e]]}}async function gt(){try{const t=await u("popular"),e=K(t),s=D(e,5);z.innerHTML=V(s)}catch(t){console.log(t.message)}}gt();async function A(){try{const t=await W("Fresh_Produce");B.insertAdjacentHTML("beforeend",_(K(t))),g(),console.log(t)}catch(t){console.log(t.message)}}A();function D(t,e){return pt(t),t.slice(0,e)}async function mt(){try{const t=await u("discount"),e=D(t,2);H.innerHTML=X(e)}catch(t){console.log(t.message)}}H.addEventListener("click",ft);async function ft(t){if(t.target.className==="discount-link-basket"||t.target.className==="discount-basket-icon"||t.target.className==="discount-basket-icon"){const e=t.target.closest(".discount-list-item"),s=e.id;try{const a=await u(s),o=JSON.parse(localStorage.getItem(d))??[],n=o.findIndex(c=>c._id===s);if(n!==-1)o[n].quantity+=1;else{a.quantity=0,o.push(a);const c=e.querySelector("button");c.disabled=!0,c.innerHTML=`<span class="icon-styles">
                     <img class="discount-basket-icon" src="${P}" alt="icon bascket" width="18" height="18">

                  </span>`,c.classList.add("disabled")}localStorage.setItem(d,JSON.stringify(o)),g()}catch(a){console.log(a.message)}}}mt();B.addEventListener("click",y);async function y(t){if(t.target.nodeName==="BUTTON"||t.target.className==="add-btn"||t.target.nodeName==="IMG"){const e=t.target.closest(".list-item-body-price"),s=e.parentElement.id;try{const a=await u(s),o=JSON.parse(localStorage.getItem(d))??[],n=o.findIndex(c=>c._id===s);if(n!==-1)o[n].quantity+=1;else{a.quantity=0,o.push(a);const c=e.querySelector("button");c.disabled=!0,c.innerHTML=`<img src="${P}" alt="icon check" width="18" height="18">`,c.classList.add("disabled")}localStorage.setItem(d,JSON.stringify(o)),g()}catch{console.error()}}}z.addEventListener("click",ht);async function ht(t){if(t.target.nodeName==="BUTTON"||t.target.className==="popular-basket-img"){const e=t.target.closest(".product-popular-card"),s=e.id,a=e.querySelector("button");a.disabled=!0;try{const o=await u(s),n=JSON.parse(localStorage.getItem(d))??[],c=n.findIndex(i=>i._id===s);c!==-1?n[c].quantity+=1:(o.quantity=0,n.push(o),a.innerHTML=`<img class="popular-disadbled-img" src="${P}" alt="icon bascket" width="20" height="20">`,a.classList.add("popular-disadbled-btn")),localStorage.setItem(d,JSON.stringify(n)),g()}catch(o){console.log(o.message),a.disabled=!1}}}function K(t){return t.map(e=>{let s=e.category;return typeof s=="string"&&(s=s.split("_").join(" ")),{...e,category:s}})}const bt=document.querySelector(".products-container"),yt=document.querySelector(".popular-container"),vt=document.querySelector(".discount-container");bt.addEventListener("click",L);yt.addEventListener("click",L);vt.addEventListener("click",L);function L(t){if(!(t.target===t.currentTarget||t.target.nodeName==="BUTTON"||t.target.className==="add-btn"||t.target.className==="popular-basket-img"||t.target.className==="icon-styles"||t.target.className==="discount-basket-icon"||t.target.alt==="icon bascket")){if(t.target.closest(".discount-list-item")!==null){const s=t.target.closest(".discount-list-item").id;f(s)}if(t.target.closest(".list-item")!==null){const s=t.target.closest(".list-item").id;f(s)}if(t.target.closest(".product-popular-card")!==null){const s=t.target.closest(".product-popular-card").id;f(s)}}}async function f(t,e){try{let c=function(i){(i.target.className==="remove-btn"||i.target.className==="remove-btn-img")&&o.close()};const s=[await u(t)],a=i=>{o.visible()&&i.key==="Escape"&&o.close()},o=M.create(tt(s),{onClose:i=>document.removeEventListener("keydown",a),onClose:i=>n.querySelector(".add-btn").removeEventListener("click",y),onClose:i=>n.removeEventListener("click",c)});o.show(),document.addEventListener("keydown",a);const n=document.querySelector(".basicLightbox__placeholder");n.querySelector(".add-btn").addEventListener("click",y),n.addEventListener("click",c)}catch(s){console.log(s.message)}}const wt=document.querySelector("#formEmail"),v=document.querySelector("#formInput");wt.addEventListener("submit",U);v.addEventListener("keyup",St);function U(t){t.preventDefault();const e=v.value.trim();if(!Pt(e)){alert("Please enter a valid email address");return}if(e===""){alert("Please enter an email address");return}kt({email:e}).then(()=>{console.log("Data sent successfully"),v.value="",$t()}).catch(s=>{console.error("There was a problem with the fetch operation:",s)})}function St(t){t.key==="Enter"&&U(t)}function kt(t){return new Promise((e,s)=>{setTimeout(()=>{console.log("Imitating sending data to server:",t),e()},2e3)})}function Pt(t){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)}function $t(){const t=M.create(`
   <div class="sub-modal">
      <button class="remove-btn">
         <img class="remove-btn-img" src="${k}" alt="icon bascket" width="18" height="18">
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
   `,{onClose:a=>e.removeEventListener("click",s)});t.show();const e=document.querySelector(".sub-modal");e.addEventListener("click",s);function s(a){(a.target.className==="remove-btn"||a.target.className==="remove-btn-img")&&t.close()}}let h=0;const O=60,w=document.querySelector(".header"),q=document.querySelector(".header-section"),p=()=>window.pageYOffset||document.documentElement.scrollTop,x=()=>w.classList.contains("hide");function It(){window.addEventListener("scroll",()=>{p()>h&&!x()&&p()>O?w.classList.add("hide"):p()<h&&x()&&w.classList.remove("hide"),p()>O?q.classList.add("scrolled"):q.classList.remove("scrolled"),h=p()})}export{g as a,Et as c,It as h};
//# sourceMappingURL=scroll-1d54fca5.js.map
