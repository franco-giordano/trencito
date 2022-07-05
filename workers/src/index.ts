/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Env } from './tipos';
import { getParamsDePedidoString, guardarNuevoPedido, obtenerMapaEmails } from './almacenamiento';
import { enviarMailVistoso, jsonify } from './utils';
import { hayTrenesDisponibles } from './trenes';

export default {
    async fetch(
        request: Request,
        env: Env,
        ctx: ExecutionContext
    ): Promise<Response> {

        const contentType = request.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
            return jsonify({ err: 'Esta es una API JSON' });
        }

        const { email, fechaTren, estacionSalida, estacionLlegada } = await request.json();
        console.log({ email, fechaTren, estacionSalida, estacionLlegada });

        if (email === undefined ||
            fechaTren === undefined ||
            estacionSalida === undefined ||
            estacionLlegada === undefined) {
            return jsonify({ err: 'Parametros faltantes - debe definir email, fechaTren, estacionSalida y estacionLlegada' });
        }

        await guardarNuevoPedido(env.TRENCITO, email, fechaTren, estacionSalida, estacionLlegada);

        // // force mail xd
        // await notificarDisponibilidad(env, 1)

        return jsonify({ok: 'Pedido guardado correctamente.'});
    },
    async scheduled(
        controller: ScheduledController,
        env: Env,
        ctx: ExecutionContext
    ): Promise<void> {
        ctx.waitUntil(notificarDisponibilidad(env));
    },
};

async function notificarDisponibilidad(env: Env) {
    console.log("RUNNING SCHEDULE");

    const emails = await obtenerMapaEmails(env.TRENCITO);

    for (const [email, pedidos] of Object.entries(emails)) {
        for (const [codigo, habilitado] of Object.entries(pedidos)) {
            if (habilitado === true) {
                const [fechaTren, estacionSalida, estacionLlegada] = getParamsDePedidoString(codigo);

                const hayDisponibles = await hayTrenesDisponibles(fechaTren, estacionSalida, estacionLlegada);

                if (hayDisponibles) {
                    await enviarMailVistoso(email, fechaTren, estacionSalida, estacionLlegada, env.DKIM_PRIVATE_KEY);
                } else {
                    console.log("NO MANDO NADA A ", email)
                }
            }
        }
    }
    console.log("TERMINO SCHEDULE");
}
