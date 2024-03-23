// Récupérer les div qui contiennent les boutons du drumpad dans une constante keys avec querySelectorAll
const keys = document.querySelectorAll(".key");

// Récupérer les balises audio qui contiennent les sons dans une constante audios avec querySelectorAll
const audios = document.querySelectorAll("audio");

// Récupère l'événement quand une touche est cliquée
window.addEventListener("keydown", function (e) {
  // Si la touche est maintenue, ignorer les appuis supplémentaires
  // if (e.repeat) return;

  audios.forEach((audio) => {
    if (audio.getAttribute("data-key") == e.keyCode) {
      audio.currentTime = 0; // Remet le son au début
      audio.play(); // Joue le son
    }
  });

  keys.forEach((key) => {
    if (key.getAttribute("data-key") == e.keyCode) {
      key.classList.add("playing"); // Ajoute la classe playing

      // Trouve le bon event à mettre dans le addEventListener ci-dessous
      key.addEventListener("transitionend", function () {
        key.classList.remove("playing"); // Supprime la classe playing
      });
    }
  });
});

// Ici on déclare une fonction asynchrone pour lancer un beat
async function beatBox() {
  function simulateKey(key) {
    var boxkey = new Event("keydown", {
      bubbles: true,
    });
    boxkey.keyCode = key;
    window.dispatchEvent(boxkey);
  }
  function playBeat(time, key) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(simulateKey(key));
      }, time);
    });
  }
  // Joue une séquence de touches/sons
  await playBeat(50, 90);
  await playBeat(400, 83);
  await playBeat(50, 67);
  await playBeat(420, 83);
  await playBeat(420, 83);
  await playBeat(420, 83);

  await playBeat(50, 90);
  await playBeat(420, 83);
  await playBeat(50, 67);
  await playBeat(420, 83);
  await playBeat(420, 83);
  await playBeat(420, 83);

  await playBeat(50, 90);
  await playBeat(420, 83);
  await playBeat(50, 67);
  await playBeat(420, 83);
  await playBeat(420, 83);
  await playBeat(420, 83);

  await playBeat(50, 90);
  await playBeat(420, 83);
  await playBeat(50, 67);
  await playBeat(420, 83);
  await playBeat(420, 83);
  await playBeat(420, 83);

  await playBeat(50, 90);
  await playBeat(420, 83);
  await playBeat(50, 67);
  await playBeat(420, 83);
  await playBeat(420, 83);
  await playBeat(420, 83); // Code pour la touche 'Z'
}
let body = document.querySelector("body");
let hh = document.querySelector("h1");

hh.addEventListener("click", function () {
  body.classList.toggle("body");
  body.classList.toggle("bodybody");
  hh.classList.toggle("h1h1");
});

// Récupérer les div qui contiennent les boutons du drumpad dans une constante keys avec querySelectorAll

// Récupère l'événement quand une touche est cliquée
window.addEventListener("click", function (e) {
  // Si la touche est maintenue, ignorer les appuis supplémentaires
  // if (e.repeat) return;

  audios.forEach((audio) => {
    if (audio.getAttribute("data-key") == e.keyCode) {
      audio.currentTime = 0; // Remet le son au début
      audio.play(); // Joue le son
    }
  });

  keys.forEach((key) => {
    if (key.getAttribute("data-key") == e.keyCode) {
      key.classList.add("playing"); // Ajoute la classe playing

      // Trouve le bon event à mettre dans le addEventListener ci-dessous
      key.addEventListener("transitionend", function () {
        key.classList.remove("playing"); // Supprime la classe playing
      });
    }
  });
});
