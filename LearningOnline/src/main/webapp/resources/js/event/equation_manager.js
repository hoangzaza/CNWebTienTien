
function EquationManager(type) {
    this.type = type;
}

EquationManager.prototype.init = function() {
	this.initSetting();

    this.initDisplay();

    this.bindUIActions();
}

EquationManager.prototype.initSetting = function() {
    this.NumberRange = ['-6','-5','-4','-3','-2','-1','-5/6','-4/5','-3/4','-2/3','-3/5','-1/2','-2/5','-1/3','-1/4','-1/5','-1/6','1/6','1/5','1/4','1/3','2/5','1/2','3/5','2/3','3/4','4/5','5/6','1','2','3','4','5','6'];

    this.enterClickFlg = false;
    this.drawGraphFlg = false;
    this.equation = null;

    this.mainSvgPoint = $('#main_svg_point');
    this.mainSvgGraph = $('#main_svg_graph');
    this.btnEnter = $('#btn_enter');
    this.btnHome = $('#btn_home');
    this.btnAllPoint = $('#btn_all_point');
    this.btnDraw = $('#btn_draw');

    switch (this.type) {
        case 'linear':
            this.coefficientA = $('#num_coefficient_a');
            this.coefficientB = $('#num_coefficient_b');
            this.coordinate_x = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
            this.setEquation = this.setLinearEquation;
            this.validateInput = this.validateLinear;

            break;
        case 'quadratic':
            this.coefficient = $('#num_coefficient');
            this.coordinate_x = [-3, -2, -1, 1, 2, 3];
            this.setEquation = this.setQuadraticEquation;
            this.validateInput = this.validateQuadratic;
    }

    this.descPointDraw = $('#desc_point_draw');
    this.alertValidateCoe = $('#alert-validate-input');
    this.listNumCoefficient = $('.num_coefficient');
    this.listCoordinateY = $('.coordinate_y');
    this.listDescPoint = $('.desc_point');
}

EquationManager.prototype.initDisplay = function() {
    this.showTextDesc('text_desc_1');
    this.listNumCoefficient.css('opacity', 0);
    this.descPointDraw.hide();
}

EquationManager.prototype.bindUIActions = function() {
    this.btnEnter.click(this.btnEnterClick.bind(this));
    this.listCoordinateY.click(function() { this.coordinateYClick(event) }.bind(this));
    this.btnAllPoint.click(this.btnAllPointClick.bind(this));
    this.btnDraw.click(this.btnDrawClick.bind(this));
    this.btnHome.click(this.btnHomeClick.bind(this));
    this.listNumCoefficient.click(this.numCoefficientClick.bind(this));

    this.alertValidateCoe.on('hidden.bs.modal', function(){
        this.listNumCoefficient.val('');
    }.bind(this));

    //this.listNumCoefficient.keyup(debounce(this.numCoefficientInput.bind(this), 150));
}

EquationManager.prototype.btnHomeClick = function() {
    if(!this.isCurrEnable(this.btnHome)) return;

    this.mainSvgPoint.empty();
    this.mainSvgGraph.empty();
    this.removeCurrEnable(this.btnHome);
    this.removeCurrEnable(this.btnEnter);
    this.removeCurrEnable(this.btnDraw);
    this.removeCurrEnable(this.btnAllPoint);
    this.removeCurrEnable(this.btnEnter);

    $('.coor_result').remove();

    this.removeCurrEnable(this.listCoordinateY);
    this.removeCurrResult(this.listCoordinateY);

    this.removeCurrDisable(this.btnEnter);

    this.listNumCoefficient.val('');

    this.listDescPoint.show();

    this.initDisplay();

    this.enterClickFlg = false;
    this.drawGraphFlg = false;
    this.equation = null;
}

EquationManager.prototype.btnEnterClick = function() {

    if (this.enterClickFlg) return;

    if (!this.validateInput()) {
        this.alertValidateCoe.modal({backdrop:false});
        return;
    }

    this.setEquation();

    this.fillCoordinateY();

    this.addCurrEnable(this.btnHome);
    this.addCurrEnable(this.btnAllPoint);
    this.addCurrEnable(this.listCoordinateY);
    this.removeCurrEnable(this.btnEnter);

    this.showTextDesc('text_desc_2');

}

EquationManager.prototype.setLinearEquation = function() {
    var num_coefficient_a = this.coefficientA.val();
    var num_coefficient_b = this.coefficientB.val();
    
    this.equation = new LinearEquation(num_coefficient_a, num_coefficient_b);
}

EquationManager.prototype.setQuadraticEquation = function() {
    var num_coefficient = this.coefficient.val();
    
    this.equation = new QuadraticEquation(num_coefficient);
}

EquationManager.prototype.btnAllPointClick = function() {
    if(!this.isCurrEnable(this.btnAllPoint)) return;

    this.showAllPoint();

    this.disableBtnEnter();
    this.checkEnableBtnDraw();
    this.checkEnableBtnAllPoint();
    this.checkShowDescDrawEquation();
}

