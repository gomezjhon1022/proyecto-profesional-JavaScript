
function MediaPlayer(config) {
    this.media = config.el
}

MediaPlayer.prototype.play = function() {
    this.media.play();
}
MediaPlayer.prototype.pause = function() {
    this.media.pause();
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