<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import Buttons from "$lib/Buttons.svelte";

	export let placeholder_Text = 'Enter item...';

	let inputValue: string = '';
	let itemList: string[] = [];

	const dispatch = createEventDispatcher();

	function addItem() {
		if (inputValue) {
			itemList = [...itemList, inputValue];
			inputValue = '';
		}
	}

	function removeItem(index: number) {
		itemList = itemList.filter((_, i) => i !== index);
	}

	
	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			addItem();
		}
	}
</script>

<div class="input-list">
	<input type="text" class="input" placeholder={placeholder_Text} bind:value={inputValue} on:keydown={handleKeyDown}/>
	<button class="button" on:click={addItem}> + </button>
</div>

<ul class="item-list">
	{#each itemList as item, i (itemList)}
		<li class="item">
			<p>{item}</p>
			<button class="remove-button" on:click={() => removeItem(i)}> x </button>
		</li>
	{/each}
</ul>

<style>
	.input-list {
		display: flex;
		align-items: center;
		margin-bottom: 1em;
	}

	.input {
		padding: 0.5em;
		font-size: 1em;
		border: solid 0.1em rgba(128, 128, 128, 0.39);
		flex: 1;
		height: 3em;
		margin-right: 1em;
	}

	.button {
		--size: 3em;
		width: var(--size);
		height: var(--size);
		padding: 0.5em;
		font-size: 1em;
		border: none;
		border-radius: 50%;
		/* background-color: #ddd; */
		background-color: var(--neutral-200);
		cursor: pointer;
	}

	.item-list {
		list-style-type: none;
		padding: 0;
	}

	.item {
		display: flex;
		align-items: center;
        justify-content: space-between;
		margin-bottom: 0.5em;

        background-color: var(--neutral-200);
	}

	.remove-button {
		padding: 0.3em;
		font-size: 0.8em;
		border: none;
		background-color: transparent;
		color: red;
		cursor: pointer;
	}
</style>
