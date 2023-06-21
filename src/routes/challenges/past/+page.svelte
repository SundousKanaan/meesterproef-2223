<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import PastChallenges from '$lib/pastChallenges.svelte';
	import WinnerScoreboard from '$lib/winnerScoreboard.svelte';
</script>

<main>
	<PastChallenges />
	<WinnerScoreboard />
</main>

<style>
	h2 {
		max-width: 1200px;
	}
</style>
