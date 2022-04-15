// Coded By Ariful Ahsan Started in July 1, 2011

/*Global Closure Variable*/
var w = $(window), d = $(document);

/*Get Window height and weight*/
var winH = w.height(), winW = w.width();

/*Get Document height and weight*/
var docH = d.height(), docW = d.width();

/*Cursor customization*/
var kursorx = new kursor({
    type: 1,
    color: 'rgba(106,201,153)',
})

function loading(){
	var num = 0;

	for(i=0; i<=100; i++) {
		setTimeout(function() { 
		$('#PercentCalculationOnLoading').html(num+'%');

		if(num == 100) {
			loading();
		}
		num++;
		},i*120);
	};
}

$(document).ready(function(e) {

	//Adding percent calculation on loading
	loading();

	$("a, button, input").hover(function(){
		$(this).css("cursor", "pointer");
		$(".kursor, .kursorChild").toggleClass("anchored");
	});

	$("body").mousedown(function(e){
		if (e.which === 1) {
			/* Left mouse button was clicked! */
			$(".kursor--1").addClass("leftMouseButton").delay(2000)
						  .queue(function(next){
							$(this).removeClass('leftMouseButton');
							next();
						  });
		}
		else if (e.which === 3) {
			/* Right mouse button was clicked! */
			$(".kursor--1").addClass("rightMouseButton").delay(2000)
						  .queue(function(next){
							$(this).removeClass('rightMouseButton');
							next();
						  });
		}

	});

  $("#recognise, .adjust-in-middle").height(winH);
  
  $("#navigation_toggle").click(function(e) {
	  $(this).toggleClass('active');
    $(".navigation").slideToggle();
  });
	/*$('.navigation').localScroll({
		duration:800
	});*/
	$(".animatedscroll").click(function() {
		var target = $(this.hash);
		var targetPosition = target.offset().top;
		if($(this).attr("data-offset")){
			var customOffset = $(this).attr("data-offset");
			var NewPosition = Number(targetPosition) +Number(customOffset);			
		}
		else{
			var NewPosition = targetPosition;
		}
		$('html,body').animate({
				  scrollTop: NewPosition
				}, 600);
		return false;
	});
	
	$("#modal_developer .modal-dialog").width(winW);
	$("#modal_developer .modal-dialog").height(winH);
  
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
				var realH = $(this).height();
				if(realH < max){
					var realN = max-realH;	
					$(this).css('marginTop',realN*.5+'px');
					$(this).css('marginBottom',realN*.5+'px');
				}
			});
			
			/*$(id+' .item').each(function()
			{
				$(this).css('height',max+'px');
			});*/
		
	}
	
	$(".footer_scroll_top").hover(function(e) {
        $("#footer").toggleClass('go_top');
    });
	
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

	controller.addTween('#clientAnimation1', TweenMax.from( $('#clientAnimation1'), 0.3, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation2', TweenMax.from( $('#clientAnimation2'), 0.4, {css:{right:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation3', TweenMax.from( $('#clientAnimation3'), 0.5, {css:{right:'1400px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation4', TweenMax.from( $('#clientAnimation4'), 0.6, {css:{right:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation5', TweenMax.from( $('#clientAnimation5'), 0.7, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation6', TweenMax.from( $('#clientAnimation6'), 0.8, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation7', TweenMax.from( $('#clientAnimation7'), 0.9, {css:{right:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation8', TweenMax.from( $('#clientAnimation8'), 1.0, {css:{right:'1400px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation9', TweenMax.from( $('#clientAnimation9'), 1.1, {css:{right:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation10', TweenMax.from( $('#clientAnimation10'), 1.2, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation11', TweenMax.from( $('#clientAnimation11'), 1.3, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation12'), 1.4, {css:{right:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation13'), 1.5, {css:{right:'1400px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation14'), 1.6, {css:{right:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation15'), 1.7, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation16'), 1.8, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation17'), 1.9, {css:{right:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation18'), 2.0, {css:{right:'1400px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation19'), 2.1, {css:{right:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation20'), 2.2, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation21'), 2.3, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation22'), 2.4, {css:{right:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation23'), 2.5, {css:{right:'1400px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation24'), 2.6, {css:{right:'1200px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation25'), 2.7, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
	controller.addTween('#clientAnimation12', TweenMax.from( $('#clientAnimation26'), 2.8, {css:{right:'1000px'}, ease:Quad.easeOutCirc}));
		
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

		});

		async function arifulAhsanLoaded() {
			await new Promise(resolve => setTimeout(resolve, 2000));
			$(".body_loading").addClass("loaded"); 
			$("#ariful_loader").remove();
			$('#PercentCalculationOnLoading').hide();
		}

		$(window).load(function () {
			arifulAhsanLoaded();
		});

		// function arifulAhsanLoaded(){
		// 	$(".body_loading").addClass("loaded"); 
		// 	$("#ariful_loader").remove();
		// 	$('#PercentCalculationOnLoading').hide();
		// }

});	//ready