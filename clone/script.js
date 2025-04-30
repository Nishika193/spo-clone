console.log("Welcome to Spotify");
// initialize the variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let ProgressBar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    { songName:"Desi Banda ",filPath: "1.mp3",coverPath:"cover.jpg"},
    { songName:" Angaroon sa ",filPath: "2.mp3",coverPath:"songs/angaroon.jpg"},
    { songName:" Bhool Bhulaiya",filePath: "songs/3.mp3",coverPath:"songs/bhool.jpg"},
    { songName:"Gori hai kaaliyan ",filePath: "songs/4.mp3",coverPath:"songs/gori.jpg"},
    { songName:" isq mein",filePath: "songs/5.mp3",coverPath:"songs/isq.jpg"},
    { songName:" tum prem ho",filePath: "songs/6.mp3",coverPath:"songs/tum.jpg"},
    { songName:"yarra ",filePath: "songs/7.mp3",coverPath:"songs/yarra.jpg"},
    { songName:" iiljam",filePath: "songs/8.mp3",coverPath:"songs/iiljam.jpg"},
    { songName:" maand ",filePath: "songs/9.mp3",coverPath:"songs/maand.jpg"},
    { songName:" ye chamak ye dhamak",filPath: "songs/10.mp3",coverPath:"Ye-Chamak-Ye-Damak.jpg"}
]

// audioElement.play();

// handle play/pause click
    masterPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
                   audioElement.play();
            masterPlay.classList.remove('fa-circle-play');       
            masterPlay.classList.add('fa-circle-pause');  
            gif.style.opacity=1;     
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');       
            masterPlay.classList.add('fa-circle-play'); 
            gif.style.opacity=0;    
        }
    })
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
})
ProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=ProgressBar.value*audioElement.duration/100;
})