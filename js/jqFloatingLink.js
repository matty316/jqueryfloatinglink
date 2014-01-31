$.jQueryFloatingLink = function (text, options) {

	options = options || {};
	var appears = options.appears || 500;
	var fade = options.fade || "slow";
	var animateToTop = options.animateToTop || "slow";

	var $body = $("body");
    var floatingLink = '<a class="jQueryFloatingLink" href="#top">' + text + '</a>';
    $body.append(floatingLink);
    var $floatingLink = $('a.jQueryFloatingLink');

    $("a[href='#top']").click(function() {
		$("html, body").animate({ scrollTop: 0 }, animateToTop);
		return false;
	});
    
    
    $(window).scroll(function() {
	
    	var yPos = ( $(window).scrollTop()  );
    	if (yPos > appears) {
    		$floatingLink.fadeIn(fade);
    	} else {
    		$floatingLink.fadeOut(fade);
    	}
    });
}

