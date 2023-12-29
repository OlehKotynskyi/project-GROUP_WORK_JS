import{S as K,P as U,a as M,b as F}from"./vendor-4ea89540.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const G="/project-GROUP_WORK_JS/assets/minus-7f58cb69.svg",Y="/project-GROUP_WORK_JS/assets/plus-8292619f.svg",S="/project-GROUP_WORK_JS/assets/basket-a161fb4d.svg",T="/project-GROUP_WORK_JS/assets/discount-8db0687b.svg",Z="/project-GROUP_WORK_JS/assets/popular-baskett-cb043ad6.svg",Q="/project-GROUP_WORK_JS/assets/closed-bf66d401.svg";function x(t){return t.map(({price:e,name:s,img:n,_id:o,category:a,size:c,popularity:i,is10PercentOff:m})=>`<li class="list-item" id="${o}">
            <div class="list-item-img">
               ${m?`<img class="products-discount-icon" src="${T}" alt="icon discount" width="100" height="100">`:""} 
               <img class="product-img" width=100 src="${n}">
            </div>
            <p class="products-titel">${s}</p>
            <div class="list-item-info">
               <p>Category: <span>${a}</span></p>
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
         `).join("")}function V(t){return t.map(({price:e,name:s,img:n,_id:o,category:a,size:c,popularity:i})=>`
           <div class="product-popular-card" id="${o}">
           <div class="popular-image-item">
               <img src="${n}" alt="${s}" class="product-popular-image">
           </div>
           <div class="parameters-popular-products">
               <h3 class="product-popular-title">${s}</h3>
               <p class="product-popular-category">
                   <span class="popular-text-card">Category:</span> ${a}
               </p>
               <div class="size-popularity">
                   <p class="product-popular-size text-size-popularity"><span class="popular-text-card">Size:</span> ${c}</p>
                   <p class="product-popularity text-size-popularity"><span class="popular-text-card">Popularity:</span> ${i}</p>
               </div>
               <button id="buy-button" class="add-popular-basket add-btn"('${s}')">
                   <img class="popular-basket-img" src="${Z}" alt="icon bascket" width="12" height="12">
               </button>
           </div>
       </div>`).join("")}function X(t){return t.splice(2),t.map(({price:e,name:s,img:n,_id:o})=>`
         <li class="discount-list-item" id="${o}" >
            <div class="discount-card" >
               <img class="discount-icon" src="${T}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${n}"></div>
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
         </li>`).join("")}function Lt(t){return t.map(({price:e,name:s,img:n,_id:o,category:a,size:c})=>`<li class="cart-list-item" id="${o}" >
            <div class="cart-list-item-img-wrapper">
              <img class="cart-product-img" width=64 src="${n}">
            </div>
            <button class="remove-btn">
               <img class="remove-btn-img" src="${Q}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="cart-list-item-wrapper">
              <h3 class="products-titel">${s}</h3>
              <div class="list-item-info">
                <p>Category:  <span>${a}</span></p>
                <p>Size:  <span>${c}</span></p>
              </div>
              <p class="cart-item-price">$ <span>${e}</span></p>
              </div>
              <div class="cart-amount-wrapper">
                <button class="less-btn">
                  <img class="less-btn-img" src="${G}" alt="icon bascket" width="18" height="18">
                </button>
                <span class="products-quantity"></span>
                <button class="more-btn-card">
                  <img class="more-btn-img" src="${Y}" alt="icon bascket" width="18" height="18">
                </button>
              </div>
        </li>`).join("")}function tt(t){return t.map(({price:e,name:s,img:n,_id:o,category:a,size:c,popularity:i,desc:m})=>`
                  <li class="popup-list-item" id="${o}">
            <div class="list-item-img">
               <img width=100 src="${n}">
            </div>
            <div class="list-item-info">
            <p class="products-titel">${s}</p>
               <p>Category: <span>${a}</span></p>
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
         `).join("")}const et="products in cart";function g(){const t=document.querySelector(".header-basket-counter"),e=JSON.parse(localStorage.getItem(et));e===null||e.length===0?t.textContent="0":t.textContent=`${e.length}`}const P="/project-GROUP_WORK_JS/assets/check-267a6277.svg";function st(t,e,s){let n;return function(){const o=this,a=arguments,c=function(){n=null,s||t.apply(o,a)},i=s&&!n;clearTimeout(n),n=setTimeout(c,e),i&&t.apply(o,a)}}document.addEventListener("DOMContentLoaded",function(){ct(),_(),at(),it();const t=k();t.keyword&&(document.getElementById("search-box").value=t.keyword),t.category&&(document.getElementById("categories").value=t.category)});let L=window.innerWidth<=375,I=window.innerWidth>375&&window.innerWidth<=768;function ot(){const t=window.innerWidth,e=t<=375,s=t>375&&t<=768;(e!==L||s!==I)&&(l(),L=e,I=s)}window.addEventListener("resize",st(ot,300));async function _(){try{const e=await(await fetch("https://food-boutique.b.goit.study/api/products/categories")).json();nt(e)}catch(t){console.error("Error fetching categories:",t)}}function nt(t){const e=document.getElementById("categories");e.innerHTML="";const s=t.map(n=>({text:n.replace(/_/g," "),value:n})).concat({text:"Show all",value:""});new K({select:"#categories",placeholder:"Categories",showSearch:!1,data:s})}_();function at(){const t=document.querySelector(".search-form"),e=document.getElementById("categories");t.addEventListener("submit",function(s){s.preventDefault();const n=document.getElementById("search-box").value;n==""?(r("keyword",null),l(),r("page",1)):(r("keyword",n),l(),r("page",1))}),e.addEventListener("change",function(){this.value=="Show all"?(r("category",null),r("page",1),l()):(r("category",this.value),r("page",1),l())})}async function l(){const t=k(),e=ut();try{const s=await R(t.category,t.keyword,t.page,e);E(s)}catch(s){console.error("Error fetching products:",s),E([])}}function ct(){localStorage.getItem("filters")||C()}function r(t,e){const s=k();s[t]=e,localStorage.setItem("filters",JSON.stringify(s))}function C(){localStorage.setItem("filters",JSON.stringify({keyword:null,category:null,page:1,limit:6}))}function k(){return JSON.parse(localStorage.getItem("filters"))||C()}function it(){l()}const J=document.getElementById("pagination");let y=0;const rt=window.innerWidth;rt<768?y=2:y=4;function lt(t,e,s){const n={totalItems:t.totalPages*e,itemsPerPage:e,visiblePages:y,page:s,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new U(J,n).on("afterMove",a=>{const c=a.page;var i=JSON.parse(localStorage.getItem("filters"))||{};i.page=c,localStorage.setItem("filters",JSON.stringify(i)),l()})}function dt(){J.innerHTML=""}async function R(t,e,s,n,o){try{const a={keyword:e||"",category:t||"",page:s||1,limit:n||6};o&&(a.sort=o);const c=await M({method:"get",url:"https://food-boutique.b.goit.study/api/products",params:a});return c.data.totalPages>1?lt(c.data,n,s):dt(),c.data.results}catch(a){return console.error("Error fetching products:",a),[]}}async function u(t){return(await M(`https://food-boutique.b.goit.study/api/products/${t}`)).data}const j=document.querySelector(".products-container"),W=document.querySelector(".popular-container"),B=document.querySelector(".discount-container"),d="products in cart";function E(t){const e=document.querySelector(".products-container");!t||t.length===0?e.innerHTML=`<div class="cart-empty empty-filter">
           <h3 class="products-titel">Nothing was found for the selected <span>filters...</span></h3>
           <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
       </div>`:e.innerHTML=x(t)}function ut(){const t=window.innerWidth;return t<375?6:t>=375&&t<768?8:9}z();function pt(t){for(let e=t.length-1;e>0;e--){const s=Math.floor(Math.random()*(e+1));[t[e],t[s]]=[t[s],t[e]]}}async function gt(){try{const t=await u("popular"),e=D(t),s=A(e,5);W.innerHTML=V(s)}catch(t){console.log(t.message)}}gt();async function z(){try{const t=await R("Fresh_Produce");j.insertAdjacentHTML("beforeend",x(D(t))),g(),console.log(t)}catch(t){console.log(t.message)}}z();function A(t,e){return pt(t),t.slice(0,e)}async function mt(){try{const t=await u("discount"),e=A(t,2);B.innerHTML=X(e)}catch(t){console.log(t.message)}}B.addEventListener("click",ft);async function ft(t){if(t.target.className==="discount-link-basket"||t.target.className==="discount-basket-icon"||t.target.className==="discount-basket-icon"){const e=t.target.closest(".discount-list-item"),s=e.id;try{const n=await u(s),o=JSON.parse(localStorage.getItem(d))??[],a=o.findIndex(c=>c._id===s);if(a!==-1)o[a].quantity+=1;else{n.quantity=0,o.push(n);const c=e.querySelector("button");c.disabled=!0,c.innerHTML=`<span class="icon-styles">
                     <img class="discount-basket-icon" src="${P}" alt="icon bascket" width="18" height="18">

                  </span>`,c.classList.add("disabled")}localStorage.setItem(d,JSON.stringify(o)),g()}catch(n){console.log(n.message)}}}mt();j.addEventListener("click",b);async function b(t){if(t.target.nodeName==="BUTTON"||t.target.className==="add-btn"||t.target.nodeName==="IMG"){const e=t.target.closest(".list-item-body-price"),s=e.parentElement.id;try{const n=await u(s),o=JSON.parse(localStorage.getItem(d))??[],a=o.findIndex(c=>c._id===s);if(a!==-1)o[a].quantity+=1;else{n.quantity=0,o.push(n);const c=e.querySelector("button");c.disabled=!0,c.innerHTML=`<img src="${P}" alt="icon check" width="18" height="18">`,c.classList.add("disabled")}localStorage.setItem(d,JSON.stringify(o)),g()}catch{console.error()}}}W.addEventListener("click",ht);async function ht(t){if(t.target.nodeName==="BUTTON"||t.target.className==="popular-basket-img"){const e=t.target.closest(".product-popular-card"),s=e.id,n=e.querySelector("button");n.disabled=!0;try{const o=await u(s),a=JSON.parse(localStorage.getItem(d))??[],c=a.findIndex(i=>i._id===s);c!==-1?a[c].quantity+=1:(o.quantity=0,a.push(o),n.innerHTML=`<img class="popular-disadbled-img" src="${P}" alt="icon bascket" width="20" height="20">`,n.classList.add("popular-disadbled-btn")),localStorage.setItem(d,JSON.stringify(a)),g()}catch(o){console.log(o.message),n.disabled=!1}}}function D(t){return t.map(e=>{let s=e.category;return typeof s=="string"&&(s=s.split("_").join(" ")),{...e,category:s}})}const yt=document.querySelector(".products-container"),bt=document.querySelector(".popular-container"),wt=document.querySelector(".discount-container");yt.addEventListener("click",$);bt.addEventListener("click",$);wt.addEventListener("click",$);function $(t){if(!(t.target===t.currentTarget||t.target.nodeName==="BUTTON"||t.target.className==="add-btn"||t.target.className==="popular-basket-img"||t.target.className==="icon-styles"||t.target.className==="discount-basket-icon"||t.target.alt==="icon bascket")){if(t.target.closest(".discount-list-item")!==null){const s=t.target.closest(".discount-list-item").id;f(s)}if(t.target.closest(".list-item")!==null){const s=t.target.closest(".list-item").id;f(s)}if(t.target.closest(".product-popular-card")!==null){const s=t.target.closest(".product-popular-card").id;f(s)}}}async function f(t,e){try{const s=[await u(t)],n=c=>{o.visible()&&c.key==="Escape"&&o.close()},o=F.create(tt(s),{onClose:c=>document.removeEventListener("keydown",n),onClose:c=>a.querySelector("button").removeEventListener("click",b)});o.show(),document.addEventListener("keydown",n);const a=document.querySelector(".basicLightbox__placeholder");a.querySelector("button").addEventListener("click",b)}catch(s){console.log(s.message)}}const vt=document.querySelector("#formEmail"),w=document.querySelector("#formInput");vt.addEventListener("submit",H);w.addEventListener("keyup",St);function H(t){t.preventDefault();const e=w.value.trim();if(!kt(e)){alert("Please enter a valid email address");return}if(e===""){alert("Please enter an email address");return}Pt({email:e}).then(()=>{console.log("Data sent successfully"),w.value=""}).catch(s=>{console.error("There was a problem with the fetch operation:",s)})}function St(t){t.key==="Enter"&&H(t)}function Pt(t){return new Promise((e,s)=>{setTimeout(()=>{console.log("Imitating sending data to server:",t),e()},2e3)})}function kt(t){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)}let h=0;const O=60,v=document.querySelector(".header"),N=document.querySelector(".header-section"),p=()=>window.pageYOffset||document.documentElement.scrollTop,q=()=>v.classList.contains("hide");function It(){window.addEventListener("scroll",()=>{p()>h&&!q()&&p()>O?v.classList.add("hide"):p()<h&&q()&&v.classList.remove("hide"),p()>O?N.classList.add("scrolled"):N.classList.remove("scrolled"),h=p()})}export{g as a,Lt as c,It as h};
//# sourceMappingURL=scroll-1c6ad45b.js.map
