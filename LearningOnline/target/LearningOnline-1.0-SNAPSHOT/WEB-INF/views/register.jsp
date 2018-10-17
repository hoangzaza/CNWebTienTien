<%--
  Created by IntelliJ IDEA.
  User: HoangNV
  Date: 10/15/2018
  Time: 10:54 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Register</title>
    <jsp:include page="header.jsp"></jsp:include>
    <link rel="stylesheet" href="/resources/css/register.css" type="text/css" media="all" />
    <!-- Style-CSS -->
    <link rel="stylesheet" href="/resources/css/font-awesome.css">
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

<h1>
    <span>S</span>tylish
    <span>R</span>egister
    <span>F</span>orm</h1>
<!-- //header -->
<!-- content -->
<div class="main-content-agile">
    <div class="sub-main-w3">
        <form action="#" method="post">
            <p style="color:#fff;">
            <c:if test="${usernameExists==true}">
                Username exists
            </c:if>
            <c:if test="${emailExists==true}">
                Email exists
            </c:if>
            <c:if test="${emailSent==true}">
                Success please check mail
            </c:if>
            </p>
            <div class="form-style-agile">
                <label>Your Name</label>
                <div class="pom-agile">
                    <span class="fa fa-user-o" aria-hidden="true"></span>
                    <input placeholder="Your Name" name="username" type="text" required="">
                </div>
            </div>
            <div class="form-style-agile">
                <label>Email</label>
                <div class="pom-agile">
                    <span class="fa fa-envelope" aria-hidden="true"></span>
                    <input placeholder="Email" name="email" type="email" required="">
                </div>
            </div>
            <div class="form-style-agile">
                <label>Password</label>
                <div class="pom-agile">
                    <span class="fa fa-key" aria-hidden="true"></span>
                    <input placeholder="Password" name="password" type="password" id="password1" required="">
                </div>
            </div>
            <div class="form-style-agile">
                <label>Confirm Password</label>
                <div class="pom-agile">
                    <span class="fa fa-key" aria-hidden="true"></span>
                    <input placeholder="Confirm Password" name="Confirm Password" type="password" id="password2" required="">
                </div>
            </div>
            <div class="sub-agile">
                <input type="checkbox" id="brand1" value="">
                <label for="brand1">
                    <span></span>I Accept to the Terms & Conditions</label>
            </div>
            <input type="submit" value="Register">
        </form>
    </div>
    <div class="img-w3layouts">
        <img src="/resources/images/1.png" alt="">
    </div>
</div>
<script>
    window.onload = function () {
        document.getElementById("password1").onchange = validatePassword;
        document.getElementById("password2").onchange = validatePassword;
    }

    function validatePassword() {
        var pass2 = document.getElementById("password2").value;
        var pass1 = document.getElementById("password1").value;
        if (pass1 != pass2)
            document.getElementById("password2").setCustomValidity("Passwords Don't Match");
        else
            document.getElementById("password2").setCustomValidity('');
        //empty string means no validation error
    }
</script>
<!-- //password-script -->


<jsp:include page="footer.jsp"></jsp:include>

</body>
</html>
