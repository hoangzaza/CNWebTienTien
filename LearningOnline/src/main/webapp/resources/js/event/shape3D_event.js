
var g_playGround;

// declare event
$(document).ready(function() {
	g_playGround = new PlayGround();

	//event shape click
	btnShapeClick();
	
	//home click
	btnHomeClick();

	//event deploy
	btnDeployClick();

	//event rotate
	handleRotateEvent();

	//event zoom
	btnZoomInClick();
	btnZoomOutClick();
});

//shape
function btnShapeClick() {
    $('.btn_shape').click(function() {
        if ( $(this).hasClass("curr_click")) {
            return;
		}
		
		$('.btn_deploy').removeClass("disabled");
		$('.btn_home').addClass("disabled");
		$('.zoom').addClass("shape_selected");

        $('.curr_click').removeClass("curr_click");
		$(this).addClass("curr_click");
		
		var id = $(this).attr('id');

		displayShape(id);
    });
}

//zoom
function btnZoomInClick() {
    $('#zoom_in').click(function() {
		g_playGround.zoom(1.2);
    });
}
function btnZoomOutClick() {
    $('#zoom_out').click(function() {
		g_playGround.zoom(0.8);
    });
}

//home
function btnHomeClick() {
	$('.btn_home').click(function() {
        reset();
    });
}

// deploy
function btnDeployClick() {
    $('.btn_deploy').click(function() {
		if ( $(this).hasClass("disabled")) {
            return;
		}

		$('.btn_deploy').addClass("disabled");
		$('.btn_home').removeClass("disabled");

        g_playGround.shape.initDeploy();
    });
}

//rotate
function handleRotateEvent() {

	var prevX = 0;
	var prevY = 0;
   
	$("#svg_group")
		.drag("init", function(event){
			prevX = event.pageX;
			prevY = event.pageY;
		})
		.drag(function(event){
			var x = event.pageX;
			var y = event.pageY;
	
			g_playGround.shape.transformY((prevX-x)/6);
			g_playGround.shape.transformX((y-prevY)/6);

			prevX = x;
			prevY = y;
	 });
}

//display the shape
function displayShape(id) {
	var shape;

	switch(id) {
		case 'cylinder':
			shape = new Cylinder(150, 300);
			break;
		case 'cone':
			shape = new Cone(150, 400);
			break;
		case 'cube':
			shape = new Cube(200);
			break;
		case 'triangular_prism':
			shape = new TriangularPrism(300, 300);
			break;
		case 'triangular_pyramid':
			shape = new TriangularPyramid(300, 400);
			break;
		case 'quadrangular_pyramid':
			shape = new QuadrangularPyramid(300, 400);
			break;
	}

	if (shape != undefined) {
		g_playGround.initDraw(shape);
	}
}

function reset() {
	$('.btn_home').addClass('disabled');
	$('.btn_deploy').addClass('disabled');
	$('.curr_click').removeClass('curr_click');
	$('.zoom').removeClass("shape_selected");	

	g_playGround.reset();
}

var PlayGround = function(){
	this.shape;
	this.mainSvg;

	this.init();
}

PlayGround.prototype.init = function() {
	this.mainSvg = $('#main_svg');
}

PlayGround.prototype.initDraw = function(shape) {
	this.shape = shape;
	this.mainSvg.empty();
	this.mainSvg.append(this.shape.elm);
	this.shape.initDraw();
}

PlayGround.prototype.zoom = function(scale) {
	if(!this.shape) return;

	this.shape.scale(scale);
	this.shape.draw();
}

PlayGround.prototype.play = function(id) {

}

PlayGround.prototype.reset = function() {
	this.mainSvg.empty();
	this.shape = null;
}