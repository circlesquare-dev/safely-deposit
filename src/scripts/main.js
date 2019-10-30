// Preloader start

	$('.preloader__ico').fadeIn('slow');
	
	$(window).load(function () {
		setTimeout(function () {
			$('.preloader').fadeOut('slow');
		}, 1000);
	});

// Preloader end

// Parallax amination start

	function animateProducts(productAnimate, productCover, delayItem = 0.15, yAnimation = 60, topOffset = 500, mainDelay = 0.25) {
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
		// animateProducts('.hw-list li','.how-it-works');
		animateProducts('.partner_img','.partners', 0.15, 60, 200);
		animateProducts('.au_list-title','.about-us');
		animateProducts('.au_list li','.about-us');
		animateProducts('.au_btn','.about-us');
		
		animateProducts('.solution_item','.solutions');
		animateProducts('.solutions .btn_main','.solutions');
		
		animateProducts('.how-it-works .hw_num','.how-it-works');
		animateProducts('.how-it-works .hw_info','.how-it-works', 0.15,60,500,1);
		
		animateProducts('.pricing .pp_item','.pricing');
		animateProducts('.pricing .pi_wrap','.pricing');
		
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
	
	$('.hamburger').on('click', function() {
		var $containerMob = $('.main-header_d-menu');
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



