//==== Start parameters.
var A_X = 550, A_Y = 80;
var B_X = 550, B_Y = 500;
var C_X = 392, C_Y = 250;
var L_X1 = 90, L_X2 = 692;

//==== Angle's radius.
var RA = 40, RB = 40, RC = 40, RP = 40, RX1 = 35, RX2 = 45;

//==== Text's radius = this param + angle's radius.
var RDEGREE = 25;	// distance from the center to the degree number. i.e 40
var RLABEL = 15;	// distance from the center to the text label. i.e x"

// declare event

$(document).ready(function() {
    g_parallelManager = new ParallelManager();
    g_parallelManager.init();

});

function resetParallel() {
    g_parallelManager = new ParallelManager();
    g_parallelManager.init();
}

var ParallelManager = function() {
}

ParallelManager.prototype.init = function() {
    this.settings();

    this.appendDisplay();

    this.initDisplay();

    this.bindUIActions();
}

ParallelManager.prototype.settings = function() {
    this.mainSvg = $('#main_svg');
    this.displaySvg = $('#gCoordinate_display');
    this.eventSvg  = $('#gCoordinate_event');

    this.p_A = new Point(A_X, A_Y, {stroke: "black", "stroke-width": 0, fill: "#009FE8", opacity: 0, r : 7}, "pointA");
    this.p_B = new Point(B_X, B_Y, {stroke: "black", "stroke-width": 0, fill: "#009FE8", opacity: 0, r : 7}, "pointB");
    this.p_C = new Point(C_X, C_Y, {stroke: "black", "stroke-width": 0, fill: "#009FE8", opacity: 0, r : 7}, "pointC"); 

    this.p_A_Event = new Point(A_X, A_Y, {stroke: "black", "stroke-width": 0, fill: "#009FE8", opacity: 0, r : 17}, "pointA_event");
    this.p_B_Event = new Point(B_X, B_Y, {stroke: "black", "stroke-width": 0, fill: "#009FE8", opacity: 0, r : 17}, "pointB_event");
    this.p_C_Event = new Point(C_X, C_Y, {stroke: "black", "stroke-width": 0, fill: "#009FE8", opacity: 0, r : 17}, "pointC_event");

    this.l_L = new Line({x: L_X1, y: this.p_A.y}, {x: L_X2, y: this.p_A.y}, {stroke: "black", "stroke-width": 2}, "lineL");
	this.l_M = new Line({x: L_X1, y: this.p_B.y}, {x: L_X2, y: this.p_B.y}, {stroke: "black", "stroke-width": 2}, "lineM");
	this.l_CA = new Line(this.p_C, this.p_A, {stroke: "black", "stroke-width": 2}, "lineCA");
	this.l_CB = new Line(this.p_C, this.p_B, {stroke: "black", "stroke-width": 2}, "lineCB");
    this.l_K = new Line({x: L_X1, y: this.p_C.y}, {x: L_X2, y: this.p_C.y}, {stroke: "black", "stroke-width": 2}, "lineK");

    this.labelA = this.createLabel("A", this.p_A.x - 10, this.p_A.y - 10);
    this.labelB = this.createLabel("B", this.p_B.x - 5, this.p_B.y + 25);
    this.labelC = this.createLabel("C", this.p_C.x - 30, this.p_C.y + 10);

    this.labelL = this.createLabel("l", L_X1 - 30, A_Y + 5);
    this.labelM = this.createLabel("m", L_X1 - 30, B_Y + 5);
    this.labelK = this.createLabel("k", L_X1 - 30, this.p_C.y + 5);

    this.g_arcA = new Arc(this.p_A, {x: this.p_C.x - this.p_A.x, y: this.p_C.y - this.p_A.y}, {x: -1, y: 0}, RA, // Vector AC, Vector AL
        {stroke: "black", "stroke-width": 2, "fill": "none"}, "arcA", true);

    this.g_arcB = new Arc(this.p_B, {x: -1, y: 0}, {x: this.p_C.x - this.p_B.x, y: this.p_C.y - this.p_B.y}, RB, // Vector BC, Vector BL
        {stroke: "black", "stroke-width": 2, "fill": "none"}, "arcB", true);

    this.g_arcC = new Arc(this.p_C, {x: this.p_A.x - this.p_C.x, y: this.p_A.y - this.p_C.y}, {x: this.p_B.x - this.p_C.x, y: this.p_B.y - this.p_C.y}, RC, // Vector PA, Vector PB
        {stroke: "black", "stroke-width": 2, "fill": "none"}, "arcC", true);

    this.textA = this.createText("textA", this.g_arcA.getArc() + "°",
                                    this.p_A.x + (RDEGREE+RP) * Math.cos(this.g_arcA.arcLabel),
                                    this.p_A.y + (RDEGREE+RP) * Math.sin(this.g_arcA.arcLabel)).addClass('log-text-A');

    this.textB = this.createText("textB", this.g_arcB.getArc() + "°",
                                    this.p_B.x + (RDEGREE+RP) * Math.cos(this.g_arcB.arcLabel),
                                    this.p_B.y + (RDEGREE+RP) * Math.sin(this.g_arcB.arcLabel)).addClass('log-text-B');

    this.textC = this.createText("textC", this.g_arcC.getArc() + "°",
                                    this.p_C.x + (RDEGREE+RP) * Math.cos(this.g_arcC.arcLabel),
                                    this.p_C.y + (RDEGREE+RP) * Math.sin(this.g_arcC.arcLabel)).addClass('log-text-C');

    this.textSupA = this.createText("textSupA", this.g_arcA.getSupArc() + "°",
                                    this.p_A.x + (RDEGREE+RP) * Math.cos(this.g_arcA.arcSupLabel),
                                    this.p_A.y + (RDEGREE+RP) * Math.sin(this.g_arcA.arcSupLabel)).addClass('log-text-SupA');

    this.textSupB = this.createText("textSupB", this.g_arcB.getSupArc() + "°",
                                    this.p_B.x + (RDEGREE+RP) * Math.cos(this.g_arcB.arcSupLabel),
                                    this.p_B.y + (RDEGREE+RP) * Math.sin(this.g_arcB.arcSupLabel)).addClass('log-text-SupB');

    this.textSupC = this.createText("textSupC", this.g_arcC.getSupArc() + "°",
                                    this.p_C.x + (RDEGREE+RP) * Math.cos(this.g_arcC.arcSupLabel),
                                    this.p_C.y + (RDEGREE+RP) * Math.sin(this.g_arcC.arcSupLabel)).addClass('log-text-SupC');

    this.textX_A = this.createText("textX_A", 'x',
                                    this.p_A.x + (RDEGREE+RP) * Math.cos(this.g_arcA.arcLabel),
                                    this.p_A.y + (RDEGREE+RP) * Math.sin(this.g_arcA.arcLabel));

    this.textX_B = this.createText("textX_B", 'x',
                                    this.p_B.x + (RDEGREE+RP) * Math.cos(this.g_arcB.arcLabel),
                                    this.p_B.y + (RDEGREE+RP) * Math.sin(this.g_arcB.arcLabel));

    this.textX_C = this.createText("textX_C", 'x',
                                    this.p_C.x + (RDEGREE+RP) * Math.cos(this.g_arcC.arcLabel),
                                    this.p_C.y + (RDEGREE+RP) * Math.sin(this.g_arcC.arcLabel));

    this.g_arcAnswer_C = new Arc(this.p_C, {x: this.p_A.x - this.p_C.x, y: this.p_A.y - this.p_C.y}, {x: this.p_B.x - this.p_C.x, y: this.p_B.y - this.p_C.y}, RC*2.5, // Vector PA, Vector PB
                                    {stroke: "black", "stroke-width": 2, "fill": "none"}, "arcAnswerX_C");
    this.g_arcAnswer_A = new Arc(this.p_C, {x: this.p_A.x - this.p_C.x, y: this.p_A.y - this.p_C.y}, {x: 1, y: 0}, RC, // Vector PA, Vector k
                                    {stroke: "black", "stroke-width": 2, "fill": "none"}, "arcAnswer_A");
    this.g_arcAnswer_B = new Arc(this.p_C, {x: 1, y: 0}, {x: this.p_B.x - this.p_C.x, y: this.p_B.y - this.p_C.y}, RC + 15, // Vector k, Vector PB
                                    {stroke: "black", "stroke-width": 2, "fill": "none"}, "arcAnswer_B");

    this.textAnswerC = this.createText("textAnswerC", 'x',
                                    this.p_C.x + (RDEGREE*3+RP) * Math.cos(this.g_arcAnswer_A.arcLabel),
                                    this.p_C.y + (RDEGREE*3+RP) * Math.sin(this.g_arcAnswer_A.arcLabel));
    this.textAnswerA = this.createText("textAnswerA", 'a',
                                    this.p_C.x + (RDEGREE+RP) * Math.cos(this.g_arcAnswer_A.arcLabel),
                                    this.p_C.y + (RDEGREE+RP) * Math.sin(this.g_arcAnswer_A.arcLabel));
    this.textAnswerB = this.createText("textAnswerB", 'b',
                                    this.p_C.x + (RDEGREE+RP+15) * Math.cos(this.g_arcAnswer_B.arcLabel),
                                    this.p_C.y + (RDEGREE+RP+15) * Math.sin(this.g_arcAnswer_B.arcLabel));

    this.textAnswerLogC = this.createText("textAnswerLogC", this.g_arcC.getArc() + "°",
                                    this.p_C.x + (RDEGREE*3+RP+15) * Math.cos(this.g_arcAnswer_A.arcLabel),
                                    this.p_C.y + (RDEGREE*3+RP+15) * Math.sin(this.g_arcAnswer_A.arcLabel)).addClass('log-text-C');
    this.textAnswerLogA = this.createText("textAnswerLogA", this.g_arcA.getArc() + "°",
                                    this.p_C.x + (RDEGREE+RP) * Math.cos(this.g_arcAnswer_A.arcLabel),
                                    this.p_C.y + (RDEGREE+RP) * Math.sin(this.g_arcAnswer_A.arcLabel)).addClass('log-text-A');
    this.textAnswerLogB = this.createText("textAnswerLogB", this.g_arcB.getArc() + "°",
                                    this.p_C.x + (RDEGREE+RP+15) * Math.cos(this.g_arcAnswer_B.arcLabel),
                                    this.p_C.y + (RDEGREE+RP+15) * Math.sin(this.g_arcAnswer_B.arcLabel)).addClass('log-text-B');

    this.logTextA = $('#log_text_A');
    this.logTextB = $('#log_text_B');
    this.logTextC = $('#log_text_C');

    this.logTextSupA = $('#log_text_SupA');
    this.logTextSupB = $('#log_text_SupB');
    this.logTextSupC = $('#log_text_SupC');

    this.logVarA = $('#log_var_A');
    this.logVarB = $('#log_var_B');
    this.logVarC = $('#log_var_C');

    this.btnArcA = $('#btn_arc_A');
    this.btnArcB = $('#btn_arc_B');
    this.btnArcC = $('#btn_arc_C');
    this.btnArcSupA = $('#btn_arc_SupA');
    this.btnArcSupB = $('#btn_arc_SupB');
    this.btnArcSupC = $('#btn_arc_SupC');

    this.varA = $('#varA');
    this.varB = $('#varB');
    this.varC = $('#varC');
    this.listRadioSelect = $('.radio-select');

    this.btnAnswer = $('#btn_answer');
    this.btnExplain = $('#btn_explain');
    this.btnExplainDisable = $('#btn_explain_disable');
    this.btnHome = $('#btn_home');

    this.step1 = $('.step1');
    this.step2 = $('.step2');
    this.step3 = $('.step3');
    this.step4 = $('.step4');

    this.step1Next = $('#step1_next');
    this.step2Next = $('#step2_next');
    this.step3Next = $('#step3_next');
}

