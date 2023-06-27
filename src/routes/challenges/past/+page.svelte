<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import HeroPast from '$lib/heroPast.svelte';
	// import PastChallenges from '$lib/pastChallenges.svelte';
	// import WinnerScoreboard from '$lib/winnerScoreboard.svelte';
	// import SubmittedChallenges from '$lib/submittedChallenges.svelte';
</script>

<main>
	<HeroPast />
	<!-- <WinnerScoreboard />
	<PastChallenges />
	<SubmittedChallenges /> -->
</main>

<style>
	h2 {
		max-width: 1200px;
		min-width: 300px;
	}
</style>
