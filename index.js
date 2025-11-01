
 const imageEl = document.querySelector(".image img");
 const textEl = document.querySelector(".text");
 const listEl = document.querySelector(".gallery-list ul");


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
})();