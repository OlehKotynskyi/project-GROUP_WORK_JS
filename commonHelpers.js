import{a as s,c as f,h as S}from"./assets/scroll-68ecbcb9.js";const i=document.querySelector(".products-quantity-title"),m=document.querySelector(".products-total-price"),o=document.querySelector(".cart-container"),C=document.querySelector(".cart-desktop-wrapper"),d=document.querySelector(".cart-empty"),g=document.querySelector(".del-all-btn"),c="products in cart",u=document.querySelector(".form-checkout");document.getElementById(".inputEmail");document.querySelector(".btnCheckout");l();g.addEventListener("click",q);function q(){localStorage.removeItem(c),l()}function l(){s();const t=JSON.parse(localStorage.getItem(c));if(t==null||t.length===0)C.style.display="none",d.style.display="block",o.innerHTML="",i.textContent="Cart (0)",m.textContent="$0";else{o.innerHTML="",d.style.display="none",o.insertAdjacentHTML("beforeend",f(t));const n=document.querySelectorAll(".products-quantity");t.forEach((r,e)=>{n[e].textContent=r.quantity}),p(t)}}o.addEventListener("click",v);function v(t){if(t.target.className!=="remove-btn")return;const n=t.target.closest(".cart-list-item"),r=n.id,e=JSON.parse(localStorage.getItem(c)),a=e.findIndex(y=>y._id===r);if(e.splice(a,1),localStorage.setItem(c,JSON.stringify(e)),n.remove(),s(),p(e),e==null||e.length===0){l();return}}function p(t){i.textContent=`Cart (${t.length})`;const n=t.reduce((r,{quantity:e,price:a})=>r+=e*a,0);m.textContent=`$${n.toFixed(2)}`}u.addEventListener("sumbit",function(t){u.value||alert("Please enter a valid email")});S();
//# sourceMappingURL=commonHelpers.js.map