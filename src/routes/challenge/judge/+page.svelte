<script lang="ts">
	import Feedback from './components/Feedback.svelte';
</script>

<section>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<Feedback />
</section>

<style>
	section {
		justify-self: center;
		width: 90%;
		height: fit-content;

		display: grid;
		grid-template-areas:
		'a h1 a'
		'card'
			'form';

		grid-template-columns: 1fr;
		/* grid-template-rows: 5vw 10em 30em auto ; */
		gap: 1em;
		background-color: rgba(0, 255, 255, 0.211);
	}
</style>
