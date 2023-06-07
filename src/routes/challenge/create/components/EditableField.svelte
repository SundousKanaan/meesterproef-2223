<script lang="ts">
	let editMode = false;
	let text: string;
	export let preview: string;
	text = preview;

	let element: HTMLInputElement;

	$: {
		if(element) {
			element.focus();
		}
	}

	async function handleClick(e: Event) {
		e.preventDefault();
		editMode = true;

		if(text == preview) {
			text = '';
		}
	}

	async function stopEditing(e: Event) {
		e.preventDefault();
		console.log("stop editing");
		if(text == '') {
			text = preview;
		}
		editMode = false;
	}

	async function handleKeypress(e: KeyboardEvent) {
		if (e.key === "Enter") {
			e.preventDefault();
			stopEditing(e);
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={handleClick} on:focusout={stopEditing} on:keypress={handleKeypress}>
{#if editMode}
	<input type="text" bind:value={text} bind:this={element} > 
{:else}
	<slot value={text} />
{/if}
</div>

<style>
	div {
		width: 40em;
		padding: 1em;
		border: black 2px dotted;
	}
</style>