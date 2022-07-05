import * as cheerio from 'cheerio';

export async function hayTrenesDisponibles(fechaTren: string, estacionSalida: string, estacionLlegada: string) {
    // TODO: agregar cache
    const trenesHtml = await fetch(
        'https://webventas.sofse.gob.ar/calendario.php',
        {
            body: generarParams(fechaTren, estacionSalida, estacionLlegada),
            method: 'POST'
        }
    ).then(r => r.text());

    // 'algoritmo' para detectar si hay algun asiento disponible en el tren dado
    const $ = cheerio.load(trenesHtml);
    const hayDisponibles = $('.dia_disponible').text().includes('Asientos disponibles');

    return hayDisponibles;
}

// respeta API de SOFSE
function generarParams(fechaTren: string, estacionSalida: string, estacionLlegada: string): URLSearchParams {
    return new URLSearchParams({
        'busqueda[tipo_viaje]': '1',
        'busqueda[origen]': estacionSalida,
        'busqueda[destino]': estacionLlegada,
        'busqueda[fecha_ida]': fechaTren,
        'busqueda[fecha_vuelta]': '',
        'busqueda[cantidad_pasajeros][adulto]': '1',
        'busqueda[cantidad_pasajeros][jubilado]': '0',
        'busqueda[cantidad_pasajeros][menor]': '0',
        'busqueda[cantidad_pasajeros][bebe]': '0',
    })
}