ParallelManager.prototype.appendDisplay = function() {

    this.displaySvg.append(this.l_L.displayLayer);
    this.displaySvg.append(this.l_M.displayLayer);
    this.displaySvg.append(this.l_CA.displayLayer);
    this.displaySvg.append(this.l_CB.displayLayer);
    this.displaySvg.append(this.l_K.displayLayer);

    this.displaySvg.append(this.labelA);
    this.displaySvg.append(this.labelB);
    this.displaySvg.append(this.labelC);

    this.displaySvg.append(this.labelL);
    this.displaySvg.append(this.labelM);
    this.displaySvg.append(this.labelK);

    this.displaySvg.append(this.g_arcA.displayLayer);
    this.displaySvg.append(this.g_arcB.displayLayer);
    this.displaySvg.append(this.g_arcC.displayLayer);

    this.displaySvg.append(this.g_arcA.supDisplayLayer);
    this.displaySvg.append(this.g_arcB.supDisplayLayer);
    this.displaySvg.append(this.g_arcC.supDisplayLayer);

    this.displaySvg.append(this.p_A.displayLayer);
    this.displaySvg.append(this.p_B.displayLayer);
    this.displaySvg.append(this.p_C.displayLayer);

    this.eventSvg.append(this.p_A_Event.displayLayer);
    this.eventSvg.append(this.p_B_Event.displayLayer);
    this.eventSvg.append(this.p_C_Event.displayLayer);

    this.displaySvg.append(this.textA);
    this.displaySvg.append(this.textB);
    this.displaySvg.append(this.textC);

    this.displaySvg.append(this.textSupA);
    this.displaySvg.append(this.textSupB);
    this.displaySvg.append(this.textSupC);

    this.displaySvg.append(this.g_arcAnswer_C.displayLayer);
    this.displaySvg.append(this.g_arcAnswer_A.displayLayer);
    this.displaySvg.append(this.g_arcAnswer_B.displayLayer);

    this.displaySvg.append(this.textAnswerC);
    this.displaySvg.append(this.textAnswerA);
    this.displaySvg.append(this.textAnswerB);

    this.displaySvg.append(this.textAnswerLogC);
    this.displaySvg.append(this.textAnswerLogA);
    this.displaySvg.append(this.textAnswerLogB);

    this.displaySvg.append(this.textX_A);
    this.displaySvg.append(this.textX_B);
    this.displaySvg.append(this.textX_C);


    this.listLogTextA = $('.log-text-A');
    this.listLogTextB = $('.log-text-B');
    this.listLogTextC = $('.log-text-C');
    this.listLogTextSupA = $('.log-text-SupA');
    this.listLogTextSupB = $('.log-text-SupB');
    this.listLogTextSupC = $('.log-text-SupC');
}

