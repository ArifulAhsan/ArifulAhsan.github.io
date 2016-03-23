/*script written by Ariful Ahsan*/


// GLOBAL CLOSURE VARIABLES
    var w = $(window), d = $(document);

    // WINDOW HEIGHT + WIDTH VARS
    var winH = w.height(), winW = w.width();
	
$(document).ready(function(e) {
	
	$(".contact_me").click(function(e) {
		$('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">');
    });
	
	/*request callback*/
	$(".request_cb_toggle").click(function(e) {
		e.stopPropagation();
		$(".request_cb_toggle").toggleClass("open");
		$(".request_cb_form").slideToggle();
	});
	
	/*$("#signup_button, .login_button").addClass("hvr-pulse");*/
	$("#signup_button, .login_button, #social_content a span").addClass("hvr-sweep-to-top");
	$(".bottom_area a#bottom_link_1").addClass("hvr-sweep-to-right");
	$(".bottom_area a#bottom_link_2").addClass("hvr-sweep-to-left");
	$(".p_choose li a").addClass("hvr-sweep-to-bottom");	
	$("ul#attract_navigation_ul li a, .modefied_links_in_detail_panel li a, #call_and_started ul li a, #webinar a, .analytical_detail_division a.play_video, .s_2_b a").addClass("hvr-shadow-radial");	
	$(".modefied_links_in_detail_panel li a, .go_to_detail_panel a").addClass("hvr-shadow-radial");	
		
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
				}, 800);
		return false;
	});
	
	$(".go_to_detail_panel a").click(function() {
		var target = $(this.hash);
		var targetPosition = target.offset().top;
		if($(this).attr("data-offset")){
			var customOffset = $(this).attr("data-offset");
			var NewPosition = Number(targetPosition) +Number(customOffset);			
		}
		else{
			var NewPosition = Number(targetPosition) -60;
		}
		$('html,body').animate({
				  scrollTop: NewPosition
				}, 800);
		return false;
	});
	
	$('#header_background_video').videoBG({
		position:"fixed",
		zIndex:90,
		mp4:'videos/video_header.mp4',
		ogv:'videos/video_header.ogv',
		webm:'videos/video_header.webm',
		poster:'videos/video_header.jpg'
	});
		
	if(winW > 767){
	    var wow = new WOW();
  		wow.init();
	}
	
	
    $("#top_bar_navigation_button").click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).toggleClass('active');
		$(this).find(".m-t-b").toggleClass("show");
        $("#top_bar_navigation_menu").slideToggle(500);
    });
	
	$(window).scroll(function(){
		if($("#top_header").hasClass('index_header')){
			if($(this).scrollTop()>winH){
				$(".top_bar, #top_bar_navigation_menu").addClass('active');
				$("#first_div_detail, #scroll_next, #scroll_next a #header_background_video, #title-line1 span, #title-line2, .bottom_area a").css({'visibility':'hidden', 'opacity':0});
			}
			else{
				$(".top_bar, #top_bar_navigation_menu").removeClass('active');
				$("#first_div_detail, #scroll_next, #scroll_next a, #header_background_video, #title-line1 span, #title-line2, .bottom_area a").css({'visibility':'visible', 'opacity':1});
			}
		}
		if( $("#top_header").hasClass('small_header') ){
			if($(this).scrollTop()>100){
				$(".top_bar, #top_bar_navigation_menu").addClass('active');
			}
			else{
				$(".top_bar, #top_bar_navigation_menu").removeClass('active');
			}
		}
		
		if($(this).scrollTop()>300){
			$('.scrollUp, #signup_button, #livechat-compact-container').addClass('active');
		}else{
			$('.scrollUp, #signup_button, #livechat-compact-container').removeClass('active');
		}
		/*for login page button*/
		if($(this).scrollTop()>10){
			$(".lo_info").fadeOut();
		}else{
			$(".lo_info").fadeIn();
		}
	});
	
	$('.scrollUp').click(function(e) {
	  $("html, body").animate({ scrollTop: 0 }, 600);
	  return false;
  });
  
	var url = document.location.toString();
	if (url.match('#')) {
		$('.tab_hash a[href=#'+url.split('#')[1]+']').tab('show') ;
	} 
	
	// Change hash for page-reload
	$('.tab_hash a, .tab_hash_a').on('shown.bs.tab', function (e) {
		if(history.pushState) {
			history.pushState(null, null, e.target.hash); 
		} else {
			window.location.hash = e.target.hash; //Polyfill for old browsers
		}
	})

	/*$("#top_bar_navigation_menu.n_index ul:not('.fourth') a").click(function(e) {
		var ahash = $(this).attr('data-clickid');
		var fullPath = window.location.href;
		fullPath = fullPath.substring(0, url.lastIndexOf("/") + 1);
		location.href=fullPath+"#"+ahash;
		if(history.pushState) {
			history.pushState(null, null, e.target.hash); 
		} else {
			window.location.hash = e.target.hash; 
		}
		$("#top_bar_navigation_button").removeClass('active');
		$("#top_bar_navigation_button").find(".m-t-b").removeClass('show');
		
	});
	$("#top_bar_navigation_menu ul.fourth a").click(function(e) {
		$("#top_bar_navigation_menu").slideUp();
		$("#top_bar_navigation_button").removeClass('active');
		$("#top_bar_navigation_button").find(".m-t-b").removeClass('show');	
	});*/
	
	$("#top_bar_navigation_menu ul.first a").click(function(e) {
			var target = $(this.hash);			
			var targetPosition = target.offset().top;
			var customOffset = "-30";
			var NewPosition = Number(targetPosition) +Number(customOffset);
			$('html,body').animate({
			  scrollTop: targetPosition
			}, 1000);
			$("#top_bar_navigation_menu").slideUp();		
			$("#top_bar_navigation_menu a, #top_bar_navigation_button").removeClass('active');
			$("#top_bar_navigation_button").find(".m-t-b").removeClass('show');
			$(this).addClass('active');
			$("#attract_navigation_ul li, #dm_attract_navigation_ul li").removeClass('active');
			var tab_target = $(this).attr("data-clickid");
			var id_target = $(this).attr("data-detailDiv");
			$("#attract_navigation_ul a, #dm_attract_navigation_ul a").each(function(e) {
				if($(this).attr("data-detailDiv") == id_target )
				{
					$(this).parent('li').addClass('active');
				};
			});
			$("#attrat_capture_engage .tab-pane").removeClass('active')
			if($("#attrat_capture_engage .tab-pane").hasClass('in')){
				$("#attrat_capture_engage .tab-pane").removeClass('in');
			}
			$("#detail_panel1").find(".detail_panel_tab").css('display','none');
			
			$("#" + tab_target).addClass('active in');
			$("#" + id_target).css('display','block');
				
    });
	
	$("#top_bar_navigation_menu ul.second a").click(function(e) {
			var target = $(this.hash);			
			var targetPosition = target.offset().top;
			var customOffset = "120";
			var NewPosition = Number(targetPosition) +Number(customOffset);
			$('html,body').animate({
			  scrollTop: targetPosition
			}, 1000);
			
			$("#top_bar_navigation_menu").slideUp();		
			$("#top_bar_navigation_menu a, #top_bar_navigation_button").removeClass('active');
			$("#top_bar_navigation_button").find(".m-t-b").removeClass('show');
			$(this).addClass('active');
			$("#lead_navigation_ul li, #dm_lead_navigation_ul li").removeClass('active');
			var tab_target = $(this).attr("data-clickid");
			var id_target = $(this).attr("data-detailDiv");
			$("#lead_navigation_ul a, #dm_lead_navigation_ul a").each(function(e) {
				if($(this).attr("data-detailDiv") == id_target )
				{
					$(this).parent('li').addClass('active');
				};
			});
			$("#lead_to_customer_management .tab-pane").removeClass('active')
			if($("#lead_to_customer_management .tab-pane").hasClass('in')){
				$("#lead_to_customer_management .tab-pane").removeClass('in');
			}
			$("#detail_panel2").find(".detail_panel_tab").css('display','none');
			
			$("#" + tab_target).addClass('active in');
			$("#" + id_target).css('display','block');
    });
	
	$("#top_bar_navigation_menu ul.third a").click(function(e) {
		var target = $(this.hash);			
		var targetPosition = target.offset().top;
	/*	var customOffset = "10";
		var NewPosition = Number(targetPosition) +Number(customOffset);*/
		$('html,body').animate({
		  scrollTop: targetPosition
		}, 1000);
		$("#top_bar_navigation_menu").hide();	
		$("#top_bar_navigation_menu a, #top_bar_navigation_button").removeClass('active');
		$("#top_bar_navigation_button").find(".m-t-b").removeClass('show');
		$(this).addClass('active');
		$("#analyticsMetrics ul li").removeClass('active');
		var tab_target = $(this).attr("data-clickid");
		$("#analyticsMetrics ul li a").each(function(e) {
			if($(this).attr("href") == "#"+tab_target )
			{
				$(this).parent('li').addClass('active');
			};
		});
		$("#analytics_detail_panel .tab-pane").removeClass('active out')
		if($("#analytics_detail_panel .tab-pane").hasClass('in')){
			/*$("#analytics_detail_panel .tab-pane").removeClass('in').addClass('out');*/
			$("#analytics_detail_panel .tab-pane").removeClass('in out');
		}			
		$("#" + tab_target).addClass('active in');
    });
	
	
	$("#attract_navigation_ul li a").not(".JsUnselected").click(function(e) {
        $("#detail_panel1").find(".detail_panel_tab").css('display','none');
		var id_target = $(this).attr("data-detailDiv");
		$("#" + id_target).css('display','block');
		$("#dm_attract_navigation_ul li").removeClass('active');
		$("#dm_attract_navigation_ul a").each(function(e) {
			if($(this).attr("data-detailDiv") == id_target )
			{
				$(this).parent('li').addClass('active');
			};
		});
    });
	$("#lead_navigation_ul li a").click(function(e) {
		$("#detail_panel2").find(".detail_panel_tab").css('display','none');
		var id_target = $(this).attr("data-detailDiv");
		$("#" + id_target).css('display','block');
		$("#dm_lead_navigation_ul li").removeClass('active');
		$("#dm_lead_navigation_ul a").each(function(e) {
			if($(this).attr("data-detailDiv") == id_target )
			{
				$(this).parent('li').addClass('active');
			};
		});
    });
	/*for dedicated menu*/
	$("#dm_attract_navigation_ul > li > a").not(".JsUnselected").click(function(e) {
		e.preventDefault();
        $("#detail_panel1").find(".detail_panel_tab").css('display','none');
		var id_target = $(this).attr("data-detailDiv");
		$("#" + id_target).css('display','block');
    });
	$("#dm_lead_navigation_ul > li > a ").click(function(e) {
		e.preventDefault();
		$("#detail_panel2").find(".detail_panel_tab").css('display','none');
		var id_target = $(this).attr("data-detailDiv");
		$("#" + id_target).css('display','block');
    });
	
	$(".dedicated-menu .main_content_navigations > li").click(function(e) {
		e.stopPropagation();		
		$(".sub_navigation").slideUp();
		$(".dedicated-menu .main_content_navigations > li").removeClass('active');
		$(this).addClass('active');
		$(".dedicated-menu .main_content_navigations li a i").removeClass('active');
		$(this).find("a i").toggleClass('active');
		$(this).find(".sub_navigation").stop(true, false).slideToggle();
		}	
	);
	$(".sub_navigation a").click(function(e) {
		e.preventDefault();
		$(".sub_navigation a").removeClass('active');
		$(this).addClass('active');
		$(this).find("i").removeClass('active');
		var carousel_name = $(this).attr("data-carousel-name");
		var carousel_number =  $(this).attr("data-carousel-number");
		$("#" + carousel_name).find(".item").removeClass('active');
		$("#" + carousel_name).find(".item" + carousel_number).addClass('active');
		$("#" + carousel_name).find(".carousel-indicators li").removeClass('active');
		$("#" + carousel_name).find(".carousel-indicators li:nth-child(" + carousel_number + ")").addClass('active');		
	});
	
	$("body").click(function(e){
		if ($(e.target).closest('#top_bar_navigation_menu').length === 0 ) {
			$("#top_bar_navigation_button").removeClass('active');
			$("#top_bar_navigation_button").find(".m-t-b").removeClass('show');
			$("#top_bar_navigation_menu").slideUp(500);
		}
		/*dedicated menu*/
		$(".dedicated-menu .main_content_navigations li a i").removeClass('active');
		$('.dedicated-menu .main_content_navigations .sub_navigation:visible').slideUp();
		$(".dropdown_navigation, .dropdown_navigation a i").removeClass('active');
		$('.dropdown_navigation .sub_navigation:visible').slideUp();
	});			
	
	/*dropdown navigation in small device less than 992 px*/
	
	$(".attract_navigation").click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).find(".m-t-b").toggleClass("show");
        $(this).siblings(".main_content_navigations").slideToggle();
    });
	
	$(".lead_navigation").click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).find(".m-t-b").toggleClass("show");
        $(this).siblings(".main_content_navigations").slideToggle();
    });
		
		$("#video_modal .modal-dialog, #video_modal #vdc").height(winH);
		$("#video_modal .modal-dialog, #video_modal #vdc").width(winW);
		$("#vdc").width(winW);
		$("#vdc").height(winH);
		/*$("#video_modal .modal-dialog video").innerHeight(winH);*/
		
		$(".play_video").click(function(e) {
            var selection = $(this).attr("data-selection");
			$("#vdc").attr("src",selection+"?theme=light&amp;autoplay=1&amp;modestbranding=1&amp;rel=0");			
        });
		$(".video-modal-close").click(function(e) {
			$(this).siblings("iframe").attr("src","");
		});
		
		
		/*pricing page hovering*/
		
		$(".p_choose li").hover(function(e) {
			$(this).next("li").find("a").toggleClass('border-adjust');
		});
		
		$("#email_pricing_choose li a").click(function(e) {
			e.preventDefault();
			if(!$(this).hasClass("quote_open")){
				$(".email_marketer_form").fadeOut(400, function(){
					$(".email_p_box").fadeIn(900);
					$(".email_marketer_form_s").hide();
				});
			}
			
			/*$(".p_choose li a").removeClass('active border-adjust');
			$(this).parent('li').prev("li").find("a").addClass('border-adjust');*/
			$("#email_pricing_choose li a").removeClass('active')
			$(this).toggleClass('active');
			var monthly = $(this).attr("data-month");
			var one_time = $(this).attr("data-flex");
			/*var fromselect = $('#e_calculated_monthly_price').html();*/
			/*alert(fromselect);*/
			$('#e_calculated_monthly_price').countTo({
				from: 19,
				to: monthly,
				speed: 1500,
			});
			$('#e_calculated_ot_price').countTo({
				from: 35,
				to: one_time,
				speed: 1500,
			});
		});
		$("#pro_pricing_choose li a").click(function(e) {
			e.preventDefault();
			if(!$(this).hasClass("quote_open")){
				$(".pro_marketer_form").fadeOut(400, function(){
					$(".pro_p_box").fadeIn(900);
					$(".pro_marketer_form_s").hide();
				});		
			}
			/*$(".p_choose li a").removeClass('active border-adjust');
			$(this).parent('li').prev("li").find("a").addClass('border-adjust');*/
			$("#pro_pricing_choose li a").removeClass('active');
			$(this).toggleClass('active');
			var month = $(this).attr("data-month");
			var quarter = $(this).attr("data-quarter");
			var year = $(this).attr("data-year");
			var quarter_save = $(this).attr("data-quarter-save");
			var year_save = $(this).attr("data-year-save");
			/*var fromselect = $('#e_calculated_monthly_price').html();*/
			//alert(quarter_save);
			$('#p_calculated_monthly_price').countTo({
				from: 138,
				to: month,
				speed: 1500,
			});
			$('#p_calculated_quarter_price').countTo({
				from: 297,
				to: quarter,
				speed: 1500,
			});
			$('#p_calculated_yearly_price').countTo({
				from: 1069,
				to: year,
				speed: 1500,
			});
			$('#p_calculated_quarter_price_save').html('Save $'+quarter_save);
			$('#p_calculated_yearly_price_save').html('Save $'+year_save);
		});
		
		$("#email_pricing_choose li a.quote_open").click(function(e) {
			$(".email_p_box").fadeOut(400, function(){
				$(".email_marketer_form").fadeIn(900);
				$(".email_marketer_form_s").hide();
			});
		});
		$("#pro_pricing_choose li a.quote_open").click(function(e) {
			$(".pro_p_box").fadeOut(400, function(){
				$(".pro_marketer_form").fadeIn(900);
				$(".pro_marketer_form_s").hide();
			});
		});
		
		//Sign Up
		$(".sign_up_p").find(".submit_button").click(function(e) {
			var frmData = $("#s_m_form").serialize();
			//alert (frmData)
			$('#loading_remove1').hide();
			$('#loading_remove2').hide();
			$('#loading_wrapper').show();
			$.ajax({
				url: 'get_popup.php',
				type: 'POST',
				data: frmData,
				error: function() {
					alert('There was a problem with your request.');
				},
				success: function(data) {
					var dataArr = JSON.parse(data);
					$('#loading_wrapper').hide();
					$('#loading_remove1').show();
					$('#loading_remove2').show();
					if (dataArr[0]=='0') { //error
						$('#error_wrapper').show();
						$('#error_wrapper').html(dataArr[1]);
					}
					else { //success
						$('#error_wrapper').hide();
						$('#error_wrapper').html('');
						$("#s_m").modal("hide");
						$("#s_m_s").modal("show");
					}
				}
			});
		});
		$(".sign_up_p").find("#country").change(function(e) {
			$(".sign_up_p").find("#state").val('');
			if ($(this).val()=='USA') {
				$(".sign_up_p").find("#state").show();
				$(".sign_up_p").find("#no_state").hide();
			} else {
				$(".sign_up_p").find("#no_state").show();
				$(".sign_up_p").find("#state").hide();
			}
		});
		
		/*$(document).on('hidden.bs.modal', function (e) {
			$(e.target).removeData('bs.modal');
		});*/
		
		/*$(".switch_v ul li a").click(function(e) {
			$(this).parent("li").find("img").attr("src","");
		});*/
		
		$(".special_tab_link a").click(function(e) {
			$(this).parent('li').removeClass('active');
		});
		
	//FORMS
	$.support.cors = true;
	//demo
	$('#form-690').validate({
     	onsubmit: true,
		errorClass: "error-validator",
        errorElement: "div",
        wrapper: "div",
        errorPlacement: function(error, element) {
            offset = element.offset();
            error.insertBefore(element)
            error.addClass('message-validator');
            error.css('position', 'absolute');
            error.css('left', $(element).position().left + $(element).width() - 102);
			error.css('top', $(element).position().top + 7);
        }
	});
	$('#form-690').on('submit', function(e) {
        e.preventDefault();
        var btn = $(this).find('div').children('button');
        var isvalidate = $('#form-690').valid();
        if (isvalidate) {
			$('#loading_remove_d').hide();
			$('#loading_wrapper_d').show();
	        $.ajax({
	            type: "POST",
	            url: $(this).attr('action'),
	            data: $(this).serialize(),
	            success: function(data, textStatus, jqXHR) {
	                $('#loading_wrapper_d').hide();
					$('#loading_remove_d').show();
					$("#rd_m").modal("hide");
					$("#rd_m_s").modal("show");
	            }
	        });
        }
        return false;
    });
	//message
	$('#form-686').validate({
     	onsubmit: true,
		errorClass: "error-validator",
        errorElement: "div",
        wrapper: "div",
        errorPlacement: function(error, element) {
            offset = element.offset();
            error.insertBefore(element)
            error.addClass('message-validator');
            error.css('position', 'absolute');
            error.css('left', $(element).position().left + $(element).width() - 102);
			error.css('top', $(element).position().top + 7);
        }
	});
	$('#form-686').on('submit', function(e) {
        e.preventDefault();
        var btn = $(this).find('div').children('button');
        var isvalidate = $('#form-686').valid();
        if (isvalidate) {
			$('#loading_remove_m').hide();
			$('#loading_wrapper_m').show();
	        $.ajax({
	            type: "POST",
	            url: $(this).attr('action'),
	            data: $(this).serialize(),
	            success: function(data, textStatus, jqXHR) {
	                $('#loading_wrapper_m').hide();
					$('#loading_remove_m').show();
					$("#ask_m").modal("hide");
					$("#ask_m_s").modal("show");
	            }
	        });
        }
        return false;
    });
	//chat
	$('#form-685').validate({
     	onsubmit: true,
		errorClass: "error-validator",
        errorElement: "div",
        wrapper: "div",
        errorPlacement: function(error, element) {
            offset = element.offset();
            error.insertBefore(element)
            error.addClass('message-validator');
            error.css('position', 'absolute');
            error.css('left', $(element).position().left + $(element).width() - 102);
			error.css('top', $(element).position().top + 7);
        }
	});
	$('#form-685').on('submit', function(e) {
        e.preventDefault();
        var btn = $(this).find('div').children('button');
        var isvalidate = $('#form-685').valid();
        if (isvalidate) {
			$('#loading_remove_c').hide();
			$('#loading_wrapper_c').show();
	        $.ajax({
	            type: "POST",
	            url: $(this).attr('action'),
	            data: $(this).serialize(),
	            success: function(data, textStatus, jqXHR) {
	                $('#loading_wrapper_c').hide();
					$('#loading_remove_c').show();
					$("#chat_ex_m").modal("hide");
					$("#chat_ex_m_s").modal("show");
	            }
	        });
        }
        return false;
    });
	//quote-pro
	$('#form-687').validate({
     	onsubmit: true,
		errorClass: "error-validator",
        errorElement: "div",

        wrapper: "div",
        errorPlacement: function(error, element) {
            offset = element.offset();
            error.insertBefore(element)
            error.addClass('message-validator');
            error.css('position', 'absolute');
            error.css('left', $(element).position().left + $(element).width() - 94);
			error.css('top', $(element).position().top + 6);
        }
	});
	$('#form-687').on('submit', function(e) {
        e.preventDefault();
        var btn = $(this).find('div').children('button');
        var isvalidate = $('#form-687').valid();
        if (isvalidate) {
			$('#loading_remove_qp').hide();
			$('#loading_wrapper_qp').show();
	        $.ajax({
	            type: "POST",
	            url: $(this).attr('action'),
	            data: $(this).serialize(),
	            success: function(data, textStatus, jqXHR) {
	                $('#loading_wrapper_qp').hide();
					$('#loading_remove_qp').show();
					$(".pro_marketer_form").hide();
					$(".pro_marketer_form_s").show();
	            }
	        });
        }
        return false;
    });
	//quote-email
	$('#form-688').validate({
     	onsubmit: true,
		errorClass: "error-validator",
        errorElement: "div",
        wrapper: "div",
        errorPlacement: function(error, element) {
            offset = element.offset();
            error.insertBefore(element)
            error.addClass('message-validator');
            error.css('position', 'absolute');
            error.css('left', $(element).position().left + $(element).width() - 94);
			error.css('top', $(element).position().top + 6);
        }
	});
	$('#form-688').on('submit', function(e) {
        e.preventDefault();
        var btn = $(this).find('div').children('button');
        var isvalidate = $('#form-688').valid();
        if (isvalidate) {
			$('#loading_remove_qe').hide();
			$('#loading_wrapper_qe').show();
	        $.ajax({
	            type: "POST",
	            url: $(this).attr('action'),
	            data: $(this).serialize(),
	            success: function(data, textStatus, jqXHR) {
	                $('#loading_wrapper_qe').hide();
					$('#loading_remove_qe').show();
					$(".email_marketer_form").hide();
					$(".email_marketer_form_s").show();
	            }
	        });
        }
        return false;
    });
}); /*end document.ready*/

$(window).resize(function(e) {	
	
	if(winW > 997){
	  var lead_navigation_ul = $("#lead_navigation_ul").height();
	  $("#wrapper_ul_lead_to_customer").height(lead_navigation_ul);
	  $("#wrapper_ul_lead_to_customer .container").height(lead_navigation_ul);
	}
	if(winW < 992){
		$(".main_content_navigations").hide();
	}
});