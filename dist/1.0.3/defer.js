/*! nejsconf.com - v1.0.3 - 2015-06-03
* Copyright (c) 2015 Zach Leatherman; MIT License */
;(function( doc ) {
	// IE9+
	if( !( 'geolocation' in navigator ) ) {
		return;
	}
	if( location.hash === "#post" && "replaceState" in history ) {
		window.setTimeout(function() {
			history.replaceState( "", doc.title, window.location.pathname );
		}, 200);
	}
})( document );

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-33622676-2', 'auto');
ga('send', 'pageview');