ParallelManager.prototype.initDisplay = function() {
    $(this.g_arcA.displayLayer).show();
    $(this.g_arcB.displayLayer).show();
    $(this.g_arcC.displayLayer).show();

    $(this.g_arcA.supDisplayLayer).hide();
    $(this.g_arcB.supDisplayLayer).hide();
    $(this.g_arcC.supDisplayLayer).hide();

    $(this.textA).show();
    $(this.textA).show();
    $(this.textA).show();

    $(this.textSupA).hide();
    $(this.textSupB).hide();
    $(this.textSupC).hide();

    $(this.textX_A).hide();
    $(this.textX_B).hide();
    $(this.textX_C).hide();

    this.listLogTextA.text(this.g_arcA.getArc() + "°");
    this.listLogTextB.text(this.g_arcB.getArc() + "°");
    this.listLogTextC.text(this.g_arcA.getArc() + this.g_arcB.getArc() + "°");
    this.logTextA.show();
    this.logTextB.show();
    this.logTextC.show();

    this.listLogTextSupA.text(this.g_arcA.getSupArc() + "°");
    this.listLogTextSupB.text(this.g_arcB.getSupArc() + "°");
    this.listLogTextSupC.text(360 - (this.g_arcA.getArc() + this.g_arcB.getArc()) + "°");

    this.logTextSupA.hide();
    this.logTextSupB.hide();
    this.logTextSupC.hide();
    this.logVarA.hide();
    this.logVarB.hide();
    this.logVarC.hide();
    
    $(this.l_K.displayLayer).hide();
    this.labelK.hide();
    $(this.g_arcAnswer_C.displayLayer).hide();
    $(this.g_arcAnswer_A.displayLayer).hide();
    $(this.g_arcAnswer_B.displayLayer).hide();
    this.textAnswerC.hide();
    this.textAnswerA.hide();
    this.textAnswerB.hide();
    this.textAnswerLogC.hide();
    this.textAnswerLogA.hide();
    this.textAnswerLogB.hide();

    this.btnArcA.css({"cursor": "pointer"}).show();
    this.btnArcB.css({"cursor": "pointer"}).show();
    this.btnArcC.css({"cursor": "pointer"}).show();
    this.btnArcSupA.css({"cursor": "pointer"}).hide();
    this.btnArcSupB.css({"cursor": "pointer"}).hide();
    this.btnArcSupC.css({"cursor": "pointer"}).hide();

    this.listRadioSelect.css({"cursor": "pointer"});

    this.btnAnswer.css({"cursor": "pointer"}).show();
    this.btnExplain.css({"cursor": "pointer"}).hide();
    this.btnExplainDisable.hide();
    this.btnHome.css({"cursor": "pointer"});

    this.step1.hide();
    this.step2.hide();
    this.step3.hide();
    this.step4.hide();

    this.varA.removeClass('selected');
}

