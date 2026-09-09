const sonidos = [
  'soniditos/click_1.mp3',
  'soniditos/click_2.mp3',
  'soniditos/click_2.mp3',
  'soniditos/ding.mp3',
  'soniditos/error.mp3',
  'soniditos/level_up_1.mp3',
  'soniditos/level_up_2.mp3',
  'soniditos/marimba_1.mp3',
  'soniditos/marimba_2.mp3',
  'soniditos/marimba_3.mp3',
  'soniditos/ping.mp3',
  'soniditos/pop_1.mp3',
  'soniditos/pop_2.mp3',
  'soniditos/shoot.mp3',
  'soniditos/sound_1.mp3',
  'soniditos/sound_2.mp3',
  'soniditos/sound_3.mp3',
  'soniditos/sound_4.mp3',
  'soniditos/sound_6.mp3',
  'soniditos/sound_7.mp3',
  'soniditos/sound_8.mp3',
  'soniditos/sound_9.mp3',
  'soniditos/tap.mp3',
]


const botonPlay = document.querySelector("#boton");

function cambiarForma() {
  botonPlay.className = "rombo" 
}

botonPlay.addEventListener("click", cambiarForma);