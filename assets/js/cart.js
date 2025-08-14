
import { $, $$, getCart, saveCart } from './app.js';
function render(){
  const tbody = $('#cart-body');
  const empty = $('#cart-empty');
  const items = getCart();
  if(!items.length){ empty.style.display='block'; tbody.innerHTML=''; return; }
  empty.style.display='none';
  tbody.innerHTML = items.map((i,idx)=>`
    <tr>
      <td>${i.name}<div class="small">${i.sku}</div></td>
      <td><input type="number" min="1" value="${i.qty||1}" data-qty="${idx}" style="width:90px"></td>
      <td>${i.category||''}</td>
      <td><button data-del="${idx}">Remove</button></td>
    </tr>`).join('');
  $$('input[data-qty]').forEach(inp=>{
    inp.addEventListener('change', e=>{
      const idx = +e.target.getAttribute('data-qty');
      const items = getCart();
      items[idx].qty = Math.max(1, parseInt(e.target.value||'1',10));
      saveCart(items); render();
    });
  });
  $$('button[data-del]').forEach(btn=>btn.addEventListener('click', e=>{
    const idx = +e.target.getAttribute('data-del');
    const items = getCart(); items.splice(idx,1); saveCart(items); render();
  }));
}
function initForm(){
  const form = $('#rfq-form'); if(!form) return;
  form.addEventListener('submit', ()=>{
    const items = getCart();
    $('#rfq-items').value = JSON.stringify(items);
  });
}
document.addEventListener('DOMContentLoaded', ()=>{ render(); initForm(); });
