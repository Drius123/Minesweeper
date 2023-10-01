const audio = document.createElement('audio');
audio.id = 'sound';
const source = document.createElement('source');
source.src = 'https://promosounds.ru/wp-content/uploads/2017/08/schelchok-kompjuternoj-myshi.mp3';
source.type = 'audio/mp3';
audio.appendChild(source);

export default audio;
