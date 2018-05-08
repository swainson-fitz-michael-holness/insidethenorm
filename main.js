function fx3dfollow() {
    var point = document.querySelector(".image");
    var canvas = document.querySelector(".container");
    canvas.onmousemove = function (e) {
        var delta = window.innerWidth / e.clientX;
        var omega = 0.002 / delta;
        var xAxis = omega - 0.001;

        var sigma = window.innerHeight / e.clientY;
        var beta = 0.002 / sigma;
        var yAxis = beta - 0.001;

        point.style.WebkitTransform = "matrix3d(1,0,0.00," + xAxis + ",0.00,1,0.00," + yAxis + ",0,0,1,0,0,0,0,1)";

//        document.querySelector(".title").style.WebkitTransform = "matrix3d(1,0,0.00," + xAxis + ",0.00,1,0.00," + yAxis + ",0,0,1,0,0,0,0,1)";
    }
}

fx3dfollow();



