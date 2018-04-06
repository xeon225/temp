var timeval = 3000;
var p = $('#picplayer'); 
var pics1 = [{url:'../contribution/img/policy-title01.jpg',link:'#tree',time:timeval},{url:'../contribution/img/policy-title02.jpg',link:'#study',time:timeval},{url:'../contribution/img/policy-title03.jpg',link:'#friendly',time:timeval},{url:'../contribution/img/policy-title04.jpg',link:'#play',time:timeval}]; 
initPicPlayer(pics1,p.css('width').split('px')[0],p.css('height').split('px')[0]); 
// 
// 
function initPicPlayer(pics,w,h) 
{ 
//选中的图片 
var selectedItem; 
//自动播放的id 
var playID; 
//选中图片的索引 
var selectedIndex; 
//容器 
var p = $('#picplayer'); 
p.text(''); 
p.append('<div id="piccontent"></div>'); 
var c = $('#piccontent'); 
for(var i=0;i<pics.length;i++) 
{ 
//添加图片到容器中 
c.append('<a href="'+pics[i].link+'" target="_blank"><img id="picitem'+i+'" style="display: none;z-index:'+i+'" src="'+pics[i].url+'" /></a>'); 
} 
 
var btnHolder = $('#picbtnHolder'); 
btnHolder.append('<div id="picbtns" style="float:right; padding-right:1px;"></div>'); 
setSelectedItem(0); 
 
function setSelectedItem(index) 
{ 
selectedIndex = index; 
clearInterval(playID); 
 
if(selectedItem)selectedItem.fadeOut('fast'); 
selectedItem = $('#picitem'+index); 
selectedItem.fadeIn('slow'); 
 

//自动播放 
playID = setInterval(function() 
{ 
var index = selectedIndex+1; 
if(index > pics.length-1)index=0; 
setSelectedItem(index); 
},pics[index].time); 
} 
} 
