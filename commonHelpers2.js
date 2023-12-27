import{b as I,a as y,d as F,e as R,h as W}from"./assets/scroll-71f29753.js";import{P as U,a as E}from"./assets/vendor-b592f4c5.js";const P=document.getElementById("pagination");let S=0;const $=window.innerWidth;$<768?S=2:S=4;function j(e,t,n){const o={totalItems:e.totalPages*t,itemsPerPage:t,visiblePages:S,page:n,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new U(P,o).on("afterMove",r=>{const c=r.page;var L=JSON.parse(localStorage.getItem("filters"))||{};L.page=c,localStorage.setItem("filters",JSON.stringify(L)),a()})}function G(){P.innerHTML=""}async function N(e,t,n,o,s){try{const r={keyword:t||"",category:e||"",page:n||1,limit:o||6};s&&(r.sort=s);const c=await E({method:"get",url:"https://food-boutique.b.goit.study/api/products",params:r});return c.data.totalPages>1?j(c.data,o,n):G(),c.data.results}catch(r){return console.error("Error fetching products:",r),[]}}async function f(e){return(await E(`https://food-boutique.b.goit.study/api/products/${e}`)).data}const q="/project-GROUP_WORK_JS/assets/check-267a6277.svg",v=document.querySelector(".products-container"),T=document.querySelector(".popular-container"),M=document.querySelector(".discount-container"),u="products in cart";function w(e){const t=document.querySelector(".products-container");!e||e.length===0?t.innerHTML=`<div class="cart-empty">
           <h3 class="products-titel">Nothing was found for the selected <span>filters...</span></h3>
           <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
       </div>`:t.innerHTML=I(e)}function z(){const e=window.innerWidth;return e<375?6:e>=375&&e<768?8:9}Y();function K(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}async function V(){try{const e=await f("popular"),t=B(e),n=O(t,5);T.innerHTML=F(n)}catch(e){console.log(e.message)}}V();async function Y(){try{const e=await N("Fresh_Produce");v.insertAdjacentHTML("beforeend",I(B(e))),y(),console.log(e)}catch(e){console.log(e.message)}}function O(e,t){return K(e),e.slice(0,t)}async function Q(){try{const e=await f("discount"),t=O(e,2);M.innerHTML=R(t)}catch(e){console.log(e.message)}}M.addEventListener("click",C);async function C(e){if(e.target.className==="discount-link-basket"||e.target.className==="discount-basket-icon"||e.target.className==="discount-basket-icon"){const t=e.target.closest(".discount-list-item"),n=t.id;try{const o=await f(n),s=JSON.parse(localStorage.getItem(u))??[],r=s.findIndex(c=>c._id===n);if(r!==-1)s[r].quantity+=1;else{o.quantity=0,s.push(o);const c=t.querySelector("button");c.disabled=!0,c.innerHTML=`<span class="icon-styles">
                     <img class="discount-basket-icon" src="${q}" alt="icon bascket" width="18" height="18">
                  </span>`,c.classList.add("disabled")}localStorage.setItem(u,JSON.stringify(s)),y()}catch(o){console.log(o.message)}}}Q();v.addEventListener("click",x);async function x(e){if(e.target.nodeName==="BUTTON"||e.target.className==="add-btn"||e.target.nodeName==="IMG"){const t=e.target.closest(".list-item-body-price"),n=t.parentElement.id;try{const o=await f(n),s=JSON.parse(localStorage.getItem(u))??[],r=s.findIndex(c=>c._id===n);if(r!==-1)s[r].quantity+=1;else{o.quantity=0,s.push(o);const c=t.querySelector("button");c.disabled=!0,c.innerHTML=`<img src="${q}" alt="icon check" width="18" height="18">`,c.classList.add("disabled")}localStorage.setItem(u,JSON.stringify(s)),y()}catch{console.error()}}}T.addEventListener("click",X);async function X(e){if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"||e.target.nodeName==="use"){const t=e.target.closest(".product-popular-card"),n=t.id;try{const o=await f(n),s=JSON.parse(localStorage.getItem(u))??[],r=s.findIndex(c=>c._id===n);if(r!==-1)s[r].quantity+=1;else{o.quantity=0,s.push(o);const c=t.querySelector("button");c.disabled=!0,c.innerHTML=`<svg class="popular-basket-svg" width="12" height="12">
         <use href="../img/sprite.svg#icon-check"></use>
         </svg>`}localStorage.setItem(u,JSON.stringify(s)),y()}catch(o){console.log(o.message)}}}function B(e){return e.map(t=>{let n=t.category;return typeof n=="string"&&(n=n.split("_").join(" ")),{...t,category:n}})}document.addEventListener("DOMContentLoaded",function(){ne(),Z(),te(),oe()});window.addEventListener("resize",()=>{a()});async function Z(){try{const t=await(await fetch("https://food-boutique.b.goit.study/api/products/categories")).json();ee(t)}catch(e){console.error("Error fetching categories:",e)}}function ee(e){const t=document.getElementById("categories");t.innerHTML="",t.appendChild(new Option("Show all","")),e.forEach(n=>{t.appendChild(new Option(n.replace(/_/g," "),n))}),new SlimSelect({select:"#categories"})}function te(){const e=document.querySelector(".search-form"),t=document.getElementById("categories");e.addEventListener("submit",function(n){n.preventDefault();const o=document.getElementById("search-box").value;o==""?(i("keyword",null),a(),i("page",1)):(i("keyword",o),a(),i("page",1))}),t.addEventListener("change",function(){this.value=="Show all"?(i("category",null),i("page",1),a()):(i("category",this.value),i("page",1),a())})}async function a(){const e=H(),t=z();try{const n=await N(e.category,e.keyword,e.page,t);w(n)}catch(n){console.error("Error fetching products:",n),w([])}}function ne(){localStorage.getItem("filters")||D()}function i(e,t){const n=H();n[e]=t,localStorage.setItem("filters",JSON.stringify(n))}function D(){localStorage.setItem("filters",JSON.stringify({keyword:null,category:null,page:1,limit:6}))}function H(){return JSON.parse(localStorage.getItem("filters"))||D()}function oe(){a()}const l=document.querySelector(".popup"),se=document.querySelector(".products-container "),ce=document.querySelector(".discount-section ");document.querySelector(".popup-close");se.addEventListener("click",ie);ce.addEventListener("click",re);function re(e){if(e.target.className==="discount-link-basket"||e.target.className==="discount-basket-icon"||e.target.className==="discount-basket-icon"){C(e);return}const t=e.target.closest(".discount-list-item").id,n=document.getElementById(t);l.innerHTML=n.outerHTML,l.style.display="flex",document.addEventListener("keydown",o);function o(s){s.key==="Escape"&&(l.style.display="none",document.removeEventListener("keydown",o))}}function ie(e){if(e.target.nodeName==="BUTTON"||e.target.className==="add-btn"||e.target.nodeName==="IMG"){x(e);return}const t=e.target.closest(".list-item").id,n=document.getElementById(t);l.innerHTML=n.outerHTML,l.style.display="flex",document.addEventListener("keydown",o);function o(s){s.key==="Escape"&&(l.style.display="none",document.removeEventListener("keydown",o))}}const h=document.querySelectorAll(".popup-link"),m=document.querySelector("body"),d=document.querySelectorAll(".lock-padding");let p=!0;const b=800;if(h.length>0)for(let e=0;e<h.length;e++){const t=h[e];t.addEventListener("click",function(n){const o=t.getAttribute("href").replace("#",""),s=document.getElementById(o);A(s),n.preventDefault()})}const k=document.querySelectorAll(".close-popup");if(k.length>0)for(let e=0;e<k.length;e++){const t=k[e];t.addEventListener("click",function(n){g(t.closest(".popup")),n.preventDefault()})}function A(e){if(e&&p){const t=document.querySelector(".popup.open");t?g(t,!1):J(),e.classList.add("open"),e.addEventListener("click",function(n){n.target.closest(".popup-content")||g(n.target.closest(".popup"))})}}function g(e,t=!0){p&&(e.classList.remove("open"),t&&_())}function J(){const e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(d.length>0)for(let t=0;t<d.length;t++){const n=d[t];n.style.paddingRight=e}m.style.paddingRight=e,m.classList.add("lock"),p=!1,setTimeout(function(){p=!0},b)}function _(){setTimeout(function(){if(d.length>0)for(let e=0;e<d.length;e++){const t=d[e];t.style.paddingRight="0px"}m.style.paddingRight="0px",m.classList.remove("lock")},b),p=!1,setTimeout(function(){p=!0},b)}document.addEventListener("keydown",function(e){if(e.code==="Escape"){const t=document.querySelector(".popup.open");g(t)}});W();const ae=document.querySelectorAll(".popup-link");A(ae[0]);const le=document.querySelector(".close-popup");g(le.closest(".popup"));J();_();
//# sourceMappingURL=commonHelpers2.js.map
