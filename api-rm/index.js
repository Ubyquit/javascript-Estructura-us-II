const axios = require('axios');

let url_rm = "https://rickandmortyapi.com/api/character";

axios.get(url_rm)
.then(response => {
    if(response.status === 200){
        const data = response.data;
        console.log(data);
    }else{
        throw new Error("Error en la solicitud" + response.status);
    }
})
.catch(error => {
    console.error("Error", error.message);
})