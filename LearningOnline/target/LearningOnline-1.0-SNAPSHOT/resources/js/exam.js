$(document).ready(function () {
    $("#tableDiv .dropdown-menu li").click(function (e) {
        e.preventDefault(); // cancel the link behaviour
        var selText = $(this).text();
        $(this).parent().parent().find($(".btn")).text(selText);
        $(this).parent().parent().find($("#classid").val($(this).val()));
    });
    $("#tableDiv1 .dropdown-menu li").click(function (e) {
        e.preventDefault(); // cancel the link behaviour
        var selText = $(this).text();
        $(this).parent().parent().find($(".btn")).text(selText);
        $(this).parent().parent().find($("#subjectid").val($(this).val()));
    });

});