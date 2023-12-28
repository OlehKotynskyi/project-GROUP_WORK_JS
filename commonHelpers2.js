import{b as v,a as h,d as _,e as $,h as U}from"./assets/scroll-9a6cb9fa.js";import{P as j,a as N}from"./assets/vendor-0fb5d1fe.js";const T=document.getElementById("pagination");let w=0;const z=window.innerWidth;z<768?w=2:w=4;function G(e,t,n){const o={totalItems:e.totalPages*t,itemsPerPage:t,visiblePages:w,page:n,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new j(T,o).on("afterMove",i=>{const c=i.page;var m=JSON.parse(localStorage.getItem("filters"))||{};m.page=c,localStorage.setItem("filters",JSON.stringify(m)),r()})}function K(){T.innerHTML=""}async function M(e,t,n,o,s){try{const i={keyword:t||"",category:e||"",page:n||1,limit:o||6};s&&(i.sort=s);const c=await N({method:"get",url:"https://food-boutique.b.goit.study/api/products",params:i});return c.data.totalPages>1?G(c.data,o,n):K(),c.data.results}catch(i){return console.error("Error fetching products:",i),[]}}async function f(e){return(await N(`https://food-boutique.b.goit.study/api/products/${e}`)).data}const L="/project-GROUP_WORK_JS/assets/check-267a6277.svg",O=document.querySelector(".products-container"),x=document.querySelector(".popular-container"),C=document.querySelector(".discount-container"),u="products in cart";function E(e){const t=document.querySelector(".products-container");!e||e.length===0?t.innerHTML=`<div class="cart-empty">
           <h3 class="products-titel">Nothing was found for the selected <span>filters...</span></h3>
           <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
       </div>`:t.innerHTML=v(e)}function V(){const e=window.innerWidth;return e<375?6:e>=375&&e<768?8:9}X();function Y(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}async function Q(){try{const e=await f("popular"),t=A(e),n=B(t,5);x.innerHTML=_(n)}catch(e){console.log(e.message)}}Q();async function X(){try{const e=await M("Fresh_Produce");O.insertAdjacentHTML("beforeend",v(A(e))),h(),console.log(e)}catch(e){console.log(e.message)}}function B(e,t){return Y(e),e.slice(0,t)}async function Z(){try{const e=await f("discount"),t=B(e,2);C.innerHTML=$(t)}catch(e){console.log(e.message)}}C.addEventListener("click",D);async function D(e){if(e.target.className==="discount-link-basket"||e.target.className==="discount-basket-icon"||e.target.className==="discount-basket-icon"){const t=e.target.closest(".discount-list-item"),n=t.id;try{const o=await f(n),s=JSON.parse(localStorage.getItem(u))??[],i=s.findIndex(c=>c._id===n);if(i!==-1)s[i].quantity+=1;else{o.quantity=0,s.push(o);const c=t.querySelector("button");c.disabled=!0,c.innerHTML=`<span class="icon-styles">
                     <img class="discount-basket-icon" src="${L}" alt="icon bascket" width="18" height="18">

                  </span>`,c.classList.add("disabled")}localStorage.setItem(u,JSON.stringify(s)),h()}catch(o){console.log(o.message)}}}Z();O.addEventListener("click",H);async function H(e){if(e.target.nodeName==="BUTTON"||e.target.className==="add-btn"||e.target.nodeName==="IMG"){const t=e.target.closest(".list-item-body-price"),n=t.parentElement.id;try{const o=await f(n),s=JSON.parse(localStorage.getItem(u))??[],i=s.findIndex(c=>c._id===n);if(i!==-1)s[i].quantity+=1;else{o.quantity=0,s.push(o);const c=t.querySelector("button");c.disabled=!0,c.innerHTML=`<img src="${L}" alt="icon check" width="18" height="18">`,c.classList.add("disabled")}localStorage.setItem(u,JSON.stringify(s)),h()}catch{console.error()}}}x.addEventListener("click",ee);async function ee(e){if(e.target.nodeName==="BUTTON"||e.target.className==="popular-basket-img"){const t=e.target.closest(".product-popular-card"),n=t.id,o=t.querySelector("button");o.disabled=!0;try{const s=await f(n),i=JSON.parse(localStorage.getItem(u))??[],c=i.findIndex(m=>m._id===n);c!==-1?i[c].quantity+=1:(s.quantity=1,i.push(s),o.innerHTML=`<img class="popular-basket-img" src="${L}" alt="icon bascket" width="12" height="12">`),localStorage.setItem(u,JSON.stringify(i)),h()}catch(s){console.log(s.message),o.disabled=!1}}}function A(e){return e.map(t=>{let n=t.category;return typeof n=="string"&&(n=n.split("_").join(" ")),{...t,category:n}})}document.addEventListener("DOMContentLoaded",function(){ie(),oe(),ce(),ae();const e=I();e.keyword&&(document.getElementById("search-box").value=e.keyword),e.category&&(document.getElementById("categories").value=e.category)});let P=window.innerWidth<=375,q=window.innerWidth>375&&window.innerWidth<=768;function te(){const e=window.innerWidth,t=e<=375,n=e>375&&e<=768;t!==P&&(r(),P=t),n!==q&&(r(),q=n)}window.addEventListener("resize",ne(te,300));function ne(e,t){let n;return function(){const o=this,s=arguments;clearTimeout(n),n=setTimeout(()=>e.apply(o,s),t)}}async function oe(){try{const t=await(await fetch("https://food-boutique.b.goit.study/api/products/categories")).json();se(t)}catch(e){console.error("Error fetching categories:",e)}}function se(e){const t=document.getElementById("categories");t&&(t.innerHTML="",t.appendChild(new Option("Show all","")),e.forEach(n=>{t.appendChild(new Option(n.replace(/_/g," "),n))}))}function ce(){const e=document.querySelector(".search-form"),t=document.getElementById("categories");e.addEventListener("submit",function(n){n.preventDefault();const o=document.getElementById("search-box").value;o==""?(a("keyword",null),r(),a("page",1)):(a("keyword",o),r(),a("page",1))}),t.addEventListener("change",function(){this.value=="Show all"?(a("category",null),a("page",1),r()):(a("category",this.value),a("page",1),r())})}async function r(){const e=I(),t=V();try{const n=await M(e.category,e.keyword,e.page,t);E(n)}catch(n){console.error("Error fetching products:",n),E([])}}function ie(){localStorage.getItem("filters")||J()}function a(e,t){const n=I();n[e]=t,localStorage.setItem("filters",JSON.stringify(n))}function J(){localStorage.setItem("filters",JSON.stringify({keyword:null,category:null,page:1,limit:6}))}function I(){return JSON.parse(localStorage.getItem("filters"))||J()}function ae(){r()}const l=document.querySelector(".popup"),re=document.querySelector("body "),le=document.querySelector(".discount-section ");document.querySelector(".popup-close");re.addEventListener("click",ue);le.addEventListener("click",de);function de(e){if(e.target.className==="discount-link-basket"||e.target.className==="discount-basket-icon"||e.target.className==="discount-basket-icon"){D(e);return}const t=e.target.closest(".discount-list-item").id,n=document.getElementById(t);n.classList.add("popap-card"),l.innerHTML=n.outerHTML,l.style.display="flex",document.addEventListener("keydown",o);function o(s){s.key==="Escape"&&(l.style.display="none",n.classList.remove("popap-card"),document.removeEventListener("keydown",o))}}function ue(e){if(e.target.nodeName==="BUTTON"||e.target.className==="add-btn"||e.target.nodeName==="IMG"){H(e);return}const t=e.target.closest(".list-item").id,n=document.getElementById(t);n.classList.add("popap-card"),l.innerHTML=n.outerHTML,l.style.display="flex",document.addEventListener("keydown",o);function o(s){s.key==="Escape"&&(l.style.display="none",n.classList.remove("popap-card"),document.removeEventListener("keydown",o))}}const k=document.querySelectorAll(".popup-link"),y=document.querySelector("body"),d=document.querySelectorAll(".lock-padding");let p=!0;const S=800;if(k.length>0)for(let e=0;e<k.length;e++){const t=k[e];t.addEventListener("click",function(n){const o=t.getAttribute("href").replace("#",""),s=document.getElementById(o);W(s),n.preventDefault()})}const b=document.querySelectorAll(".close-popup");if(b.length>0)for(let e=0;e<b.length;e++){const t=b[e];t.addEventListener("click",function(n){g(t.closest(".popup")),n.preventDefault()})}function W(e){if(e&&p){const t=document.querySelector(".popup.open");t?g(t,!1):F(),e.classList.add("open"),e.addEventListener("click",function(n){n.target.closest(".popup-content")||g(n.target.closest(".popup"))})}}function g(e,t=!0){p&&(e.classList.remove("open"),t&&R())}function F(){const e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(d.length>0)for(let t=0;t<d.length;t++){const n=d[t];n.style.paddingRight=e}y.style.paddingRight=e,y.classList.add("lock"),p=!1,setTimeout(function(){p=!0},S)}function R(){setTimeout(function(){if(d.length>0)for(let e=0;e<d.length;e++){const t=d[e];t.style.paddingRight="0px"}y.style.paddingRight="0px",y.classList.remove("lock")},S),p=!1,setTimeout(function(){p=!0},S)}document.addEventListener("keydown",function(e){if(e.code==="Escape"){const t=document.querySelector(".popup.open");g(t)}});U();const pe=document.querySelectorAll(".popup-link");W(pe[0]);const ge=document.querySelector(".close-popup");g(ge.closest(".popup"));F();R();
//# sourceMappingURL=commonHelpers2.js.map
