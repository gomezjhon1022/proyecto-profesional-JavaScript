import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video')
const button = document.querySelector('#play-pause');
const muteUnmute = document.querySelector('#mute-unmute');

const player = new MediaPlayer({el: video, plugins: [new AutoPlay()],
});

muteUnmute.onclick = () => player.unmuteMute();

button.onclick = () => {
    if (player.media.paused) {
        player.play();
    } else {
        player.pause();
    }
    }


// const player = new MediaPlayer();

