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


            <c:choose>
                <c:when test="${empty class1}">
                    <div class="dropdown class-choose">
                        <div id="tableDiv" class="dropdown">
                            <input type="hidden" id="classid" name="classid" value="1">
                            <button id="tableButton" class="btn btn-default dropdown-toggle" type="button"
                                    data-toggle="dropdown">
                                Lớp 12
                                <span class="caret"></span>
                            </button>
                            <ul id="tableMenu" class="dropdown-menu">
                                <c:forEach items="${classes}" var="item">
                                    <li value="${item.getClassId()}">${item.getClassName()}</li>
                                </c:forEach>
                            </ul>
                        </div>
                    </div>
                </c:when>
                <c:otherwise>
                    <div class="dropdown class-choose">
                        <div id="tableDiv" class="dropdown">
                            <input type="hidden" id="classid" name="classid" value="${class1.getClassId()}">
                            <button id="tableButton" class="btn btn-default dropdown-toggle" type="button"
                                    data-toggle="dropdown">
                                    ${class1.getClassName()}
                                <span class="caret"></span>
                            </button>
                            <ul id="tableMenu" class="dropdown-menu">
                                <c:forEach items="${classes}" var="item">
                                    <li value="${item.getClassId()}">${item.getClassName()}</li>
                                </c:forEach>
                            </ul>
                        </div>
                    </div>
                </c:otherwise>
            </c:choose>

            <c:choose>
                <c:when test="${empty subject}">
                    <div class="dropdown class-choose">
                        <div id="tableDiv1" class="dropdown">
                            <input type="hidden" id="subjectid" name="subjectid" value="-1">
                            <button id="btn-subject" class="btn btn-default dropdown-toggle" type="button"
                                    data-toggle="dropdown">
                                Chọn môn học
                                <span class="caret"></span>
                            </button>
                            <ul id="tbl-subject" class="dropdown-menu">
                                <li value="-1">Chọn môn học</li>
                                <c:forEach items="${subjects}" var="i">
                                    <li value="${i.getSubjectId()}">${i.getSubjectName()}</li>
                                </c:forEach>
                            </ul>
                        </div>
                    </div>
                </c:when>
                <c:otherwise>
                    <div class="dropdown class-choose">
                        <div id="tableDiv1" class="dropdown">
                            <input type="hidden" id="subjectid" name="subjectid" value="${subject.getSubjectId()}">
                            <button id="btn-subject" class="btn btn-default dropdown-toggle" type="button"
                                    data-toggle="dropdown">
                                    ${subject.getSubjectName()}
                                <span class="caret"></span>
                            </button>
                            <ul id="tbl-subject" class="dropdown-menu">
                                <li value="-1">Chọn môn học</li>
                                <c:forEach items="${subjects}" var="i">
                                    <li value="${i.getSubjectId()}">${i.getSubjectName()}</li>
                                </c:forEach>
                            </ul>
                        </div>
                    </div>
                </c:otherwise>
            </c:choose>


            <input type="submit" value="Tìm kiếm" class="btn btn-primary"/>

        </div>
    </form>

    <c:if test="${not empty subject}">
        <div>
            ${subject.subjectName}
        </div>
        <c:forEach items="${exams}" var="exam">
            ${exam.examName}
        </c:forEach>
    </c:if>
    <c:if test="${empty subject}">
        <c:forEach items="${class1.classSubjects}" var="classsubject">
            <div class="subject-name">
                    ${classsubject.subject.subjectName}
            </div>
            <c:forEach items="${classsubject.exams}" var="exam">
                <a href="/examtest/${exam.examId}">${exam.examName}</a>
            </c:forEach>
        </c:forEach>
    </c:if>


</div>


<jsp:include page="common/footer.jsp"></jsp:include>

<script src="/resources/js/exam.js"></script>
</body>
</html>
