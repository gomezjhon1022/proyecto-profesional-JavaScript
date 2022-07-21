
class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlugins();
    }
    private initPlugins() {

        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }

    unmuteMute() {
        this.media.muted ? this.media.muted = false : this.media.muted = true;
    }
}







// usando contructor
// const video = document.querySelector("video");
// const button = document.querySelector("button");
// class MediaPlayer {
//     constructor(config) {
//         this.config = config;
//         };
//         play() {
//         video.play();
//         };
//         pause() {
//         video.pause();
//     };
// };

// const toggle = () => {
//     video.paused === false ? player.pause() : player.play();
// };

// button.onclick = () => toggle();

export default MediaPlayer;




// closure

// function makeColorPrinter(color) {
//     let colorMessage = `The color is ${color}`;

//     return function() {
//         console.log (colorMessage);
//     };
// }

// let greenColorPrinter = makeColorPrinter('green');
// console.log(greenColorPrinter);

// variables privadas

// function makeCounter(n) {
//     let count = n;

//     return {
//         increase: function () {
//             count = count + 1;
//         },
//         decrease: function () {
//             count = count - 1;
//         },
//         getCount: function() {
//             return count;
//         }
//     };
// }
// let counter = makeCounter(7);

// console.log('The count is: ', counter.getCount());
// counter.increase();
// console.log('The count is: ', counter.getCount());
