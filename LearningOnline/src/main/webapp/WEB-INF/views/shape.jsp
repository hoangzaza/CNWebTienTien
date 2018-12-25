<%--
  Created by IntelliJ IDEA.
  User: HoangNV
  Date: 12/23/2018
  Time: 10:36 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>Test hình</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/resources/css/font-MeiOriENum.css">
    <link rel="stylesheet" type="text/css" href="/resources/css/shape3D-style.css">
    <script type="text/javascript" src="/resources/js/jquery/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="/resources/js/jquery/jquery.event.drag-2.3.0.js"></script>
    <script type="text/javascript" src="/resources/js/jquery/jquery.event.drag.live-2.2.js"></script>
    <script type="text/javascript" src="/resources/js/autoResize.js"></script>
    <script type="text/javascript" src="/resources/js/webpack/shape3D.js"></script>
    <script type="text/javascript" src="/resources/js/event/shape3D_event.js"></script>
    <script>
        $(document).ready(function () {
            displayShape("cylinder");
        });
    </script>
</head>
<body>
<div id="divBody" style="position: relative; left: 0px; top: 0px; overflow: hidden;">
    <svg width="800" height="600" viewBox="0 0 800 600" id="rootSVG"
         xmlns="http://www.w3.org/2000s/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink" style="left: 0px; background: #FFFFFF">
        <g transform="matrix(1,0,0,1,40,40)">
            <g id="svg_group" transform="matrix(1,0,0,1,369,369)" viewBox="0 0 738 738">
                <defs>
                    <rect id="rect" x="-369" y="-369" width="738" height="738" fill="#ffffff"></rect>
                    <clipPath id="clip">
                        <use xlink:href="#rect"/>
                    </clipPath>
                </defs>
                <use xlink:href="#rect"/>
                <g id="main_svg" clip-path="url(#clip)"></g>
            </g>
        </g>
    </svg>
</div>
</body>
</html>
