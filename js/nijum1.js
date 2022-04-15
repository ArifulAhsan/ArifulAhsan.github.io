// Coded By Spondon Started in July 1, 2014

/*Global Closure Variable*/
var w = $(window), d = $(document);

/*Get Window height and weight*/
var winH = w.height(), winW = w.width();

/*Get Document height and weight*/
var docH = d.height(), docW = d.width();

$(document).ready(function(e) {
  $("#recognise, .adjust-in-middle").height(winH);
  
  $("#navigation_toggle").click(function(e) {
	  $(this).toggleClass('active');
    $(".navigation").slideToggle();
  });
	$('.navigation').localScroll({
		duration:1800
	});
  
  $(window).scroll(function(e) {
	  var Nav = $("#header").position();
	  var NavH = Nav.top;
/*	  alert("Hi"+NavH+"All");*/
	  if($(this).scrollTop()>winH){
		  $("#header").addClass('active');
	  }
	  else{
		  $("#header").removeClass('active');
	  }
	  
	  if($(this).scrollTop()>300){
			$('.scrollUp').addClass('active');
		}else{
			$('.scrollUp').removeClass('active');
		}
		
  });
  $('.scrollUp, .footer_scroll_top').click(function(e) {
	  $("html, body").animate({ scrollTop: 0 }, 600);
	  return false;
  });
  
  $(function() {
		var anim = animate('#sky');
		setTimeout(function() { anim.stop(); }, 60000);
	});
	
	/*bootstrap carousel height adjusting*/
	
	    setCarouselHeight('#carousel-in-client-feedback');
		setCarouselHeight('#carousel-in-successful-motivation');

		function setCarouselHeight(id)
		{
			var slideHeight = [];
			$(id+' .item').each(function()
			{
				// add all slide heights to an array
				slideHeight.push($(this).height());
			});
	
			// find the tallest item
			max = Math.max.apply(null, slideHeight);
	
			// set the slide's height
			$(id+' .item').each(function()
			{
				var realH = $(this).css('height');
				var maxHalf = max*.5;
				if( realH < max ){
					alert('Hi');
				$(this).css('marginTop',maxHalf+'px');
				$(this).css('marginBottom',maxHalf+'px');
				}
			});
		
	}
	
	$(".height_equal_target_1").matchHeight();
	
	
	var controller = $.superscrollorama({
		triggerAtCenter: true,
		enablePin:false
	})
	controller.addTween('#animation1', TweenMax.from( $('#animation1'), 0.4, {css:{right:'2000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#animation2', TweenMax.from( $('#animation2'), 0.6, {css:{scale:0.1, opacity: 0.2}, ease:Quad.easeOutCirc}));
	controller.addTween('#animation3', TweenMax.from( $('#animation3'), 0.8, {css:{left:'2000px'}, ease:Quad.easeOutCirc}));	
	
	
	controller.addTween('#animation4', TweenMax.from( $('#animation4'), 0.8, {css:{right: '1500px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#2animation1', TweenMax.from( $('#2animation1'), 0.3, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#2animation2', TweenMax.from( $('#2animation2'), 0.5, {css:{right:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#2animation3', TweenMax.from( $('#2animation3'), 0.7, {css:{right:'1400px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#2animation4', TweenMax.from( $('#2animation4'), 0.9, {css:{left:'1400px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#2animation5', TweenMax.from( $('#2animation5'), 1.1, {css:{left:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#2animation6', TweenMax.from( $('#2animation6'), 1.3, {css:{left:'1000px'}, ease:Quad.easeOutCirc}));
	
	controller.addTween('#project_1', TweenMax.from( $('#3animation1'), 1.3, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#project_1', TweenMax.from( $('#3animation2'), 1.1, {css:{top:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#3animation3', TweenMax.from( $('#3animation3'), 0.8, {css:{left:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#3animation3', TweenMax.from( $('#3animation4'), 1.5, {css:{left:'1000px'}, ease:Quad.easeOutCirc}));	
	
	controller.addTween('#project_2', TweenMax.from( $('#4animation1'), 1, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#project_2', TweenMax.from( $('#4animation2'), 0.8, {css:{top:'-1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#4animation3', TweenMax.from( $('#4animation3'), 0.7, {css:{left:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#project_2', TweenMax.from( $('#4animation4'), 0.7, {css:{top:'1000px'}, ease:Quad.easeOutCirc}));
	
	controller.addTween('#project_3', TweenMax.from( $('#5animation1'), 1, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#project_3', TweenMax.from( $('#5animation2'), 0.8, {css:{top:'-1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#5animation3', TweenMax.from( $('#5animation3'), 0.7, {css:{left:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#project_3', TweenMax.from( $('#5animation4'), 0.7, {css:{top:'1000px'}, ease:Quad.easeOutCirc}));	
		
});

var revapi;

jQuery(document).ready(function() {

	   revapi = jQuery('.tp-banner').revolution(
		{
			delay:15000,
			startwidth:1170,
			startheight:500,
			hideThumbs:10,
			fullWidth:"off",
			fullScreen:"on",
			parallax:"mouse",
			parallaxBgFreeze:"on",
			parallaxLevels:[10,7,4,3,2,5,4,3,2,1],

		});
		revapi = jQuery('.tp-banner-2').revolution(
		{
			delay:35000,
			startwidth:1170,
			startheight:500,
			hideThumbs:10,
			fullWidth:"off",
			fullScreen:"on",
			fullScreenOffsetContainer: ""

		});

				});	//ready