
 const image = document.getElementById("bilde");
 const text = document.getElementById("text");
 const list = document.getElementById("gally");
 
 function li(text, onClick) {
 const li = document.createElement("li");
      li.textContent = text;
      list.appendChild(li);
      li.addEventListener("click", onClick )
 }

getGallery(artworks => {

  artworks.forEach((art) => {
     li(art.title, ()=>{
            const imageUrl = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
            image.src = imageUrl;
            text.textContent = `${art.title} by ${art.artist_title}`;
        })
    });
  });
  