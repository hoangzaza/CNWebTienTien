$(document).ready(function () {
    $("#form1").submit(function (e) {
        e.preventDefault();
        var result = $("#doexam").val() ;
        var i = 0;
        $(".answer:checked").each(function () {

            result += ($(this).val())+",";
        });

        $("#doexam").val(result);
        this.submit();
    });
   var time = $("#minutes").text() * 60 * 1000;
   var x = setInterval(function () {
       time -= 1000;
       var minutes = Math.floor(time/(60 * 1000));
       var seconds = Math.floor((time % (60 * 1000))/1000);
       if (time < 0) {
           clearInterval(x);
           $("#clock").val("EXPIRED");
       }else {
       $("#minutes").text(minutes);
       $("#milisecons").text(seconds);
       }

   }, 1000);



});