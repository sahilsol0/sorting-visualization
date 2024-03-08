async function bubbleSort(bars) {
  for (let i = 0; i < bars.length-1; i++) {
    for (let j = 0; j < bars.length-i-1; j++) {
      bars[j+1].color = '#F5C4BA'
      bars[j].color = '#F5C4BA'
      if (bars[j].height > bars[j+1].height) {
        await sleep(delay)
        swap(bars[j],bars[j+1])
        
      }
      bars[j+1].color = '#DDF2FD'
      bars[j].color = '#DDF2FD'
    }
    bars[bars.length-i-1].color = '#9BBEC8'
    bars[0].color = '#9BBEC8'
    draw(bars)
  }
}

async function selectSort(bars) {
  let min;
  for (let i = 0; i < bars.length; i++) {
    min = i
    bars[i].color = '#F5C4BA'
    for (let j = i+1; j < bars.length; j++) {
      await sleep(delay/2)
      bars[j].color = '#F5C4BA'
      draw(bars)
      if (bars[j].height < bars[min].height) {
        if (min!==i) {
          bars[min].color = '#DDF2FD'
        }
        min = j
        bars[j].color = '#64FFE2'
      } else {
        bars[j].color = '#DDF2FD'
      }
    }
    await sleep(delay/2)
    swap(bars[min], bars[i])
    bars[min].color = '#DDF2FD'
    bars[i].color = '#9BBEC8'
    draw(bars)
  }
}

async function insertSort(bars) {
  for (let i = 1; i < bars.length; i++) {
    let key = bars[i].height
    let j = i-1
    bars[i].color = '#F5C4BA'
    draw(bars)
    await sleep(delay)
    while (j>=0 && bars[j].height>key) {
      bars[j+1].color = '#9BBEC8'
      bars[j+1].height = bars[j].height
      draw(bars)
      j--
    }
    bars[j+1].height = key
    bars[0].color = '#9BBEC8'
    draw(bars)
  }
}