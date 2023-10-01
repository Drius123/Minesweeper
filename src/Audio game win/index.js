const audioWin = document.createElement('audio');
audioWin.id = 'soundWin';
const source = document.createElement('source');
source.src = 'https://zvukitop.com/wp-content/uploads/fanfary-pobedy-mar.mp3';
source.type = 'audio/mp3';
audioWin.appendChild(source);

export default audioWin;
