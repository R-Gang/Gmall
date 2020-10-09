<!--易买头部js文件-->

$(document).ready(function() {
        $(".top-menu dl").hover(
		function(){
			$(this).find("dt").siblings("dd").slideDown('fast').parent().addClass("dl");
		},
		function(){
			$(this).find("dt").siblings("dd").slideUp('fast').parent().removeClass("dl");
		});
		
		
		
		
		
		$("#top-7 dl").hover(
		function(){
			$(this).find("dt").siblings("dd").slideDown('fast');
		},
		function(){
			$(this).find("dt").siblings("dd").slideUp('fast');
		});
		
		$(".site-menu li").hover(
		function(){
			$(this).addClass('hli');	
		},
		function(){
			$(this).removeClass('hli');
		});
		
		$(".site-menu li").click(function(){
			$(this).addClass('li').siblings('li').removeClass('li');
		});
		
		
		
		$("#top-10").hover(function(){
			$(".menu").show();
		},
		function(){
			$(".menu").hide();
		});
		$(".menu li").hover(
		function(){
			var $first = $(".menu").children("li");
			var $index=$first.index($(this));
			$(this).addClass("fenlei").find(".sub-class").show('fast');
			switch($index){
				case 0:
					$(this).find(".class").children(".ico").html('<img src="picture/6_category-pic-593.jpg">');
					$(".category .menu .sub-class").addClass("leiclass_0");
					breck;
				case 1:
					$(this).find(".class").children(".ico").html('<img src="picture/7_category-pic-1.jpg">');
					$(".category .menu .sub-class").addClass("leiclass_0");
					breck;
				case 2:
					$(this).find(".class").children(".ico").html('<img src="picture/8_category-pic-3.jpg">');
					$(".category .menu .sub-class").addClass("leiclass_0");
					breck;
				case 3:
					$(this).find(".class").children(".ico").html('<img src="picture/9_category-pic-256.jpg">');
					$(".category .menu .sub-class").addClass("leiclass_0");
					breck;
				case 4:
					$(this).find(".class").children(".ico").html('<img src="picture/11_category-pic-470.jpg">');
					$(".category .menu .sub-class").addClass("leiclass_0");
					breck;
				case 5:
					$(this).find(".class").children(".ico").html('<img src="picture/14_category-pic-2.jpg">');
					$(".category .menu .sub-class").addClass("leiclass_0");
					breck;
				case 6:
					$(this).find(".class").children(".ico").html('<img src="picture/6_category-pic-593.jpg">');
					$(".category .menu .sub-class").addClass("leiclass_0");
					breck;
				case 7:
					$(this).find(".class").children(".ico").html('<img src="picture/7_category-pic-1.jpg">');
					$(".category .menu .sub-class").addClass("leiclass_0");
					breck;
				case 8:
					$(this).find(".class").children(".ico").html('<img src="picture/8_category-pic-3.jpg">');
					$(".category .menu .sub-class").addClass("leiclass_0");
					breck;
				case 9:
					$(".category .menu .sub-class").addClass("leiclass_0");
					$(this).find(".class").children(".ico").html('<img src="picture/9_category-pic-256.jpg">');
					breck;
				case 10:
					$(this).find(".class").children(".ico").html('<img src="picture/11_category-pic-470.jpg">');
					$(".category .menu .sub-class").addClass("leiclass_0");
					breck;
				case 11:
					$(this).find(".class").children(".ico").html('<img src="picture/14_category-pic-2.jpg">');
					$(".category .menu .sub-class").addClass("leiclass_0");
					breck;
				case 12:
					$(".category .menu .sub-class").addClass("leiclass_0");
					$(this).find(".class").children(".ico").html('<img src="picture/7_category-pic-1.jpg">');
					breck;
				default:
					$(this).find(".class").children(".ico").html('<img src="picture/8_category-pic-3.jpg">');
					$(".category .menu .sub-class").addClass("leiclass_0");
					breck;
			}
		},
		function(){
			var $first = $(".menu").children("li");
			var $index=$first.index($(this));
			$(this).removeClass("fenlei").find(".sub-class").hide('fast');
			switch($index){
				case 0:
					$(this).find(".class").children(".ico").html('<img src="picture/15_category-pic-530.jpg">');
					$(".category .menu .sub-class").removeClass("leiclass_0");
					breck;
				case 1:
					$(this).find(".class").children(".ico").html('<img src="picture/13_category-pic-959.jpg">');
					$(".category .menu .sub-class").removeClass("leiclass_0");
					breck;
				case 2:
					$(this).find(".class").children(".ico").html('<img src="picture/10_category-pic-308.jpg">');
					$(".category .menu .sub-class").removeClass("leiclass_0");
					breck;
				case 3:
					$(this).find(".class").children(".ico").html('<img src="picture/16_category-pic-662.jpg">');
					$(".category .menu .sub-class").removeClass("leiclass_0");
					breck;
				case 4:
					$(this).find(".class").children(".ico").html('<img src="picture/10_category-pic-308.jpg">');
					$(".category .menu .sub-class").removeClass("leiclass_0");
					breck;
				case 5:
					$(this).find(".class").children(".ico").html('<img src="picture/10_category-pic-308.jpg">');
					$(".category .menu .sub-class").removeClass("leiclass_0");
					breck;
				case 6:
					$(this).find(".class").children(".ico").html('<img src="picture/15_category-pic-530.jpg">');
					$(".category .menu .sub-class").removeClass("leiclass_0");
					breck;
				case 7:
					$(this).find(".class").children(".ico").html('<img src="picture/13_category-pic-959.jpg">');
					$(".category .menu .sub-class").removeClass("leiclass_0");
					breck;
				case 8:
					$(this).find(".class").children(".ico").html('<img src="picture/10_category-pic-308.jpg">');
					$(".category .menu .sub-class").removeClass("leiclass_0");
					breck;
				case 9:
					$(this).find(".class").children(".ico").html('<img src="picture/16_category-pic-662.jpg">');
					$(".category .menu .sub-class").removeClass("leiclass_0");
					breck;
				case 10:
					$(this).find(".class").children(".ico").html('<img src="picture/10_category-pic-308.jpg">');
					$(".category .menu .sub-class").removeClass("leiclass_0");
					breck;
				case 11:
					$(this).find(".class").children(".ico").html('<img src="picture/10_category-pic-308.jpg">');
					$(".category .menu .sub-class").removeClass("leiclass_0");
					breck;
				case 12:
					$(this).find(".class").children(".ico").html('<img src="picture/13_category-pic-959.jpg">');
					$(".category .menu .sub-class").removeClass("leiclass_0");
					breck;
				default:
					$(this).find(".class").children(".ico").html('<img src="picture/16_category-pic-662.jpg">');
					$(".category .menu .sub-class").removeClass("leiclass_0");
					breck;
			}
		});
		
		
		
		
		//轮播图片
		function changeImg(){
			var index = 0;
			var stop = false;
			var $text = $("#img_3").find("ul").children("li");//文字提示图片索引
			var $img =$("#img_2").find("ul").children("li");//图片索引	
			var $page = $("#img_4").find("ul").children("li");//数字索引
			var $back = $("#img_0");
			
			$back.addClass("yanse_1").stop(true,true).removeClass("yanse_2 yanse_3 yanse_4 yanse_5 yanse_6");
			$page.eq(index).addClass("tu").stop(true,true).siblings().removeClass("tu");		
			
			$page.hover(
			function(){
				stop = true;
				index = $page.index($(this));
				$(this).addClass("tu").stop(true,true).siblings().removeClass("tu");
				$text.eq(index).fadeIn().stop(true,true).siblings().fadeOut();
				$img.eq(index).fadeIn().stop(true,true).siblings().fadeOut();	
				switch(index){
					case 0:
						$back.addClass("yanse_1").stop(true,true).removeClass("yanse_2 yanse_3 yanse_4 yanse_5 yanse_6");
					break;
					case 1:
						$back.addClass("yanse_2").stop(true,true).removeClass("yanse_1 yanse_3 yanse_4 yanse_5 yanse_6");
						break;
					case 2:
						$back.addClass("yanse_3").stop(true,true).removeClass("yanse_2 yanse_1 yanse_4 yanse_5 yanse_6");
						break;
					case 3:
						$back.addClass("yanse_4").stop(true,true).removeClass("yanse_2 yanse_3 yanse_1 yanse_5 yanse_6");
						break;
					case 4:
						$back.addClass("yanse_5").stop(true,true).removeClass("yanse_2 yanse_3 yanse_4 yanse_1 yanse_6");
						break;
					case 5:
						$back.addClass("yanse_6").stop(true,true).removeClass("yanse_2 yanse_3 yanse_4 yanse_5 yanse_1");
						break;	
				}
			},
			function(){
				stop = false;	
			});
			
			
			
			setInterval(function(){
				if(stop) return;
				index++;
				if(index>$page.length){
					index=0;
				}	
				
				switch(index){
					case 0:
						$back.addClass("yanse_1").stop(true,true).removeClass("yanse_2 yanse_3 yanse_4 yanse_5 yanse_6");
						break;
					case 1:
						$back.addClass("yanse_2").stop(true,true).removeClass("yanse_1 yanse_3 yanse_4 yanse_5 yanse_6");
						break;
					case 2:
						$back.addClass("yanse_3").stop(true,true).removeClass("yanse_2 yanse_1 yanse_4 yanse_5 yanse_6");
						break;
					case 3:
						$back.addClass("yanse_4").stop(true,true).removeClass("yanse_2 yanse_3 yanse_1 yanse_5 yanse_6");
						break;
					case 4:
						$back.addClass("yanse_5").stop(true,true).removeClass("yanse_2 yanse_3 yanse_4 yanse_1 yanse_6");
						break;
					case 5:
						$back.addClass("yanse_6").stop(true,true).removeClass("yanse_2 yanse_3 yanse_4 yanse_5 yanse_1");
						break;	
				}
				
				$page.eq(index).addClass("tu").stop(true,true).siblings().removeClass("tu");
				$img.eq(index).fadeIn(1000).stop(true,true).siblings().fadeOut();	
				$text.eq(index).fadeIn(6000).stop(true,true).siblings().fadeOut(1000);
				$()
			},5000);
			
		}
		changeImg();
		
		
		//位置移动
		$("#img_6").hover(
		function(){
			$("#img_5").addClass("border1");
		},
		function(){
			$("#img_5").removeClass("border1");	
		});
		
    });