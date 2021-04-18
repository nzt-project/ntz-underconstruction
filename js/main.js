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

        //pie
        var ctxP = document.getElementById("pieChart").getContext('2d');
        var myPieChart = new Chart(ctxP, {
            type: 'pie',
            data: {
                labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
                datasets: [{
                    data: [300, 50, 100, 40, 120],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                }]
            },
            options: {
                responsive: true
            }
        });
	}
}


$(function () {
	
	MAIN.init();
	
});