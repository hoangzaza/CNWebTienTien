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

<div class="container" style="margin-top: 10px">
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
            <c:forEach var="items" items="${courses}" varStatus="status">
                <c:if test="${(status.index) % 3 == 0}">
                    <div class="row">
                    <div class="col-lg-4 col-xs-4">
                        <div class="course-grid-item">
                                    <div class="course-grid-image">
                                        <a href="/course/courseDetail/${items.courseId}">
                                            <img src="${items.urlIcon}" alt="${items.courseName}"/>
                                        </a>
                                    </div>
                                    <div class="course-grid-info">
                                        <h3 class="course-grid-name">
                                            ${items.courseName} - Thầy ${items.teacher.teacherName}
                                        </h3>
                                        <div class="course-closing-date">
                                            <span class="cgt-label">Thời gian học:</span> ${items.time} ngày
                                            <i class="fa fa-question-circle" data-toggle="tooltip" data-placement="top" title="${items.courseName}"></i>
                                        </div>
                                        <div class="course-grid-teacher">
                                            <span>Giáo viên :</span>
                                            <a href="#">Thầy ${items.teacher.teacherName}</a>
                                        </div>
                                        <div class="course-action">
                                            <a class="course-view-more" href="/course/courseDetail/${items.courseId}">
                                                Chi tiết
                                            </a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </c:if>
                <c:if test="${(status.index) % 3 == 1}">
                    <div class="col-lg-4 col-xs-4">
                        <div class="course-grid-item">
                                        <div class="course-grid-image">
                                            <a href="#">
                                                <img src="${items.urlIcon}" alt="${items.courseName}" href="/course/courseDetail/${items.courseId}">
                                            </a>
                                        </div>
                                        <div class="course-grid-info">
                                            <h3 class="course-grid-name">
                                                    ${items.courseName} - Thầy ${items.teacher.teacherName}
                                            </h3>
                                            <div class="course-closing-date">
                                                <span class="cgt-label">Thời gian học:</span> ${items.time} ngày
                                                <i class="fa fa-question-circle" data-toggle="tooltip" data-placement="top" title="${items.courseName}"></i>
                                            </div>
                                            <div class="course-grid-teacher">
                                                <span>Giáo viên :</span>
                                                <a href="#">Thầy ${items.teacher.teacherName}</a>
                                            </div>
                                            <div class="course-action">
                                                <a class="course-view-more" href="/course/courseDetail/${items.courseId}">
                                                    Chi tiết
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                    </div>
                </c:if>
                <c:if test="${(status.index) % 3 == 2}">
                    <div class="col-lg-4 col-xs-4">
                        <div class="course-grid-item">
                                        <div class="course-grid-image">
                                            <a href="/course/courseDetail/${items.courseId}">
                                                <img src="${items.urlIcon}" alt="${items.courseName}">
                                            </a>
                                        </div>
                                        <div class="course-grid-info">
                                            <h3 class="course-grid-name">
                                                    ${items.courseName} - Thầy ${items.teacher.teacherName}
                                            </h3>
                                            <div class="course-closing-date">
                                                <span class="cgt-label">Thời gian học:</span> ${items.time} ngày
                                                <i class="fa fa-question-circle" data-toggle="tooltip" data-placement="top" title="${items.courseName}"></i>
                                            </div>
                                            <div class="course-grid-teacher">
                                                <span>Giáo viên :</span>
                                                <a href="#">Thầy ${items.teacher.teacherName}</a>
                                            </div>
                                            <div class="course-action">
                                                <a class="course-view-more" href="/course/courseDetail/${items.courseId}">
                                                    Chi tiết
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                    </div>
                    </div>
                </c:if>
            </c:forEach>
            <c:if test="${courses.size() % 3 != 0}">
                </div>
            </c:if>
        </div>
    </div>
</div>




<jsp:include page="common/footer.jsp"></jsp:include>
<script src="/resources/js/course.js"></script>
</body>
</html>
