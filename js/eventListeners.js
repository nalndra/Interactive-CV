window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'w':
      if (player.velocity.y === 0) player.velocity.y = -20
    break
    case ' ':
      if (player.velocity.y === 0) player.velocity.y = -20
   
      break
    case 'a':
    //kanan
    keys.a.pressed = true
    break
    case 'd':
    //kiri
    keys.d.pressed = true
    break
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
   
    case 'a':
    //kiri
    keys.a.pressed = false
    break
    case 'd':
    //kanan yaiyalah
    keys.d.pressed = false
    break
  }
})