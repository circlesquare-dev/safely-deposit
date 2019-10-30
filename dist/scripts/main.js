// Preloader start

'use strict';

$('.preloader__ico').fadeIn('slow');

$(window).load(function () {
	setTimeout(function () {
		$('.preloader').fadeOut('slow');
	}, 1000);
});

// Preloader end

// Parallax amination start

function animateProducts(productAnimate, productCover) {
	var delayItem = arguments.length <= 2 || arguments[2] === undefined ? 0.15 : arguments[2];
	var yAnimation = arguments.length <= 3 || arguments[3] === undefined ? 60 : arguments[3];
	var topOffset = arguments.length <= 4 || arguments[4] === undefined ? 500 : arguments[4];
	var mainDelay = arguments.length <= 5 || arguments[5] === undefined ? 0.25 : arguments[5];

	var productItem = productAnimate;
	var section = productCover;

	if (!$(section).length) {
		return;
	}

	TweenMax.set(productItem, {
		y: yAnimation,
		autoAlpha: 0,
		transition: 'none'
	});

	var tl = new TimelineMax({ delay: mainDelay }).staggerTo(productItem, 0.4, {
		y: 0,
		autoAlpha: 1,
		clearProps: 'transition, transform, opacity',
		ease: Power1.easeOut
	}, delayItem);

	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter'
		}
	});

	// build scenes
	new ScrollMagic.Scene({
		triggerElement: section,
		offset: topOffset,
		reverse: true
	}).setTween(tl).addTo(controller);
}

function addAnimateClass(productAnimate, productCover) {
	var classItem = arguments.length <= 2 || arguments[2] === undefined ? 'svg_anim' : arguments[2];
	var offsetTop = arguments.length <= 3 || arguments[3] === undefined ? 500 : arguments[3];
	var durItem = arguments.length <= 4 || arguments[4] === undefined ? 0.5 : arguments[4];
	var delayItem = arguments.length <= 5 || arguments[5] === undefined ? 0.15 : arguments[5];

	var productItem = productAnimate;
	var section = productCover;

	if (!$(section).length) {
		return;
	}

	var tl = new TimelineMax().staggerTo(productItem, durItem, { css: { className: '+=' + classItem } }, delayItem);

	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter'
		}
	});

	// build scenes
	new ScrollMagic.Scene({
		triggerElement: section,
		offset: offsetTop,
		reverse: true
	}).setTween(tl).addTo(controller);
}

// Parallax animation end

var mobDev = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
// var mobDev = false;

$(document).ready(function () {

	// Animation just for web start

	if (!mobDev) {
		animateProducts('.hw-list li', '.how-it-works');
		animateProducts('.testimonials .tt-info', '.testimonials');

		addAnimateClass('.solutions .svg_item', '.solutions');
	} else {
		$('body').addClass('show-svg');
	}

	// Animation just for web end

	// Smooth anchor scroll start

	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});

	// Smooth anchor scroll end

	// Hamburger menu start

	$('.hamburger').on('click', function () {
		var $containerMob = $('.main-header_d-menu');
		var $mobMenu = $('.mob-menu');
		var $thisActive = $containerMob.hasClass('active');

		if ($thisActive) {
			$containerMob.removeClass('active');
			$mobMenu.removeClass('active');
		} else {
			$containerMob.addClass('active');
			$mobMenu.addClass('active');
		}
	});

	// Hamburger menu end
});

;function parallaxScroll(coverSection, parallaxItem) {
	var yAnimate = arguments.length <= 2 || arguments[2] === undefined ? '-10%' : arguments[2];

	var cSection = coverSection,
	    pItem = parallaxItem,
	    controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "400%" } });

	// build scenes
	new ScrollMagic.Scene({ triggerElement: cSection }).setTween(pItem, { y: yAnimate, ease: Linear.easeNone }).addTo(controller);
}

if (!mobDev) {
	parallaxScroll('.how-it-works', '.hw-img1 img', '-7%');
	parallaxScroll('.how-it-works', '.hw-img2 img');
	parallaxScroll('.how-it-works', '.hw-img3 img', '-12%');

	parallaxScroll('.img-section', '.ims-img1 img', '-7%');
	parallaxScroll('.img-section', '.ims-img2 img', '-12%');
	parallaxScroll('.img-section', '.ims-img3 img, .ims-img4 img');
}