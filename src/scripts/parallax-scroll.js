function parallaxScroll(coverSection, parallaxItem, yAnimate = '-20%', yStart = 0, offsetTop = 0, mainDur = '200%') {
	
	let cSection = coverSection,
			pItem = parallaxItem,
			controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: mainDur}});
	
	TweenMax.set(pItem, {
		y: yStart
	});
	
	// build scenes
	new ScrollMagic.Scene({
		triggerElement: cSection,
		offset: offsetTop,
	})
	.setTween(pItem, {y: yAnimate, ease: Linear.easeNone})
	.setClassToggle(pItem, "active-parallax")
	.on("end", function (e) {
		$(pItem).toggleClass('end-parallax');
	})
	.addTo(controller);
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
	
	parallaxScroll('.pricing', '.pricing .bg-icon1',);
	parallaxScroll('.pricing', '.pricing .bg-icon2', '10%');
	parallaxScroll('.pricing', '.pricing .bg-circle1', '15%');
	
	parallaxScroll('.cta', '.cta .bg-icon1',);
	parallaxScroll('.cta', '.cta .bg-icon2', '10%');
	parallaxScroll('.cta', '.cta .bg-circle1', '15%');
	
}
