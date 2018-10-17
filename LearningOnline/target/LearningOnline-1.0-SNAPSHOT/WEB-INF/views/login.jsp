<%--
  Created by IntelliJ IDEA.
  User: HoangNV
  Date: 10/10/2018
  Time: 10:29 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login</title>
    <jsp:include page="header.jsp"></jsp:include>
    <link rel="stylesheet" type="text/css" href="/resources/css/style.css">
    <script>
        addEventListener("load", function () {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
</head>
<body>
<h1>Student Login Form</h1>
<div class="w3ls-login box">
    <img src="/resources/images/logo.png" alt="logo_img" />
    <!-- form starts here -->
    <form action="/login" method="post">
        <div class="agile-field-txt">
            <input type="text" name="username" placeholder="Your Username" required="" />
        </div>
        <div class="agile-field-txt">
            <input type="password" name="password" placeholder="password" required="" id="myInput" />
            <div class="agile_label">
                <%--<input id="check3" name="check3" type="checkbox" value="show password">--%>
                <%--<label class="check" for="check3">Remember me ?</label>--%>
                <a href="/forgetPassword" style="float: right">Forger password</a>
            </div>
        </div>
        <div class="w3ls-bot">
            <input type="submit" value="LOGIN">
        </div>
        <a href="/register">Register</a>
    </form>
</div>
</body>
</html>
