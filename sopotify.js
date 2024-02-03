let audioFiles = [];
let currentIndex = 0;

const fileInput = document.getElementById('fileInput');
const playlist = document.getElementById('playlist');
const audioPlayer = document.getElementById('audioPlayer');
const volumeSlider = document.getElementById('volumeSlider');

audioPlayer.volume = 1; // デフォルトは最大音量

fileInput.addEventListener('change', function() {
const files = fileInput.files;

for (let i = 0; i < files.length; i++) {
	const file = files[i];
	if (file.type.startsWith('audio/')) {
		audioFiles.push(URL.createObjectURL(file));
		const listItem = document.createElement('li');
		listItem.textContent = file.name;
		playlist.appendChild(listItem);
		}
	}
});
let count = 0
function playNext() {
if (audioFiles.length === 0) return;
	let number_of_time = parseInt(document.getElementById('gets_number').value);
  
	audioPlayer.src = audioFiles[currentIndex];
	audioPlayer.play();

	audioPlayer.onended = function() {
	currentIndex = (currentIndex + 1) % audioFiles.length;
  count+=1
  console.log(number_of_time)
  if (count!=number_of_time){
  playNext();
  }
	};
}

// スライダーの値が変更されたときに音量を更新
volumeSlider.addEventListener("input", () => {
	audioPlayer.volume = volumeSlider.value;
	});
