$(document).ready(function(){	
	var num = 0;
	$("#question").click(function(){
		$("#q" + num).hide();
		$("#a" + num).hide();
		num = num +1;
		$("#q" + num).show();
	});	
	
	$("#answer").click(function(){	
		$("#a" + num).show();
	});
	
});