$(document).ready(function(){	
	var num = 0;

	
	$("#question").click(function(){
		$("#q" + num).hide();
		$("#a" + num).hide();
		if(num == 4)
		{
			num=0;
		}
		num = num +1;
		$("#q" + num).show();
	});	
	
	$("#answer").click(function(){
		$("#a" + num).show();

	});
		
	$("#restart").click(function(){	
		$("#q" + num).hide();
		$("#a" + num).hide();
		num = 0;	
	});
	
	
});