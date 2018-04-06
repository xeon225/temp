var cursor_c = 0;

function showmap(id,count){
	for(i=1;i<=parseInt(count);i++){
			if (id.toString() == i.toString()){
				$("#l_0"+id).removeClass('hidden_l');
				$("#bt_0"+id).find("img").attr("src","img/bt0"+id+"_1.png");
				cursor_c = id;
			}else{
				$("#l_0"+i).addClass('hidden_l');
				$("#bt_0"+i).find("img").attr("src","img/bt0"+i+".png");			
			}
		}
}


function showmap_bt(id,count){
	for(i=1;i<=parseInt(count);i++){		
			if (id.toString() == i.toString()){
				$("#bt_0"+id).find("img").attr("src","img/bt0"+id+"_1.png");
			}else{
				if (cursor_c != i){
					$("#bt_0"+i).find("img").attr("src","img/bt0"+i+".png");	
				}
						
			}
		}
}

