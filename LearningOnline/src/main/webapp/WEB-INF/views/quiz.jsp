<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
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
    <link rel="stylesheet" type="text/css" href="/resources/css/exam.css"/>
</head>
<body>
<jsp:include page="common/nav-bar.jsp"></jsp:include>
<div class="container" style="min-height: 500px">
    <c:choose>
        <c:when test="${empty remaintime}">
            <p id="clock">Thời gian làm bài : <span id="minutes">${exam.examTime}</span> phút <span
                    id="milisecons">0 </span>
                giây</p>
        </c:when>
        <c:otherwise>
            <p id="clock">Thời gian làm bài : <span id="minutes">
                <c:set var="minutes" value="${remaintime/(60 * 1000)}"/>

                <fmt:parseNumber var="i" integerOnly="true"
                                 type="number" value="${minutes}"/>
                <c:out value="${i}"/> </span> Phút

                <span id="milisecons">

                <c:set var="miliseconds" value="${(remaintime % (60 * 1000))/1000}"/>

                <fmt:parseNumber var="a" integerOnly="true"
                                 type="number" value="${miliseconds}"/>
            <c:out value="${a}"/>
                 </span>
                giây</p>
        </c:otherwise>
    </c:choose>

    <form id="form1" action="/quiz/save" method="post">
        <input type="hidden" id="doexam" name="doexam" value="${doexam}"/>
        <input type="hidden" value="${currentpage}" name="currentpage"/>
        <input type="hidden" value="${exam.examId}" name="examid">
        <input type="hidden" value="${pagecount}" name="totalpage">
        <c:forEach items="${questions}" var="question" varStatus="loop">
            <span>Câu hỏi</span> ${(currentpage -1) * 5 + loop.index+1 } ${question.questionContent}<br/>
            <c:forEach items="${question.answers}" var="answer" varStatus="count">
                <input class="answer" type="checkbox"
                       value="${question.questionId}_${answer.answerId}"/> &#${count.index+65} ${answer.answerContent}
                <br/>
            </c:forEach>
        </c:forEach>
        <c:choose>
            <c:when test="${currentpage < pagecount}">
                <input type="submit" class="btn btn-primary" value="Trang tiếp"/>
            </c:when>
            <c:otherwise>
                <input type="submit" class="btn btn-primary" value="Nộp bài"/>
            </c:otherwise>
        </c:choose>

    </form>

    <ul class="pagination">
        <c:forEach var="i" begin="1" end="${pagecount}">
            <c:choose>
                <c:when test="${i == currentpage}">
                    <li class="page-item active">
                        <span class="page-link">
                            ${i}
                            <span class="sr-only">
                                (current)
                            </span>
                        </span>
                    </li>
                </c:when>
                <c:otherwise>
                    <li class="page-item"><a href="/quiz/${exam.examId}/${i}"><c:out value="${i}"/></a></li>
                </c:otherwise>
            </c:choose>
        </c:forEach>
    </ul>
</div>

<jsp:include page="common/footer.jsp"></jsp:include>
<script src="/resources/js/quiz.js"></script>
</body>
</html>
