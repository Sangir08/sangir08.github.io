$(document).ready(function () {
	setTimeout(() => {
	  $(".splash").addClass("display-none");
	  setTimeout(() => {
		$(".splash").css("display", "none");
	  }, 2000);
	}, 1500);


	$('.single-item').slick({
		autoplay: true,
  		autoplaySpeed: 3000,
		infinite: true,
		fade: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	  });

	$('.slider-games').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false
	  });



  });
