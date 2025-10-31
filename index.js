const imageEl = document.querySelector(".image img");
const textEl = document.querySelector(".text");
const listEl = document.querySelector(".gallery-list ul");


const API_URL = "https://api.artic.edu/api/v1/artworks?limit=10";


async function loadArtworks() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    
    const artworks = data.data;

    
    artworks.forEach((art) => {
      const li = document.createElement("li");
      li.textContent = art.title;
      li.dataset.imageId = art.image_id;
      li.dataset.artist = art.artist_title || "Unknown Artist";
      listEl.appendChild(li);
    });

    
    listEl.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        const imageId = e.target.dataset.imageId;
        const artist = e.target.dataset.artist;
        const title = e.target.textContent;

        if (imageId) {
          const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
          imageEl.src = imageUrl;
          textEl.textContent = `${title} by ${artist}`;
        } else {
          imageEl.src = "";
          textEl.textContent = "No image available.";
        }
      }
    });
  } catch (err) {
    console.error("Error loading artworks:", err);
  }
}

loadArtworks();












/*-----------------------------------------------------------------------------------------------------

 lage et nettsted som bruker et API for å hente data.

  - KRAV bruk minst 2 - 
Et API med flere ulike endepunkter som du bruker i prosjektet ditt.
Et API med et endepunkt som aksepterer parametere i URL-en.
API-data som må kjøres gjennom en løkke for å hente/generere innhold.

- Ikke bruk API-er som krever nøkkel 


Hva skal gjøres i denne oppg:
Lage en enkel side hvor kunst api fra chigago brukes.
Display et bilde av kunstverk sammen med litt informasjon.

display bildet på center av siden, med tekst under. Plasser en pen liste ved siden av bildet for å klikk navigere.


søk med: https://api.artic.edu/api/v1/artworks/search?q=cats

Hent alle bilder: https://api.artic.edu/api/v1/artworks

Hent ett bilde: https://api.artic.edu/api/v1/artworks/129884


Basic plan for no =>
Vise bildet (kunstverket) .
vise tekst (infor om bildet).
Vise liste med tekst navn om kunstverk som kan klikkes på.

Lag div for hvert element. (img trenger ikke egen div, men tekst er i samme hoved div. )
div venstre, div høyre, {div omringenede}.




*/