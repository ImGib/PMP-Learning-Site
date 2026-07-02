// ===== shared: scroll-spy + mobile sidebar =====
(function(){
  var links = Array.prototype.slice.call(document.querySelectorAll('.side a[href^="#"]'));
  if(links.length){
    var map={}; links.forEach(function(a){var id=a.getAttribute('href').slice(1);(map[id]=map[id]||[]).push(a);});
    var targets=Object.keys(map).map(function(id){return document.getElementById(id);}).filter(Boolean);
    var spy=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          links.forEach(function(a){a.classList.remove('active')});
          (map[e.target.id]||[]).forEach(function(a){a.classList.add('active')});
        }
      });
    },{rootMargin:'-65px 0px -75% 0px',threshold:0});
    targets.forEach(function(t){spy.observe(t)});
  }
  var side=document.getElementById('side'), mb=document.getElementById('menuBtn');
  if(mb) mb.addEventListener('click',function(){side.classList.toggle('open')});
  if(side) side.addEventListener('click',function(e){if(e.target.tagName==='A')side.classList.remove('open')});
})();
