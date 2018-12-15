const API =
  "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Victoria+BC&mode=bicycling&language=fr-FR&key=AIzaSyAFPcf4tDTqFqQNEFxyIeet6BSfOQWdiSQ";

// const INPUT = document.getElementById("input");

function submit() {
  const INPUT = document.getElementById("cities").value;

  const URL = API;

  console.log(URL);

  fetch(URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      let cities = [];

      console.log(cities);
    });
}
