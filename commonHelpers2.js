import{a as h,b as w,d as C,e as M,h as O}from"./assets/scroll-b0fe4050.js";import{a as I}from"./assets/vendor-a61d8330.js";async function E(e,t,o,n,c){try{const r={keyword:t||"",category:e||"",page:o||1,limit:n||6};return c&&(r.sort=c),(await I({method:"get",url:"https://food-boutique.b.goit.study/api/products",params:r})).data.results}catch(r){return console.error("Error fetching products:",r),[]}}async function f(e){return(await I(`https://food-boutique.b.goit.study/api/products/${e}`)).data}const q=document.querySelector(".products-container"),T=document.querySelector(".popular-container"),N=document.querySelector(".discount-container"),u="products in cart";function k(e){const t=document.querySelector(".products-container");!e||e.length===0?t.innerHTML=`<p>Nothing was found for the selected filters...</p>
                              <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>`:t.innerHTML=w(e)}function D(){const e=window.innerWidth;return e<375?6:e>=375&&e<768?8:9}async function F(){try{const e=await E("Fresh_Produce");q.insertAdjacentHTML("beforeend",w(e)),h()}catch(e){console.log(e.message)}}F();function B(e){for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}}function b(e,t){return B(e),e.slice(0,t)}async function J(){try{const e=await f("popular"),t=b(e,5);T.innerHTML=C(t)}catch(e){console.log(e.message)}}J();async function H(){try{const e=await f("discount"),t=b(e,2);N.innerHTML=M(t)}catch(e){console.log(e.message)}}H();q.addEventListener("click",R);async function R(e){if(console.log(e.target.nodeName),console.log(e.target.className),e.target.className==="add-btn"||e.target.nodeName==="IMG"){const o=e.target.closest(".list-item").id;try{const n=await f(o),c=JSON.parse(localStorage.getItem(u))??[],r=c.findIndex(l=>l._id===o);r!==-1?c[r].quantity+=1:(n.quantity=1,c.push(n)),localStorage.setItem(u,JSON.stringify(c)),h()}catch(n){console.log(n.message)}return}}N.addEventListener("click",j);async function j(e){if(e.target.nodeName==="BUTTON"||e.target.nodeName==="IMG"||e.target.nodeName==="SPAN"){console.dir(e.target.className);const o=e.target.closest(".discount-list-item").id;try{const n=await f(o),c=JSON.parse(localStorage.getItem(u))??[],r=c.findIndex(l=>l._id===o);r!==-1?c[r].quantity+=1:(n.quantity=1,c.push(n)),localStorage.setItem(u,JSON.stringify(c)),h()}catch(n){console.log(n.message)}}}document.addEventListener("DOMContentLoaded",function(){z(),W(),$(),G()});window.addEventListener("resize",()=>{d()});async function W(){try{const t=await(await fetch("https://food-boutique.b.goit.study/api/products/categories")).json();_(t)}catch(e){console.error("Error fetching categories:",e)}}function _(e){const t=document.getElementById("categories");t.appendChild(new Option("Show all","")),e.forEach(n=>{const c=document.createElement("option");c.value=n,c.textContent=n.replace(/_/g," "),t.appendChild(c)});const o=S();o.category&&(t.value=o.category)}function $(){const e=document.querySelector(".search-form"),t=document.getElementById("categories");e.addEventListener("submit",function(o){o.preventDefault();const n=document.getElementById("search-box").value;L("keyword",n),d()}),t.addEventListener("change",function(){L("category",this.value),d()})}async function d(){const e=S(),t=D();try{const o=await E(e.category,e.keyword,e.page,t);k(o)}catch(o){console.error("Error fetching products:",o),k([])}}function z(){localStorage.getItem("filters")||P()}function L(e,t){const o=S();o[e]=t,localStorage.setItem("filters",JSON.stringify(o))}function P(){localStorage.setItem("filters",JSON.stringify({keyword:null,category:null,page:1,limit:6}))}function S(){return JSON.parse(localStorage.getItem("filters"))||P()}function G(){d()}const g=document.querySelectorAll(".popup-link"),p=document.querySelector("body"),s=document.querySelectorAll(".lock-padding");let i=!0;const y=800;if(g.length>0)for(let e=0;e<g.length;e++){const t=g[e];t.addEventListener("click",function(o){const n=t.getAttribute("href").replace("#",""),c=document.getElementById(n);v(c),o.preventDefault()})}const m=document.querySelectorAll(".close-popup");if(m.length>0)for(let e=0;e<m.length;e++){const t=m[e];t.addEventListener("click",function(o){a(t.closest(".popup")),o.preventDefault()})}function v(e){if(e&&i){const t=document.querySelector(".popup.open");t?a(t,!1):x(),e.classList.add("open"),e.addEventListener("click",function(o){o.target.closest(".popup-content")||a(o.target.closest(".popup"))})}}function a(e,t=!0){i&&(e.classList.remove("open"),t&&A())}function x(){const e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(s.length>0)for(let t=0;t<s.length;t++){const o=s[t];o.style.paddingRight=e}p.style.paddingRight=e,p.classList.add("lock"),i=!1,setTimeout(function(){i=!0},y)}function A(){setTimeout(function(){if(s.length>0)for(let e=0;e<s.length;e++){const t=s[e];t.style.paddingRight="0px"}p.style.paddingRight="0px",p.classList.remove("lock")},y),i=!1,setTimeout(function(){i=!0},y)}document.addEventListener("keydown",function(e){if(e.code==="Escape"){const t=document.querySelector(".popup.open");a(t)}});O();const U=document.querySelectorAll(".popup-link");v(U[0]);const K=document.querySelector(".close-popup");a(K.closest(".popup"));x();A();
//# sourceMappingURL=commonHelpers2.js.map