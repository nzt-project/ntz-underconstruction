MAIN = {
	
	init : function () {

		$(document).on('click', 'a[href=""], a[href^="#"]', function (e) {
		    e.preventDefault();
		});

		$('.hamburger-icon').click (function(){
            $(this).toggleClass('open');
            $('header nav').slideToggle();
        });

		$(".scrollTo").on('click', function(e) {
		     e.preventDefault();
		     var target = $(this).attr('href');
		     $('html, body').animate({
		       scrollTop: ($(target).offset().top - 60)
		     }, 500);
		});

		$(".faq-btn").attr("aria-expanded", "false"),
		$(".faq-btn").on("click", (function () {
				var e = $(this)
					, t = e.attr("aria-expanded");
				e.attr("aria-expanded", "true" === t ? "false" : "true")
			}
			)),
			$(document).on("click", 'a[href^="#"]', (function (e) {
				e.preventDefault(),
					$("html, body").animate({
						scrollTop: $($.attr(this, "href")).offset().top
					}, 500)
			}
			)),
			$(window).width() < 580 && $(".faq h2").html("FAQ");
	}
}


$(function () {
	
	MAIN.init();
	
});