
 const image = document.getElementById("bilde");
 const text = document.getElementById("text");
 const list = document.getElementById("gally");
 

getGallery(artworks => {

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
           } 
           else {
            image.src = "";
            text.textContent = "No image available.";
          }
      }
    });
  
} )
