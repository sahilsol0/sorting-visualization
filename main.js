const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const speed = document.getElementById('speed')
const size = document.getElementById('size')
const bubbleBtn = document.getElementById('bubble')
const selectBtn = document.getElementById('selection')
const insertBtn = document.getElementById('insertion')
const mergeBtn = document.getElementById('merge')
const quickBtn = document.getElementById('quick')
const newArrBtn = document.getElementById('new-array')

let WIDTH = canvas.width = window.innerWidth
const HEIGHT = canvas.height = 530
const GAP = 5
let BARS =[]
let n = 50
const barHeight = {
  min: 5, 
  max: HEIGHT-GAP*2, 
}
let delay = 500

createBars(n)