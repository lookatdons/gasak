(function(window, location) { 
history.replaceState(null, document.title, location.pathname+"#!/history"); 
history.pushState(null, document.title, location.pathname); 
 
window.addEventListener("popstate", function() { 
  if(location.hash === "#!/history") { 
    history.replaceState(null, document.title, location.pathname); 
    setTimeout(function(){ 
      location.replace("https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1911772&hl=en-us"); 
    },10); 
  } 
}, false); 
}(window, location));
