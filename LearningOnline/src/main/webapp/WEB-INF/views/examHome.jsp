<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: HoangNV
  Date: 10/27/2018
  Time: 10:49 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Danh sách ngân hàng câu hỏi, ngân hàng đề thi</title>
    <jsp:include page="common/header.jsp"></jsp:include>
    <link type="text/css" rel="stylesheet" href="/resources/css/exam.css">
</head>
<body>

<jsp:include page="common/nav-bar.jsp"></jsp:include>
<div class="container">
    <form action="/examtest" method="post">
    <div class="row">

            <div class="dropdown class-choose">
                <div id="tableDiv" class="dropdown">
                    <input type="hidden" class="hiddenid" name="classid" value="-1">
                    <button id="tableButton" class="btn btn-default dropdown-toggle" type="button"
                            data-toggle="dropdown">
                        Chọn lớp
                        <span class="caret"></span>
                    </button>
                    <ul id="tableMenu" class="dropdown-menu">
                        <li>Chọn lớp</li>
                        <c:forEach items="${classes}" var="item">
                            <li value="${item.getClassId()}">${item.getClassName()}</li>
                        </c:forEach>
                    </ul>
                </div>
            </div>
            <div class="dropdown class-choose">
                <div id="tableDiv1" class="dropdown">
                    <input type="hidden" class="hiddenid" name="subjectid" value="-1">
                    <button id="btn-subject" class="btn btn-default dropdown-toggle" type="button"
                            data-toggle="dropdown">
                        Chọn môn học
                        <span class="caret"></span>
                    </button>
                    <ul id="tbl-subject" class="dropdown-menu">
                        <li>Chọn môn học</li>
                        <c:forEach items="${subjects}" var="i">
                            <li value="${i.getSubjectId()}">${i.getSubjectName()}</li>
                        </c:forEach>
                    </ul>
                </div>
            </div>

            <input type="submit" value="Tìm kiếm" class="btn btn-success"/>

    </div>
    </form>

    ${exams.size()}


</div>


<jsp:include page="common/footer.jsp"></jsp:include>

<script src="/resources/js/exam.js"></script>
</body>
</html>