ParallelManager.prototype.bindUIActions = function() {

    //==== event p_A drag
    $('#' + this.p_A_Event.id).drag("init", function(event){
        this.p_A.setStyle({opacity: 1});
        this.p_A_Event.setStyle({opacity: 0.3});
        this.startPosition = {x: event.clientX, y: event.clientY, x0: this.p_A.x, y0: this.p_A.y};
    }.bind(this)).drag(function(event) {
        var xA = this.startPosition.x0 + event.clientX - this.startPosition.x;
        if (xA < L_X1) xA = L_X1;
        if (xA > L_X2) xA = L_X2;

        this.p_A.setPos(xA, this.p_A.y);
        this.p_A_Event.setPos(xA, this.p_A.y);

        this.updateAll();
		
    }.bind(this)).drag("end", function(event) {
        this.p_A.setStyle({opacity: 0});
        this.p_A_Event.setStyle({opacity: 0});
    }.bind(this)).css({cursor: "pointer"});
    
    //==== eventp_B drag
    $('#' + this.p_B_Event.id).drag("init", function(event){
        this.p_B.setStyle({opacity: 1});
        this.p_B_Event.setStyle({opacity: 0.3});
        this.startPosition = {x: event.clientX, y: event.clientY, x0: this.p_B.x, y0: this.p_B.y};
    }.bind(this)).drag(function(event) {
        var xB = this.startPosition.x0 + event.clientX - this.startPosition.x;
        if (xB < L_X1) xB = L_X1;
        if (xB > L_X2) xB = L_X2;
        
        this.p_B.setPos(xB, this.p_B.y);
        this.p_B_Event.setPos(xB, this.p_B.y);

        this.updateAll();
		
    }.bind(this)).drag("end", function(event) {
        this.p_B.setStyle({opacity: 0});
        this.p_B_Event.setStyle({opacity: 0});
    }.bind(this)).css({cursor: "pointer"});

    //==== event p_C drag
    $('#' + this.p_C_Event.id).drag("init", function(event){
        this.p_C.setStyle({opacity: 1});
		this.p_C_Event.setStyle({opacity: 0.3});
		this.startPosition = {x: event.clientX, y: event.clientY, x0: this.p_C.x, y0: this.p_C.y};
	}.bind(this)).drag(function(event) {
		var xC = this.startPosition.x0 + event.clientX - this.startPosition.x;
        var yC = this.startPosition.y0 + event.clientY - this.startPosition.y;
        if (xC < L_X1) xC = L_X1;
        if (xC > L_X2) xC = L_X2;

        if (yC < A_Y) yC = A_Y;
        if (yC > B_Y) yC = B_Y;
        
		this.p_C.setPos(xC, yC);
        this.p_C_Event.setPos(xC, yC);

        this.updateAll();
        
	}.bind(this)).drag("end", function(event) {
        this.p_C.setStyle({opacity: 0});
		this.p_C_Event.setStyle({opacity: 0});
    }.bind(this)).css({cursor: "pointer"});
    

    this.btnArcA.click(function(){
        this.btnArcClick('A');
    }.bind(this));

    this.btnArcB.click(function(){
        this.btnArcClick('B');
    }.bind(this));

    this.btnArcC.click(function(){
        this.btnArcClick('C');
    }.bind(this));

    this.btnArcSupA.click(function(){
        this.btnSupArcClick('A');
    }.bind(this));

    this.btnArcSupB.click(function(){
        this.btnSupArcClick('B');
    }.bind(this));

    this.btnArcSupC.click(function(){
        this.btnSupArcClick('C');
    }.bind(this));

    this.listRadioSelect.click(function(){
        var target = event.currentTarget;
        var varElm = $(target).closest('.btn-variable');

        this.radioArcChecked(varElm);
    }.bind(this));

    this.radioArcChecked(this.varA);

    this.btnAnswer.click(function(){
        this.btnAnswer.hide();
        this.btnExplain.show();
        this.btnExplainDisable.hide();
        
        this.resetVar();

        this.clearEventVar();
    }.bind(this));

    this.btnExplain.click(function(){
        this.btnAnswer.hide();
        this.btnExplain.hide();
        $(this.g_arcC.displayLayer).hide();
        this.textC.hide();

        this.btnExplainDisable.show();
        this.step1.show();

        this.l_K.setStyle({stroke: "red"});
        $(this.l_K.displayLayer).show();
        this.labelK.attr({fill: "red"}).show();

        this.g_arcAnswer_A.setStyle({stroke: "red"});
        $(this.g_arcAnswer_A.displayLayer).show();
        this.textAnswerA.attr({fill: "red"}).show();

        this.g_arcAnswer_B.setStyle({stroke: "red"});
        $(this.g_arcAnswer_B.displayLayer).show();
        this.textAnswerB.attr({fill: "red"}).show();

        this.g_arcAnswer_C.setStyle({stroke: "red"});
        $(this.g_arcAnswer_C.displayLayer).show();
        this.textAnswerC.attr({fill: "red"}).show();
    }.bind(this));

    this.step1Next.click(function(){
        this.step1.hide();
        this.textAnswerA.hide();

        this.step2.show();

        this.l_K.setStyle({stroke: "black"});
        this.labelK.attr({fill: "black"});

        this.textAnswerLogA.attr({fill: "red"}).show();

        this.g_arcAnswer_B.setStyle({stroke: "black"});
        this.textAnswerB.attr({fill: "black"}).show();
    }.bind(this));

    this.step2Next.click(function(){
        this.step2.hide();
        this.textAnswerB.hide();

        this.step3.show();

        this.g_arcAnswer_A.setStyle({stroke: "black"});
        this.textAnswerLogA.attr({fill: "black"}).show();

        this.g_arcAnswer_B.setStyle({stroke: "red"});
        this.textAnswerLogB.attr({fill: "red"}).show();
    }.bind(this));

    this.step3Next.click(function(){
        this.step3.hide();
        this.textAnswerC.hide();

        this.step4.show();

        this.g_arcAnswer_A.setStyle({stroke: "black"});
        this.textAnswerLogA.attr({fill: "black"}).show();

        this.g_arcAnswer_B.setStyle({stroke: "black"});
        this.textAnswerLogB.attr({fill: "black"}).show();

        this.g_arcAnswer_C.setStyle({stroke: "red"});
        this.textAnswerLogC.attr({fill: "red"}).show();
    }.bind(this));

    this.btnHome.click(function(){
        this.radioArcChecked(this.varA);

        this.displaySvg.empty();
        this.eventSvg.empty();

        this.clearAllEvent();

        resetParallel();
    }.bind(this));
}

