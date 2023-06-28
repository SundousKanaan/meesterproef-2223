<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let inputType: string = 'url';
	const videoLinkPattern =
		/^(http(s)?:\/\/)?(www\.)?(youtube\.com|youtu\.be|vimeo\.com|dailymotion\.com|twitch\.tv|...)\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;

	export let placeholderText = 'Enter item...';
	export let placeholderDescription = 'Enter item description...';

	let inputValue: string = '';
	let descriptionInputValue: string = '';
	export let listWithDescription: boolean = false;

	let itemList: (string | Item)[] = [];

	type Item = {
		inputValue: string;
		descriptionInputValue: string | undefined;
	};

	const dispatch = createEventDispatcher();

	function addItem() {
		if (inputValue && descriptionInputValue) {
			itemList = [...itemList, { inputValue, descriptionInputValue: descriptionInputValue }];
			inputValue = '';
			descriptionInputValue = '';

			// console.log(inputType);
		} else if (inputValue && listWithDescription == false) {
			itemList = [...itemList, inputValue];
			inputValue = '';
			descriptionInputValue = '';
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
			class="input {inputType}"
			placeholder={placeholderText}
			bind:value={inputValue}
			on:keydown={handleKeyDown}
			required
		/>
		<button class="button" on:click={addItem}> + </button>
	</div>

	<ul class="item-list">
		{#each itemList as item, i}
			<li class="item">
				<p>🗸 {item}</p>
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
				placeholder={placeholderText}
				bind:value={inputValue}
				on:keydown={handleKeyDown}
				required
			/>
			<input
				type="text"
				class="input {inputType}"
				placeholder={placeholderDescription}
				bind:value={descriptionInputValue}
				on:keydown={handleKeyDown}
				required
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
						<p>{item.descriptionInputValue}</p>
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

	.input.url {
		color: blue;
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

	.item:last-of-type {
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
