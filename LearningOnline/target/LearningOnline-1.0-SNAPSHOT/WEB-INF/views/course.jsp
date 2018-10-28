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
</head>
<body>
<jsp:include page="common/nav-bar.jsp"></jsp:include>
<ul>
    <c:forEach items="${subjects}" var="item">
        <li>${item.getSubjectName()}</li>
    </c:forEach>
</ul>

<jsp:include page="common/footer.jsp"></jsp:include>
</body>
</html>
