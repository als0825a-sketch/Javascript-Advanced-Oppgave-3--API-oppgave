
 const image = document.getElementById("bilde");
 const text = document.getElementById("text");
 const list = document.getElementById("gally");


 const API_URL = "https://api.artic.edu/api/v1/artworks?limit=10";

(async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  const artworks = data.data;

  artworks.forEach((art) => {
    const li = document.createElement("li");
    li.textContent = art.title;
    li.dataset.imageId = art.image_id;
    li.dataset.artist = art.artist_title || "Unknown Artist";
    list.appendChild(li);
  });

  list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const imageId = e.target.dataset.imageId;
      const artist = e.target.dataset.artist;
      const title = e.target.textContent;

      if (imageId) {
        const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
        image.src = imageUrl;
        text.textContent = `${title} by ${artist}`;
      } else {
        image.src = "";
        text.textContent = "No image available.";
      }
    }
  });
})();