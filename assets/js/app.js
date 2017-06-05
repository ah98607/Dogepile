$(document).ready(function() {

//------------transition from search view to main view-------------------------------
	$(".init").on("click", function (event){
		event.preventDefault();

		$("body").css("background-image", "none");
		$("#searchContainer").css("opacity", "0");
		$("#mainContainer").css("visibility", "visible");

		var showHeader = setTimeout (function(){
			$("#searchContainer").css("visibility", "hidden");
		}, 500);

		var showMain = setTimeout (function(){
			$("header").css("box-shadow", "0 0 5px");
			$("header").css("opacity", "1");
			$("#headerContainer").css("opacity", "1");
			$("#mainContainer").css("opacity", "1");
			$(".page-footer").css("opacity", "1");
		}, 2000);
	});

	$("#addLoc").on("click", $(".modal").modal());

	$(".dropdown-item-venue").on("click", function(){
		$("#venueTypeBtn").text($(this).attr("data-type"));
	});

	$("#logo").on("click", function() {
		location.reload();
	});
	
	$(".dropdown-item-radius").on("click", function(){
		$("#radiusBtn").text($(this).attr("data-display"));
	});
});