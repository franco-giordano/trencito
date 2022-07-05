export async function enviarMail(emailDestino: string, titulo: string, contenido: string, tipo_contenido: string, dkim_private_key: string): Promise<boolean> {
    console.log("MANDANDO MAIL A ", emailDestino, titulo, contenido);
    const mail_response = await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            personalizations: [
                {
                    to: [{ email: emailDestino, name: emailDestino }],

                    dkim_domain: "giordano.ar",
                    dkim_selector: "workers",
                    dkim_private_key: dkim_private_key,
                },
            ],
            from: {
                email: 'trencito@giordano.ar',
                name: 'Trencito',
            },
            subject: titulo,
            content: [
                {
                    type: tipo_contenido,
                    value: contenido,
                },
            ],
        }),
    });
    console.log("-- RESULTADO ENVIO MAIL: ", await mail_response.text(), mail_response.status);
    return mail_response.ok;
}
