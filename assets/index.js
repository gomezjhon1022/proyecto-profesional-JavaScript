import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video')
const button = document.querySelector('#play-pause');
const muteUnmute = document.querySelector('#mute-unmute');

const player = new MediaPlayer({el: video, plugins: [new AutoPlay(), new AutoPause()],
});

muteUnmute.onclick = () => player.unmuteMute();

button.onclick = () => {
    if (player.media.paused) {
        player.play();
    } else {
        player.pause();
    }
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {console.log(error.message);
    });
}


// const player = new MediaPlayer();

