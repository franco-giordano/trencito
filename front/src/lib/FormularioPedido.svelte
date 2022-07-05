<script lang="ts">
	import Button, { Label, Icon } from '@smui/button';
	import Textfield from '@smui/textfield';
	import SelectorEstacion from '$lib/SelectorEstacion.svelte';
	import type { Estacion } from './constantes';

	let fechaHoy = new Date().toISOString().split('T')[0];
	let fechaTren = fechaHoy;
	let emailNotificar = '';
	let estacionSalida: Estacion;
	let estacionLlegada: Estacion;

	export let onEnviar: (
		emailNotificar: string,
		fechaTren: string,
		estacionSalida: Estacion,
		estacionLlegada: Estacion
	) => void;
</script>

<Textfield input$style="width=100%" bind:value={emailNotificar} label="Email para avisar" type="email" required />
<Textfield bind:value={fechaTren} label="Fecha Tren" type="date" min={fechaHoy} required />
<SelectorEstacion bind:estacionSeleccionada={estacionSalida} label="Estacion Origen" />
<SelectorEstacion bind:estacionSeleccionada={estacionLlegada} label="Estacion Destino" />
<Button
	variant="unelevated"
	style="width: 100%"
	color="secondary"
	on:click={() => onEnviar(emailNotificar, fechaTren, estacionSalida, estacionLlegada)}
	disabled={emailNotificar === '' ||
		fechaTren === '' ||
		estacionSalida === undefined ||
		estacionLlegada === undefined}
>
	<Label>Enviar</Label>
	<Icon class="material-icons">send</Icon>
</Button>
