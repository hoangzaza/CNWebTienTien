<%--
  Created by IntelliJ IDEA.
  User: HoangNV
  Date: 10/23/2018
  Time: 9:38 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Website học trực tuyến số 1 Việt Nam</title>
    <jsp:include page="common/header.jsp"></jsp:include>
    <title>Giới thiệu về nhóm tác giả</title>
</head>
<body>
<div class="container-fluid">
    <jsp:include page="common/nav-bar.jsp"></jsp:include>
    <div style="height: 500px">
        <span style="color: #00ff00">Nhóm 13</span> Công nghệ web tiên tiến đại học Bách khoa Hà Nội
        <br/>
        Nhóm gồm có các thành viên <br/>
        Hoàng Ngọc Dũng<br/>
        Nguyễn Công Trương <br/>
        Nguyễn Văn Hoàng <br/>
        Vũ Đức Việt
    </div>
    <jsp:include page="cube.jsp"></jsp:include>


    <jsp:include page="common/footer.jsp"></jsp:include>
</div>


</body>
</html>
