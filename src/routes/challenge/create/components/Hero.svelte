<script lang="ts">

	export let title: string;
	export let description: string;

	async function handleContentClick(e: Event) {
		e.preventDefault();
	}

</script>

<section class="hero">
	<div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<h1 class="title" contenteditable="true" on:click={handleContentClick} bind:innerText={title}>Click to edit title...</h1>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<p class="description" contenteditable="true" on:click={handleContentClick} bind:innerText={description}>Click to edit description...</p>
		<button class="join-challenge">Join Challenge</button>
	</div>
	<button class="edit-image">Edit Image</button>
	<img src="/hero-img.png" alt="Some guy screaming into a megaphone for some reason." />
</section>

<style>
	.hero {
		position: relative;
		width: 100%;
		min-height: 30em;
	}

	.hero > img {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.edit-image {
		background-color: #fff;
		padding: 1em 1.5em;
		border: none;
		border-radius: 1em;
		position: absolute;
		bottom: 3em;
		right: 3em;
	}

	.join-challenge {
		background-color: var(--blue-button);
		padding: 1em 1.5em;
		border: none;
		border-radius: 1em;
		text-transform: uppercase;
		/* font-family: ''; */
	}

	div {
		width: 40em;
		margin-left: 10em;
		padding-top: 2em;
		padding-bottom: 2em;
	}

	.title {
		margin-bottom: 1em;
		width: 20em;
		font-weight: 600;
	}

	.description {
		margin-bottom: 1em;
		min-height: 10em;
	}

	*[contenteditable="true"] {
		border: black 2px dashed;
		padding: 0.4em;
		/* width: 40em; */
	}

	h1 {
		font-size: 3rem;
	}
</style>