var Snow = {
    flakes:[],
    width: 708,
    h:500
}

Snow.random = function(min, max) {
    return Math.random() * (max - min) + min;
}

Snow.init = function(count, canvas) {

    var ctx = canvas.getContext('2d');

    Snow.width = canvas.width;
    Snow.height = canvas.height;
    Snow.ctx = ctx;

    for (var i=0; i<count; i++) {
        Snow.flakes.push({
            x: Math.random() * Snow.width,
            y: Math.random() * Snow.height,
            w: 1
        });
    }

    setInterval(Snow.draw, 50);
}

Snow.drawFlake = function(ctx, flake) {
    var img = new Image();
    img.src = "img/snow.png";
    ctx.drawImage(img,flake.x,flake.y,20,20);
}

Snow.draw = function() {
    var fs = Snow.flakes;

    Snow.ctx.clearRect(0, 0, Snow.width, Snow.height);

    for (var i=0; i<fs.length; i++) {

        if(fs[i].y-50 > Snow.width) {
            fs[i].y = 10;
            fs[i].x = Math.random() * Snow.width;
        }

        if (i%2==0) {
            fs[i].y += 1 ;
        } else {
            fs[i].y += 2;
        }

        if (i%3==0) {
            fs[i].x += Math.cos(fs[i].w++/30);
        } else if (i%2==0) {
            fs[i].x += Math.sin(fs[i].w++/20);
        } else {
            fs[i].x += Math.sin(fs[i].w++/15);
        }


        Snow.drawFlake(Snow.ctx, fs[i]);
    }
}