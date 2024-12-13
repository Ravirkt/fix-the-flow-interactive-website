// voor de scroljlknop
// click event . dit luistert of er op de knop wordt gedrukt
document.getElementById("scroll-button").addEventListener("click", function () {
  // playlist-section is de parent-container waar alle playlist-cards in zitten.
  const playlistSection = document.querySelector(".playlist-section");
  // geeft aan dat je wil gaan scrollen
  playlistSection.scrollTo({
    // geeft aan dat je de gehele breedte naar rechts wilt scrollen
    left: playlistSection.scrollWidth,
    //zorgt voor een smooth scrolbeweging
    behavior: "smooth",
  });
});

// ---------------------------------------------------

// openen van de form
document
  .getElementById("open-dropdown-button")
  .addEventListener("click", function () {
    const dropDownMenu = document.getElementById("form-popup");
    dropDownMenu.classList.toggle("open-and-close-form", "popover-section");
  });

// sluiten van de form
document
  .getElementById("close-dropdown-button")
  .addEventListener("click", function () {
    const dropDownMenu = document.getElementById("form-popup");
    dropDownMenu.classList.toggle("open-and-close-form");
  });

// ---------------------------------------------------

// new playlist card maken

// een click event voor de button waarmee de form geopend word
document
  .getElementById("add-card-button")
  .addEventListener("click", function () {
    // de form elementen in een variabele zetten
    const imageUpload = document.getElementById("image-upload");
    const titleInput = document.getElementById("title-input").value;

    // controlen of form leeg is
    // if (!imageUpload.files || imageUpload.files.length === 0 || !titleInput) {
    //   alert('teste etetetststtdtete');
    //   return;
    // }

    // nieuwe section maken en class toevoegen
    const newCard = document.createElement("section");
    newCard.classList.add("playlist-card-section");

    // figure element maken en een class toevoegen
    const figure = document.createElement("figure");
    figure.classList.add("card-image-figure");
    // img element maken en een class toevoegen
    const img = document.createElement("img");
    img.classList.add("playlist-image-cover");
    // input value van de form in de image alt zetten
    img.alt = `Cover art of ${titleInput}`;

    // bronnen voor filereader()
    // https://www.youtube.com/watch?v=lzK8vM_wdoY&ab_channel=WebDevTutorials
    // https://www.javascripture.com/FileReader
    // https://developer.mozilla.org/en-US/docs/Web/API/FileReader

    // de image die upgeload is in een variabele zetten
    const selectedFile = imageUpload.files[0];

    // Gebruik FileReader om te zorgen dat image pathname juist is voor het lezen
    const reader = new FileReader();

    // onload geeft aan dat de image is ingeladen
    reader.onload = function (event) {
      // dit geeft de pathnaam aan voor de image
      img.src = event.target.result;
    };
    console.log(selectedFile);
    reader.readAsDataURL(selectedFile);

    // Voeg de afbeelding toe aan de figure
    figure.appendChild(img);

    // Voeg de figure toe aan de nieuwe card
    newCard.appendChild(figure);

    // h3 element maken en een class toevoegen
    const h3 = document.createElement("h3");
    h3.classList.add("title-playlist-card-section");
    h3.textContent = titleInput;

    // a element maken en class toeveogen
    const playButton = document.createElement("a");
    playButton.href = "#";
    playButton.classList.add("playlist-play-button");
    playButton.setAttribute("role", "button");
    playButton.setAttribute("aria-label", `Start the playlist ${titleInput}`);

// span element maken en class toevoegen
    const datePlaylist = document.createElement("span");
    datePlaylist.classList.add("add-date-playlist");
    datePlaylist.textContent = "24/02/24";

    // span element maken en class toevoegen
    const playIcon = document.createElement("span");
    playIcon.classList.add("play-icon");
    playIcon.textContent = "▶";

    // span element maken en class toevoegen
    const playTime = document.createElement("span");
    playTime.classList.add("play-time");
    playTime.textContent = "34 min. 22 sec";

    // elementen als child in element playbutton verwerken
    playButton.appendChild(playIcon);
    playButton.appendChild(playTime);

    // elementen als child toevoegen aan de nieuw gemaakte card
    newCard.appendChild(h3);
    newCard.appendChild(playButton);
    newCard.appendChild(datePlaylist);

    // de nieuwe card toevoegen aan de container met alle andere cards
    document.querySelector(".playlist-section").appendChild(newCard);

    // de inputvelden leegmaken voor weer nieuwe gegevens
    document.getElementById("image-upload").value = "";
    document.getElementById("title-input").value = "";
  });
