<script lang="ts">
	import type { Challenge } from "$lib/challenge";
	import { ChallengeStatus } from "$lib/challenge";
	import EntriesPie from "./components/EntriesPie.svelte";

	const challenge: Challenge = {
			id: '1',
			title: 'How to create an immersive experience for Retail?',
			description: 'Description 1',
			start_date: '02-07-2023',
			end_date: '05-08-2023',
			status: ChallengeStatus.OPEN,
			creators: 256,
			entries: 12,
			creators_last_week: 220,
			entries_last_week: 0
	}
</script>

<img src="/Hero.jpg" alt="hero or something">

<div class="wrapper">
	<div>
	<h1>{challenge.title}</h1>
	<p>{challenge.description}</p>
	<button>View Challenge</button>
	<button>Share</button>
	</div>
	<div>
		<EntriesPie></EntriesPie>
	</div>


</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	img {
		width: 100%;

	}
</style>