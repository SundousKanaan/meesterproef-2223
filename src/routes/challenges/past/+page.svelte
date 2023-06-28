<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import PastChallenges from '$lib/pastChallenges.svelte';
	import WinnerScoreboard from '$lib/winnerScoreboard.svelte';
	import SubmittedChallenges from '$lib/submittedChallenges.svelte';
	import Timeline from '$lib/Timeline.svelte';
</script>

<main>
	<WinnerScoreboard />
	<Timeline
		dates={[
			{
				date: new Date(2021, 8, 1),
				icon: 'document',
				title: 'Challenge 1'
			},
			{
				date: new Date(2021, 8, 1),
				icon: 'document',
				title: 'Challenge 1'
			},
			{
				date: new Date(2021, 8, 1),
				icon: 'document',
				title: 'Challenge 1'
			},
			{
				date: new Date(2021, 8, 1),
				icon: 'document',
				title: 'Challenge 1'
			}
		]}
	/>
	<PastChallenges />
	<SubmittedChallenges />
</main>

<style>
	h2 {
		max-width: 1200px;
	}
</style>
