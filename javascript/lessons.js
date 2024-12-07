// hier wordt de button geselecteerd aan de hand van de id die gekoppeld is aan de button,
// vervolgens heb ik een eventlistiners gebruikt dat kijkt of er op de knop wordt gedrukt
// document.getElementById('knop').addEventListener('click', function() {
  // hier heb ik een variabele makenewcard waarin ik ervoor zorg dat het met createlement een html section aanmaakt bij elke klik.
      // let makeNewCard = document.createElement('section');
      // er wordt een class genaamd playlist-cards-section toegoevgt aan de section
      // makeNewCard.classList.add('playlist-card-section');
  
      // met innerhtml zorg ik ervoor dat de gemaakte section deze html bevat.
      // makeNewCard.innerHTML = `
      //         <figure class="card-image-figure">
      //             <img class="playlist-image-cover" src="./assets/coverart-4.png" alt="Cover Image">
      //         </figure>
      //         <h3 class="title-playlist-card-section">Storytime adventures of the friendly turtle</h3>
      //         <a href="" class="playlist-play-button" aria-label="Play audio the Pig and cow enjoy their day">
      //             <span class="play-icon" aria-hidden="true">▶</span>
      //             <span class="play-time" aria-hidden="true">93 min. 23 sec</span>
      //         </a>
      // `;
      
      // in mijn html code heb ik een section met de id sectioncontainer met appenchild zorg ik ervoor dat de gemaakte section makenewcard
      // als een child wordt toegevoegt aan die html section.
      // document.getElementById('sectionsContainer').appendChild(makeNewCard);
  
  // });
  






// voor de scroljlknop
// click event . dit luistert of er op de knop wordt gedrukt
document.getElementById("scroll-button").addEventListener("click", function() { 
   // playlist-section is de parent-container waar alle playlist-cards in zitten.
    const playlistSection = document.querySelector(".playlist-section");
    // geeft aan dat je wilt gaan scrollen
    playlistSection.scrollTo({ 
    // geeft aan dat je de gehele breedte naar rechts wilt scrollen
      left: playlistSection.scrollWidth,
      //zorgt voor een vloeiende scrolbeweging
      behavior: 'smooth' 
    });
  });

  
  document.getElementById("open-dropdown-button").addEventListener("click", function() {
    const dropDownMenu = document.getElementById("form-popup");
    dropDownMenu.classList.remove("close-open-form"); 
});

document.getElementById("close-dropdown-button").addEventListener("click", function() {
    const dropDownMenu = document.getElementById("form-popup");
    dropDownMenu.classList.add("close-open-form");   
});
