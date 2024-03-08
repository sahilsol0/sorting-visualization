class Bar {
  constructor(x,width,height,color) {
    this.x = x
    this.width = width
    this.height = height
    this.color = color
    BARS.push(this)
  }
  drawBar() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x,HEIGHT-this.height-GAP,this.width,this.height)
  }
}


function randInRange(min,max) {
  return Math.floor(Math.random()*(max+1-min))+min
}

function swap(bar1,bar2) {
  let temp = bar1.height
  bar1.height = bar2.height
  bar2.height = temp
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
  draw(BARS)
}

function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}

function createBars(n) {
  for (let i = 0; i < n; i++) {
    let bar = new Bar(i*(GAP+(WIDTH-(n+1)*GAP)/n)+GAP,(WIDTH-(n+1)*GAP)/n,randInRange(barHeight.min,barHeight.max),'#DDF2FD')
    bar.drawBar()
  }
}

function draw(bars) {
  ctx.clearRect(0,0,WIDTH,HEIGHT)
  for (let i = 0; i < bars.length; i++) {
    bars[i].drawBar()
  }
}

function disableBtn(bool) {
  newArrBtn.disabled = bool
  size.disabled = bool
  bubbleBtn.disabled = bool
  selectBtn.disabled = bool
  insertBtn.disabled = bool
  mergeBtn.disabled = bool
  quickBtn.disabled = bool
}