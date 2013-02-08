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

/*
//Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-38352881-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
*/