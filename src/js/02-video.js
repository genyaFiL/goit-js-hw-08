import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const videoplayerCurrentTime = localStorage.getItem(STORAGE_KEY);

if (videoplayerCurrentTime) {
  player.setCurrentTime(videoplayerCurrentTime);
}

function currentTime(time) {
  localStorage.setItem(STORAGE_KEY, `${time.seconds}`);
}

player.on('timeupdate', throttle(currentTime, 1000));
