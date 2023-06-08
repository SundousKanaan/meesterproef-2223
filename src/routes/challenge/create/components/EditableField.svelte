<script lang="ts">
	let editMode = false;
	let text: string;
	export let preview: string;
	export let tag: string;

	text = preview;

	let element: HTMLInputElement;

	$: {
		if (element) {
			element.focus();
		}
	}

	$: text = text;

	async function handleClick(e: Event) {
		e.preventDefault();
		editMode = true;
		console.log('start editing');

		if(text == preview) {
			text = '';
		}
	}

	async function stopEditing(e: Event) {
		e.preventDefault();
		console.log('stop editing');

		if(text == '') {
			text = preview;
		}
		editMode = false;
	}

	async function handleKeypress(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			stopEditing(e);
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={$$props.class} on:click={handleClick} on:focusout={stopEditing} on:keypress={handleKeypress}>
	{#if editMode}
		<svelte:element this={tag} contenteditable="true" bind:this={element} bind:innerText={text}>
			{text}
		</svelte:element>
	{:else}
		<svelte:element this={tag}>
			{text}
		</svelte:element>
	{/if}
</div>

<style>
	div {
		width: 40em;
		padding: 1em;
		border: black 2px dotted;
	}

	h1 {
		font-size: 3rem;
	}
</style>
