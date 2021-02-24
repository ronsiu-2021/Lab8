// main.js

let form = document.getElementById('party-horn-form');
let slider = document.getElementById('volume-slider');
let numInput = document.getElementById('volume-number');
let volumeIcon = document.getElementById('volume-image');
let airHorn = document.getElementById('radio-air-horn');
let carHorn = document.getElementById('radio-car-horn');
let partyHorn = document.getElementById('radio-party-horn');
let hornSound = document.getElementById('horn-sound');
let soundImage = document.getElementById('sound-image');
let honkBtn = document.getElementById('honk-btn');

slider.addEventListener('input', () => {
  numInput.value = slider.value;
  hornSound.volume = slider.value / 100;
  updateVolumeIcon();

  if(numInput.value == 0) { 
    honkBtn.setAttribute('disabled', true); 
  } else { 
    honkBtn.removeAttribute('disabled'); 
  }
});

numInput.addEventListener('input', () => {
  slider.value = numInput.value;
  hornSound.volume = slider.value / 100;
  updateVolumeIcon();

  if(numInput.value == 0) { 
    honkBtn.setAttribute('disabled', true); 
  } else { 
    honkBtn.removeAttribute('disabled'); 
  }
});

function updateVolumeIcon() {
  if (slider.value > 66) {
    volumeIcon.src = "./assets/media/icons/volume-level-3.svg";
  } else if (slider.value > 33 && slider.value < 67) {
    volumeIcon.src = "./assets/media/icons/volume-level-2.svg";
  } else if (slider.value > 0 && slider.value < 34) {
    volumeIcon.src = "./assets/media/icons/volume-level-1.svg";
  } else {
    volumeIcon.src = "./assets/media/icons/volume-level-0.svg";
  }
}

airHorn.addEventListener('change', () => {
  soundImage.src = "./assets/media/images/air-horn.svg";
  hornSound.src = "./assets/media/audio/air-horn.mp3";
});

carHorn.addEventListener('change', () => {
  soundImage.src = "./assets/media/images/car.svg";
  hornSound.src = "./assets/media/audio/car-horn.mp3";
});

partyHorn.addEventListener('change', () => {
  soundImage.src = "./assets/media/images/party-horn.svg";
  hornSound.src = "./assets/media/audio/party-horn.mp3";
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  hornSound.play();
});