const ubicacion = require(`./controlador/ubicacion`);
const clima = require('./controlador/clima');

const getInfo = async(ciudad) => {
    try {
        const coords = await ubicacion.getCiudadLatLon(ciudad);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${ coords.name } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ ciudad }`;
    }
}


getInfo(argv.nombre)
    .then(console.log)
    .catch(console.log);