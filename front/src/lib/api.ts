import { URL_API, type Estacion } from "./constantes";

export async function enviarPedido(emailNotificar: string, fechaPicker: string, estacionSalida: Estacion, estacionLlegada: Estacion) {
    return await wrappedFetch('POST', emailNotificar, fechaPicker, estacionSalida, estacionLlegada);
}

export async function eliminarPedido(emailNotificar: string, fechaPicker: string, estacionSalida: Estacion, estacionLlegada: Estacion) {
    return await wrappedFetch('PATCH', emailNotificar, fechaPicker, estacionSalida, estacionLlegada);
}

async function wrappedFetch(metodo: string, emailNotificar: string, fechaPicker: string, estacionSalida: Estacion, estacionLlegada: Estacion) {
    const fecha = fechaPickerToFechaSOFSE(fechaPicker);
    const resp = await fetch(
        URL_API,
        {
            headers: { 'content-type': 'application/json' },
            method: metodo,
            body: JSON.stringify({ email: emailNotificar, fechaTren: fecha, estacionSalida: estacionSalida.id_unico_estacion, estacionLlegada: estacionLlegada.id_unico_estacion })
        }
    );
    const msj = await resp.json();
    return msj.ok || msj.err;
}

function fechaPickerToFechaSOFSE(fechaPicker: string) {
    const [anio, mes, dia] = fechaPicker.split('-');
    return `${dia}/${mes}/${anio}`;
}
