/* Subscribe form (Follow section) */
(function(){
  // ENDPOINT js/config.js se aata hai (subscribeEndpoint). Khali = visitor ka email app khulta hai.
  var CFG=window.SITE_CONFIG,ENDPOINT=CFG.subscribeEndpoint;
  var f=document.getElementById('subForm'),i=document.getElementById('subEmail'),m=document.getElementById('subMsg'),b=f.querySelector('button');
  function say(t,ok){m.textContent=t;m.className='sub-msg'+(ok?' ok':'')}
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var v=i.value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){say('Please enter a valid email address.');i.focus();return}
    if(f.company.value){say('Thank you. You are on the list.',true);return}
    if(!ENDPOINT){
      location.href='mailto:'+[CFG.emailUser,CFG.emailDomain].join('@')+'?subject='+encodeURIComponent('Subscribe me to the letters')+'&body='+encodeURIComponent('Hi, please add this email to your letters: '+v);
      say('Opening your email app. Just press send.',true);return;
    }
    b.disabled=true;say('Subscribing…');
    fetch(ENDPOINT,{method:'POST',mode:'no-cors',body:new URLSearchParams({email:v,page:location.href})})
      .then(function(){say('Thank you. You are on the list. A note from me is on its way to your inbox.',true);f.reset()})
      .catch(function(){say('Something went wrong. Please try again, or write to me directly.')})
      .then(function(){b.disabled=false});
  });
})();
