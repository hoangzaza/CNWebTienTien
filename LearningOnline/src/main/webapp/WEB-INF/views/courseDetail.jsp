<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: HoangNV
  Date: 11/22/2018
  Time: 9:27 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Khóa học ${course.courseName} - Thầy ${course.teacher.teacherName}</title>
    <jsp:include page="common/header.jsp"></jsp:include>
    <link rel="stylesheet" type="text/css" href="/resources/css/exam.css"/>
</head>
<body>
<jsp:include page="common/nav-bar.jsp"></jsp:include>
<div class="container">
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Trang chủ </a></li>
        <li class="breadcrumb-item"><a href="/course/${course.classSubject.c.classId}/${course.classSubject.subject.subjectId}">${course.classSubject.subject.subjectName}-${course.classSubject.c.className}</a></li>
        <li class="breadcrumb-item active" aria-current="page">${course.courseName}</li>
    </ol>
</nav>
<div>
    <img  style="margin: auto; display: block" src="${course.urlIcon}"/>
</div>

    <h1 class="course-detail-title">
        ${course.courseName}
    </h1>
    <div>Mô tả khóa học : ${course.description}
    </div>
<div>
    Giáo viên : <a href="/teacher/${course.teacher.teacherId}">${course.teacher.teacherName}</a>
</div>
<div>
    Thời gian học : ${course.time} ngày
</div>
    <div class="course-outline">
        <h2 class="course-detail-stitle">
            <span>Đề cương khóa học</span>
        </h2>
        <ul class="learn-outline-list">
            <c:forEach items="${course.lessons}" var="lesson">
                <li class="learn-outline-item">
                    <a href="/lesson/${lesson.lessonId}" class="learn-lesson-wr">
                        <h4 class="scorm-right-name visible">
                            <span class="scorm-right-link">
                                ${lesson.lessonName}
                            </span>
                        </h4>
                        <ul class="scorm-right-action clearfix">
                            <li>
                                <span title="Thời lượng bài giảng" class="scorm-learn-times"><i class="fa fa-play-circle"></i> 35 phút </span>
                            </li>
                        </ul>

                    </a>
                </li>
            </c:forEach>
        </ul>

    </div>
<div id="teacher-info-block">
    <div class="ti-title">Giới thiệu giáo viên</div>
    <div class="ti-list">
        <div class="ti-item">
            <div class="ti-top clearfix">
                <div class="ti-image" style="width: 110px; float: left"><a target="_blank" href="/teacher/${course.teacher.teacherId}"><img class="center" src="${course.teacher.urlIcon}" alt="${course.teacher.teacherName}"></a></div>
                <div class="ti-short">
                    <div class="ti-shost-des"><strong>${course.teacher.teacherName}</strong> - <p style="text-align:justify"><span style="font-size:12px">${course.teacher.description}</span></p>
                    </div>
                </div>
            </div>
            <div class="ti-mid"><ul>
                <li style="text-align: justify;"><span style="font-size:12px">Trên 6 năm kinh nghiệm giảng dạy và ôn luyện thi ĐH, CĐ môn Toán với nhiều học sinh đạt điểm cao trong các kỳ thi ĐH, CĐ.</span></li>
                <li style="text-align: justify;"><span style="font-size:12px">Với quan điểm "Muốn xây nhà cao phải có móng vững chắc. Tập trung củng cố và xây dựng nền móng kiến thức vững chắc cho học sinh. Từ đó, phát huy sự sáng tạo của học sinh trong việc học toán".</span></li>
            </ul>
            </div>
            <div class="ti-bot"><a target="_blank" href="https://hocmai.vn/giao-vien/147/thay-luu-huy-thuong.html">Thông tin chi tiết</a></div>
        </div>
    </div>

</div>

</div>
<jsp:include page="common/footer.jsp"></jsp:include>
<script src="/resources/js/course.js"></script>

</body>
</html>
