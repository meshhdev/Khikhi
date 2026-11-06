/* Floating header: glass effect + scroll pe auto-hide */
(function(){
  var bar=document.querySelector('.top'),menu=document.getElementById('menu'),t=null,IDLE=2200;
  function y(){return window.pageYOffset||document.documentElement.scrollTop||0}
  function update(){bar.classList.toggle('glass',y()>24)}
  function wake(){bar.classList.remove('away');arm()}
  function arm(){
    clearTimeout(t);
    if(y()<=80)return;
    t=setTimeout(function(){
      if(!menu.hidden||bar.matches(':hover')||bar.contains(document.activeElement))return arm();
      bar.classList.add('away');
    },IDLE);
  }
  window.addEventListener('scroll',function(){update();wake()},{passive:true});
  ['touchstart','touchmove','pointerdown','pointermove','wheel','keydown','mousemove'].forEach(function(ev){
    window.addEventListener(ev,wake,{passive:true});
  });
  bar.addEventListener('focusin',wake);
  update();
})();
