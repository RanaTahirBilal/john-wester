// nav highlight and smooth anchor offset. No demo plugins are used on this page.
document.querySelectorAll('.jw-links a, .jw-foot a').forEach(function(a){
  a.addEventListener('click', function(e){
    var id = a.getAttribute('href');
    if(!id || id.charAt(0) !== '#') return;
    var el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    window.scrollTo({top: el.getBoundingClientRect().top + window.pageYOffset - 64, behavior:'smooth'});
  });
});
