(function ($) {
	$(document).ready(function() {

		$("#feed").append("<center><h1 style='color: #999999;'>You have not searched for any news yet!</h1></center>");
		//6.309630, 22.637847
		$(".feed-cell").hover(function() {
			$(this).toggleClass("animated");
			$(this).toggleClass("infinite");
			$(this).toggleClass("pulse");
		});
		$("#africa").hover( function() {
			$("#africa").toggleClass("animated");
			$("#africa").toggleClass("infinite");
			$("#africa").toggleClass("pulse");
		});
//37.975641, 75.551522
		$("#asia").hover( function() {
			$("#asia").toggleClass("animated");
			$("#asia").toggleClass("infinite");
			$("#asia").toggleClass("pulse");
		});
//-25.981453, 134.701913
		$("#australia").hover( function() {
			$("#australia").toggleClass("animated");
			$("#australia").toggleClass("infinite");
			$("#australia").toggleClass("pulse");
		});
//48.557560, 16.489022
		$("#europe").hover( function() {
			$("#europe").toggleClass("animated");
			$("#europe").toggleClass("infinite");
			$("#europe").toggleClass("pulse");
		});
//39.209689, -98.696382
		$("#northAmerica").hover( function() {
			$("#northAmerica").toggleClass("animated");
			$("#northAmerica").toggleClass("infinite");
			$("#northAmerica").toggleClass("pulse");
		});
//-13.350834, -58.913030
		$("#southAmerica").hover( function() {
			$("#southAmerica").toggleClass("animated");
			$("#southAmerica").toggleClass("infinite");
			$("#southAmerica").toggleClass("pulse");
		});
		$("#world").hover( function() {
			$("#world").toggleClass("animated");
			$("#world").toggleClass("infinite");
			$("#world").toggleClass("pulse");
		});

	});
}(jQuery));