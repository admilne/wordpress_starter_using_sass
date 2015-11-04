jQuery(function() {
	var	pull		= jQuery('#pull');
	    menu 		= jQuery('#main-menu');
		menuHeight	= menu.height();


	// Display menu if hamburger icon is clicked
	jQuery(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	// Close menu if menu is open and you have clicked outside of the menu
	jQuery(document).click(function(e) {
		// if the hamburger menu is displayed AND
		// if you havent clicked on the hamburger menu AND
		// if you havent clicked on a menu item
		if ( pull.css('display') === 'block' && ! jQuery(e.target).hasClass('mobile-buger-menu-toggle') && ! jQuery(e.target).parent().hasClass('menu-item')) {
			menu.slideUp();
		}
	});

	// Make sure the menu isn't hidden if you resize to desktop view
	jQuery( window ).resize(function() {
		if ( pull.css('display') === 'none') {
			menu.removeAttr('style');
		}
	});

});


// ***********************************
// Helper Functions
// ***********************************

function handleTweets(tweets) {
	var x = tweets.length;
	var n = 0;
	var element = document.getElementById('latest-tweets');
	var html = '';
	while (n < x) {
		html += '<div class="single-tweet">';
		html += '<a class="twitter-bird" href="https://twitter.com/18aproductions" target="_blank"></a>';
		html += tweets[n];
		html += '</div>';
		n++;
	}
	element.innerHTML = html;
}

function twitterDate(date) {
	var monthNames = ["January", "February", "March",
		"April", "May", "June", "July", "August", "Septemner",
		"October", "November", "December"];
	var month = date.getMonth();
	var day = date.getDate();
	var dayExt = nth( day );
	var year = date.getFullYear();

	return day + dayExt + " " + monthNames[month] + " " + year;
}

function nth(d) {
	if(d>3 && d<21) return 'th'; // thanks kennebec
	switch (d % 10) {
		case 1:  return "st";
		case 2:  return "nd";
		case 3:  return "rd";
		default: return "th";
	}
}

function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

jQuery.fn.isOnScreen = function(){
	var win = jQuery(window);

	var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();

	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();

	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};