ParallelManager.prototype.btnArcClick = function(arc) {
    if (this.radioChecked == arc) return;

    $(this['g_arc' + arc].displayLayer).hide();
    $(this['g_arc' + arc].supDisplayLayer).show();

    $(this['text' + arc]).hide();
    $(this['textSup' + arc]).show();

    this['logText' + arc].hide();
    this['logTextSup' + arc].show();

    this['btnArc' + arc].hide();
    this['btnArcSup' + arc].show();
}

ParallelManager.prototype.btnSupArcClick = function(arc) {
    if (this.radioChecked == arc) return;

    $(this['g_arc' + arc].displayLayer).show();
    $(this['g_arc' + arc].supDisplayLayer).hide();

    $(this['text' + arc]).show();
    $(this['textSup' + arc]).hide();

    this['logText' + arc].show();
    this['logTextSup' + arc].hide();

    this['btnArc' + arc].show();
    this['btnArcSup' + arc].hide();
}

ParallelManager.prototype.radioArcChecked = function(varElm) {

    if (varElm.hasClass('selected')) return;

    var id = varElm.attr('id').slice(-1);

    switch(id) {
        case 'A':
            this.changeRadio('A');
            break;
        case 'B':
            this.changeRadio('B');
            break;
        case 'C':
            this.changeRadio('C');
            break;
    }

    this.radioChecked = id;
}

