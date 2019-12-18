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

const ubicacion = require(`./controlador/ubicacion`);
const clima = require('./controlador/clima');

hbs.registerHelper('ciudad',(city) =>{

    const getInfo = async(city) => {
        try {
            const coords = await ubicacion.getCiudadLatLon(ciudad);
            const temp = await clima.getClima(coords.lat, coords.lon);
            return `El clima de ${ coords.name } es de ${ temp }.`;
        } catch (e) {
            return `No se pudo determinar el clima de ${ ciudad }`;
        }
    }

})


