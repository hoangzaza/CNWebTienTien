
// declare event

$(document).ready(function() {
    g_quadratic2Manager = new Quadratic2Manager();
    g_quadratic2Manager.init();

});

function Quadratic2Manager() {
}

Quadratic2Manager.prototype.init = function() {
	this.initSetting();

    this.initDisplay();

    this.bindUIActions();
}

Quadratic2Manager.prototype.initSetting = function() {
    this.NumberRange = ['-6','-5','-4','-3','-2','-1','-5/6','-4/5','-3/4','-2/3','-3/5','-1/2','-2/5','-1/3','-1/4','-1/5','-1/6','1/6','1/5','1/4','1/3','2/5','1/2','3/5','2/3','3/4','4/5','5/6','1','2','3','4','5','6'];
    this.coordinate_x = [-3, -2, -1, 1, 2, 3];

    this.drawGraphFlg = false;
    this.showAnswerFlg = false;
    this.enableAnswerFlg = false;
    this.equation = null;

    this.coorClickX = null;
    this.coorClickY = null;

    this.mainSvgPoint = $('#main_svg_point');
    this.mainSvgGraph = $('#main_svg_graph');
    this.btnAnswer = $('#btn_answer');
    this.btnHome = $('#btn_home');
    this.btnAllPoint = $('#btn_all_point');
    
    this.coordinateEvent = $('#coordinate_event');
    this.questionMark = $('#question_mark');
    this.resultCoefficient = $('#result_coefficient');
    this.descPointAnswer = $('#desc_point_answer');
    this.logGridX = $('#log_grid_x');
    this.logGridY = $('#log_grid_y');
    this.listNumCoefficient = $('.num_coefficient');
    this.listCoordinateY = $('.coordinate_y');
    this.listDescPoint = $('.desc_point');

    this.appendEventPoint();
}

Quadratic2Manager.prototype.initDisplay = function() {
    this.showTextDesc('text_desc_1');
    this.questionMark.show();
    this.resultCoefficient.hide();
    this.descPointAnswer.hide();
}

Quadratic2Manager.prototype.bindUIActions = function() {
    this.listPointEvent.click(function(){this.gridClick(event)}.bind(this));
    this.listCoordinateY.click(function() { this.coordinateYClick(event) }.bind(this));
    this.btnAllPoint.click(this.btnAllPointClick.bind(this));
    this.btnAnswer.click(this.btnAnswerClick.bind(this));
    this.btnHome.click(this.btnHomeClick.bind(this));

    this.btnHome.click(this.btnHomeClick.bind(this));
}

Quadratic2Manager.prototype.appendEventPoint = function() {
    for (var i = 0; i <= 20; i++) {
        for (var j = 0; j <= 20; j++) {
            var eventPoint = document.createElementNS(CONST.NAMESPACE, "rect");

            var width = 10;
            var height = 10;

            eventPoint.setAttribute('x', i*27 - width);
            eventPoint.setAttribute('y', j*27 - height);
            eventPoint.setAttribute('width', width*2);
            eventPoint.setAttribute('height', height*2);
            eventPoint.setAttribute('fill', '#ffffff');
            eventPoint.setAttribute('fill-opacity', '0');
            eventPoint.setAttribute('class', 'point-event');
            eventPoint.setAttribute('tx', i - 10);
            eventPoint.setAttribute('ty', 10 - j);

            this.coordinateEvent.append(eventPoint);
        }
    }

    this.listPointEvent = $('.point-event').css({"cursor": "pointer"});
}

Quadratic2Manager.prototype.gridClick = function(_e) {
    if (this.drawGraphFlg) return;

    var target = _e.currentTarget;

    var coorClickX = target.getAttribute('tx');
    var coorClickY = target.getAttribute('ty');
    
    if (coorClickX == 0 || coorClickY == 0) return;

    this.btnHomeClick();

    this.coorClickX = coorClickX;
    this.coorClickY = coorClickY;

    this.drawPointClick();

    this.drawEquation();

    this.fillCoorForLogGrid();
}

Quadratic2Manager.prototype.drawPointClick = function() {
    if (this.coorClickX == null || this.coorClickY == null) return;

    $('#point_random_click').remove();

    var circle = document.createElementNS(CONST.NAMESPACE, "circle");
    circle.setAttribute('cx', this.coorClickX*CONST.RATIO_OF_QUADRATIC);
    circle.setAttribute('cy', this.coorClickY*CONST.RATIO_OF_QUADRATIC);
    circle.setAttribute('r', 7);
    circle.setAttribute('fill', '#e4007f');
    circle.setAttribute('id', 'point_random_click');

    this.mainSvgPoint.append(circle);

    this.listDescPoint.hide();
}

