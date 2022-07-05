import { enviarMail } from "./mailer";

export function jsonify(respuesta: any): Response | PromiseLike<Response> {
    return new Response(JSON.stringify(respuesta), {
        headers: {
            'content-type': 'application/json',
        },
    });
}

const HTML_BASE = `
<html>
<body style="background-color: #FFD35E;font-family: sans-serif;text-align: center">
    <div style="font-size: 5rem">
        🚂
    </div>
    <div style="font-size: 1.5rem; padding: 1rem">
        Ya hay asientos disponibles para tu tren!
    </div>
</body>
</html>
`

export async function enviarMailVistoso(email: string, fechaTren: string, estacionSalida: string, estacionLlegada: string, dkim_priv_key: string) {
    await enviarMail(email,
        `🚂 Pasajes disponibles para el ${fechaTren}`,
        HTML_BASE,
        'text/html',
        dkim_priv_key);
}
