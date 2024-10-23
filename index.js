//nanti di update logic gravitynya

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

class Sprite {
  constructor({position}) {
    this.position = position
    this.image = new Image()
    this.image.src = './img/Level1-CV-.png'
    this.loaded = false
    
//ini load biar rapih aja

    this.image.onload = () => {
      this.loaded = true
    }
  }
  
  draw() {
    if (this.loaded) {
      c.drawImage(this.image, this.position.x, this.position.y)
    }
  }
}

const level1cvmap = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
})

const player = new Player()

const keys = {
  w: { pressed: false },
  a: { pressed: false },
  d: { pressed: false }
}

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)

  level1cvmap.draw()

  player.velocity.x = 0
  if (keys.d.pressed) player.velocity.x = 4
  else if (keys.a.pressed) player.velocity.x = -4

  player.draw()
  player.update()
}

animate()

