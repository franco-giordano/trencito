<script lang="ts">
	import Button, { Label, Icon } from '@smui/button';
	// import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
	import Autocomplete from '@smui-extra/autocomplete';
	import Paper, { Title, Subtitle, Content } from '@smui/paper';
	import Textfield from '@smui/textfield';

	let fechaHoy = new Date().toISOString().split('T')[0];
	let fechaTren = fechaHoy;
	let emailNotificar = '';
	let estaciones = ['Chivilcoy', 'Buenos Aires', 'Cnel. Suárez', 'Chacabuco'];
	let estacionSalida = '';
	let estacionLlegada = '';
</script>

<svelte:head>
	<title>Trencito | Eliminar pedido</title>
</svelte:head>

<div class="main-div-container">
	<Paper class="registrar-paper" elevation={2}>
		<Title>Eliminar pedido</Title>
		<Subtitle>
			Completá con los datos exactos que te registraste para dar de baja tus avisos.
		</Subtitle>
		<Content style="display: flex; flex-direction: column; gap: 1rem">
			<Textfield bind:value={emailNotificar} label="Email para avisar" type="email" required />
			<Textfield bind:value={fechaTren} label="Fecha Tren" type="date" min={fechaHoy} required />
			<Autocomplete
				textfield$style="width: 100%"
				menu$style="width: 100%"
				options={estaciones}
				bind:value={estacionSalida}
				label="Estacion Origen"
				required
			/>
			<Autocomplete
				textfield$style="width: 100%"
				menu$style="width: 100%"
				options={estaciones}
				bind:value={estacionLlegada}
				label="Estacion Destino"
				required
			/>
			<Button
				variant="unelevated"
				style="width: 100%"
				color="secondary"
				on:click={() => alert('lol')}
				disabled={emailNotificar === ''}
			>
				<Label>Enviar</Label>
			</Button>
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
