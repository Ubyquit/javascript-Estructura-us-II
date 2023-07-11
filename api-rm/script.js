let url_rm = "https://rickandmortyapi.com/api/character";

fetch(url_rm)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error al realizas la solicitud:" + response.status);
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Error", error.message);
  });