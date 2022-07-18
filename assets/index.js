import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('video')
const button = document.querySelector('button');
const player = new MediaPlayer({el: video});


button.onclick = () => {
    if (player.media.paused) {
        player.play();
    } else {
        player.pause();
    }
    }


// const player = new MediaPlayer();