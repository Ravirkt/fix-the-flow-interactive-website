





document.getElementById('addSectionButton').addEventListener('click', function() {
    var newSection = document.createElement('section');

    newSection.classList.add('new-section');

    newSection.innerHTML = `
    <section class="playlist-card-section">
        <figure class="card-image-figure">
            <img class="playlist-image-cover" src="../assets/coverart-4.png" alt="Cover Image">
        </figure>
        <h3 class="title-playlist-card-section">Storytime adventures of the friendly turtle</h3>
        <a href="" class="playlist-play-button" aria-label="Play audio the Pig and cow enjoy their day">
            <span class="play-icon" aria-hidden="true">▶</span>
            <span class="play-time" aria-hidden="true">93 min. 23 sec</span>
        </a>
    </section>
`;

    document.getElementById('sectionsContainer').appendChild(newSection);
  });





//   Popover sectie voor uitleg kleuren 

//   <section popover class="color-definition" id="popover-colors">
//       <h3>What do the colors mean?</h3>
//       <ul>
//           <li class="popover-item-1">Passion and energy / a powerful, energetic voice (Female)</li>
//           <li class="popover-item-2">Creativity and friendliness / a cheerful, inviting voice (Male)</li>
//           <li class="popover-item-3">Harmony and stability / a calm, balanced voice (Female)</li>
//           <li class="popover-item-4">Reliability and serenity / a thoughtful, reliable voice (Male)</li>
//       </ul>
//   </section>


// voor de scrollknop
document.getElementById("scroll-button").addEventListener("click", function() { // click event . dit luistert of er op de knop wordt gedrukt
    const playlistSection = document.querySelector(".playlist-section"); // playlist-section is de parent-container waar alle playlist-cards in zitten.
    playlistSection.scrollTo({ // geeft aan dat je wilt gaan scrollen
      left: playlistSection.scrollWidth, // geeft aan dat je de gehele breedte naar rechts wilt scrollen
      behavior: 'smooth' //zorgt voor een vloeiende beweging
    });
  });

