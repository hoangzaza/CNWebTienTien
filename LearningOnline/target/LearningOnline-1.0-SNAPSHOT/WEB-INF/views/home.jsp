<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
<%--
  Created by IntelliJ IDEA.
  User: HoangNV
  Date: 10/10/2018
  Time: 10:37 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<html>
<head>
    <title>Website học trực tuyến số 1 Việt Nam</title>
    <jsp:include page="common/header.jsp"></jsp:include>
    <link type="text/css" rel="stylesheet" href="/resources/css/home.css">
</head>
<body>
<security:authorize access="isAuthenticated()">
    authenticated as <security:authentication property="principal.username" />
</security:authorize>
<div class="container-fluid">
    <jsp:include page="common/nav-bar.jsp"></jsp:include>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-sm-8">
                <div class="slideshow-container">
                    <div class="mySlides fade1">
                        <img src="/resources/images/coluse1.png" style="width:100%">
                        <div class="text">"Học, học nữa, học mãi"</div>
                    </div>

                    <div class="mySlides fade1">
                        <img src="/resources/images/coluse2.png" style="width:100%">
                        <div class="text">"Giáo dục là vũ khí mạnh nhất mà người ta có thể sử dụng để thay đổi cả thế
                            giới."
                        </div>
                    </div>

                    <div class="mySlides fade1">
                        <img src="/resources/images/coluse3.png" style="width:100%">
                        <div class="text">"Ngủ dậy muộn thì phí mất cả ngày, ở tuổi thanh niên mà không học tập thì phí
                            mất cả cuộc đời ."
                        </div>
                    </div>

                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-4">
                <div class="card">
                    <div class="card-header bg-primary">
                        BẢNG TIN HỌC MÃI
                    </div>
                    <div class="card-body">
                        <ul>
                            <li>
                                <a><i class="fa fa-arrow-circle-right"></i>
                                    tin 1</a>
                            </li>
                            <li>
                                <a><i class="fa fa-arrow-circle-right"></i>
                                    tin 1</a>
                            </li>
                            <li>
                                <a><i class="fa fa-arrow-circle-right"></i>
                                    tin 1</a>
                            </li>
                            <li>
                                <a><i class="fa fa-arrow-circle-right"></i>
                                    tin 1</a>
                            </li>
                            <li>
                                <a><i class="fa fa-arrow-circle-right"></i>
                                    tin 1</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <h2 class="section-title text-center">
        Chào mừng bạn đã đến với hệ thống Học Mãi
    </h2>

    <div class="d-flex justify-content-around ">
        <div>
            <img class="mx-auto d-block" src="/resources/images/icon_2.png">
            <br>
            <span class="text-center" style="font-size: 32px; font-weight: 500">TÀI LIỆU</span><br>
            <span>Chúng tôi cam kết sẽ mang đến cho các bạn những tài liệu chất lượng</span>
        </div>
        <div>
            <img class="mx-auto d-block" src="/resources/images/icon_3.png">
            <br>
            <span class="text-center" style="font-size: 32px; font-weight: 500">CHẤT LƯỢNG</span><br>
            <span>Cam kết với những khóa học chât lượng tốt nhất</span>
        </div>
        <div >
            <img class="mx-auto d-block" src="/resources/images/icon_4.png">
            <br>
            <span class="text-center" style="font-size: 32px; font-weight: 500">GIẢI THƯỞNG</span><br>
            <span>Hệ thống đã được rất nhiều giải thưởng của bộ giáo dục đào tạo trong lĩnh vực đào tạo</span>

        </div>
    </div>

    <div class="card">
        <div class="card-header">
            Những khóa học hot nhất hiện nay
        </div>
        <div class="card-body">
            <div class="row">
                <div class="">

                </div>

            </div>
        </div>

    </div>



    <jsp:include page="common/footer.jsp"></jsp:include>
    <script src="/resources/js/home.js"></script>
</div>
</body>
</html>
