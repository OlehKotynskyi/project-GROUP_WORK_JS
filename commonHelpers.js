import{a as k}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function P(e){return e.map(({price:t,name:n,img:c,_id:o,category:s,size:r,popularity:d})=>`<li class="list-item" id="${o}" >
            <img width=100 src="${c}">
            <h3>${n}</h3>
            <p>Category:  <span>${s}</span></p>
            <p>Size:  <span>${r}</span></p>
            <p>Popularity:  <span>${d}</span></p>
            <p>$ <span>${t}</span></p>
            <button class="add-btn">+</button>
        </li>`).join("")}function v(e){return e.map(({price:t,name:n,img:c,_id:o,category:s,size:r,popularity:d})=>`<li class="list-item" id="${o}" >
            <img width=100 src="${c}">
            <h3>${n}</h3>
            <p>Category:  <span>${s}</span></p>
            <p>Size:  <span>${r}</span></p>
            <p>Popularity:  <span>${d}</span></p>
            <p>$ <span>${t}</span></p>
            <button class="add-btn">+</button>
        </li>`).join("")}function E(e){return e.map(({price:t,name:n,img:c,_id:o})=>`<li class="list-item" id="${o}" >
            <button class="discount-btn">discount</button>
            <img width=100 src="${c}">
            <h3>${n}</h3>
            <p>$ <span>${t}</span></p>
            <button class="add-btn">+</button>
        </li>`).join("")}async function I(e){return(await k(`https://food-boutique.b.goit.study/api/products?keyword=Ac&category=${e}&page=1&limit=10`)).data.results}async function b(e){return(await k(`https://food-boutique.b.goit.study/api/products/${e}`)).data}const S=document.querySelector(".products-container"),x=document.querySelector(".popular-container"),O=document.querySelector(".discount-container"),L="products in cart";async function T(){try{const e=await I("Fresh_Produce");S.insertAdjacentHTML("beforeend",P(e))}catch(e){console.log(e.message)}}T();async function N(){try{const e=await b("popular");x.insertAdjacentHTML("beforeend",v(e))}catch(e){console.log(e.message)}}N();async function M(){const e=await b("discount");O.insertAdjacentHTML("beforeend",E(e))}M();S.addEventListener("click",j);async function j(e){if(e.target.nodeName!=="BUTTON")return;const n=e.target.closest(".list-item").id;console.log(n);try{const c=await b(n),o=JSON.parse(localStorage.getItem(L))??[];console.log(o);const s=o.findIndex(r=>r._id===n);console.log(s),s!==-1?o[s].quantity+=1:(c.quantity=1,o.push(c)),localStorage.setItem(L,JSON.stringify(o))}catch(c){console.log(c.message)}}let f=0;const C=50,y=document.querySelector(".header"),u=()=>window.pageYOffset||document.documentElement.scrollTop,$=()=>y.classList.contains("hide");function D(){window.addEventListener("scroll",()=>{u()>f&&!$()&&u()>C?y.classList.add("hide"):u()<f&&$()&&y.classList.remove("hide"),f=u()})}const m=document.querySelectorAll(".popup-link"),p=document.querySelector("body"),i=document.querySelectorAll(".lock-padding");let l=!0;const h=800;if(m.length>0)for(let e=0;e<m.length;e++){const t=m[e];t.addEventListener("click",function(n){const c=t.getAttribute("href").replace("#",""),o=document.getElementById(c);w(o),n.preventDefault()})}const g=document.querySelectorAll(".close-popup");if(g.length>0)for(let e=0;e<g.length;e++){const t=g[e];t.addEventListener("click",function(n){a(t.closest(".popup")),n.preventDefault()})}function w(e){if(e&&l){const t=document.querySelector(".popup.open");t?a(t,!1):q(),e.classList.add("open"),e.addEventListener("click",function(n){n.target.closest(".popup-content")||a(n.target.closest(".popup"))})}}function a(e,t=!0){l&&(e.classList.remove("open"),t&&A())}function q(){const e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(i.length>0)for(let t=0;t<i.length;t++){const n=i[t];n.style.paddingRight=e}p.style.paddingRight=e,p.classList.add("lock"),l=!1,setTimeout(function(){l=!0},h)}function A(){setTimeout(function(){if(i.length>0)for(let e=0;e<i.length;e++){const t=i[e];t.style.paddingRight="0px"}p.style.paddingRight="0px",p.classList.remove("lock")},h),l=!1,setTimeout(function(){l=!0},h)}document.addEventListener("keydown",function(e){if(e.code==="Escape"){const t=document.querySelector(".popup.open");a(t)}});D();const H=document.querySelectorAll(".popup-link");w(H[0]);const R=document.querySelector(".close-popup");a(R.closest(".popup"));q();A();
//# sourceMappingURL=commonHelpers.js.map