ParallelManager.prototype.changeRadio = function(arc) {
    //current var
    this['textX_' + arc].show();
    this['text' + arc].hide();
    this['textSup' + arc].hide();
    this['g_arc' + arc].setStyle({fill: '#f97dae'});
    $(this['g_arc' + arc].displayLayer).show();
    $(this['g_arc' + arc].supDisplayLayer).hide();
    this['logText' + arc].hide();
    this['logTextSup' + arc].hide();
    this['logVar' + arc].show();
    this['btnArc' + arc].show();
    this['btnArcSup' + arc].hide();
    this['btnArc' + arc].css({"cursor": "default"});
    this['btnArcSup' + arc].css({"cursor": "default"});
    this['var' + arc].addClass('selected');

    //last var
    if (!this.radioChecked) return;
    this['logText' + this.radioChecked].show();
    this['logVar' + this.radioChecked].hide();

    this['text' + this.radioChecked].show();
    this['textX_' + this.radioChecked].hide();
    this['textSup' + this.radioChecked].hide();

    this['btnArc' + this.radioChecked].css({"cursor": "pointer"});
    this['btnArcSup' + this.radioChecked].css({"cursor": "pointer"});
    this['var' + this.radioChecked].removeClass('selected');

    this['g_arc' + this.radioChecked].setStyle({fill: 'none'});
}

ParallelManager.prototype.resetVar = function() {
    
    $(this.g_arcA.displayLayer).show();
    $(this.g_arcB.displayLayer).show();
    $(this.g_arcC.displayLayer).show();

    $(this.g_arcA.supDisplayLayer).hide();
    $(this.g_arcB.supDisplayLayer).hide();
    $(this.g_arcC.supDisplayLayer).hide();

    this.textA.show();
    this.textB.show();
    this.textC.show();

    this.textSupA.hide();
    this.textSupB.hide();
    this.textSupC.hide();

    this.textX_A.hide();
    this.textX_B.hide();
    this.textX_C.hide();

    this.logTextA.show();
    this.logTextB.show();
    this.logTextC.show();

    this.logTextSupA.hide();
    this.logTextSupB.hide();
    this.logTextSupC.hide();

    this.logVarA.hide();
    this.logVarB.hide();
    this.logVarC.hide();

    this.btnArcA.show();
    this.btnArcB.show();
    this.btnArcC.show();

    this.btnArcSupA.hide();
    this.btnArcSupB.hide();
    this.btnArcSupC.hide();
}

ParallelManager.prototype.clearEventVar = function() {
    this.listRadioSelect.unbind();

    this.btnArcA.unbind();
    this.btnArcB.unbind();
    this.btnArcC.unbind();
    this.btnArcSupA.unbind();
    this.btnArcSupB.unbind();
    this.btnArcSupC.unbind();
}

ParallelManager.prototype.clearAllEvent = function() {

    $('#' + this.p_A_Event.id).unbind();
    $('#' + this.p_B_Event.id).unbind();
    $('#' + this.p_C_Event.id).unbind();

    this.btnHome.unbind();
    this.btnAnswer.unbind();
    this.btnExplain.unbind();
    this.step1Next.unbind();
    this.step2Next.unbind();
    this.step3Next.unbind();

    this.clearEventVar();
}

