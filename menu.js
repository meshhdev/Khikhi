/* Full-screen menu: open/close, focus trap, smooth jump to section */
(function(){
  var btn=document.getElementById('menuBtn'),menu=document.getElementById('menu'),closeB=document.getElementById('menuClose');
  var links=[].slice.call(menu.querySelectorAll('.menu-nav a'));
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function open(){if(window.__credCollapse)window.__credCollapse();menu.hidden=false;document.body.classList.add('menu-open');btn.setAttribute('aria-expanded','true');links.forEach(function(a){a.classList.remove('on')});closeB.focus()}
  function close(back){menu.hidden=true;document.body.classList.remove('menu-open');btn.setAttribute('aria-expanded','false');if(back!==false)btn.focus()}
  btn.onclick=open;closeB.onclick=function(){close()};
  links.forEach(function(a){a.addEventListener('click',function(e){
    e.preventDefault();links.forEach(function(x){x.classList.remove('on')});a.classList.add('on');
    var t=document.querySelector(a.getAttribute('href'));
    setTimeout(function(){close(false);if(t){t.scrollIntoView();history.replaceState(null,'',a.getAttribute('href'))}},reduce?0:450);
  })});
  document.addEventListener('keydown',function(e){
    if(menu.hidden)return;
    if(e.key==='Escape'){close();return}
    if(e.key==='Tab'){var f=[].slice.call(menu.querySelectorAll('button,a[href]')).filter(function(x){return x.offsetParent!==null}),i=f.indexOf(document.activeElement);
      if(e.shiftKey&&i<=0){e.preventDefault();f[f.length-1].focus()}
      else if(!e.shiftKey&&i===f.length-1){e.preventDefault();f[0].focus()}}
  });
})();
