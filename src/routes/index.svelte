<script lang="ts">
	import Button, { Label, Icon } from '@smui/button';
	import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
	import IconButton from '@smui/icon-button';

	let clicked = 0;
	let open = false;

	function handleClick(event: CustomEvent | MouseEvent) {
		event = event as MouseEvent;
		if (event.button === 0) {
			clicked++;
		}
	}

	function reset() {
		clicked = 0;
	}
</script>

<Dialog
  bind:open
  fullscreen
  aria-labelledby="fullscreen-title"
  aria-describedby="fullscreen-content"
>
  <Header>
    <Title id="fullscreen-title">Terms and Conditions</Title>
    <IconButton action="close" class="material-icons">close</IconButton>
  </Header>
  <Content id="fullscreen-content">
	sad
  </Content>
  <Actions>
    <Button action="reject">
      <Label>Reject</Label>
    </Button>
    <Button action="accept" defaultAction>
      <Label>Accept</Label>
    </Button>
  </Actions>
</Dialog>
 
<Button variant="unelevated" color="secondary" on:click={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<Button variant="unelevated" color="secondary" on:mousedown={handleClick}>
	<Icon class="material-icons">thumb_up</Icon>
	<Label>Click Me</Label>
</Button>
<p class="mdc-typography--body1">
	{#if clicked}
		You've clicked the button {clicked} time{clicked === 1 ? '' : 's'}. You can
		<a on:click={reset}>reset it</a>.
	{:else}
		<span class="grayed">You haven't clicked the button.</span>
	{/if}
</p>

sad

displaydas
asd
ds
a
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis, animi consequatur hic reiciendis aperiam sequi culpa quos modi ducimus dolor recusandae numquam voluptates obcaecati omnis mollitia corporis adipisci.
<style>
	.grayed {
		opacity: 0.6;
	}
</style>
