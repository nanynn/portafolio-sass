
$(document).ready(function() {
	$(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").css("background-color", "#3c4858");
            $("#menu").css("box-shadow", "0 0 0.3em #000");
        } else {
            $("#menu").removeClass(".navbar-one");
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
