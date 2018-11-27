<style>
    *, *:before, *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box; }

    body {
        font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
        font-weight: 300; }

    .cube {
        position: relative;
        margin: 0 auto;
        height: 200px;
        width: 200px;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        -o-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: rotateX(136deg) rotateY(1122deg);
        -moz-transform: rotateX(136deg) rotateY(1122deg);
        -ms-transform: rotateX(136deg) rotateY(1122deg);
        -o-transform: rotateX(136deg) rotateY(1122deg);
        transform: rotateX(136deg) rotateY(1122deg); }

    .cube > div {
        overflow: hidden;
        position: absolute;
        opacity: 0.9;
        height: 200px;
        width: 200px;
        background-image: url("/resources/images/black.png");
        -webkit-touch-callout: none;
        -moz-touch-callout: none;
        -ms-touch-callout: none;
        -o-touch-callout: none;
        touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none; }

    .cube > div > div.cube-image {
        width: 200px;
        height: 200px;
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
        line-height: 200px;
        font-size: 80px;
        text-align: center;
        color: #1b9bd8;
        -webkit-transition: color 600ms;
        -moz-transition: color 600ms;
        -ms-transition: color 600ms;
        -o-transition: color 600ms;
        transition: color 600ms; }

    .cube > div:hover {
        cursor: pointer; }

    .cube > div:active {
        cursor: pointer; }

    .cube > div:first-child {
        -webkit-transform: rotateX(90deg) translateZ(100px);
        -moz-transform: rotateX(90deg) translateZ(100px);
        -ms-transform: rotateX(90deg) translateZ(100px);
        -o-transform: rotateX(90deg) translateZ(100px);
        transform: rotateX(90deg) translateZ(100px);
        outline: 1px solid transparent; }

    .cube > div:nth-child(2) {
        -webkit-transform: translateZ(100px);
        -moz-transform: translateZ(100px);
        -ms-transform: translateZ(100px);
        -o-transform: translateZ(100px);
        transform: translateZ(100px);
        outline: 1px solid transparent; }

    .cube > div:nth-child(3) {
        -webkit-transform: rotateY(90deg) translateZ(100px);
        -moz-transform: rotateY(90deg) translateZ(100px);
        -ms-transform: rotateY(90deg) translateZ(100px);
        -o-transform: rotateY(90deg) translateZ(100px);
        transform: rotateY(90deg) translateZ(100px);
        outline: 1px solid transparent; }

    .cube > div:nth-child(4) {
        -webkit-transform: rotateY(180deg) translateZ(100px);
        -moz-transform: rotateY(180deg) translateZ(100px);
        -ms-transform: rotateY(180deg) translateZ(100px);
        -o-transform: rotateY(180deg) translateZ(100px);
        transform: rotateY(180deg) translateZ(100px);
        outline: 1px solid transparent; }

    .cube > div:nth-child(5) {
        -webkit-transform: rotateY(-90deg) translateZ(100px);
        -moz-transform: rotateY(-90deg) translateZ(100px);
        -ms-transform: rotateY(-90deg) translateZ(100px);
        -o-transform: rotateY(-90deg) translateZ(100px);
        transform: rotateY(-90deg) translateZ(100px);
        outline: 1px solid transparent; }

    .cube > div:nth-child(6) {
        -webkit-transform: rotateX(-90deg) rotate(180deg) translateZ(100px);
        -moz-transform: rotateX(-90deg) rotate(180deg) translateZ(100px);
        -ms-transform: rotateX(-90deg) rotate(180deg) translateZ(100px);
        -o-transform: rotateX(-90deg) rotate(180deg) translateZ(100px);
        transform: rotateX(-90deg) rotate(180deg) translateZ(100px);
        outline: 1px solid transparent; }

    object {
        opacity: 0.5; }

    object:hover {
        opacity: 1; }

    @media (max-width: 640px) {
        .viewport {
            -webkit-transform: scale(0.6, 0.6);
            -moz-transform: scale(0.6, 0.6);
            -ms-transform: scale(0.6, 0.6);
            -o-transform: scale(0.6, 0.6);
            transform: scale(0.6, 0.6); } }
</style>
        <div class="cube">
            <div class="side">
                <div class="cube-image"></div>
            </div>
            <div class="side">
                <div class="cube-image"></div>
            </div>
            <div class="side">
                <div class="cube-image"></div>
            </div>
            <div class="side">
                <div class="cube-image"></div>
            </div>
            <div class="side">
                <div class="cube-image"></div>
            </div>
            <div class="side">
                <div class="cube-image active"></div>
            </div>
        </div>
<script src="/resources/js/cube.js"></script>