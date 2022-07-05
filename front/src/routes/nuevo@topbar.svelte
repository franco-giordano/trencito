<script lang="ts">
	import Paper, { Title, Subtitle, Content } from '@smui/paper';
	import FormularioPedido from '$lib/FormularioPedido.svelte';
	import type { Estacion } from '$lib/constantes';
	import { enviarPedido } from '$lib/api';

	let mensaje = '';
	const onEnviar = async (emailNotificar: string, fechaTren: string, estacionSalida: Estacion, estacionLlegada: Estacion) => {
		mensaje = await enviarPedido(emailNotificar, fechaTren, estacionSalida, estacionLlegada);
	}
</script>

<svelte:head>
	<title>Trencito | Nuevo pedido</title>
</svelte:head>

<div class="main-div-container">
	<Paper class="registrar-paper" elevation={2}>
		<Title>✨ Nuevo pedido</Title>
		<Subtitle>
			Completá la informacion sobre el pasaje que querés y te aviso por mail cuando encuentre tickets.
		</Subtitle>
		<Content style="display: flex; flex-direction: column; gap: 1rem">
			<FormularioPedido {onEnviar} />
			{mensaje}
		</Content>
	</Paper>

	<p style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin-top: 3rem">
		Si queres desuscribirte de algun aviso podes <a href="baja">hacerlo desde acá.</a>
	</p>
</div>

<style>
	.main-div-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	* :global(.registrar-paper) {
		max-width: 600px;
		/* max-width: 600px; */
	}
</style>
