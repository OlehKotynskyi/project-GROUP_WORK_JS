import{a as y,b as A,d as N,e as w,h as P}from"./assets/scroll-6f158c82.js";import{a as h}from"./assets/vendor-a61d8330.js";async function b(e,t,o,c,n){try{const r={keyword:t||"",category:e||"",page:o||1,limit:c||6};return n&&(r.sort=n),(await h({method:"get",url:"https://food-boutique.b.goit.study/api/products",params:r})).data.results}catch(r){return console.error("Error fetching products:",r),[]}}async function p(e){return(await h(`https://food-boutique.b.goit.study/api/products/${e}`)).data}const k=document.querySelector(".products-container"),x=document.querySelector(".popular-container"),S=document.querySelector(".discount-container"),l="products in cart";async function E(){try{const e=await b("Fresh_Produce");k.insertAdjacentHTML("beforeend",A(e)),y()}catch(e){console.log(e.message)}}E();async function T(){try{const e=await p("popular"),t=v(e);x.insertAdjacentHTML("beforeend",N(t))}catch(e){console.error("Error fetching and rendering popular products:",e.message)}}T();async function D(){const e=await p("discount");S.insertAdjacentHTML("beforeend",w(e))}D();k.addEventListener("click",M);async function M(e){if(console.log(e.target.nodeName),console.log(e.target.className),e.target.nodeName==="BUTTON"||e.target.nodeName==="IMG"){const o=e.target.closest(".list-item").id;try{const c=await p(o),n=JSON.parse(localStorage.getItem(l))??[],r=n.findIndex(d=>d._id===o);r!==-1?n[r].quantity+=1:(c.quantity=1,n.push(c)),localStorage.setItem(l,JSON.stringify(n)),y()}catch(c){console.log(c.message)}return}}S.addEventListener("click",O);async function O(e){if(e.target.nodeName==="BUTTON"||e.target.nodeName==="IMG"||e.target.nodeName==="SPAN"){const o=e.target.closest(".discount-list-item").id;try{const c=await p(o),n=JSON.parse(localStorage.getItem(l))??[],r=n.findIndex(d=>d._id===o);r!==-1?n[r].quantity+=1:(c.quantity=1,n.push(c)),localStorage.setItem(l,JSON.stringify(n)),y()}catch(c){console.log(c.message)}}}function v(e){return e.map(t=>{let o=t.category;return typeof o=="string"&&(o=o.split("_").join(" ")),{...t,category:o}})}const f=document.querySelectorAll(".popup-link"),u=document.querySelector("body"),s=document.querySelectorAll(".lock-padding");let a=!0;const m=800;if(f.length>0)for(let e=0;e<f.length;e++){const t=f[e];t.addEventListener("click",function(o){const c=t.getAttribute("href").replace("#",""),n=document.getElementById(c);I(n),o.preventDefault()})}const g=document.querySelectorAll(".close-popup");if(g.length>0)for(let e=0;e<g.length;e++){const t=g[e];t.addEventListener("click",function(o){i(t.closest(".popup")),o.preventDefault()})}function I(e){if(e&&a){const t=document.querySelector(".popup.open");t?i(t,!1):q(),e.classList.add("open"),e.addEventListener("click",function(o){o.target.closest(".popup-content")||i(o.target.closest(".popup"))})}}function i(e,t=!0){a&&(e.classList.remove("open"),t&&L())}function q(){const e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(s.length>0)for(let t=0;t<s.length;t++){const o=s[t];o.style.paddingRight=e}u.style.paddingRight=e,u.classList.add("lock"),a=!1,setTimeout(function(){a=!0},m)}function L(){setTimeout(function(){if(s.length>0)for(let e=0;e<s.length;e++){const t=s[e];t.style.paddingRight="0px"}u.style.paddingRight="0px",u.classList.remove("lock")},m),a=!1,setTimeout(function(){a=!0},m)}document.addEventListener("keydown",function(e){if(e.code==="Escape"){const t=document.querySelector(".popup.open");i(t)}});P();const C=document.querySelectorAll(".popup-link");I(C[0]);const B=document.querySelector(".close-popup");i(B.closest(".popup"));q();L();
//# sourceMappingURL=commonHelpers2.js.map
