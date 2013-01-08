$(document).ready(function(){

	$(".nav a, .collage .img").on("click", function(){
		changeBackground()
	})


	changeBackground = function(){
		//$(".Backgrounds").css("background-image", 'url("../images/bkgs/2.jpg")')
		$(".Collage").attr("state", "Hidden")
		$(".Backgrounds .i1").attr("state", "Hidden")
		$(".Backgrounds .i2").attr("state", "Shown")


		
		var headerBackgroundColor = $(".Backgrounds .i2").attr("background")
		$(".Header").css("background-color", headerBackgroundColor );
	}


});