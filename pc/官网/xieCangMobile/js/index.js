function sel(x,y){
	$(x).click(function(){
		var ind = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(y).eq(ind).show().siblings().hide();
	})
}

function autoScroll(obj){
	$(obj).stop(true,true);
	$(obj).find("ul").animate({
		marginTop : "-29px"
	},500,function(){
		$(this).css({marginTop : "0px"}).find("a:first").appendTo(this);
	})
}
function selectImg(type,obj){
	console.log(type,obj)
}
function autoScroll2(obj){
	$(obj).stop(true,true);
	$(obj).find("ul").animate({
		marginTop : "29px"
	},500,function(){
		$(this).prepend($(this).find("a:last"));
		$(this).css({marginTop : "0px"});
	})
}
function downApp(type){
	if($(window).width()>750){
		if(type ==1){
			location.href="https://itunes.apple.com/cn/app/%E9%9E%8B%E4%BB%93/id1141245731?mt=8";
		}else{
			location.href="http://www.xiecang.com/appDown/MicroMessenger.html";
		}
	}else{
		location.href="http://www.xiecang.com/appDown/MicroMessenger.html";
	}
	
}


$(function(){
		$("#remarks_text_more").click(function(){
		var dataLength  = Math.ceil($("#remarks_text").text().length /22) *0.4 +'rem'
		if($(".remarks_title").text()=='展开'){
			$(".remarks_title").text('收起');
//			$("#remarks_text").css({'display':'inherit'});
			$("#remarks_text").css({'height':dataLength});
			$(".remarks_more").hide();
		}else{
//			<span style="color: #333;">...</span>
			
			$(".remarks_title").text('展开');
			$(".remarks_more").show();
//			$("#remarks_text").css({'display':'-webkit-box'});
			$("#remarks_text").css({'height':'0.8rem'});
		}

	})
	
	$(".platform .icon_text").mouseenter(function(){
		$(this).css({
		    "border-bottom": "1px solid #fff",
		    "color": "#ff2e2e",
		    "border-top": "1px solid #fff",
		    "background-color": "#ffeaea"
		});
		$(this).find("p").css("color","#ff2e2e");
		console.log($(this).find("img").attr("src").split(".")[0].indexOf("_on"));	
		$(this).find("img").attr("src",$(this).find("img").attr("src").split(".")[0]+"_on."+$(this).find("img").attr("src").split(".")[1]);
	})
	$(".platform .icon_text").mouseleave(function(){
		$(this).css({
		    "border-color": "#fff",
		    "color": "#333",
		    'background-color': 'rgb(238,238,238)'
		});
		$(this).find("p").css("color","#333");
		$(this).find("img").attr("src",$(this).find("img").attr("src").split("_on.")[0]+".png") ;
	})
	 
	if($(window).width()>750){

	}else{
		$(".menu>ul>li").click(function(){
			if($(this).hasClass("on")){
				$(this).children("ul").slideUp();
				setTimeout(function(){
					$(".menu>ul>li").removeClass("on");
				},200)
			}else{
				$(this).addClass("on").siblings().removeClass("on");
				$(this).children("ul").slideDown();
			}
		})
	}
	$(".m_mebb").click(function(){
		$(".tblang,.bgbg").toggle("slow");
		$(".menu").toggle("slow");
		
		
//		$(".tblang,.bgbg").fadeIn();
//		$(".menu").tslideDown().toggle();
	})
	$(".bgbg,.menu>ul .close").click(function(){
		$(".tblang,.bgbg").fadeOut();
		$(".menu").slideUp();
	})
	$(".zhaopb .on2").click(function(){
		$(".zhaotx1,.bgbg2").fadeIn();
	})
	$(".zhaopb .on1").click(function(){
		$(".zhaotx2,.bgbg2").fadeIn();
	})

	$(".bgbg2,.zhaotx1 .close,.zhaotx2 .close").click(function(){
		$(".zhaotx1,.zhaotx2,.bgbg2,.bgbg").fadeOut();
	})

	sel(".hezuobdt1 a");
	sel(".hezuobdt2 a",".hezuobdc .hezuobbd2");
	//�������
	setInterval('autoScroll(".newsscb")',3000);
	$(".scfy1").click(function(){
		autoScroll2(".newsscb");
	})
	$(".scfy2").click(function(){
		autoScroll(".newsscb");
	})
	$(".proxxils a").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var srcc=$(this).children().attr("src");
		$(".proxxtl .tt img").attr("src",srcc);
	})
	$(".kefub .ttt1").click(function () {
		$('html,body').animate({scrollTop:0},400);
	})
	$(".ttt1").click(function () {
		$('html,body').animate({scrollTop:0},400);
	})
	$(".kefub .tt3").hover(function(){
		$(".kefu").addClass("on");
	})
	$(".kefu").mouseleave(function(){
		$(".kefu").removeClass("on");
	})





	//�ֶ��л�
	var dxdx = $(".prokj .prodxls li").length;
	var intw = dxdx*245;
	$(".prokj .prodxls").css("width",intw);
	$(".proctt1").click(function(){
		$(".prodxls").stop(true,true);
		var ll = parseInt($(".prodxls").css("left"));
		if(ll<0){
			$(".prodxls").animate({left:ll+245},400);
		}
	})
	$(".proctt2").click(function(){
		$(".prodxls").stop(true,true);
		var ll = parseInt($(".prodxls").css("left"));
		if((ll/245)>-(dxdx-5)){
			$(".prodxls").animate({left:ll-245},400);
		}
	})
	//�ֶ��л�
	
	

})