ParallelManager.prototype.updateAll = function() {
    this.updatel_CA();
    this.updatel_CB();
    this.updatel_K();

    this.updateLabelA();
    this.updateLabelB();
    this.updateLabelC();
    this.updateLabelK();

    this.updateArcA();
    this.updateArcB();
    this.updateArcC();

    this.updateTextB();
    this.updateTextA();
    this.updateTextC();

    this.updateTextSupA();
    this.updateTextSupB();
    this.updateTextSupC();

    this.updateTextX_A();
    this.updateTextX_B();
    this.updateTextX_C();

    this.updateLog();
    this.updateLogSup();

    this.updatetextAnswerC();
    this.updateTextAnswerA();
    this.updateTextAnswerB();
    this.updatetextAnswerLogC();
    this.updateTextAnswerLogA();
    this.updateTextAnswerLogB();
    this.updateArcAnswerX_C();
    this.updateArcAnswer_A();
    this.updateArcAnswer_B();
}

ParallelManager.prototype.updatel_CA = function() {
    this.l_CA.draw();
}

ParallelManager.prototype.updatel_CB = function() {
    this.l_CB.draw();
}

ParallelManager.prototype.updatel_K = function() {
    this.l_K.setPos({x: L_X1, y: this.p_C.y}, {x: L_X2, y: this.p_C.y});
}

ParallelManager.prototype.updateArcA = function() {
    this.g_arcA.setVector({x: this.p_C.x - this.p_A.x, y: this.p_C.y - this.p_A.y,}, {x: -1, y: 0});
}

ParallelManager.prototype.updateArcB = function() {
    this.g_arcB.setVector({x: -1, y: 0}, {x: this.p_C.x - this.p_B.x, y: this.p_C.y - this.p_B.y});
}

ParallelManager.prototype.updateArcC = function() {
    this.g_arcC.setVector({x: this.p_A.x - this.p_C.x, y: this.p_A.y - this.p_C.y}, {x: this.p_B.x - this.p_C.x, y: this.p_B.y - this.p_C.y});
}

ParallelManager.prototype.updateArcAnswerX_C = function() {
    this.g_arcAnswer_C.setVector({x: this.p_A.x - this.p_C.x, y: this.p_A.y - this.p_C.y}, {x: this.p_B.x - this.p_C.x, y: this.p_B.y - this.p_C.y});
}

ParallelManager.prototype.updateArcAnswer_A = function() {
    this.g_arcAnswer_A.setVector({x: this.p_A.x - this.p_C.x, y: this.p_A.y - this.p_C.y}, {x: 1, y: 0});
}

ParallelManager.prototype.updateArcAnswer_B = function() {
    this.g_arcAnswer_B.setVector({x: 1, y: 0}, {x: this.p_B.x - this.p_C.x, y: this.p_B.y - this.p_C.y});
}

ParallelManager.prototype.updateLabelA = function() {
    $(this.labelA).attr({x: this.p_A.x - 10, y: this.p_A.y - 10});
}

ParallelManager.prototype.updateLabelB = function() {
    $(this.labelB).attr({x: this.p_B.x - 5, y: this.p_B.y + 27});
}

ParallelManager.prototype.updateLabelC = function() {
    $(this.labelC).attr({x: this.p_C.x - 30, y: this.p_C.y + 10});
}

ParallelManager.prototype.updateLabelK = function() {
    $(this.labelK).attr({x :L_X1 - 30, y: this.p_C.y + 5});
}

ParallelManager.prototype.updateLog = function() {
    this.listLogTextA.text(this.g_arcA.getArc() + "°");
    this.listLogTextB.text(this.g_arcB.getArc() + "°");
    this.listLogTextC.text(this.g_arcA.getArc() + this.g_arcB.getArc() + "°");
}

ParallelManager.prototype.updateLogSup = function() {
    this.listLogTextSupA.text(this.g_arcA.getSupArc() + "°");
    this.listLogTextSupB.text(this.g_arcB.getSupArc() + "°");
    this.listLogTextSupC.text(360 - (this.g_arcA.getArc() + this.g_arcB.getArc()) + "°");
}

ParallelManager.prototype.updateTextA = function() {
    $(this.textA).attr({x : this.p_A.x + (RDEGREE+RP) * Math.cos(this.g_arcA.arcLabel),
                        y: this.p_A.y + (RDEGREE+RP) * Math.sin(this.g_arcA.arcLabel)});
}

ParallelManager.prototype.updateTextB = function() {
    $(this.textB).attr({x : this.p_B.x + (RDEGREE+RP) * Math.cos(this.g_arcB.arcLabel),
                        y: this.p_B.y + (RDEGREE+RP) * Math.sin(this.g_arcB.arcLabel)});
}

ParallelManager.prototype.updateTextC = function() {
    $(this.textC).attr({x : this.p_C.x + (RDEGREE+RP) * Math.cos(this.g_arcC.arcLabel),
                        y: this.p_C.y + (RDEGREE+RP) * Math.sin(this.g_arcC.arcLabel)});
}

