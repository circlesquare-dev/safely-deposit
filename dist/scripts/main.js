// Preloader start

'use strict';

$('.preloader__ico').fadeIn('slow');

$(window).on('load', function () {
	setTimeout(function () {
		$('.preloader').fadeOut('slow');
	}, 1000);
});

// Preloader end

// Parallax amination start

function animateProducts(productAnimate, productCover) {
	var delayItem = arguments.length <= 2 || arguments[2] === undefined ? 0.10 : arguments[2];
	var yAnimation = arguments.length <= 3 || arguments[3] === undefined ? 60 : arguments[3];
	var topOffset = arguments.length <= 4 || arguments[4] === undefined ? 400 : arguments[4];
	var mainDelay = arguments.length <= 5 || arguments[5] === undefined ? 0.15 : arguments[5];

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

// Parallax animation end

// var mobDev = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var mobDev = false;

$(document).ready(function () {

	// Animation just for web start

	if (!mobDev) {
		// animateProducts('.partner_img','.partners', 0.15, 60, 200);

		// animateProducts('.about-us .fade-up','.about-us');

		animateProducts('.solutions .fade-up', '.solutions');

		// animateProducts('.how-it-works .hw_num','.how-it-works');
		// animateProducts('.how-it-works .hw_info','.how-it-works', 0.15,60,500,1);

		animateProducts('.pricing .fade-up', '.pricing');
	} else {
		$('body').addClass('show-svg');
	}

	// Animation just for web end

	// Smooth anchor scroll start

	// $(document).on('click', 'a[href^="#"]', function (event) {
	// 	event.preventDefault();
	//
	// 	$('html, body').animate({
	// 		scrollTop: $($.attr(this, 'href')).offset().top
	// 	}, 500);
	// });

	// Smooth anchor scroll end

	// Hamburger menu start

	$('.hamburger').on('click', function () {
		var $containerMob = $('.main-header');
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
	var yAnimate = arguments.length <= 2 || arguments[2] === undefined ? '-20%' : arguments[2];
	var yStart = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	var offsetTop = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	var mainDur = arguments.length <= 5 || arguments[5] === undefined ? '200%' : arguments[5];

	var cSection = coverSection,
	    pItem = parallaxItem,
	    controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: mainDur } });

	TweenMax.set(pItem, {
		y: yStart
	});

	// build scenes
	new ScrollMagic.Scene({
		triggerElement: cSection,
		offset: offsetTop
	}).setTween(pItem, { y: yAnimate, ease: Linear.easeNone }).setClassToggle(pItem, "active-parallax").on("end", function (e) {
		$(pItem).toggleClass('end-parallax');
	}).addTo(controller);
}

if (!mobDev) {

	parallaxScroll('.about-us', '.about-us .bg-icon1', '15%');
	parallaxScroll('.about-us', '.about-us .bg-icon2');
	parallaxScroll('.about-us', '.about-us .bg-circle1', '-5%');
	parallaxScroll('.about-us', '.about-us .bg-circle2', '10%');

	parallaxScroll('.solutions', '.solutions .bg-icon1', '15%');
	parallaxScroll('.solutions', '.solutions .bg-icon2');
	parallaxScroll('.solutions', '.solutions .bg-icon3', '-5%');

	parallaxScroll('.how-it-works', '.how-it-works .bg-icon3', '15%');
	parallaxScroll('.how-it-works', '.how-it-works .bg-icon1');
	parallaxScroll('.how-it-works', '.how-it-works .bg-icon2', '-5%');

	parallaxScroll('.pricing', '.pricing .bg-icon1');
	parallaxScroll('.pricing', '.pricing .bg-icon2', '10%');
	parallaxScroll('.pricing', '.pricing .bg-circle1', '15%');

	parallaxScroll('.cta', '.cta .bg-icon1');
	parallaxScroll('.cta', '.cta .bg-icon2', '10%');
	parallaxScroll('.cta', '.cta .bg-circle1', '15%');
}