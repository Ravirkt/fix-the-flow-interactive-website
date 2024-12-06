// hier wordt de button geselecteerd aan de hand van de id die gekoppeld is aan de button,
// vervolgens heb ik een eventlistiners gebruikt dat kijkt of er op de knop wordt gedrukt
document.getElementById('knop').addEventListener('click', function() {
// hier heb ik een variabele makenewcard waarin ik ervoor zorg dat het met createlement een html section aanmaakt bij elke klik.
    let makeNewCard = document.createElement('section');
    // er wordt een class genaamd playlist-cards-section toegoevgt aan de section
    makeNewCard.classList.add('playlist-card-section');  // Voeg de juiste class toe

    // met innerhtml zorg ik ervoor dat de gemaakte section deze html bevat.
    makeNewCard.innerHTML = `
            <figure class="card-image-figure">
                <img class="playlist-image-cover" src="./assets/coverart-4.png" alt="Cover Image">
            </figure>
            <h3 class="title-playlist-card-section">Storytime adventures of the friendly turtle</h3>
            <a href="" class="playlist-play-button" aria-label="Play audio the Pig and cow enjoy their day">
                <span class="play-icon" aria-hidden="true">▶</span>
                <span class="play-time" aria-hidden="true">93 min. 23 sec</span>
            </a>
    `;
    
    // in mijn html code heb ik een section met de id sectioncontainer met appenchild zorg ik ervoor dat de gemaakte section makenewcard
    // als een child wordt toegevoegt aan die html section. dus 
    document.getElementById('sectionsContainer').appendChild(makeNewCard);

});


