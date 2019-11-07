// Preloader start

	$('.preloader__ico').fadeIn('slow');
	
	$(window).on('load', function () {
		setTimeout(function () {
			$('.preloader').fadeOut('slow');
		}, 1000);
	});

// Preloader end

// Parallax amination start

	function animateProducts(productAnimate, productCover, delayItem = 0.10, yAnimation = 60, topOffset = 400, mainDelay = 0.15) {
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
		
		const tl = new TimelineMax({delay:mainDelay})
			.staggerTo(productItem, 0.4, {
				y: 0,
				autoAlpha: 1,
				clearProps: 'transition, transform, opacity',
				ease:Power1.easeOut
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

var mobDev = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
// var mobDev = false;

$(document).ready( function(){

// Animation just for web start
	
	if (!mobDev) {
		animateProducts('.solutions .fade-up','.solutions');
		
		animateProducts('.pricing .fade-up','.pricing');
		
	} else {
		$('body').addClass('show-svg');
	}
	
// Animation just for web end

// Smooth scroll start
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
		
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});
// Smooth scroll end

// Hamburger menu start
	
	$('.hamburger').on('click', function() {
		var $containerMob = $('.main-header');
		var $mobMenu = $('.mob-menu');
		var $thisActive = $containerMob.hasClass('active');
		
		if($thisActive) {
			$containerMob.removeClass('active');
			$mobMenu.removeClass('active');
		} else {
			$containerMob.addClass('active');
			$mobMenu.addClass('active');
		}
		
	});
	
// Hamburger menu end

});



