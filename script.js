$(document).ready(function(){	
	$("#question").click(function(){
		$("#q1").show();
		
		
		
		$("#question").click(function(){
			$("#q1").hide();
			$("#q2").show();
			$("#question").click(function(){
				$("#q2").hide();
				$("#q3").show();
				$("#question").click(function(){
					$("#q3").hide();
					$("#q4").show();
				});
			});
		});
	});
	
	
	
});