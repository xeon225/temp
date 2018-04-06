// JavaScript Document
$(document).ready(function(){
						   
  	$("img[src*='_on']").addClass("current");
	
	$("img,input").mouseover(function(){
		if ($(this).attr("src")){
			$(this).attr("src",$(this).attr("src").replace("_off.", "_on."));
		}
	});

	$("img[class!='current'],input").mouseout(function(){
			if ($(this).attr("src")){
				$(this).attr("src",$(this).attr("src").replace("_on.", "_off."));
			}
	});						   
						   
						   
  $('a[href^=#]').each (function(){
		var hash = this.hash;
		if(hash.length > 1 && !this['rel']){
			$(this).click(function() {
				smoothScroll(hash);
				return false;
			})
		}
	});


   $("#global_nav li").hover(function(){
		$(this).addClass("sfhover");							  
        //$(this).children(".sub_nav").slideDown("fast");
    },
    function(){
		$(this).removeClass("sfhover");
        //$(this).children(".sub_nav").slideUp("fast");
    })


   
   $("#aeon_list li").mouseover(function(){
		var  index = $(this).index()+1;
		for(var i=1; i<=4; i++){
			$(".photo_"+i).hide();
		}
		$(".photo_"+index).show();
	 });
  
 });



function smoothScroll(hash) {
	var target = $(hash).offset().top;

	$(($.browser.safari) ? 'body' : 'html')
		.animate({scrollTop: target >= 15 ? target - 15 : target}, 600, 'swing', function(){$(this).unbind("mousewheel DOMMouseScroll");})
		.bind("mousewheel DOMMouseScroll",function(){
			$(this).queue([]).stop();
			$(this).unbind("mousewheel DOMMouseScroll");
		})
}
