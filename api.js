function getGallery(run) {
  return fetch("https://api.artic.edu/api/v1/artworks?limit=10")
  .then (response => response.json()) 
  .then (body => body.data)
  .then (artworks => run(artworks))

  .catch(error => {
      console.error("Error fetching artworks:", error);
    });
}

