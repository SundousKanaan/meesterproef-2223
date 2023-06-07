<script lang="ts">
	import ChallengeBlock from './ChallengeBlock.svelte';

	export let username: string;
	let challengeName: string;
</script>

<section>
	<h2>My challenges</h2>
	<a href="/challenge/create">Add challenge</a>

	<ul>
		<ChallengeBlock {challengeName} {username} />
	</ul>
</section>

<style lang="css">
	section {
		padding: 1em;

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 4em auto;
	}

	@media (min-width: 1200px) {
		section {
			border-left: solid 0.1em var(--gray-font);
		}
	}

	h2 {
		width: 100%;
		height: fit-content;
		font-size: clamp(1em , 1.3em , 1.5em );
		font-family: var(--optima);
		font-weight: bold;

		align-self: center;
	}

	@media (min-width: 1200px) {
		h2 {
			font-size: 2em;
		}
	}

	section > a {
		width: fit-content;
		height: fit-content;
		padding: var(--padding-button);
		background-color: var(--theme-color);
		align-self: center;
		justify-self: end;

        font-size: clamp(.8em , .8em , 1.5em);
	}

	ul {
		grid-column: 1/-1;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1em;
	}
</style>
