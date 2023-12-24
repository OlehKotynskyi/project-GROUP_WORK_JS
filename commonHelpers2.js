import{a as E,b as I,d as T}from"./assets/template-910a7fea.js";import{a as q}from"./assets/vendor-a61d8330.js";async function C(e){return(await q(`https://food-boutique.b.goit.study/api/products?keyword=Ac&category=${e}&page=1&limit=10`)).data.results}async function y(e){return(await q(`https://food-boutique.b.goit.study/api/products/${e}`)).data}const O="products in cart";function w(){const e=document.querySelector(".header-basket-counter"),t=JSON.parse(localStorage.getItem(O));t.length==null?e.textContent="0":e.textContent=`${t.length}`}const A=document.querySelector(".products-container"),M=document.querySelector(".popular-container"),N=document.querySelector(".discount-container"),h="products in cart";async function $(){try{const e=await C("Fresh_Produce");A.insertAdjacentHTML("beforeend",E(e)),w()}catch(e){console.log(e.message)}}$();async function D(){try{const e=await y("popular");M.insertAdjacentHTML("beforeend",I(e))}catch(e){console.log(e.message)}}D();async function H(){const e=await y("discount");N.insertAdjacentHTML("beforeend",T(e))}H();A.addEventListener("click",R);async function R(e){if(e.target.nodeName!=="BUTTON")return;const o=e.target.closest(".list-item").id;console.log(o);try{const c=await y(o),n=JSON.parse(localStorage.getItem(h))??[];console.log(n);const d=n.findIndex(P=>P._id===o);console.log(d),d!==-1?n[d].quantity+=1:(c.quantity=1,n.push(c)),localStorage.setItem(h,JSON.stringify(n)),w()}catch(c){console.log(c.message)}}let u=0;const k=60,g=document.querySelector(".header"),S=document.querySelector(".header-section"),l=()=>window.pageYOffset||document.documentElement.scrollTop,L=()=>g.classList.contains("hide");function j(){window.addEventListener("scroll",()=>{l()>u&&!L()&&l()>k?g.classList.add("hide"):l()<u&&L()&&g.classList.remove("hide"),l()>k?S.classList.add("scrolled"):S.classList.remove("scrolled"),u=l()})}const p=document.querySelectorAll(".popup-link"),a=document.querySelector("body"),s=document.querySelectorAll(".lock-padding");let r=!0;const m=800;if(p.length>0)for(let e=0;e<p.length;e++){const t=p[e];t.addEventListener("click",function(o){const c=t.getAttribute("href").replace("#",""),n=document.getElementById(c);b(n),o.preventDefault()})}const f=document.querySelectorAll(".close-popup");if(f.length>0)for(let e=0;e<f.length;e++){const t=f[e];t.addEventListener("click",function(o){i(t.closest(".popup")),o.preventDefault()})}function b(e){if(e&&r){const t=document.querySelector(".popup.open");t?i(t,!1):v(),e.classList.add("open"),e.addEventListener("click",function(o){o.target.closest(".popup-content")||i(o.target.closest(".popup"))})}}function i(e,t=!0){r&&(e.classList.remove("open"),t&&x())}function v(){const e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(s.length>0)for(let t=0;t<s.length;t++){const o=s[t];o.style.paddingRight=e}a.style.paddingRight=e,a.classList.add("lock"),r=!1,setTimeout(function(){r=!0},m)}function x(){setTimeout(function(){if(s.length>0)for(let e=0;e<s.length;e++){const t=s[e];t.style.paddingRight="0px"}a.style.paddingRight="0px",a.classList.remove("lock")},m),r=!1,setTimeout(function(){r=!0},m)}document.addEventListener("keydown",function(e){if(e.code==="Escape"){const t=document.querySelector(".popup.open");i(t)}});j();const B=document.querySelectorAll(".popup-link");b(B[0]);const J=document.querySelector(".close-popup");i(J.closest(".popup"));v();x();
//# sourceMappingURL=commonHelpers2.js.map