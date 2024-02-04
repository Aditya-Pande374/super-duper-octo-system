// Play-Pause, Pulse, Rotation, Audios
let startStop= document.querySelector('.play-pause-i');
let rotateStop= document.querySelector('.rotation-stop');
let pulseStop= document.querySelector('.pulse-stop');
let soundOn= document.querySelector('.groove');

const audioTrack=[
    {
        number: 1,
        name: 'Teri Deewani',
        artist: 'Kailash Kher',
        src: '/super-duper-oct-system/groove/Teri Deewani - Kailash Kher _ Official Video _ Kailasa _ Paresh _ Naresh.mp3',
        image: "https://c.saavncdn.com/789/Kailasa-Kailash-Kher-Hindi-2006-500x500.jpg"
    },
    {
        number: 2,
        name: 'Fear&Loathing',
        artist: 'Marina',
        src: '/super-duper-oct-system/groove/MARINA AND THE DIAMONDS - FEAR & LOATHING _Official Music Video_ _ ♡ ELECTRA HEART PART 1_11 ♡ ( 160kbps ).mp3',
        image: "https://static.wikia.nocookie.net/marina/images/8/88/Tumblr_lpp8fr8UWN1qf250ao1_500.png/revision/latest/scale-to-width-down/250?cb=20190302204313"

    },
    {
        number: 3,
        name: 'Dynasty',
        artist: 'MIIA',
        src: '/super-duper-oct-system/groove/MIIA - Dynasty (Lyrics).mp3',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB227fkdqB2S8hRB1QESVkkq1Xc0NCbJOvCZ5Bsce9daOJQelBmixy2zS0GHf_2iPPonI&usqp=CAU"
    },
    {
        number: 4,
        name: 'Boy Like You',
        artist: 'NightCore',
        src: '/super-duper-oct-system/groove/Nightcore - Boy Like You (Lyrics) ( 160kbps ).mp3',
        image: "https://e1.pxfuel.com/desktop-wallpaper/386/1022/desktop-wallpaper-nightcore-anime-nightcore.jpg"
    },
    {
        number: 5,
        name: 'La Da Dee',
        artist: 'NightCore',
        src: '/super-duper-oct-system/groove/Nightcore - La Da Dee ( 128kbps ).mp3',
        image: "https://c4.wallpaperflare.com/wallpaper/181/330/398/nightcore-angel-with-a-shotgun-wallpaper-preview.jpg"
    },
    {
        number: 6,
        name: 'La La La',
        artist: 'NightCore',
        src: '/super-duper-oct-system/groove/Nightcore - La La La ( 256kbps cbr ).mp3',
        image: "https://i.ytimg.com/vi/KdVmKAzZBQg/maxresdefault.jpg"
    },
    {
        number: 7,
        name: 'Ek Main Aur Ekk Tu',
        artist: 'Benny Dayal',
        src: '/super-duper-oct-system/groove/yt1s.com - Ek Main Aur Ekk Tu Title Track lyrical Video  Benny Dayal Anushka  Imran Khan  Kareena Kapoor.mp3',
        image: "https://c.saavncdn.com/686/Ek-Main-Aur-Ekk-Tu-2011-500x500.jpg"
    },
    {
        number: 8,
        name: 'Mirrors',
        artist: 'Justin Timberlake',
        src: '/super-duper-oct-system/groove/yt1s.com - Justin Timberlake  Mirrors.mp3',
        image: "https://m.media-amazon.com/images/M/MV5BZTJjNDA0YzUtZDVmZS00M2JmLThiNzAtYjAyMWEwZjM0MDdmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg"
    }
]

let isPlaying = false;

startStop.addEventListener('click',()=>{
    startStop.classList.toggle('fa-play');
    startStop.classList.toggle('fa-pause');

    rotateStop.classList.toggle('rotation-stop');
    rotateStop.classList.toggle('rotation');

    pulseStop.classList.toggle('pulse');
    pulseStop.classList.toggle('pulse-stop');

    isPlaying= !isPlaying;

    if(isPlaying){
        playNow();
    }else{
        pauseNow();
    }

});

// Track Number, Name, Artist
let trackNumber= document.querySelector('.track-number');
let trackPic= document.querySelector('.track-pic');
let trackName= document.querySelector('.track-name');
let trackArtist= document.querySelector('.track-artist');
let total= audioTrack.length;
let songIterator=0;

function playNow(){
    soundOn.src= audioTrack[songIterator].src;
    soundOn.play();

    songNumber= songIterator+1;
    trackNumber.textContent= "Playing Song "+songNumber+" of "+total;
    trackName.textContent= audioTrack[songIterator].name;
    trackArtist.textContent= audioTrack[songIterator].artist;
    trackPic.style.backgroundImage= 'url("' + audioTrack[songIterator].image + '")';
}

function pauseNow(){
    soundOn.pause();
}


function playPrev() {
    songIterator -= 1;
    if (songIterator < 0) {
        songIterator = total - 1;
    }
    updateAudioPlayerState();
}

function playNext() {
    songIterator += 1;
    if (songIterator == total) {
        songIterator = 0;
    }
    updateAudioPlayerState();
}

function updateAudioPlayerState() {
    // Set the next song and play or pause based on the current state
    let songNumber = songIterator + 1;
    trackNumber.textContent = "Playing Song " + songNumber + " of " + total;
    trackName.textContent = audioTrack[songIterator].name;
    trackArtist.textContent = audioTrack[songIterator].artist;
    trackPic.style.backgroundImage = 'url("' + audioTrack[songIterator].image + '")';

    if (isPlaying) {
        playNow();
    } else {
        pauseNow();
    }
}

let volumeControl= document.querySelector('.volume-change');
let volI= document.querySelector('.top-i');
let volD= document.querySelector('.top-l');

volumeControl.addEventListener("change", function(e){
    soundOn.volume= e.currentTarget.value/100;
})

volI.addEventListener("click", ()=>{
    if (currVolume < 100) {
        volumeControl.value+=1;
        soundOn.volume = volumeControl.value/ 100;
    }
})

volD.addEventListener("click", ()=>{
    if(soundOn.volume>0){
        volumeControl.value-=1;
        soundOn.volume= volumeControl.value/100;
    }
})