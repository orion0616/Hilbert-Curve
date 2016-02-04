var size = 512;
var n = 4;
var canvas = document.getElementById('hilbert');
var ctx = canvas.getContext('2d');
function init(){
    var depth = n;
    var x = size/4*3;
    var y = size/4;
    var start = size/Math.pow(2,n+1);
    ctx.beginPath();
    ctx.moveTo(size-start,start);
    drawA(x,y,depth);
    ctx.stroke();
}
function drawA(x,y,depth){
    var length = size/Math.pow(2,n-depth+1);
    if(depth==1){
        ctx.lineTo(x,y);
        ctx.lineTo(x-length,y);
        ctx.lineTo(x-length,y+length);
        ctx.lineTo(x,y+length);
        return;
    }
    else{
        var l = length/4;
        drawD(x+l,y-l,depth-1);
        drawA(x-l*3,y-l,depth-1);
        drawA(x-l*3,y+l*3,depth-1);
        drawB(x-l,y+l*5,depth-1);
        return;
    }
}
function drawB(x,y,depth){
    var length = size/Math.pow(2,n-depth+1);
    if(depth==1){
        ctx.lineTo(x,y);
        ctx.lineTo(x,y-length);
        ctx.lineTo(x+length,y-length);
        ctx.lineTo(x+length,y);
        return;
    }
    else{
        var l = length/4;
        drawC(x-l,y+l,depth-1);
        drawB(x-l,y-l*3,depth-1);
        drawB(x+l*3,y-l*3,depth-1);
        drawA(x+l*5,y-l,depth-1);
        return;
    }
}
function drawC(x,y,depth){
    var length = size/Math.pow(2,n-depth+1);
    if(depth==1){
        ctx.lineTo(x,y);
        ctx.lineTo(x+length,y);
        ctx.lineTo(x+length,y-length);
        ctx.lineTo(x,y-length);
        return;
    }
    else{
        var l = length/4;
        drawB(x-l,y+l,depth-1);
        drawC(x+l*3,y+l,depth-1);
        drawC(x+l*3,y-l*3,depth-1);
        drawD(x+l,y-l*5,depth-1);
        return;
    }
}
function drawD(x,y,depth){
    var length = size/Math.pow(2,n-depth+1);
    if(depth==1){
        ctx.lineTo(x,y);
        ctx.lineTo(x,y+length);
        ctx.lineTo(x-length,y+length);
        ctx.lineTo(x-length,y);
        return;
    }
    else{
        var l = length/4;
        drawA(x+l,y-l,depth-1);
        drawD(x+l,y+l*3,depth-1);
        drawD(x-l*3,y+l*3,depth-1);
        drawC(x-l*5,y+l,depth-1);
        return;
    }
}