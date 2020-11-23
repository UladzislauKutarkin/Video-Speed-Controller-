const speed = document.querySelector('.speed'),
      bar = speed.querySelector('.speed-bar'),
      video = document.querySelector('.flex');

speed.addEventListener('mousemove', function (e) {
    const y = e.pageY - this.offsetTop,
          persent = y / this.offsetHeight,
          min = 0.4,
          max = 4,
          height = Math.round(persent * 100) + '%',
          playbackRate = persent * (max-min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;

})