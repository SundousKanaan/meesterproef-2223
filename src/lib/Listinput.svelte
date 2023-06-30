<script lang="ts">
	// import { createEventDispatcher } from 'svelte';
	export let inputType: string = '';
	let checkInputLink: string = '';

	const linkPattern = /^(ftp|http|https):\/\/[^ "]+$/;

	const videoLinkPattern =
		/^(http(s)?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;

	const embedVideoLinkPattern =
		/^(http(s)?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)\/embed\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;

	export let placeholderText = 'Enter item...';
	export let placeholderDescription = 'Enter item description...';

	let inputValue: string = '';
	let descriptionInputValue: string = '';

	export let variant: 'text' | 'link' | 'none';

	let itemList: (string | Item)[] = [];
	let newItem: string | Item;
	type Item = {
		inputValue: string;
		descriptionInputValue: string;
	};

	// const dispatch = createEventDispatcher();

	function addItem() {
		console.log('gg');

		if (inputValue && descriptionInputValue) {
			let newItem: string | Item | undefined = undefined;

			if (variant === 'link') {
				if (videoLinkPattern.test(descriptionInputValue)) {
					// Video link item
					if (!embedVideoLinkPattern.test(descriptionInputValue)) {
						const embedLink = convertToEmbedLink(descriptionInputValue);
						newItem = {
							inputValue,
							descriptionInputValue: embedLink
						};
						checkInputLink = 'video';
					} else {
						newItem = {
							inputValue,
							descriptionInputValue
						};
						checkInputLink = 'video';
					}

					console.log('KK', checkInputLink);
				} else if (linkPattern.test(descriptionInputValue)) {
					// Regular link item
					newItem = {
						inputValue,
						descriptionInputValue
					};
					checkInputLink = 'webLink';
					console.log('uu', checkInputLink);
					
				} else {
					// Not a link item
					newItem = {
						inputValue,
						descriptionInputValue
					};
					checkInputLink = 'text';
				}
			} else if (variant === 'text') {
				// Text item
				newItem = {
					inputValue,
					descriptionInputValue
				};
				checkInputLink = 'text';
			}

			if (newItem) {
				itemList = [...itemList, newItem];
			}

			inputValue = '';
			descriptionInputValue = '';
		} else {
			// None variant item
			if (inputValue) {
				itemList = [...itemList, inputValue];
				inputValue = '';
				descriptionInputValue = '';
				checkInputLink = 'none';
			}
			console.log('JoJO');
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

	function convertToEmbedLink(link: string): string {
		const videoId = extractVideoId(link);
		return `https://www.youtube.com/embed/${videoId}`;
	}

	function extractVideoId(link: string): string {
		const youtubeRegex =
			/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?/]+)/;
		const match = link.match(youtubeRegex);

		if (match && match[1]) {
			return match[1];
		}

		return '';
	}
</script>

{#if variant === 'none'}
	<div class="input-list">
		<input
			type="text"
			class="input {inputType}"
			placeholder={placeholderText}
			bind:value={inputValue}
			on:keydown={handleKeyDown}
		/>
		<button class="button" on:click={addItem}> <img class='plus' src="/plus-icon.svg" alt="Plus icon"> </button>
	</div>

	<ul class="item-list">
		{#each itemList as item, i}
			<li class="item">
				<p>🗸 {item}</p>
				<button class="remove-button" on:click={() => removeItem(i)}>
					<img src="/x-icon.svg" alt="X icon" />
				</button>
			</li>
		{/each}
	</ul>
{/if}

{#if variant === 'text'}
	<div class="input-list">
		<span class="listWithDescription_container">
			<input
				type="text"
				class="input"
				placeholder={placeholderText}
				bind:value={inputValue}
				on:keydown={handleKeyDown}
			/>
			<input
				type="text"
				class="input"
				placeholder={placeholderDescription}
				bind:value={descriptionInputValue}
				on:keydown={handleKeyDown}
			/>
		</span>
		<button class="button" on:click={addItem}> <img class='plus' src="/plus-icon.svg" alt="Plus icon"> </button>
	</div>

	<ul class="item-list">
		{#each itemList as item, i}
			<li class="item Description">
				<span>
					{#if typeof item === 'object'}
						<p>🗸 {item.inputValue}</p>
						{#if item.descriptionInputValue}
							<p>{item.descriptionInputValue}</p>
						{/if}
					{:else}
						<p>{item}</p>
					{/if}
				</span>

				<button class="remove-button" on:click={() => removeItem(i)}>
					<img src="/x-icon.svg" alt="X icon" />
				</button>
			</li>
		{/each}
	</ul>
{/if}

{#if variant === 'link'}
	<div class="input-list">
		<span class="listWithDescription_container">
			<input
				type="text"
				class="input"
				placeholder={placeholderText}
				bind:value={inputValue}
				on:keydown={handleKeyDown}
			/>
			<input
				type="url"
				class="input"
				placeholder={placeholderDescription}
				bind:value={descriptionInputValue}
				on:keydown={handleKeyDown}
			/>
		</span>
		<button class="button" on:click={addItem}><img class='plus' src="/plus-icon.svg" alt="Plus icon"></button>
	</div>

	<ul class="item-list {checkInputLink = 'video' ? 'link' : ''}">
		{#each itemList as item, i}
			{#if typeof item === 'object' && linkPattern.test(item.descriptionInputValue)}
				<li class="item Description {checkInputLink = 'video' ? 'link' : ''}">
					<span>
						<p>🗸 {item.inputValue}</p>
						{#if videoLinkPattern.test(item.descriptionInputValue)}
							<iframe src={item.descriptionInputValue} title="youtube link" frameborder="0" />
						{:else if linkPattern.test(item.descriptionInputValue)}
							<a href={item.descriptionInputValue} target="_blank" >{item.descriptionInputValue}</a>
						{/if}
					</span>

					<button class="remove-button" on:click={() => removeItem(i)}>
						<img src="/x-icon.svg" alt="X icon" />
					</button>
				</li>
			{/if}
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
		color: var(--theme-secondary);
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
		flex-shrink: 0;
	}

	.plus{
		width: 100%;
		height: 100%;
	}
	.item-list {
		list-style-type: none;
		padding: 0;

		display: flex;
		flex-wrap: wrap;
	}

	.item-list.link{
		gap: 1em;
	}

	.item {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5em 1em;

		border-bottom: solid 0.1em var(--neutral-500);
	}

	.item p {
		width: 80%;
		word-wrap: break-word;
	}

	.item:last-of-type {
		border-bottom: none;
	}

	.remove-button {
		height: 2em;
		width: 2em;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}

	.remove-button img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
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

	.item.Description.link {
		width: fit-content;
		padding: 0;

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		border: none;

		border-radius: .3em;
		overflow: hidden;
		padding: .5em;

		box-shadow: 0 0 .3em var(--neutral-800);
	}

	.item.Description.link span {
		width: 100%;
		grid-area: 1/1/2/-1;

		display: grid;
		grid-template-rows: auto;
		row-gap: 0.5em;
	}

	.item.Description.link span iframe {
		width: 250px;
		height: 143px;
	}

	.item.Description span a {
		text-decoration: underline;
		color: var(--theme-secondary);
		word-wrap: break-word;
	}

	.item.Description.link button {
		grid-area: 1/2/1/-1;

		justify-self: end;
		align-self: start;
	}

	.item.Description span a:hover{
		color: var(--primary-600);
	}

	.item.Description.link span p {
		align-self: center;
	}
</style>
