<script lang="ts">
    import { slide } from 'svelte/transition';
	export let mensaje = '';
</script>

{#if mensaje}
    <div in:slide={{ delay: 0, duration: 600 }} style="background-color: lightgrey; border-radius: 1rem; padding: 1rem">
        {mensaje}
    </div>
{/if}
