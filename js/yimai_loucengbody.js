// JavaScript Document

$(function(){
	<!--边框红心-->	
	function loves(){
		var $page =  $("#louceng_0").find("ul").children("li");
		var $li = $page.find("ul").children("li");
		$li.hover(
		function(){
			$(this).find("#louceng_15").addClass("love");
			$(this).find("#louceng_14").css("border","1px solid #C40000");
			$(this).find("#louceng_16").css("border","1px solid #C40000");
		},
		function(){
			$(this).find("#louceng_15").removeClass("love");
			$(this).find("#louceng_14").css("border","0px solid #C40000");
			$(this).find("#louceng_16").css("border","0px solid #C40000");
		});
	}
	loves();
	
	//品牌轮播
	function movedome(img,speed,or){
		var $img = $(img).children("li");
		var img = $img.find("#louceng_8 ul");
		var prev = $img.find("#louceng_9").find("div");
		var next = $img.find("#louceng_10").find("div");
		var w = img.children("li").outerHeight(true);
		var s = speed;
		var flag = "left";
		
		next.click(function(){
			index = $img.index($(this));
			img.animate({'margin-top':-w},function(){
				img.find('li').eq(0).appendTo(img);
				img.css({'margin-top':0});	
			});	
			flag="left";
		});
		
		prev.click(function(){
			img.find('li:last').prependTo(img);
			img.css({'margin-top':-w});
			img.animate({'margin-top':0});
			flag="right";
		});
		if(or=true){
			ad=setInterval(function(){
				flag=="left"?next.click():prev.click()
			},s*1000);
			
			prev.hover(function(){
				clearInterval(ad);	
			},
			function(){
				ad=setInterval(function(){
				flag=="left"?next.click():prev.click()
			},s*1000);
			});
			
			next.hover(function(){
				clearInterval(ad);	
			},
			function(){
				ad=setInterval(function(){
				flag=="left"?next.click():prev.click()
			},s*1000);
			});
			
			img.hover(function(){
				clearInterval(ad);	
			},
			function(){
				ad=setInterval(function(){
				flag=="left"?next.click():prev.click()
			},s*1000);
			});
		}
	}
	movedome("#louceng_0 ul",3,true);
	
})

