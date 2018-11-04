<%--
  Created by IntelliJ IDEA.
  User: HoangNV
  Date: 10/29/2018
  Time: 11:03 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>${exam.examName}</title>
    <jsp:include page="common/header.jsp"></jsp:include>
    <link rel="stylesheet" type="text/css" href="/resources/css/exam.css" />
</head>
<body>

<jsp:include page="common/nav-bar.jsp"></jsp:include>
<div class="container" style="min-height: 400px">
${exam.examName}
${exam.examTime}
<input type="button" class="start-quiz btn btn-primary" onclick="javascript: window.open('/quiz/${exam.examId}/1', '_blank', '');" value="BẮT ĐẦU LÀM BÀI"/>
</div>
<jsp:include page="common/footer.jsp"></jsp:include>
</body>
</html>