Quadratic2Manager.prototype.drawEquation = function() {
    if (this.drawGraphFlg) return;
    if (this.coorClickX == null || this.coorClickY == null) return;

    var num_coefficient = this.coorClickY + '/' + this.coorClickX*this.coorClickX;

    this.equation = new QuadraticEquation(num_coefficient);
    
    this.mainSvgGraph.append(this.equation.drawEquation());

    this.fillCoordinateY();

    this.addCurrEnable(this.btnHome);
    this.addCurrEnable(this.btnAllPoint);
    this.addCurrEnable(this.listCoordinateY);

    this.showTextDesc('text_desc_2');

    this.resultCoefficient.append(this.getElmOfCoefficient(num_coefficient));
    this.questionMark.show();
}

Quadratic2Manager.prototype.fillCoorForLogGrid = function() {
    if (this.coorClickX == null || this.coorClickY == null) return;

    var gGridX = document.createElementNS(CONST.NAMESPACE, "g");
    var textGridX = document.createElementNS(CONST.NAMESPACE, "text");
    textGridX.setAttribute('style', 'font-size: 40px; font-family: MeiOriENum; fill: rgb(113, 112, 113);');
    textGridX.innerHTML = this.coorClickX;

    if (this.coorClickX > 0) {
        gGridX.setAttribute('transform',`matrix(1,0,0,1,20,0)`);

    } else {
        gGridX.setAttribute('transform',`matrix(1,0,0,1,0,0)`);
    }
    gGridX.appendChild(textGridX);
    this.logGridX.append(gGridX);

    var gGridY = document.createElementNS(CONST.NAMESPACE, "g");
    var textGridY = document.createElementNS(CONST.NAMESPACE, "text");
    textGridY.setAttribute('style', 'font-size: 40px; font-family: MeiOriENum; fill: rgb(113, 112, 113);');
    textGridY.innerHTML = this.coorClickY;

    if (this.coorClickY > 0) {
        gGridY.setAttribute('transform',`matrix(1,0,0,1,20,0)`);

    } else {
        gGridY.setAttribute('transform',`matrix(1,0,0,1,0,0)`);
    }
    gGridY.appendChild(textGridY);
    this.logGridY.append(gGridY);
}

Quadratic2Manager.prototype.btnAnswerClick = function() {
    if (!this.enableAnswerFlg) return;

    this.resultCoefficient.show();
    this.questionMark.hide();

    this.showAnswerFlg = true;
    this.checkEnableBtnDraw();
}

Quadratic2Manager.prototype.checkEnableBtnDraw = function() {
    if (this.showAnswerFlg) {
        this.removeCurrEnable(this.btnAnswer);
        this.descPointAnswer.hide();
        this.enableAnswerFlg = false;
    } else if ($('.coordinate_y.curr_result').length >= 2) {
        this.addCurrEnable(this.btnAnswer);
        this.descPointAnswer.show();
        this.enableAnswerFlg = true;
    }
}

Quadratic2Manager.prototype.btnHomeClick = function() {
    if(!this.isCurrEnable(this.btnHome)) return;

    this.mainSvgPoint.empty();
    this.mainSvgGraph.empty();

    this.resultCoefficient.empty();
    this.removeCurrEnable(this.btnHome);
    this.removeCurrEnable(this.btnAllPoint);

    this.logGridX.empty();
    this.logGridY.empty();
    
    $('.coor_result').remove();

    this.removeCurrEnable(this.listCoordinateY);
    this.removeCurrResult(this.listCoordinateY);

    this.listDescPoint.show();

    this.initDisplay();

    this.drawGraphFlg = false;
    this.showAnswerFlg = false;
    this.enableAnswerFlg = false;
    this.equation = null;

    this.coorClickX = null;
    this.coorClickY = null;
}


