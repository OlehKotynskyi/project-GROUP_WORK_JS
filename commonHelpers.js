import{a as i,c as f,h as S}from"./assets/scroll-5c781e52.js";const u=document.querySelector(".products-quantity-title"),p=document.querySelector(".products-total-price"),o=document.querySelector(".cart-container"),s=document.querySelector(".cart-desktop-wrapper"),d=document.querySelector(".cart-empty"),C=document.querySelector(".del-all-btn"),c="products in cart";a();C.addEventListener("click",g);function g(){localStorage.removeItem(c),a()}function a(){i();const t=JSON.parse(localStorage.getItem(c));if(t==null||t.length===0)s.style.display="none",d.style.display="block",o.innerHTML="",u.textContent="Cart (0)",p.textContent="$0";else{o.innerHTML="",s.style.display="flex",d.style.display="none",o.insertAdjacentHTML("beforeend",f(t));const n=document.querySelectorAll(".products-quantity");t.forEach((r,e)=>{n[e].textContent=r.quantity}),m(t)}}o.addEventListener("click",q);function q(t){if(t.target.className!=="remove-btn")return;const n=t.target.closest(".cart-list-item"),r=n.id,e=JSON.parse(localStorage.getItem(c)),l=e.findIndex(y=>y._id===r);if(e.splice(l,1),localStorage.setItem(c,JSON.stringify(e)),n.remove(),i(),m(e),e==null||e.length===0){a();return}}function m(t){u.textContent=`Cart (${t.length})`;const n=t.reduce((r,{quantity:e,price:l})=>r+=e*l,0);p.textContent=`$${n.toFixed(2)}`}S();
//# sourceMappingURL=commonHelpers.js.map
