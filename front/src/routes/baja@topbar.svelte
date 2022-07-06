<script lang="ts">
	import Paper, { Title, Subtitle, Content } from '@smui/paper';
	import type { Estacion } from '$lib/constantes';
	import FormularioPedido from '$lib/FormularioPedido.svelte';
	import { eliminarPedido } from '$lib/api';

	let mensaje = "";

	const onEnviar = async (emailNotificar: string, fechaTren: string, estacionSalida: Estacion, estacionLlegada: Estacion) => {
		mensaje = await eliminarPedido(emailNotificar, fechaTren, estacionSalida, estacionLlegada);
	}
</script>

<svelte:head>
	<title>Trencito | Eliminar pedido</title>
</svelte:head>

<div class="main-div-container">
	<Paper class="registrar-paper" elevation={2}>
		<Title>🗑️ Eliminar pedido</Title>
		<Subtitle>
			Completá con los datos exactos que te registraste para dar de baja esos avisos.
		</Subtitle>
		<Content style="display: flex; flex-direction: column; gap: 1rem">
			<FormularioPedido {onEnviar} />
			{mensaje}
		</Content>
	</Paper>

	<p style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin-top: 3rem">
		Si queres suscribirte a un nuevo aviso podes <a href="nuevo">hacerlo desde acá.</a>
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
	}
</style>
