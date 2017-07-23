
$(document).ready(function() {
	$(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass(".navbar-color");
        } else {
            $("#menu").removeClass(".navbar-color");
        }
      });
	$(".dropdown-button").dropdown({ 
		hover: true });
	$(".button-collapse").sideNav();
	$('.collapsible').collapsible();
	$('.carousel.carousel-slider').carousel(
		{fullWidth: true});
	$('.materialboxed').materialbox();

});
