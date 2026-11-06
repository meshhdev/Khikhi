/* Credits panel renderer. Data credits-data.js me hai. */
(function(){
  var C=window.CREDITS||[];
  var btn=document.getElementById('credBtn'),panel=document.getElementById('credPanel'),list=document.getElementById('credList');
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
  C.forEach(function(c){
    var li=el('li'),meta=el('span','cred-meta');
    li.appendChild(el('span','cred-name',c.name));
    li.appendChild(el('span','cred-what',c.what));
    if(c.handle&&!c.url)meta.appendChild(el('span',0,c.handle));
    if(c.url){var a=el('a',0,(c.label||'Contact')+' \u2197');a.href=c.url;a.target='_blank';a.rel='noopener';meta.appendChild(a)}
    if(c.perm)meta.appendChild(el('span','cred-perm','Used with permission'));
    li.appendChild(meta);list.appendChild(li);
  });
  function set(open){btn.setAttribute('aria-expanded',String(open));panel.hidden=!open;if(open&&panel.scrollIntoView)panel.scrollIntoView({block:'nearest',behavior:'smooth'})}
  btn.onclick=function(){set(btn.getAttribute('aria-expanded')!=='true')};
  window.__credCollapse=function(){set(false)};
})();
