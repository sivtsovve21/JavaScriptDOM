const player = document.querySelector('.player'),
      playBtn = document.querySelector('.play'),
      prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next'),
      audio = document.querySelector('.audio'),
      progCont = document.querySelector('.prog_cont'),
      prog = document.querySelector('.prog'),
      title = document.querySelector('.song'),
      cover = document.querySelector('.cover_img'),
      imgSrc = document.querySelector('.img_src'),
      singer = document.querySelector('.artist')

const songs = ['https://now.morsmusic.org/load/546108270/NBSPLV_-_The_Lost_Soul_Down_(musmore.com).mp3',
'https://cdn3.deliciouspears.com/load/1220509272/PLAYMEN_Hadley_-_Luv_You_(musmore.com).mp3',
'https://cdn4.deliciouspears.com/load/370858102/MrKitty_-_After_Dark_(musmore.com).mp3',
'https://cdn4.deliciouspears.com/load/943213489/NBSPLV_-_Downpour_(musmore.com).mp3',
'https://cdn2.deliciouspears.com/load/204073715/Kavinsky_-_Nightcall_(musmore.com).mp3',
'https://cdn2.deliciouspears.com/load/1034156323/Yuugen_-_BAY_CITY_(musmore.com).mp3',
'https://cdn1.deliciouspears.com/load/1360485921/Autxmn_Love_-_After_The_Rain_(musmore.com).mp3',
'https://cdn1.deliciouspears.com/load/1817605427/Daft_Punk_-_Around_The_World_(musmore.com).mp3',
'https://cdn1.deliciouspears.com/load/100982303/Feint_Coma_-_Snake_Eyes_(musmore.com).mp3',
'https://cdn1.deliciouspears.com/load/1918862544/Wilkinson_SHELLS_-_Feel_So_High_(musmore.com).mp3' ]

const names = ['The Lost Soul Down', 'Luv You', 'After Dark', 'Downpour', 'Nightcall', 'BAY CITY', 'After The Rain', 'Around the World', 'Snake Eyes', 'Feel So High']

const albums = ['https://avatars.yandex.net/get-music-content/8871869/2a26e991.a.25744491-1/m1000x1000',
'https://avatars.yandex.net/get-music-content/8123381/6c16f61b.a.25179920-1/m1000x1000',
'https://avatars.yandex.net/get-music-content/2390047/5e8a7b48.a.6624889-2/m1000x1000',
'https://avatars.yandex.net/get-music-content/6386858/f4b3a351.a.25609561-1/m1000x1000',
'https://avatars.yandex.net/get-music-content/175191/22cdfa43.a.1000856-2/m1000x1000',
'https://avatars.yandex.net/get-music-content/5496390/48888760.a.19923194-1/m1000x1000',
'https://avatars.yandex.net/get-music-content/6300975/6df666c0.a.23161621-1/m1000x1000',
'https://avatars.yandex.net/get-music-content/42108/ad67079a.a.35598-1/m1000x1000',
'https://avatars.yandex.net/get-music-content/103235/e7493359.a.6587455-1/m1000x1000',
'https://avatars.yandex.net/get-music-content/5708920/be613b60.a.21208515-1/m1000x1000']

const artists = [`NBSPLV`, `PLAYMEN & Hadley`, `Mr.Kitty`, `NBSPLV`, `Kavinsky`, `Yuugen`, `Autxmn Love`, `Daft Punk`, `Feint & Coma`, `Wilkinson & Shell`]         

let songIndex = 0

audio.volume = 0.3

function loadSong(song, name, album, artist) {
  title.innerHTML = name
  singer.innerHTML = artist
  audio.src = `${song}`
  cover.src = `${album}`        
}
loadSong(songs[songIndex], names[songIndex], albums[songIndex], artists[songIndex])

function playSong(){
  player.classList.add('play')
  imgSrc.src = 'https://cdn-icons-png.flaticon.com/512/1069/1069242.png?w=826&t=st=1686487659~exp=1686488259~hmac=c57b5daf76f36edfdae7289e2a72ea8b91b144cec27bcdeca73fb1644c5c8d5d'   
  audio.play()
  
}

function pauseSong(){
  player.classList.remove('play')
  imgSrc.src = 'https://cdn-icons-png.flaticon.com/512/109/109700.png?w=826&t=st=1686483300~exp=1686483900~hmac=55ad857cd417d52b6b4b39e183ac4fdb51facc5672b9c7252c806cdd51586d2b'
  audio.pause()
}

playBtn.addEventListener('click', ()=>{
  const isplaying = player.classList.contains('play')
  if (isplaying) {
    pauseSong()
  } else {
    playSong()
  }
})

function nextSong(){
  songIndex++  

  if(songIndex > songs.length-1){
    songIndex=0    
  }
  loadSong(songs[songIndex], names[songIndex], albums[songIndex], artists[songIndex])  
  playSong()
}
nextBtn.addEventListener('click', nextSong)

document.body.addEventListener('keydown', function(event) {
  if (event.key == 'ArrowRight') {
    nextSong();}
});

document.body.addEventListener('keydown', function(event) {
  if (event.key == 'ArrowUp') {
    audio.volume = audio.volume+0.05;}
});

document.body.addEventListener('keydown', function(event) {
  if (event.key == 'ArrowDown') {
    audio.volume = audio.volume-0.05;}
});

function prevSong(){
  songIndex--  

  if(songIndex < 0){
    songIndex = songs.length-1    
  }
  loadSong(songs[songIndex], names[songIndex], albums[songIndex], artists[songIndex])  
  playSong()
}
prevBtn.addEventListener('click', prevSong)
document.body.addEventListener('keydown', function(event) {
  if (event.key == 'ArrowLeft') {
    prevSong();}
});

document.body.addEventListener('keydown', function(event) {
  if (event.keyCode == '32') {
    const isplaying = player.classList.contains('play')
    if (isplaying) {
      pauseSong()
    } else {
      playSong()
    }
}});

audio.addEventListener('ended', nextSong)