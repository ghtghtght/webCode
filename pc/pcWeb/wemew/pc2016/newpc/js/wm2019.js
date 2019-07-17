

$(function(){
    $('html ,body').animate({scrollTop: 0}, 300);
    $('.videoBox').click(function(){
	    $('#videoCover').show();
    });
	$('.closeBtn').click(function(e){
       if(e.currentTarget!= this){
           return;
       }
	    $('#videoCover').hide();
	    var video = document.getElementById('wemewVCR');
        video.currentTime = 0;
        video.pause();
    })
    $(".banner .swiper-slide").bind("click",function(){
        var _link = $(this).attr("data-link");
        if(typeof(_link)!='undefined'){
            window.open(_link);
        }
    })
})