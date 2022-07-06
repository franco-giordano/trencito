import { enviarMail } from "./mailer";

export function jsonify(respuesta: any, status: number = 200): Response | PromiseLike<Response> {
    return new Response(JSON.stringify(respuesta), {
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        status
    });
}

const corsHeaders = {
    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS,PATCH',
    'Access-Control-Max-Age': '86400',
    'Access-Control-Allow-Headers': 'content-type'
};

export function respuestaCors() {
    return new Response(null, {
        headers: corsHeaders,
    });
}


export async function enviarMailVistoso(email: string, fechaTren: string, estacionSalida: string, estacionLlegada: string, dkim_priv_key: string) {
    const HTML_BASE = `
<!DOCTYPE html>
<html>
<body style="background-color: #FFD35E;font-family: sans-serif;text-align: center; padding: 4rem">
    <div style="font-size: 5rem">
        🚂
    </div>
    <div style="font-size: 1.5rem; padding: 1rem">
        Ya hay asientos disponibles para tu tren!
    </div>
<div style="font-size: 1.2rem; padding: 1rem; white-space: pre-wrap; ">Podes sacar tu pasaje
de Trenes Argentinos <a href="https://webventas.sofse.gob.ar/index.php">acá</a></div>
<div style="font-size: 1rem; padding: 1rem; white-space: pre-wrap">
Informacion del viaje:
Fecha: ${fechaTren}
Estacion Salida: ${estacionSalida}
Estacion Llegada: ${estacionLlegada}
</div>

<div style="font-size: 1rem; padding: 1rem; white-space: pre-wrap; ">Para dar de baja estos avisos entra <a href="https://trencito.giordano.ar/baja">acá</a></div>
</body>
</html>
    `
    await enviarMail(email,
        `🚂 Pasajes disponibles para el ${fechaTren}`,
        HTML_BASE,
        'text/html',
        dkim_priv_key);
}

export function parametrosInvalidos(email: string, fechaTren: string, estacionSalida: string, estacionLlegada: string) {
    return email === undefined ||
        !email.includes('@') ||
        fechaTren === undefined ||
        estacionSalida === undefined ||
        estacionLlegada === undefined;
}
