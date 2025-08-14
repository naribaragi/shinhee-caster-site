
export const $ = (s,el=document)=>el.querySelector(s);
export const $$ = (s,el=document)=>[...el.querySelectorAll(s)];
const KEY='shinheeQuoteCart';
export const getCart = () => { try { return JSON.parse(localStorage.getItem(KEY)||'[]'); } catch(e){ return []; } };
export const saveCart = (items) => { localStorage.setItem(KEY, JSON.stringify(items)); updateBadge(); };
export const addToQuote = (item) => {
  const items = getCart();
  const idx = items.findIndex(x=>x.sku===item.sku);
  if(idx>=0) items[idx].qty = (items[idx].qty||1)+1; else items.push({...item, qty:1});
  saveCart(items);
};
export function updateBadge(){
  const n = getCart().reduce((s,i)=>s+(i.qty||1),0);
  $$('.quote-badge').forEach(b=>b.textContent=n);
}
document.addEventListener('DOMContentLoaded', updateBadge);
