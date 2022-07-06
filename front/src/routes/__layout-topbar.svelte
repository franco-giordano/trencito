<script lang="ts">
	import type { TopAppBarComponentDev } from '@smui/top-app-bar';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import { Icon } from '@smui/common';
	import { Svg } from '@smui/common/elements';
	import { mdiGithub } from '@mdi/js';
	import Ripple from '@smui/ripple';
	import { goto } from '$app/navigation';

	let topAppBar: TopAppBarComponentDev;

	let lightTheme =
		typeof window === 'undefined' || window.matchMedia('(prefers-color-scheme: light)').matches;
	function switchTheme() {
		lightTheme = !lightTheme;
		let themeLink = document.head.querySelector<HTMLLinkElement>('#theme');
		if (!themeLink) {
			themeLink = document.createElement('link');
			themeLink.rel = 'stylesheet';
			themeLink.id = 'theme';
		}
		themeLink.href = `/smui${lightTheme ? '' : '-dark'}.css`;
		document.head
			.querySelector<HTMLLinkElement>('link[href$="/smui-dark.css"]')
			?.insertAdjacentElement('afterend', themeLink);
	}
</script>

<TopAppBar bind:this={topAppBar} variant="fixed">
	<Row>
		<Section>
			<Title>
				<div
					use:Ripple={{ surface: true }}
					on:click={() => goto('/')}
					style="align-items: center; display: flex; flex-direction: column; border-radius: 17px; padding: .25rem"
				>
					<div>🚂 trencito</div>
				</div>
			</Title
			>
		</Section>
		<Section align="end" toolbar>
			<IconButton
				on:click={switchTheme}
				class="material-icons"
				aria-label="Modo Oscuro"
				title="Modo Oscuro"
			>
				{lightTheme ? 'light_mode' : 'dark_mode'}
			</IconButton>
			<IconButton
				aria-label="GitHub"
				href="https://github.com/franco-giordano/trencito"
				title="Ver proyecto en GitHub"
			>
				<Icon component={Svg} viewBox="0 0 24 24">
					<path fill="currentColor" d={mdiGithub} />
				</Icon>
			</IconButton>
		</Section>
	</Row>
</TopAppBar>

<AutoAdjust {topAppBar} style="display: flex; justify-content: space-between;">
	<div class="container"><slot /></div>
</AutoAdjust>
