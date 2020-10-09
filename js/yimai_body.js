// JavaScript Document

$(function(){
	//图片悬浮事件
	$("#body_5").hover(
	function(){
		$(this).find("ul").fadeIn();	
		$("#body_6 span").css("display","none");
	},
	function(){
		$(this).find("ul").fadeOut();	
		$("#body_6 span").css("display","block");
	});
	
	$("#body_5").find("#ca").click(function(){
		$("#body_5").find("ul").fadeOut();
	});
	
	//向左右轮播图片
	function movedome(img,next,speed,or){
		var img = $(img).find("ul");
		var prev = $(next).find("#back");
		var next = $(next).find("#go");
		var w = img.find("li").outerWidth(true);
		var s = speed;
		var flag = "left";
		
		next.click(function(){
			img.animate({'margin-left':-w},function(){
				img.find('li').eq(0).appendTo(img);
				img.css({'margin-left':0});	
			});	
			flag="left";
		});
		
		prev.click(function(){
			img.find('li:last').prependTo(img);
			img.css({'margin-left':-w});
			img.animate({'margin-left':0});
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
	movedome("#body_4","#body_2",3,true);
})
