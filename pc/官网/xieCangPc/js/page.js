var totalpage,pagesize,cpage,count,curcount,outstr; 
//初始化 
cpage = 1; //当前页（设置为全局变量）
totalpage = 3; //总页数，动态加载数据时需注释掉
pagesize = 50;  //每页显示的数据数量
outstr = "";  //显示分页效果

function gotoDetail(page,num,obj){
	console.log(page,num,obj);
	location.href = "newsDetail.html?page="+page+"&num="+num;
}
function gotopage(target) 
{     
    cpage = target;        //把页面计数定位到第几页 
//  对应页面对应数据
//  $.getJSON("data.json",function(data){
//		console.log(data[cpage],cpage)
//	})
    function getData1(pageIndex){
	 	var url = "json/data1.json"; //请求数据的接口
	 	$.getJSON(url,{
	 		// 这里写需要传递的参数
	 		pageIndex:pageIndex
	 	},function(result){
	 		var contentstr;
	 		for(var i=0;i<result[pageIndex].content.length;i++){
	 			result[pageIndex].content[i].detail = JSON.stringify(result[pageIndex].content[i].detail)
//				contentstr =  contentstr + "<div class='news'><div class='new_img'><img src='icon/news/" + result[pageIndex].content[i].img+".png' alt='' /></div><div class='news_main'><div><div class='news_title'>"+result[pageIndex].content[i].title+"</div><p class='news_time'>"+result[pageIndex].content[i].time+"</p></div><div class='new_content'>"+result[pageIndex].content[i].Introduction+"</div>"+"<div class='moreData r' href='javascript:void(0)' onclick='gotoDetail("+result[pageIndex].content[i].detail+")'>"+"查看更多+</div></div></div>"	
	 			if(contentstr){
					contentstr =  contentstr + "<div class='news'><div class='new_img'><img src='icon/news/" + result[pageIndex].content[i].img+".png' alt='' /></div><div class='news_main'><div><div class='news_title'>"+result[pageIndex].content[i].title+"</div><p class='news_time'>"+result[pageIndex].content[i].time+"</p></div><div class='new_content'>"+result[pageIndex].content[i].Introduction+"</div>"+"<div class='moreData r' href='javascript:void(0)' onclick='gotoDetail("+pageIndex+","+i+","+result[pageIndex].content[i].detail+")'>"+"查看更多+</div></div></div>"	
	 			}else{
					contentstr =  "<div class='news'><div class='new_img'><img src='icon/news/" + result[pageIndex].content[i].img+".png' alt='' /></div><div class='news_main'><div><div class='news_title'>"+result[pageIndex].content[i].title+"</div><p class='news_time'>"+result[pageIndex].content[i].time+"</p></div><div class='new_content'>"+result[pageIndex].content[i].Introduction+"</div>"+"<div class='moreData r' href='javascript:void(0)' onclick='gotoDetail("+pageIndex+","+i+","+result[pageIndex].content[i].detail+")'>"+"查看更多+</div></div></div>"	
	 			}
	 		}
    		document.getElementById("news").innerHTML = contentstr; 
	 	});
	 }
    //这里写页面跳转时要调用的方法
       getData1(cpage); 
    
    setpage(); 
    //reloadpage(target); //调用显示页面函数显示第几页,这个功能是用在页面内容用ajax载入的情况
} 

function setpage() 
{ 
    if(totalpage<=10){        //总页数小于十页 
        for (count=1;count<=totalpage;count++) 
        {    if(count!=cpage) 
            { 
                outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
            }else{ 
                outstr = outstr + "<span class='current' >"+count+"</span>"; 
            } 
        } 
    } 
    if(totalpage>10){        //总页数大于十页 
        if(parseInt((cpage-1)/10) == 0) 
        {             
            for (count=1;count<=10;count++) 
            {    if(count!=cpage) 
                { 
                    outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
                } 
            } 
            outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'> 下一组 </a>"; 
        } 
        else if(parseInt((cpage-1)/10) == parseInt(totalpage/10)) 
        {     
            outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+(parseInt((cpage-1)/10)*10)+")'>上一组</a>"; 
            for (count=parseInt(totalpage/10)*10+1;count<=totalpage;count++) 
            {    if(count!=cpage) 
                { 
                    outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
                } 
            } 
        } 
        else 
        {     
            outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+(parseInt((cpage-1)/10)*10)+")'>上一组</a>"; 
            for (count=parseInt((cpage-1)/10)*10+1;count<=parseInt((cpage-1)/10)*10+10;count++) 
            {         
                if(count!=cpage) 
                { 
                    outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
                } 
            } 
            outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'> 下一组 </a>"; 
        } 
    }     
    document.getElementById("setpage").innerHTML = "<div id='setpage'><span id='info'>共&nbsp;"+totalpage+"&nbsp;页&nbsp;|&nbsp;第&nbsp;"+cpage+"&nbsp;页<\/span>" + outstr + "<\/div>"; 
    outstr = ""; 
} 