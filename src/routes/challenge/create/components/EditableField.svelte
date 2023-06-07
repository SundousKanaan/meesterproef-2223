<script lang="ts">

	let editMode = false;
	let text: string;
	
	async function handleClick(e: Event) {
		e.preventDefault();
		editMode = !editMode;
	}
</script>

<div on:click={handleClick} >
{#if editMode}
	<input type="text" bind:value={text}> 
{:else}
	<slot  />
{/if}
</div>

<style>
	div {
		width: 40em;
		padding: 1em;
		border: black 2px dotted;
	}
</style>