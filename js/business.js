// JavaScript Document
function dd(id,count){
	for(i=1;i<=parseInt(count);i++){
		if (id.toString() == i.toString()){
				$("#a"+id).attr("class","current");
			}else{
				$("#a"+i).attr("class","");
			}
	}
}