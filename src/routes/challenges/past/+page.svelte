<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import HeroPast from '$lib/heroPast.svelte';
	import Timeline from '$lib/Timeline.svelte';
	import WinnerScoreboard from '$lib/winnerScoreboard.svelte';
	import FeaturedWork from '$lib/featuredWork.svelte';
</script>

<main>
	<HeroPast />
	<section>
		 <Timeline
			dates={[
				{
					date: new Date('2023-06-01'),
					icon: 'profile',
					title: 'Submission Start'
				},
				{
					date: new Date('2023-06-10'),
					icon: 'document',
					title: 'Submission Deadline'
				},
				{
					date: new Date('2023-06-22'),
					icon: 'profile',
					title: 'Evaluation'
				},
				{
					date: new Date('2023-06-28'),
					icon: 'trend',
					title: 'Winners Announced'
				}
			]}
		/>
	</section>
	<WinnerScoreboard />
	<section class="featuredWork">
		<FeaturedWork />
	</section>
</main>

<style>
	h2 {
		max-width: 1200px;
		min-width: 300px;
	}

	section {
		width: 80%;
		margin: 4em auto;
	}
	.featuredWork {
		margin: 0;
		padding: 1em;
		width: 100%;
	}
</style>
