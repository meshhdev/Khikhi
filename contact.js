/* Contact: "Write to me" link ko mailto me badalta hai */
(function(){
  var a=document.getElementById('mailLink');
  a.addEventListener('click',function(e){e.preventDefault();location.href='mailto:'+[window.SITE_CONFIG.emailUser,window.SITE_CONFIG.emailDomain].join('@')});
})();
