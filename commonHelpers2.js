import{b as k,a as g,d as C,e as J,f as H,h as _}from"./assets/scroll-0ead67dc.js";import{P as W,a as I,S as D,b as F}from"./assets/vendor-1c2594c1.js";const L=document.getElementById("pagination");let f=0;const A=window.innerWidth;A<768?f=2:f=4;function j(t,e,o){const n={totalItems:t.totalPages*e,itemsPerPage:e,visiblePages:f,page:o,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new W(L,n).on("afterMove",r=>{const s=r.page;var l=JSON.parse(localStorage.getItem("filters"))||{};l.page=s,localStorage.setItem("filters",JSON.stringify(l)),i()})}function U(){L.innerHTML=""}async function E(t,e,o,n,a){try{const r={keyword:e||"",category:t||"",page:o||1,limit:n||6};a&&(r.sort=a);const s=await I({method:"get",url:"https://food-boutique.b.goit.study/api/products",params:r});return s.data.totalPages>1?j(s.data,n,o):U(),s.data.results}catch(r){return console.error("Error fetching products:",r),[]}}async function u(t){return(await I(`https://food-boutique.b.goit.study/api/products/${t}`)).data}const y="/project-GROUP_WORK_JS/assets/check-267a6277.svg",N=document.querySelector(".products-container"),M=document.querySelector(".popular-container"),q=document.querySelector(".discount-container"),d="products in cart";function w(t){const e=document.querySelector(".products-container");!t||t.length===0?e.innerHTML=`<div class="cart-empty empty-filter">
           <h3 class="products-titel">Nothing was found for the selected <span>filters...</span></h3>
           <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
       </div>`:e.innerHTML=k(t)}function R(){const t=window.innerWidth;return t<375?6:t>=375&&t<768?8:9}T();function $(t){for(let e=t.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[t[e],t[o]]=[t[o],t[e]]}}async function z(){try{const t=await u("popular"),e=O(t),o=v(e,5);M.innerHTML=C(o)}catch(t){console.log(t.message)}}z();async function T(){try{const t=await E("Fresh_Produce");N.insertAdjacentHTML("beforeend",k(O(t))),g(),console.log(t)}catch(t){console.log(t.message)}}T();function v(t,e){return $(t),t.slice(0,e)}async function G(){try{const t=await u("discount"),e=v(t,2);q.innerHTML=J(e)}catch(t){console.log(t.message)}}q.addEventListener("click",K);async function K(t){if(t.target.className==="discount-link-basket"||t.target.className==="discount-basket-icon"||t.target.className==="discount-basket-icon"){const e=t.target.closest(".discount-list-item"),o=e.id;try{const n=await u(o),a=JSON.parse(localStorage.getItem(d))??[],r=a.findIndex(s=>s._id===o);if(r!==-1)a[r].quantity+=1;else{n.quantity=0,a.push(n);const s=e.querySelector("button");s.disabled=!0,s.innerHTML=`<span class="icon-styles">
                     <img class="discount-basket-icon" src="${y}" alt="icon bascket" width="18" height="18">

                  </span>`,s.classList.add("disabled")}localStorage.setItem(d,JSON.stringify(a)),g()}catch(n){console.log(n.message)}}}G();N.addEventListener("click",m);async function m(t){if(t.target.nodeName==="BUTTON"||t.target.className==="add-btn"||t.target.nodeName==="IMG"){const e=t.target.closest(".list-item-body-price"),o=e.parentElement.id;try{const n=await u(o),a=JSON.parse(localStorage.getItem(d))??[],r=a.findIndex(s=>s._id===o);if(r!==-1)a[r].quantity+=1;else{n.quantity=0,a.push(n);const s=e.querySelector("button");s.disabled=!0,s.innerHTML=`<img src="${y}" alt="icon check" width="18" height="18">`,s.classList.add("disabled")}localStorage.setItem(d,JSON.stringify(a)),g()}catch{console.error()}}}M.addEventListener("click",Y);async function Y(t){if(t.target.nodeName==="BUTTON"||t.target.className==="popular-basket-img"){const e=t.target.closest(".product-popular-card"),o=e.id,n=e.querySelector("button");n.disabled=!0;try{const a=await u(o),r=JSON.parse(localStorage.getItem(d))??[],s=r.findIndex(l=>l._id===o);s!==-1?r[s].quantity+=1:(a.quantity=0,r.push(a),n.innerHTML=`<img class="popular-disadbled-img" src="${y}" alt="icon bascket" width="20" height="20">`,n.classList.add("popular-disadbled-btn")),localStorage.setItem(d,JSON.stringify(r)),g()}catch(a){console.log(a.message),n.disabled=!1}}}function O(t){return t.map(e=>{let o=e.category;return typeof o=="string"&&(o=o.split("_").join(" ")),{...e,category:o}})}function Q(t,e,o){let n;return function(){const a=this,r=arguments,s=function(){n=null,o||t.apply(a,r)},l=o&&!n;clearTimeout(n),n=setTimeout(s,e),l&&t.apply(a,r)}}document.addEventListener("DOMContentLoaded",function(){tt(),x(),Z(),et();const t=h();t.keyword&&(document.getElementById("search-box").value=t.keyword),t.category&&(document.getElementById("categories").value=t.category)});let S=window.innerWidth<=375,P=window.innerWidth>375&&window.innerWidth<=768;function V(){const t=window.innerWidth,e=t<=375,o=t>375&&t<=768;(e!==S||o!==P)&&(i(),S=e,P=o)}window.addEventListener("resize",Q(V,300));async function x(){try{const e=await(await fetch("https://food-boutique.b.goit.study/api/products/categories")).json();X(e)}catch(t){console.error("Error fetching categories:",t)}}function X(t){const e=document.getElementById("categories");e.innerHTML="";const o=t.map(n=>({text:n.replace(/_/g," "),value:n})).concat({text:"Show all",value:""});new D({select:"#categories",placeholder:"Categories",showSearch:!1,data:o})}x();function Z(){const t=document.querySelector(".search-form"),e=document.getElementById("categories");t.addEventListener("submit",function(o){o.preventDefault();const n=document.getElementById("search-box").value;n==""?(c("keyword",null),i(),c("page",1)):(c("keyword",n),i(),c("page",1))}),e.addEventListener("change",function(){this.value=="Show all"?(c("category",null),c("page",1),i()):(c("category",this.value),c("page",1),i())})}async function i(){const t=h(),e=R();try{const o=await E(t.category,t.keyword,t.page,e);w(o)}catch(o){console.error("Error fetching products:",o),w([])}}function tt(){localStorage.getItem("filters")||B()}function c(t,e){const o=h();o[t]=e,localStorage.setItem("filters",JSON.stringify(o))}function B(){localStorage.setItem("filters",JSON.stringify({keyword:null,category:null,page:1,limit:6}))}function h(){return JSON.parse(localStorage.getItem("filters"))||B()}function et(){i()}const ot=document.querySelector(".products-container"),nt=document.querySelector(".popular-container"),st=document.querySelector(".discount-container");ot.addEventListener("click",b);nt.addEventListener("click",b);st.addEventListener("click",b);function b(t){if(!(t.target===t.currentTarget||t.target.nodeName==="BUTTON"||t.target.className==="add-btn"||t.target.className==="popular-basket-img"||t.target.className==="icon-styles"||t.target.className==="discount-basket-icon"||t.target.alt==="icon bascket")){if(t.target.closest(".discount-list-item")!==null){const o=t.target.closest(".discount-list-item").id;p(o)}if(t.target.closest(".list-item")!==null){const o=t.target.closest(".list-item").id;p(o)}if(t.target.closest(".product-popular-card")!==null){const o=t.target.closest(".product-popular-card").id;p(o)}}}async function p(t,e){try{const o=[await u(t)],n=s=>{a.visible()&&s.key==="Escape"&&a.close()},a=F.create(H(o),{onClose:s=>document.removeEventListener("keydown",n),onClose:s=>r.querySelector("button").removeEventListener("click",m)});a.show(),document.addEventListener("keydown",n);const r=document.querySelector(".basicLightbox__placeholder");r.querySelector("button").addEventListener("click",m)}catch(o){console.log(o.message)}}_();
//# sourceMappingURL=commonHelpers2.js.map
