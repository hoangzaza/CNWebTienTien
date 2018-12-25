$(document).ready(function () {
    $("body").on("click", ".page-item", function () {
        var page = $(this).text();
        var startItem = (page - 1) * 5;
        $(".page-item").removeClass("active");
        $(this).addClass("active");
        $.ajax({
            url: "/managementTeacher/getListTeacherLimit",
            type: "post",
            data: {
                startitem: startItem
            },
            success: function (result) {
                var obj = JSON.parse(result);
                if(obj.message == "OK"){
                    $("table tbody").find("td").remove();
                    for (i = 0; i < obj.teachers.length; i++) {
                        var teac = obj.teachers[i];
                        var tbody = $("table tbody");
                        var row = $("<tr></tr>");
                        row.append("<td><input class=\"id-teacher\" type=\"checkbox\" value=\"" + teac.teacherid + "\"></td>");
                        row.append("<td class=\"teacher-name\">" + teac.teacher_name + "</td>");
                        row.append("<td class=\"teacher-position\">" + teac.position + "</td>");
                        row.append("<td class=\"teacher-work\">" + teac.work_place + "</td>");
                        row.append("<td class=\"teacher-email\">" + teac.email + "</td>");
                        row.append("<td class=\"subject\" value=\"" + teac.subject_id +"\">" + teac.subject + "</td>");
                        row.append("<td class=\"edit\"><i class=\"fa fa-adjust\"></i></td>");
                        tbody.append(row);
                    }
                }
            }
        });
    })
    var url_file = "";
    var file= [];
    $("#img-icon").change(function (event) {
        file = event.target.files;
        forms = new FormData();
        forms.append("file",file[0]);
        $.ajax({
            url: "/managementTeacher/upload",
            method: "post",
            data:forms,
            contentType:false,
            processData: false,
            encrypt:"multipart/form-data",
            success:function (value) {
                url_file = value;
            }
        });
        
    });

    $("#btn-show").click(function () {
        $("#txt-name").val("");
        $("#sl-position").val("Cử nhân");
        $("#txt-work-place").val("");
        $("#txt-description").val("");
        $("#img-icon").val(null);
        $("#txt-email").val("");
        $("#sl-subject").val(1);
        $("#btn-add").css("display","block");
        $("#btn-update").css("display","none");
        $('#myModal').modal('hide');
    })

    $("#btn-update").click(function () {
        var teacher = {};
        teacher.teacher_id = $(".id-teacher").val();
        teacher.teacher_name = $("#txt-name").val();
        teacher.position = $("#sl-position").val();
        teacher.workplace = $("#txt-work-place").val();
        teacher.description = $("#txt-description").val();
        teacher.email = $("#txt-email").val();
        teacher.subject = $("#sl-subject").val();
        teacher.url_icon = url_file;

        $.ajax({
            url: "/managementTeacher/updateTeacher",
            method: "post",
            data: {
                teacher: JSON.stringify(teacher)
            },
            success: function (result) {
                var obj = JSON.parse(result);
                if(obj.message == "OK"){
                    $("table tbody").find("td").remove();
                    for (i = 0; i < obj.teachers.length; i++) {
                        var teac = obj.teachers[i];
                        var tbody = $("table tbody");
                        var row = $("<tr></tr>");
                        row.append("<td><input class=\"id-teacher\" type=\"checkbox\" value=\"" + teac.teacherid + "\"></td>");
                        row.append("<td class=\"teacher-name\">" + teac.teacher_name + "</td>");
                        row.append("<td class=\"teacher-position\">" + teac.position + "</td>");
                        row.append("<td class=\"teacher-work\">" + teac.work_place + "</td>");
                        row.append("<td class=\"teacher-email\">" + teac.email + "</td>");
                        row.append("<td class=\"subject\" value=\"" + teac.subject_id +"\">" + teac.subject + "</td>");
                        row.append("<td class=\"edit\"><i class=\"fa fa-adjust\"></i></td>");
                        tbody.append(row);
                        $('#myModal').modal('hide');
                    }
                }
            }
        });

    })

    $("#btn-add").click(function () {
        var teacher = {};
        teacher.teacher_name = $("#txt-name").val();
        teacher.position = $("#sl-position").val();
        teacher.workplace = $("#txt-work-place").val();
        teacher.description = $("#txt-description").val();
        teacher.email = $("#txt-email").val();
        teacher.subject = $("#sl-subject").val();
        teacher.url_icon = url_file;
        var obj;
        $.ajax({
            url: "/managementTeacher/addTeacher",
            method: "post",
            data: {
                teacher: JSON.stringify(teacher)
            },
            success: function (result) {
                $('#myModal').modal('hide');
                obj = JSON.parse(result);
                if(obj.message == "OK"){
                    $("table tbody").find("td").remove();
                    for (i = 0; i < obj.teachers.length; i++) {
                        var teac = obj.teachers[i];
                        var tbody = $("table tbody");
                        var row = $("<tr></tr>");
                        row.append("<td><input class=\"id-teacher\" type=\"checkbox\" value=\"" + teac.teacherid + "\"></td>");
                        row.append("<td class=\"teacher-name\">" + teac.teacher_name + "</td>");
                        row.append("<td class=\"teacher-position\">" + teac.position + "</td>");
                        row.append("<td class=\"teacher-work\">" + teac.work_place + "</td>");
                        row.append("<td class=\"teacher-email\">" + teac.email + "</td>");
                        row.append("<td class=\"subject\" value=\"" + teac.subject_id +"\">" + teac.subject + "</td>");
                        row.append("<td class=\"edit\"><i class=\"fa fa-adjust\"></i></td>");
                        tbody.append(row);
                    }
                }
            }
        });

        $("#txt-name").val("");
        $("#sl-position").val("Cử nhân");
        $("#txt-work-place").val("");
        $("#txt-description").val("");
        $("#img-icon").val(null);
        $("#txt-email").val("");
        $("#sl-subject").val(1);
        url_file = "";

    });

    $("body").on("click", ".edit", function () {
        $("#txt-name").val($(this).parent().find(".teacher-name").text());
        $("#sl-position").val($(this).parent().find(".teacher-position").val());
        $("#txt-work-place").val($(this).parent().find(".teacher-work").text());
        $("#txt-description").val("");
        $("#img-icon").val(null);
        $("#sl-subject").val($(this).parent().find(".subject").val());
        $("#txt-email").val($(this).parent().find(".teacher-email").text());
        $("#btn-add").css("display","none");
        $("#btn-update").css("display","block");
        $('#myModal').modal('show')
    });

    $("#btn-delete").click(function () {
        $("tbody input:checked").each(function () {
            var teacherid = $(this).val();
            $.ajax({
                url: "/managementTeacher/deleteTeacher",
                method: "post",
                data: {
                    teacherid: teacherid
                },
                success: function (result) {
                    var obj = JSON.parse(result);
                    if(obj.message == "OK"){
                        $("table tbody").find("td").remove();
                        for (i = 0; i < obj.teachers.length; i++) {
                            var teac = obj.teachers[i];
                            var tbody = $("table tbody");
                            var row = $("<tr></tr>");
                            row.append("<td><input class=\"id-teacher\" type=\"checkbox\" value=\"" + teac.teacherid + "\"></td>");
                            row.append("<td class=\"teacher-name\">" + teac.teacher_name + "</td>");
                            row.append("<td class=\"teacher-position\">" + teac.position + "</td>");
                            row.append("<td class=\"teacher-work\">" + teac.work_place + "</td>");
                            row.append("<td class=\"teacher-email\">" + teac.email + "</td>");
                            row.append("<td class=\"subject\" value=\"" + teac.subject_id +"\">" + teac.subject + "</td>");
                            row.append("<td class=\"edit\"><i class=\"fa fa-adjust\"></i></td>");
                            tbody.append(row);
                        }
                    }
                }
            });
        })
    })

    $("#check-all").change(function () {
        if ($(this).prop("checked")) {
            $("tbody input").prop("checked", true);
        } else {
            $("tbody input").prop("checked", false);
        }
    });
});
