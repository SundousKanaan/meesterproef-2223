<script lang="ts">
	import EditBar from "./components/EditBar.svelte";
	import EditableField from "./components/EditableField.svelte";

</script>

<EditBar />

<section class="hero">
	<div>
		<EditableField><h1>Title</h1></EditableField>
		<p>Challenge description</p>
	</div>
	<img src="/hero-img.png" alt="Some guy screaming into a megaphone for some reason.">
</section>

<style>
	.hero {
		width: 100%;
		height: 30em;
		background-color: #F7CE46;
	}

	.hero > img {
		z-index: 1;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	div {
		position: absolute;
		z-index: 2;
		width: 40em;
		margin-left: 10em;
		padding-top: 2em;
		padding-bottom: 2em;
	}

	h1 {
		font-size: 3rem;
	}
</style>