/* Work section: "Work, field by field" ka renderer. Content work-data.js me hai. */
(function(){
  var D=window.WORK_FIELDS||[];
  var list=document.getElementById('list'),detail=document.getElementById('detail'),btns=[];
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
  function show(i){
    btns.forEach(function(b,j){b.setAttribute('aria-pressed',String(i===j))});
    var d=D[i],n=detail.cloneNode(false);
    n.appendChild(el('p','lead serif',d.headline));
    n.appendChild(el('p','thought',d.thought));
    n.appendChild(el('p','poem',d.poem.join('\n')));
    n.appendChild(el('p','sm','Selected projects'));
    if(!d.projects.length){n.appendChild(el('p','soon','Soon. More work will be added here.'))}
    d.projects.forEach(function(p){var w=el('div','proj'),h=el('h3',0,p.url?null:p.title);
      if(p.url){var a=el('a','plink',p.title+' \u2197');a.href=p.url;a.target='_blank';a.rel='noopener';h.appendChild(a)}
      h.appendChild(el('span',0,p.year));w.appendChild(h);w.appendChild(el('p',0,p.description));n.appendChild(w)});
    if(d.projects.length&&d.more)n.appendChild(el('p','soon',d.more));
    if(d.tools)n.appendChild(el('p','tools','Tools and skills: '+d.tools));
    detail.parentNode.replaceChild(n,detail);detail=n;
    if(btns[i].scrollIntoView&&list.scrollWidth>list.clientWidth)btns[i].scrollIntoView({inline:'center',block:'nearest'});
  }
  D.forEach(function(d,i){
    var b=el('button',0,d.name);b.type='button';b.setAttribute('aria-pressed','false');
    b.onclick=function(){show(i)};
    list.appendChild(b);btns.push(b);
  });
  show(0);
})();
