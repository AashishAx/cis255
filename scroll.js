$(window).on("scroll", function() {
	var position = $("#begin").offset();

	if ($(window).scrollTop() > position.top - 80) {
		$("nav").addClass("active");
	} else {
		$("nav").removeClass("active");
	};
});