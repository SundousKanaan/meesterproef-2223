<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import PastChallengesOverview from '$lib/pastChallengesOverview.svelte';
</script>

<main>
	<PastChallengesOverview />
</main>

<style>
</style>
