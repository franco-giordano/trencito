import { URL_API, type Estacion } from "./constantes";

export async function enviarPedido(emailNotificar: string, fechaTren: string, estacionSalida: Estacion, estacionLlegada: Estacion) {
    const resp = await fetch(
        URL_API,
        {
            headers: { 'content-type': 'application/json' },
            method: 'POST',
            // mode: 'cors',
            body: JSON.stringify({ email: emailNotificar, fechaTren, estacionSalida, estacionLlegada })
        }
    );
    if (resp.ok) {
        const msj = await resp.json();
        return msj.ok || msj.err;
    } else {
        return 'Algo salio mal :(';
    }
}
