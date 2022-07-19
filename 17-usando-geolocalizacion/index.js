// - Crea un mapa en HTML
// - Pon chinchetas en tus 3 lugares favoritos del planeta tierra

function initMap() {
  const disneyWorld = {
    lat: 28.385,
    lng: -81.563,
  };

  const edinburgh = {
    lat: 55.953,
    lng: -3.188,
  };

  const munich = {
    lat: 48.137,
    lng: 11.576,
  };

  const map_id = document.getElementById("map");
  const map = new google.maps.Map(map_id, {
    zoom: 3,
    center: munich,
  });

  const disneyWorldMarker = new google.maps.Marker({
    position: disneyWorld,
    map,
    title: "DisneyWorld",
  });

  const edinburghMarker = new google.maps.Marker({
    position: edinburgh,
    map,
    title: "Edinburgh",
  });

  const munichMarker = new google.maps.Marker({
    position: munich,
    map,
    title: "Munich",
  });
}
