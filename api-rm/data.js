const axios = require("axios");

let url_rm = "https://rickandmortyapi.com/api/character";

axios
  .get(url_rm)
  .then((response) => {
    if (response.status === 200) {
      const characters = response.data.results;

      characters.forEach((character) => {
        console.log("Nombre:", character.name);
        console.log("Estado:", character.status);
        console.log("Especie:", character.species);
        console.log("Genero:", character.gender);
        console.log("Origen:", character.origin.name);
        console.log("Ubicación:", character.location.name);
        console.log("Imagen:", character.image);
        console.log("__________________________");
      });
    } else {
      throw new Error("Error en la solicitud" + response.status);
    }
  })
  .catch((error) => {
    console.error("Error", error.message);
  });
