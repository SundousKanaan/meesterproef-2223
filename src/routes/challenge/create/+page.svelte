<script lang="ts">
	import EditBar from './components/EditBar.svelte';
	import EditableField from './components/EditableField.svelte';
</script>

<EditBar />

<section class="hero">
	<div>
		<EditableField class="title" preview="Click to edit title..." tag="h1" />
		<EditableField class="description" preview="Click to edit description..." tag="p" />
		<button class="join-challenge">Join Challenge</button>
	</div>
	<button class="edit-image">Edit Image</button>
	<img src="/hero-img.png" alt="Some guy screaming into a megaphone for some reason." />
</section>

<style>
	.hero {
		position: relative;
		width: 100%;
		height: 30em;
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
	}

	div {
		width: 40em;
		margin-left: 10em;
		padding-top: 2em;
		padding-bottom: 2em;
	}

	div > :global(.title) {
		margin-bottom: 1em;
	}

	div > :global(.description) {
		margin-bottom: 1em;
		height: 10em;
	}

	h1 {
		font-size: 3rem;
	}
</style>
