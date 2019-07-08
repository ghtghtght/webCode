var scrollTopTo = function(){
    $('html ,body').animate({scrollTop: 0}, 300);
}
var scrollCheck = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var bodyHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if(scrollTop*2>bodyHeight){
        $(".toolsBar").fadeIn();
    }else{
        $(".toolsBar").fadeOut();
    }
}
var getQueryString = function (name) {
    //取参数
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};
var addHeight =  function(){//高度
    var wrapperHeight = $(".wrapper").get(0).clientHeight;
    $(".mainContainer").css("height",wrapperHeight+"px");
}
var getBig = function(e){//大图
 var _src = $(e).attr("src");
 var _img = '<img src="'+_src+'" alt="大图">';
 $("#imgBox").find("img").remove();
 $(_img).appendTo("#imgBox");
 $("#imgBox").fadeIn();
}
var setImg = function(e){
    if (e.width > e.height)
        $(e).addClass('bw');
    else
        $(e).addClass('bh');
}
function isIEOrFireFox() {
    if(navigator.userAgent.indexOf("Firefox")>0){  
        return true;  
    }  
    if (!!window.ActiveXObject || "ActiveXObject" in window){
        return true;
    }else{
    return false;
}
} 
var isIE_1 = isIEOrFireFox();
$(function(){
    window.onscroll = function(){
        scrollCheck();
    }
    // $("body>div").each(function(){
    //     if(parseInt($(this).css("width"))==100){
    //         $(this).addClass('f0');
    //     }
    // })
    // $("body>div>div").each(function(){
    //     if(parseInt($(this).css("width"))==100&&parseInt($(this).parent().css("width"))==100){
    //         $(this).addClass('notScale');
    //     }
    // })
    if(isIE_1){
        $(".header .logoBar ").css({"margin-right":"75px"})
        $("body>div").animate({"opacity":1},200)
        // var zoomX = document.body.clientWidth / 1920;
        // $("body").css("zoom", zoomX);
        // $("body").children().css("zoom", 1);
        if(document.body.clientWidth <= 1660){
            if(document.body.clientWidth <= 1400){
                $(".brandStory .videoBox").css({
                    width:'630px',
                    height:'330px'
                })
                $(".brandStory .blackBg").css("right","19%")
            }else{
                $(".brandStory .videoBox").css({
                    width:'690px',
                    height:'390px'
                })
                $(".brandStory .blackBg").css("right","20%")
            }
        }else{
            $(".brandStory .videoBox").css({
                width:'840px',
                height:'484px'
            })
            $(".brandStory .blackBg").css("right","26%")
        } 
    }else{
        var zoomX = document.body.clientWidth / 1920;
        $("body>div").css("zoom", zoomX).animate({"opacity":1},200);
    }
    // var zoomX = document.body.clientWidth / 1920;
    // var width = parseFloat($(".blackBg").css("width"));
    // var width1 = parseFloat($(".videoBox").css("width"));
    // var height = parseFloat($(".blackBg").css("height"));
    // var height1 = parseFloat($(".videoBox").css("height"));
    // $(".blackBg").css("width", width * zoomX).css("height", height * zoomX);
    // $(".videoBox").css("width", width1 * zoomX).css("height", height1 * zoomX);
    // $(".toolsBar").css("zoom", zoomX);
    // $("#YSF-BTN-HOLDER").css("zoom", zoomX);
    // $("body").css("-moz-transform", "scale("+zoomX+")");
    // $("body>div").not(".f0").css("-moz-transform", "scale("+zoomX+")");
    // $("body>.f0>div").not(".notScale").css("-moz-transform", "scale("+zoomX+")");
    // $("body>div").css("zoom", zoomX);
    window.onresize = function () {
        if(isIE_1){
            // var zoomX = document.body.clientWidth / 1920;
            // $("body").css("zoom", zoomX);
            // $("body").children().css("zoom", 1);
            if(document.body.clientWidth <= 1660){
                if(document.body.clientWidth <= 1400){
                    $(".brandStory .videoBox").css({
                        width:'580px',
                        height:'320px'
                    })
                    $(".brandStory .blackBg").css("right","19%")
                }else{
                    $(".brandStory .videoBox").css({
                        width:'690px',
                        height:'390px'
                    })
                    $(".brandStory .blackBg").css("right","20%")
                }
            }else{
                $(".brandStory .videoBox").css({
                    width:'840px',
                    height:'484px'
                })
                $(".brandStory .blackBg").css("right","26%")
            } 
        }else{
            var zoomX = document.body.clientWidth / 1920;
            $("body>div").css("zoom", zoomX);
        }
    }
    $("#imgBox").bind("click",function(){
        $(this).fadeOut();
    })
    $(".toolsBar").find(".listItem").hover(function(){
        if($(this).find(".hoverTip").length>0){
           $(this).find(".hoverTip").fadeIn();
        }
    },function(e){
        if($(this).find(".hoverTip").length>0){
            $(this).find(".hoverTip").fadeOut();
        }
    })
})