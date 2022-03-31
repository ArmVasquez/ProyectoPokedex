const buscarPokemon = () => {

    
    const nombreBusqueda = document.getElementById("nombreBusqueda");
    let nombreEntrada = nombreBusqueda.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombreEntrada}`;
    fetch(url).then(respuesta => {
        if (respuesta.status != "200"){
            alert("Este pokemon no existe. Intenta con otro.");
        }else{
            return respuesta.json();
        }
    }).then(respuestaJSON =>{
        console.log(respuestaJSON);
        
        let imagenPokemon = respuestaJSON.sprites.front_default;
        let nombrePokemon = respuestaJSON.name;
        let tipoPokemon = respuestaJSON.types[0].type.name;
        let saludPokemon = respuestaJSON.stats[0].base_stat;
        let ataquePokemon = respuestaJSON.stats[1].base_stat;
        let defensaPokemon = respuestaJSON.stats[2].base_stat;
        let ataqueEspPokemon = respuestaJSON.stats[3].base_stat;
        let defensaEspPokemon = respuestaJSON.stats[4].base_stat;
        let velocidadPokemon = respuestaJSON.stats[5].base_stat;

        pokeImage(imagenPokemon);
        document.getElementById("nombre").innerText = " " + nombrePokemon.toUpperCase();
        document.getElementById("tipo").innerText = " " + tipoPokemon.toUpperCase();
        document.getElementById("salud").innerText = " " + saludPokemon;
        document.getElementById("ataque").innerText = " " + ataquePokemon;
        document.getElementById("defensa").innerText = " " + defensaPokemon;
        document.getElementById("ataqueEsp").innerText = " " + ataqueEspPokemon;
        //document.getElementById("defensaEsp").innerText = " " + defensaEspPokemon;
        document.getElementById("velocidad").innerText = " " + velocidadPokemon;

    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}