// declare event
$(document).ready(function() {
	AutoResize();
	SetPositonForRealELm();
});

//
var gData = {
	zoomRatio: 1,
	// Default screen size.
	screenWidth: 1200,
	screenHeight: 818
}

function AutoResize() {
	//==== Auto resize ====
	$(window).resize(function() {
		ResizeBody();
		SetPositonForRealELm();
	}).trigger('resize');
}

function ResizeBody() {
	var ratio = gData.screenWidth/ gData.screenHeight;
	var w = $(window).width();
	var h = $(window).height();
	var top = 0;
	var left = 0;
	var nWidth = w;
	var nHeight = h;


	if(w/h<ratio) {
		nHeight = w/ratio;
		top = (h - nHeight)/2;
	} else {
		nWidth = h * ratio;
		left = (w - nWidth) / 2;
	}
	
	
	gData.zoomRatio = nWidth / gData.screenWidth;
	
	$("svg:first").css({
		width: "100%",
		height: "100%"
	});
	$('#divBody').css({
		width: 200 ,
		height: 300
	});
}

function SetPositonForRealELm() {
	$('.real_pos').each(function() {
		var elmName = $(this).attr('name');

		$('.real_elm_' + elmName).css({
			position: "absolute",
			left: this.getBoundingClientRect().left + $(window).scrollLeft(),
			top: this.getBoundingClientRect().top + $(window).scrollTop(),
			width: this.getBoundingClientRect().width,
			height: this.getBoundingClientRect().height
		});
	});
}