import { Router } from 'itty-router'
import { Env } from './tipos';
import { eliminarPedido, getParamsDePedidoString, guardarNuevoPedido, obtenerMapaEmails } from './almacenamiento';
import { enviarMailVistoso, jsonify, parametrosInvalidos, respuestaCors } from './utils';
import { hayTrenesDisponibles } from './trenes';

// Create a new router
const router = Router()

export default {
    fetch: (request: Request, env: Env, ctx: ExecutionContext): Promise<Response> =>
        router
            .handle(request, env, ctx)
            .then((response: any) => {
                (response as Response).headers.set('Access-Control-Allow-Origin', '*')
                return response
            })
            .catch(err => {
                // and do something with the errors here, like logging, error status, etc
                console.error("HUBO UN ERROR", err);
                return jsonify({ err: 'Ocurrio un error :(' }, 500);
            }),
    async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
        ctx.waitUntil(notificarDisponibilidad(env));
    },
}

router.post("/pedidos", async (request: Request, env, context) => {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
        // await notificarDisponibilidad(env);
        return jsonify({ err: 'Esta es una API JSON' });
    }

    const { email, fechaTren, estacionSalida, estacionLlegada } = await request.json();
    console.log({ email, fechaTren, estacionSalida, estacionLlegada });

    if (parametrosInvalidos(email, fechaTren, estacionSalida, estacionLlegada)) {
        return jsonify({ err: 'Parametros faltantes - debe definir email, fechaTren, estacionSalida y estacionLlegada' }, 400);
    }

    await guardarNuevoPedido(env.TRENCITO, email, fechaTren, estacionSalida, estacionLlegada);

    return jsonify({ ok: 'Pedido guardado correctamente.' });
})

// uso PATCH en vez de DELETE porque a miniflare no le gustan
// los DELETE con un body...
router.patch("/pedidos", async (request: Request, env, context) => {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
        // await notificarDisponibilidad(env);
        return jsonify({ err: 'Esta es una API JSON' });
    }

    const { email, fechaTren, estacionSalida, estacionLlegada } = await request.json();
    console.log({ email, fechaTren, estacionSalida, estacionLlegada });

    if (parametrosInvalidos(email, fechaTren, estacionSalida, estacionLlegada)) {
        return jsonify({ err: 'Parametros faltantes - debe definir email, fechaTren, estacionSalida y estacionLlegada' }, 400);
    }

    await eliminarPedido(env.TRENCITO, email, fechaTren, estacionSalida, estacionLlegada);

    return jsonify({ ok: 'Pedido eliminado correctamente.' });
})

router.options('*', respuestaCors);

router.all('*', () => jsonify({ err: 'No se encuentra' }, 404));

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
