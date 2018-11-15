<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: HoangNV
  Date: 10/25/2018
  Time: 10:47 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Danh sách khóa học</title>
    <jsp:include page="common/header.jsp"></jsp:include>
    <link rel="stylesheet" type="text/css" href="/resources/css/exam.css"/>
</head>
<body>
<jsp:include page="common/nav-bar.jsp"></jsp:include>

<div class="container">
    <div class="row">
        <div class="col-lg-3 col-sm-3">
            <ul class="nav nav-pills flex-column">
                <a class="nav-link active" href="#">Trung học phổ thông</a>
                <c:forEach items="${classes}" var="item">
                    <c:if test="${item.classId > 0 && item.classId < 4}">
                        <li class="nav-item">
                            <div class="btn-group dropright">
                                <div class="dropdown-toggle item-menu" data-toggle="dropdown" aria-haspopup="true"
                                     aria-expanded="false">
                                        ${item.getClassName()}
                                </div>
                                <div class="dropdown-menu wow zoomIn" data-wow-duration="1s">
                                    <c:forEach items="${item.getClassSubjects()}" var="classsubject">

                                        <a class="dropdown-item"
                                           href="/course/${item.getClassId()}/${classsubject.getSubject().getSubjectId()}">${classsubject.getSubject().getSubjectName()}</a>
                                    </c:forEach>
                                </div>
                            </div>

                        </li>
                    </c:if>
                </c:forEach>
                <a class="nav-link active" href="#">Trung học cơ sở</a>
                <c:forEach items="${classes}" var="item">
                    <c:if test="${item.classId >= 4 && item.classId <= 7}">
                        <li class="nav-item">
                            <div class="btn-group dropright">
                                <div class="dropdown-toggle item-menu" data-toggle="dropdown" aria-haspopup="true"
                                     aria-expanded="false">
                                        ${item.getClassName()}
                                </div>
                                <div class="dropdown-menu">
                                    <c:forEach items="${item.getClassSubjects()}" var="classsubject">

                                        <a class="dropdown-item"
                                           href="/course/${item.getClassId()}/${classsubject.getSubject().getSubjectId()}">${classsubject.getSubject().getSubjectName()}</a>
                                    </c:forEach>
                                </div>
                            </div>

                        </li>
                    </c:if>
                </c:forEach>

                <a class="nav-link active" href="#">Tiểu học</a>
                <c:forEach items="${classes}" var="item">
                    <c:if test="${item.classId >= 8 && item.classId <= 12}">
                        <li class="nav-item">
                            <div class="btn-group dropright">
                                <div class="dropdown-toggle item-menu" data-toggle="dropdown" aria-haspopup="true"
                                     aria-expanded="false">
                                        ${item.getClassName()}
                                </div>
                                <div class="dropdown-menu">
                                    <c:forEach items="${item.getClassSubjects()}" var="classsubject">

                                        <a class="dropdown-item"
                                           href="/course/${item.getClassId()}/${classsubject.getSubject().getSubjectId()}">${classsubject.getSubject().getSubjectName()}</a>
                                    </c:forEach>
                                </div>
                            </div>
                        </li>
                    </c:if>
                </c:forEach>

            </ul>
        </div>
        <div class="col-lg-9 col-sm-9">
            <div class="row">
                <div class="col-lg-4 col-xs-4">
                    <div class="course-grid-item">

                    </div>
                </div>
                <div class="col-lg-4 col-xs-4">
                    <div>

                    </div>
                </div>
                <div class="col-lg-4 col-xs-4">
                    <div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</div>


<jsp:include page="common/footer.jsp"></jsp:include>
</body>
</html>
