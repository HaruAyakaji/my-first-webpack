const circle = document.querySelector('#circle')
let p = 0
let c1 = '#ff8000'
let c2 = '#00ff7f'

setInterval(function() {
  if (!(p = (p + 1) % 100)) {
    [c1, c2] = [c2, c1]
  }
  circle.style.backgroundImage = `conic-gradient(${c1} ${p}%, ${c2} ${p}%)`
}, 30)
