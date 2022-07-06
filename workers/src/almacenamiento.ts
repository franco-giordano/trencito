export type MapaEmails = { [email: string]: { [id: PedidoString]: boolean } };

// string del formato:
// `${fechaTren},${estacionSalida},${estacionLlegada}`
type PedidoString = string;

const KEY_EMAILS = '_emails';

export async function obtenerMapaEmails(kvNamespace: KVNamespace): Promise<MapaEmails> {
    return JSON.parse(await kvNamespace.get(KEY_EMAILS) || '{}');
}

async function guardarMapaEmails(kvNamespace: KVNamespace, emails: MapaEmails) {
    await kvNamespace.put(KEY_EMAILS, JSON.stringify(emails));
}

export function getPedidoString(fechaTren: string, estacionSalida: number, estacionLlegada: number): PedidoString {
    return `${fechaTren},${estacionSalida},${estacionLlegada}`;
}

export function getParamsDePedidoString(codigo: PedidoString): string[] {
    return codigo.split(/,/);
}

export async function guardarNuevoPedido(kvNamespace: KVNamespace, email: string, fechaTren: string, estacionSalida: number, estacionLlegada: number) {
    const emails = await obtenerMapaEmails(kvNamespace);

    if (emails[email] === undefined) {
        emails[email] = {};
    }

    emails[email][getPedidoString(fechaTren, estacionSalida, estacionLlegada)] = true;

    await guardarMapaEmails(kvNamespace, emails);
}

export async function eliminarPedido(kvNamespace: KVNamespace, email: string, fechaTren: string, estacionSalida: number, estacionLlegada: number) {
    const emails = await obtenerMapaEmails(kvNamespace);

    if (emails[email] === undefined) {
        emails[email] = {};
    }

    emails[email][getPedidoString(fechaTren, estacionSalida, estacionLlegada)] = false;

    await guardarMapaEmails(kvNamespace, emails);
}
