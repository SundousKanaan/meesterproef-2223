<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import PastChallenges from '$lib/pastChallenges.svelte';
</script>

<main>
	<h2>Past challenges</h2>
	<PastChallenges />
</main>

<style>
	h2 {
		max-width: 1200px;
	}
</style>
