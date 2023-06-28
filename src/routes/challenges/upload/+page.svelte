<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import UploadProces from '$lib/uploadProces.svelte';
</script>

<main>
	<UploadProces />
</main>

<style>
</style>
