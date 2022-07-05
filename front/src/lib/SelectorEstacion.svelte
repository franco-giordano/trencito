<script lang="ts">
	import Autocomplete from '@smui-extra/autocomplete';
	import { ESTACIONES } from '$lib/constantes';
	import type { Estacion } from '$lib/constantes';

	export let estacionSeleccionada: Estacion | undefined = undefined;
	export let label = "";
</script>

<Autocomplete
	textfield$style="width: 100%"
	menu$style="width: 100%; max-height: 30vh"
	options={ESTACIONES}
	getOptionLabel={(e) => (e ? e.nombre : '')}
	bind:value={estacionSeleccionada}
	{label}
	required
/>