Quadratic2Manager.prototype.getElmOfCoefficient = function(coe) {

    var co = mathjs.fraction(coe);

    var x = 0;
    var y = 0;
    var coefficientElm = document.createElementNS(CONST.NAMESPACE, "g");

    if (co.d == 1) {
        var text = document.createElementNS(CONST.NAMESPACE, "text");
        var minusWidth = co.s > 0 ? 0 : CONST.WIDTH_OF_MINUS;

        text.innerHTML = co.n * co.s;
        text.setAttribute('class', 'result_coefficient');
        text.setAttribute('style', 'font-size: 45px');

        x = co.s > 0 ? 20 : 0;
        x = co.n > 9 ? x - 20 : x;
        y = 45;
        
        coefficientElm.appendChild(text);
    } else {

        //numerator
        var text = document.createElementNS(CONST.NAMESPACE, "text");
        text.setAttribute('class', 'result_coefficient');
        text.setAttribute('style', 'font-size: 37px');
        text.setAttribute('x', (CONST.WIDTH_OF_FRACTION - (co.n+"").length*CONST.WIDTH_OF_COORDINATE_Y + 6)/2);
        text.setAttribute('y', -5);
        text.innerHTML = co.n;
        
        coefficientElm.appendChild(text);

        //fraction
        var fraction = document.createElementNS(CONST.NAMESPACE, 'path');
        fraction.setAttribute('d', "M 0,0 H 39.34125 V 1.3 H 0 Z");
        fraction.setAttribute('style', "fill:#FFFFFF;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.25");

        coefficientElm.appendChild(fraction);

        //denominator
        var text = document.createElementNS(CONST.NAMESPACE, "text");
        text.setAttribute('class', 'result_coefficient');
        text.setAttribute('style', 'font-size: 37px');
        text.setAttribute('x', (CONST.WIDTH_OF_FRACTION - (co.d+"").length*CONST.WIDTH_OF_COORDINATE_Y + 6)/2);
        text.setAttribute('y', CONST.HEIDHT_OF_COORDINATE_Y + 10);
        text.innerHTML = co.d;
        
        coefficientElm.appendChild(text);

        if (co.s < 0) {
            //negative

            var g = document.createElementNS(CONST.NAMESPACE, "g");
            g.setAttribute('transform','matrix(1,0,0,1,-26,0)');

            var negative = document.createElementNS(CONST.NAMESPACE, 'path');
            negative.setAttribute('d', "M 0,0 H 23.40125 V 2.6975 H 0 Z");
            negative.setAttribute('style', "fill:#FFFFFF;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.25");

            g.appendChild(negative);

            coefficientElm.appendChild(g);
        }

        x = co.s > 0 ? (60 - CONST.WIDTH_OF_FRACTION)/2 : (60 + 10 - CONST.WIDTH_OF_FRACTION)/2;
        y = 28;
    }

    coefficientElm.setAttribute('transform',`matrix(1,0,0,1,${x},${y})`);

    return coefficientElm;
}

Quadratic2Manager.prototype.disableBtnEnter = function(){
    this.drawGraphFlg = true;
};

Quadratic2Manager.prototype.showTextDesc = EquationManager.prototype.showTextDesc;
Quadratic2Manager.prototype.fillCoordinateY = EquationManager.prototype.fillCoordinateY;
Quadratic2Manager.prototype.coordinateYClick = EquationManager.prototype.coordinateYClick;
Quadratic2Manager.prototype.btnAllPointClick = EquationManager.prototype.btnAllPointClick;
Quadratic2Manager.prototype.showAllPoint = EquationManager.prototype.showAllPoint;

Quadratic2Manager.prototype.drawPointFromX = EquationManager.prototype.drawPointFromX;
Quadratic2Manager.prototype.removePoint = EquationManager.prototype.removePoint;

Quadratic2Manager.prototype.addCurrEnable = EquationManager.prototype.addCurrEnable;
Quadratic2Manager.prototype.addCurrResult = EquationManager.prototype.addCurrResult;
Quadratic2Manager.prototype.removeCurrEnable = EquationManager.prototype.removeCurrEnable;
Quadratic2Manager.prototype.removeCurrResult = EquationManager.prototype.removeCurrResult;
Quadratic2Manager.prototype.isCurrEnable = EquationManager.prototype.isCurrEnable;
Quadratic2Manager.prototype.isCurrResult = EquationManager.prototype.isCurrResult;

Quadratic2Manager.prototype.checkEnableBtnAllPoint = EquationManager.prototype.checkEnableBtnAllPoint;
Quadratic2Manager.prototype.checkShowDescDrawEquation = EquationManager.prototype.checkShowDescDrawEquation;