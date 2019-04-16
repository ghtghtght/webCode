htmlSize();
$(window).resize(function(){htmlSize();});
function htmlSize(){
	var cw=$(window).width();cw=cw/7.5;
	//计算倍数，数值可变。
	if(cw<42.6666){cw=42.6666} //最小像素
	if(cw>100){cw=100} //最大像素
	$('html').css("font-size",cw+'px');
	console.log(cw);
	if(cw < 70){
		location.href = '../../官网/xieCangMobile/index.html';
	}
}
