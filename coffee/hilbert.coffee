size = 512
n = 3
canvas = document.getElementById('hilbert')
ctx = canvas.getContext('2d')
drawHilbert = ->
  depth = n
  x = size/4*3
  y = size/4
  start = size/Math.pow(2,n+1)
  ctx.beginPath()
  ctx.moveTo(size-start,start)
  drawA(x,y,depth)
  ctx.stroke()
drawA = (x,y,depth) ->
  length = size/Math.pow(2,n-depth+1)
  if(depth==1)
    ctx.lineTo(x,y)
    ctx.lineTo(x-length,y)
    ctx.lineTo(x-length,y+length)
    ctx.lineTo(x,y+length)
  else
    l = length/4
    drawD(x+l,y-l,depth-1)
    drawA(x-3*l,y-l,depth-1)
    drawA(x-3*l,y+3*l,depth-1)
    drawB(x-l,y+5*l,depth-1)
drawB = (x,y,depth) ->
    length = size/Math.pow(2,n-depth+1)
    if(depth==1)
      ctx.lineTo(x,y)
      ctx.lineTo(x,y-length)
      ctx.lineTo(x+length,y-length)
      ctx.lineTo(x+length,y)
    else
      l = length/4
      drawC(x-l,y+l,depth-1)
      drawB(x-l ,y-3*l, depth-1)
      drawB(x+3*l,y-3*l,depth-1)
      drawA(x+5*l,y-l,depth-1)
drawC = (x,y,depth) ->
    length = size/Math.pow(2,n-depth+1)
    if(depth==1)
      ctx.lineTo(x,y)
      ctx.lineTo(x+length,y)
      ctx.lineTo(x+length,y-length)
      ctx.lineTo(x,y-length)
    else
      l = length/4
      drawB(x-l,y+l,depth-1)
      drawC(x+3*l,y+l,depth-1)
      drawC(x+3*l,y-3*l,depth-1)
      drawD(x+l,y-5*l,depth-1)
drawD = (x,y,depth) ->
    length = size/Math.pow(2,n-depth+1)
    if(depth==1)
      ctx.lineTo(x,y)
      ctx.lineTo(x,y+length)
      ctx.lineTo(x-length,y+length)
      ctx.lineTo(x-length,y)
    else
      l = length/4
      drawA(x+l,y-l,depth-1)
      drawD(x+l,y+3*l,depth-1)
      drawD(x-3*l,y+3*l,depth-1)
      drawC(x-5*l,y+l,depth-1)
