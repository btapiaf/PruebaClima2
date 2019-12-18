const hbs = require('hbs');

// Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() +
            palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});


hbs.registerHelper('nombre',(ciudad) =>{
    const nombre = encodeURI(ciudad)
    const instance = axios.create({
        baseURL :`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${nombre}`,
        headers : {'X-RapidAPI-Key':'793768cf71mshc8af7108eafc540p1970d1jsn94d337e8ccfd' }
    });
    const resp = instance.get();


    const data = resp.data.Results[0];
    const name  = data.name;
    return {name}

})


