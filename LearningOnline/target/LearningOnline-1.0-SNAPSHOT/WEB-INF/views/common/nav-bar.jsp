<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
        <img src="/resources/images/logo_b_92x88.png" width="58" height="56" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Trang chủ <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about">Giới thiệu</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Các khóa học
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <c:forEach items="${classes}" var="item">
                        <a class="dropdown-item" href="#">${item.getClassName()}</a>
                    </c:forEach>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Giáo viên</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Phòng thi</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Hỗ trợ</a>
            </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul class="navbar-nav">
            <li class="nav-item">
                <security:authorize access="isAuthenticated()">
                    <a class="nav-item">
                    <security:authentication property="principal.username" />
                    </a>
                </security:authorize>
                <security:authorize access="!isAuthenticated()">
                    <a class="nav-link" href="/login">Đăng nhập</a>
                </security:authorize>

            </li>
            <li class="nav-item">
                <a class="nav-link" href="/register">Đăng ký</a>
            </li>
        </ul>
    </div>
</nav>