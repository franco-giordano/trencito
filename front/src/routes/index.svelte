<script lang="ts">
	import Paper, { Title, Content } from '@smui/paper';
	import Button, { Label, Icon } from '@smui/button';
	import { prefetch } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => prefetch('nuevo'));
</script>

<svelte:head>
	<title>Trencito</title>
	<style>
		html, body {
			background-color: #FFD35E !important;
		}
	</style>
</svelte:head>

<div class="homepage-container">
	<div style="font-size: 5rem; margin-bottom: 1.25rem">🚂</div>

	<Button
		variant="raised"
		href="nuevo"
		style="padding: 1rem; margin-bottom: 1.5rem"
		color="secondary"
	>
		<Label>nuevo pedido</Label>
		<Icon class="material-icons">add</Icon>
	</Button>

	<Paper class="home-paper" elevation={2}>
		<Title>🤔 Qué es esto?</Title>
		<Content style="display: flex; flex-direction: column; gap: 1rem; white-space: pre-line;">
			Basicamente esta pagina web te avisa cuando hay pasajes disponibles de larga distancia en Trenes Argentinos.
			
			Basta con indicar que fecha de tren buscas, de que origen a que destino, y te llegara un mail cuando la aplicacion detecte tickets disponibles.
			
			Los tickets se buscan en la <a href="https://webventas.sofse.gob.ar/" style="display: contents" target="_blank" rel="noopener noreferrer">pagina oficial de SOFSE</a> automaticamente cada 8 horas.
			
			De momento son solo viajes de ida, para 1 adulto, y <b style="display: contents">las fechas NO son exactas (si queres un pasaje para el dia 14 y hay disponible para el dia 15, te llegará un aviso igual).</b> Esto eventualmente cambiará pero bueno, tiempo al tiempo (?)

			Puede haber cosas que anden mas o menos, rompan, o exploten. Sigue en desarrollo :)
			
			Creado por Franco Giordano. <a href="https://github.com/franco-giordano/trencito" style="display: contents" target="_blank" rel="noopener noreferrer">Código fuente disponible en GitHub, licencia AGPL.</a>
		</Content>
	</Paper>
</div>

<style>
	.homepage-container {
		height: 100%;
		display: flex;
		flex-direction: column;
		padding-top: 10vh;
		padding-bottom: 5rem;
		align-items: center;
	}

	* :global(.home-paper) {
		margin: 1rem 1rem;
	}
</style>
