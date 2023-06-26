<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let placeholder_Text = 'Enter item...';
	export let placeholder_Description = 'Enter item description...';

	let inputValue: string = '';
	let Description_inputValue: string = '';
	export let listWithDescription: boolean = false;

	// let itemList: string[] = [];

	let itemList: (string | Item)[] = [];

	type Item = {
		inputValue: string;
		Description_inputValue: string | undefined;
	};

	const dispatch = createEventDispatcher();

	function addItem() {
		if (inputValue && Description_inputValue) {
			itemList = [...itemList, { inputValue, Description_inputValue }];
			inputValue = '';
			Description_inputValue = '';
		} else if (inputValue && listWithDescription == false) {
			itemList = [...itemList, inputValue];
			inputValue = '';
			Description_inputValue = '';
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

{#if !listWithDescription}
	<div class="input-list">
		<input
			type="text"
			class="input"
			placeholder={placeholder_Text}
			bind:value={inputValue}
			on:keydown={handleKeyDown}
		/>

		<button class="button" on:click={addItem}> + </button>
	</div>

	<ul class="item-list">
		{#each itemList as item, i}
			<li class="item">
				<p>{item}</p>
				<button class="remove-button" on:click={() => removeItem(i)}> X </button>
			</li>
		{/each}
	</ul>
{/if}

{#if listWithDescription}
	<div class="input-list">
		<span class="listWithDescription_container">
			<input
				type="text"
				class="input"
				placeholder={placeholder_Text}
				bind:value={inputValue}
				on:keydown={handleKeyDown}
			/>
			<input
				type="text"
				class="input"
				placeholder={placeholder_Description}
				bind:value={Description_inputValue}
				on:keydown={handleKeyDown}
			/>
		</span>
		<button class="button" on:click={addItem}> + </button>
	</div>

	<ul class="item-list">
		{#each itemList as item, i}
			<li class="item Description">
				<span>
					{#if typeof item !== 'string'}
						<p>🗸 {item.inputValue}</p>
						<p>{item.Description_inputValue}</p>
					{/if}
				</span>

				<button class="remove-button" on:click={() => removeItem(i)}> X </button>
			</li>
		{/each}
	</ul>
{/if}

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
		padding: 0.5em 1em;

		border-bottom: solid 0.1em var(--neutral-500);
	}

	.item:last-of-type{
		border-bottom: none;
	}

	.remove-button {
		height: 3em;
		width: 3em;
		font-size: 100%;
		border: none;
		background-color: transparent;
		color: red;
		cursor: pointer;
	}

	.listWithDescription_container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	.item.Description span {
		width: calc(100% - 4em);
	}
</style>
