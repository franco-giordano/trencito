/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import * as cheerio from 'cheerio';

export interface Env {
  TRENCITO: KVNamespace;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    let email = 'trencito.prueba1@giordano.ar';
    let fechaTren = '12/9/2022';
    let estacionSalida = 10;
    let estacionLlegada = 12;

    console.log("PRUEBA ES", await env.TRENCITO.get('prueba'));
    return new Response('xd', {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  },
  async scheduled(
    controller: ScheduledController,
    env: Env,
    ctx: ExecutionContext
  ): Promise<void> {
    ctx.waitUntil(notificarDisponibilidad(env, controller.scheduledTime));
  },
};

function generarParams(): URLSearchParams {
  return new URLSearchParams({
    'busqueda[tipo_viaje]': '1',
    'busqueda[origen]': '11',
    'busqueda[destino]': '194',
    'busqueda[fecha_ida]': '15/07/2022',
    'busqueda[fecha_vuelta]': '',
    'busqueda[cantidad_pasajeros][adulto]': '1',
    'busqueda[cantidad_pasajeros][jubilado]': '0',
    'busqueda[cantidad_pasajeros][menor]': '0',
    'busqueda[cantidad_pasajeros][bebe]': '0',
  })
}


async function notificarDisponibilidad(env: Env, time: number) {
  console.log("RUNNING SCHEDULE");

  const trenesHtml = await fetch('https://webventas.sofse.gob.ar/calendario.php',
    {
      body: generarParams(),
      method: 'POST'
    }).then(r => r.text());


  const $ = cheerio.load(trenesHtml);
  const hayDisponibles = $('.dia_disponible').text().includes('Asientos disponibles');
  console.log(hayDisponibles);
  console.log(await env.TRENCITO.put('prueba', hayDisponibles + ' - ' + time));
  console.log("TERMINO SCHED");
  
}

