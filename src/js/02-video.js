import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
player.setCurrentTime(localStorage.getItem(STORAGE_KEY));

const currentTime = time => {
  localStorage.setItem(STORAGE_KEY, `${time.seconds}`);
};

player.on('timeupdate', throttle(currentTime, 1000));