EquationManager.prototype.coordinateYClick = function(_e) {

    var target = _e.currentTarget;

    if(!$(target).hasClass('curr_enable') && !$(target).hasClass('curr_result')) return;

    var id = $(target).attr('id');
    var indexOfX = id.substr('coordinate_y_'.length) ;
    var cox = this.coordinate_x[indexOfX];

    if(this.isCurrEnable(target)) {
        this.drawPointFromX(cox, indexOfX);

        this.addCurrResult(target);
        this.removeCurrEnable(target);

    } else if(this.isCurrResult(target)) {
        this.removePoint(indexOfX);

        this.addCurrEnable(target);
        this.removeCurrResult(target);
    }

    this.disableBtnEnter();
    this.checkEnableBtnDraw();
    this.checkEnableBtnAllPoint();
    this.checkShowDescDrawEquation();
}

EquationManager.prototype.fillCoordinateY = function() {
    if (!this.equation) return;

    $('.coor_result').remove();
    
    for (var i = 0, length = this.coordinate_x.length; i < length; i++) {
        var gElm = this.equation.getElmCoordinateY(this.coordinate_x[i], i);
        $('#coordinate_y_' + i).append(gElm);
    }
}

EquationManager.prototype.drawPointFromX = function(cox, index) {
    if (!this.equation) return;

    var point = this.equation.getPointElmFromX(cox);
    $(point).attr('id', 'point_' + index);

    this.mainSvgPoint.append(point);
}

EquationManager.prototype.removePoint = function(index) {
    if (!this.equation) return;

    $('#point_' + index).remove();
}

EquationManager.prototype.btnDrawClick = function() {
    if(!this.isCurrEnable(this.btnDraw)) return;
    if (!this.equation) return;

    this.mainSvgGraph.append(this.equation.drawEquation());

    this.drawGraphFlg = true;

    this.checkEnableBtnDraw();
}

EquationManager.prototype.showAllPoint = function() {
    var listPoint = $('.coordinate_y.curr_enable');

    for (var i = 0; i < listPoint.length; i++) {

        var id = $(listPoint[i]).attr('id');
        var indexOfX = id.substr('coordinate_y_'.length) ;
        var cox = this.coordinate_x[indexOfX];

        var point = this.equation.getPointElmFromX(cox);
        $(point).attr('id', 'point_' + indexOfX);

        this.mainSvgPoint.append(point);
    }

    this.removeCurrEnable(listPoint);
    this.addCurrResult(listPoint);
}

EquationManager.prototype.numCoefficientClick = function() {
    this.listNumCoefficient.css('opacity', 1);
    this.listDescPoint.hide();
}

EquationManager.prototype.checkEnableBtnDraw = function() {
    if (this.drawGraphFlg) {
        this.removeCurrEnable(this.btnDraw);
        this.descPointDraw.hide();
    } else if ($('.coordinate_y.curr_result').length >= 2) {
        this.addCurrEnable(this.btnDraw);
        this.descPointDraw.show();
    }
}

EquationManager.prototype.checkEnableBtnAllPoint = function() {
    if ($('.coordinate_y.curr_enable').length > 0) {
        this.addCurrEnable(this.btnAllPoint);
    } else {
        this.removeCurrEnable(this.btnAllPoint);
    }
}

EquationManager.prototype.numCoefficientInput = function() {
    var num_coefficient_a = this.coefficientA.val();
    var num_coefficient_b = this.coefficientB.val();

    if (this.validateCoefficient(num_coefficient_a)
        && this.validateCoefficient(num_coefficient_b)) {
            this.addCurrEnable(this.btnEnter);
    } else {
        this.removeCurrEnable(this.btnEnter);
    }
}

EquationManager.prototype.disableBtnEnter = function() {
    this.enterClickFlg = true;

    this.addCurrDisable(this.btnEnter);
}


EquationManager.prototype.addCurrEnable = function(elm) {
    $(elm).addClass('curr_enable');
}

EquationManager.prototype.removeCurrEnable = function(elm) {
    $(elm).removeClass('curr_enable');
}

EquationManager.prototype.addCurrDisable = function(elm) {
    $(elm).addClass('curr_disable');
}

EquationManager.prototype.removeCurrDisable = function(elm) {
    $(elm).removeClass('curr_disable');
}

EquationManager.prototype.addCurrResult = function(elm) {
    $(elm).addClass('curr_result');
}

EquationManager.prototype.removeCurrResult = function(elm) {
    $(elm).removeClass('curr_result');
}

EquationManager.prototype.isCurrEnable = function(elm) {
    return $(elm).hasClass('curr_enable');
}

EquationManager.prototype.isCurrResult = function(elm) {
    return $(elm).hasClass('curr_result');
}

EquationManager.prototype.validateLinear = function() {
    var num_coefficient_a = this.coefficientA.val();
    var num_coefficient_b = this.coefficientB.val();

    if (!this.validateCoefficient(num_coefficient_a)
        || !this.validateCoefficient(num_coefficient_b)) {
        return false;
    }

    return true;
}

EquationManager.prototype.validateQuadratic = function() {
    var num_coefficient = this.coefficient.val();

    if (!this.validateCoefficient(num_coefficient)) {
        return false;
    }

    return true;
}

EquationManager.prototype.validateCoefficient = function(coefficient) {
    if (this.NumberRange.indexOf(coefficient) > -1) {
        return true;
    }

    return false;
}

EquationManager.prototype.checkShowDescDrawEquation = function() {
    if ($('.coordinate_y.curr_result').length >= 2) {
        this.showTextDesc('text_desc_3');
    }
}

EquationManager.prototype.showTextDesc = function(elmId) {
    $('.desc_step').hide();
    $('#' + elmId).show();
}