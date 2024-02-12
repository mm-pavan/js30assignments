const elementsArray = [
  {
    id: 1,
    backgroundImg: "./images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg",
    title: "Dog",
    text: "A",
    audio: "./audios/mixkit-access-allowed-tone-2869.wav",
  },
  {
    id: 2,
    backgroundImg: "./images/alexander-london-mJaD10XeD7w-unsplash.jpg",
    title: "Cat",
    text: "B",
    audio: "./audios/mixkit-airplane-seatbelt-tone-1585.wav",
  },
  {
    id: 3,
    backgroundImg: "./images/maxime-agnelli-bhD6TGRjnWc-unsplash.jpg",
    title: "Goat",
    text: "C",
    audio: "./audios/mixkit-clear-announce-tones-2861.wav",
  },
  {
    id: 4,
    backgroundImg: "./images/francesco-ZxNKxnR32Ng-unsplash.jpg",
    title: "Lion",
    text: "D",
    audio: "./audios/mixkit-confirmation-tone-2867.wav",
  },

  {
    id: 5,
    backgroundImg: "./images/jamie-haughton-Z05GiksmqYU-unsplash.jpg",
    title: "Monkey",
    text: "E",
    audio: "./audios/mixkit-correct-answer-tone-2870.wav",
  },
  {
    id: 6,
    backgroundImg: "./images/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg",
    title: "Cow",
    text: "F",
    audio: "./audios/mixkit-success-software-tone-2865.wav",
  },
  {
    id: 7,
    backgroundImg: "./images/aarn-giri-3lGi0BXJ1W0-unsplash.jpg",
    title: "Bird",
    text: "G",
    audio: "./audios/mixkit-dial-phone-tone-2862.wav",
  },

  {
    id: 8,
    backgroundImg: "./images/wolfgang-hasselmann-uMfSHeycnYQ-unsplash.jpg",
    title: "Chicken",
    text: "H",
    audio: "./audios/mixkit-digital-quick-tone-2866.wav",
  },
  {
    id: 9,
    backgroundImg: "./images/silje-midtgard-0F9oVQ3x2ak-unsplash.jpg",
    title: "Horse",
    text: "I",
    audio: "./audios/mixkit-doorbell-tone-2864.wav",
  },
  {
    id: 10,
    backgroundImg: "./images/marc-olivier-jodoin-tauPAnOIGvE-unsplash.jpg",
    title: "Wolf",
    text: "J",
    audio: "./audios/mixkit-double-beep-tone-alert-2868.wav",
  },

  {
    id: 11,
    backgroundImg: "./images/ekamelev-sZIjgg4Peu0-unsplash.jpg",
    title: "Mosquito",
    text: "K",
    audio: "./audios/mixkit-elevator-tone-2863.wav",
  },

  {
    id: 12,
    backgroundImg: "./images/lucia-macedo-4gyYf1ItdHI-unsplash.jpg",
    title: "Pig",
    text: "L",
    audio: "./audios/mixkit-retro-confirmation-tone-2860.wav",
  },
];

const backgroundContainer = document.getElementById("backgroudContainer");

function eachbutton(eachObj) {
  const { backgroundImg, title, text, audio, id } = eachObj;

  const divContainer = document.createElement("div");
  divContainer.style.setProperty("background-image", `url("${backgroundImg}")`);
  divContainer.id = `btn${id}`;
  divContainer.classList.add("divContainer");
  backgroundContainer.appendChild(divContainer);

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("innerContainer");
  divContainer.appendChild(innerContainer);

  const textEle = document.createElement("kbd");
  textEle.textContent = text;
  textEle.classList.add("textEle");
  innerContainer.appendChild(textEle);

  //   const titleEle = document.createElement("span");
  //   titleEle.textContent = title;
  //   titleEle.classList.add("titleEle");
  //   innerContainer.appendChild(titleEle);

  const audioEle = document.createElement("audio");
  audioEle.id = id;
  audioEle.src = audio;
  document.body.appendChild(audioEle);
}

elementsArray.forEach((eachObj) => {
  eachbutton(eachObj);
});

// function removeTransition(e) {
//   if (e.propertyName != "transform") return;
//   this.classList.remove("playing");
// }

window.addEventListener("keypress", (event) => {
  const selectedBtn = elementsArray.find(
    (each) => event.key.toLocaleLowerCase() === each.text.toLocaleLowerCase()
  );
  const { id } = selectedBtn;
  const clickedBtn = document.getElementById(`btn${id}`);
  clickedBtn.classList.add("playing");

  // clickedBtn.addEventListener("transitionend", removeTransition);

  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
});

window.addEventListener("keyup", (event) => {
  const selectedBtn = elementsArray.find(
    (each) => event.key.toLocaleLowerCase() === each.text.toLocaleLowerCase()
  );
  const { id } = selectedBtn;
  const clickedBtn = document.getElementById(`btn${id}`);
  clickedBtn.classList.remove("playing");

  // clickedBtn.addEventListener("transitionend", removeTransition);

  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.pause();
});
