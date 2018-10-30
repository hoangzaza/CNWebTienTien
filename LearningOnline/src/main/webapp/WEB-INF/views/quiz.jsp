<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: HoangNV
  Date: 10/30/2018
  Time: 10:08 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>${exam.examName}</title>
    <jsp:include page="common/header.jsp"></jsp:include>
</head>
<body>
<p id="clock">Thời gian làm bài : <span id="minutes">${exam.examTime}</span> phút <span id="milisecons">0 </span> giây</p>
<c:forEach items="${exam.questionExams}" var="question">
    ${question.question.questionContent}<br/>
    <c:forEach items="${question.question.answers}" var="answer">
        <input type="checkbox" value=""/>${answer.answerContent}<br/>
    </c:forEach>
</c:forEach>

<jsp:include page="common/footer.jsp"></jsp:include>
<script src="/resources/js/quiz.js"></script>
</body>
</html>
