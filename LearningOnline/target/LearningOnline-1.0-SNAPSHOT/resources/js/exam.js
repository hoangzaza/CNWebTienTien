$(document).ready(function () {
    $(".dropdown-menu li").click(function (e) {
        e.preventDefault(); // cancel the link behaviour
        var selText = $(this).text();
        $(this).parent().parent().find($(".btn")).text(selText);
        $(this).parent().parent().find($(".hiddenid").val($(this).val()));
    });
});