ParallelManager.prototype.updateTextSupA = function() {
    $(this.textSupA).attr({x : this.p_A.x + (RDEGREE+RP) * Math.cos(this.g_arcA.arcSupLabel),
                        y: this.p_A.y + (RDEGREE+RP) * Math.sin(this.g_arcA.arcSupLabel)});
}

ParallelManager.prototype.updateTextSupB = function() {
    $(this.textSupB).attr({x : this.p_B.x + (RDEGREE+RP) * Math.cos(this.g_arcB.arcSupLabel),
                        y: this.p_B.y + (RDEGREE+RP) * Math.sin(this.g_arcB.arcSupLabel)});
}

ParallelManager.prototype.updateTextSupC = function() {
    $(this.textSupC).attr({x : this.p_C.x + (RDEGREE+RP) * Math.cos(this.g_arcC.arcSupLabel),
                        y: this.p_C.y + (RDEGREE+RP) * Math.sin(this.g_arcC.arcSupLabel)});
}

ParallelManager.prototype.updateTextX_A = function() {
    $(this.textX_A).attr({x : this.p_A.x + (RDEGREE+RP) * Math.cos(this.g_arcA.arcLabel),
                        y: this.p_A.y + (RDEGREE+RP) * Math.sin(this.g_arcA.arcLabel)});
}

ParallelManager.prototype.updateTextX_B = function() {
    $(this.textX_B).attr({x : this.p_B.x + (RDEGREE+RP) * Math.cos(this.g_arcB.arcLabel),
                        y: this.p_B.y + (RDEGREE+RP) * Math.sin(this.g_arcB.arcLabel)});
}

ParallelManager.prototype.updateTextX_C = function() {
    $(this.textX_C).attr({x : this.p_C.x + (RDEGREE+RP) * Math.cos(this.g_arcC.arcLabel),
                        y: this.p_C.y + (RDEGREE+RP) * Math.sin(this.g_arcC.arcLabel)});
}

ParallelManager.prototype.updatetextAnswerC = function() {
    $(this.textAnswerC).attr({x: this.p_C.x + (RDEGREE*3+RP) * Math.cos(this.g_arcAnswer_A.arcLabel),
                        y: this.p_C.y + (RDEGREE*3+RP) * Math.sin(this.g_arcAnswer_A.arcLabel)});
}

ParallelManager.prototype.updateTextAnswerA = function() {
    $(this.textAnswerA).attr({x: this.p_C.x + (RDEGREE+RP) * Math.cos(this.g_arcAnswer_A.arcLabel),
                        y: this.p_C.y + (RDEGREE+RP) * Math.sin(this.g_arcAnswer_A.arcLabel)});
}

ParallelManager.prototype.updateTextAnswerB = function() {
    $(this.textAnswerB).attr({x: this.p_C.x + (RDEGREE+RP + 15) * Math.cos(this.g_arcAnswer_B.arcLabel),
                        y: this.p_C.y + (RDEGREE+RP + 15) * Math.sin(this.g_arcAnswer_B.arcLabel)});
}

ParallelManager.prototype.updatetextAnswerLogC = function() {
    $(this.textAnswerLogC).attr({x: this.p_C.x + (RDEGREE*3+RP+15) * Math.cos(this.g_arcAnswer_A.arcLabel),
                        y: this.p_C.y + (RDEGREE*3+RP+15) * Math.sin(this.g_arcAnswer_A.arcLabel)});
}

ParallelManager.prototype.updateTextAnswerLogA = function() {
    $(this.textAnswerLogA).attr({x: this.p_C.x + (RDEGREE+RP) * Math.cos(this.g_arcAnswer_A.arcLabel),
                        y: this.p_C.y + (RDEGREE+RP) * Math.sin(this.g_arcAnswer_A.arcLabel)});
}

ParallelManager.prototype.updateTextAnswerLogB = function() {
    $(this.textAnswerLogB).attr({x: this.p_C.x + (RDEGREE+RP + 15) * Math.cos(this.g_arcAnswer_B.arcLabel),
                        y: this.p_C.y + (RDEGREE+RP + 15) * Math.sin(this.g_arcAnswer_B.arcLabel)});
}

ParallelManager.prototype.createLabel = function(text, x, y) {
	return $(this.createTag("text")).attr({
        'id': "label" + text,
        'x': x,
        'y': y,
        'font-family': "MeiOriENum",
        'font-size': "24",
        'fill':"black"
    }).text(text);
}

ParallelManager.prototype.createText = function(id, text, x, y) {
	return $(this.createTag("text")).attr({
        'id': id,
        'x': x,
        'y': y,
        "font-family": "sans-serif",
        "font-size": 24,
        "fill": "black",
        "text-anchor": "middle",
        "alignment-baseline": "middle"
    }).text(text);
}

ParallelManager.prototype.createTag = function(tag) {
	return document.createElementNS("http://www.w3.org/2000/svg", tag);
}

