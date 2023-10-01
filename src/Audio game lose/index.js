const audioLose = document.createElement('audio');
audioLose.id = 'soundLose';
const source = document.createElement('source');
source.src = 'https://zvukitop.com/wp-content/uploads/2020/09/zvuk-neudachy.mp3';
source.type = 'audio/mp3';
audioLose.appendChild(source);

export default audioLose;
