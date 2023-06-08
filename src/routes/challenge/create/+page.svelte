<script lang="ts">
	import EditBar from './components/EditBar.svelte';
	import Hero from './components/Hero.svelte';

	let title: string;
	let description: string;

</script>

<EditBar />
<Hero bind:title={title} bind:description={description} />



