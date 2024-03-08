newArrBtn.addEventListener('click', e =>{
  ctx.clearRect(0,0,WIDTH,HEIGHT)
  BARS = []
  createBars(n)
})

bubbleBtn.addEventListener('click',async (e) => {
  disableBtn(true)
  await bubbleSort(BARS)
  disableBtn(false)
})

selectBtn.addEventListener('click',async(e) => {
  disableBtn(true)
  await selectSort(BARS)
  disableBtn(false)
})

insertBtn.addEventListener('click',async(e) => {
  disableBtn(true)
  await insertSort(BARS)
  disableBtn(false)
})

mergeBtn.addEventListener('click',async(e) =>{
  disableBtn(true)
  BARS.forEach(bar=>console.log(bar.height))
  await mergeSort(BARS,0,BARS.length-1)
  disableBtn(false)
  BARS.forEach(bar=>console.log('afterh- '+bar.height))
})

quickBtn.addEventListener('click',async(e) =>{
  disableBtn(true)
  BARS.forEach(bar=>console.log(bar.height))
  await quickSort(BARS)
  disableBtn(false)
  BARS.forEach(bar=>console.log(bar.height))
})

size.addEventListener('input',e =>{
  n = parseInt(e.target.value)
  BARS = []
  ctx.clearRect(0,0,WIDTH,HEIGHT)
  createBars(n)
  disableBtn(false)
})

speed.addEventListener('input', e => {
  delay = parseInt(1000-e.target.value)
})

window.addEventListener('resize', (e)=> {
  WIDTH = canvas.width = window.innerWidth
  ctx.clearRect(0,0,WIDTH,HEIGHT)
  createBars(n)
})