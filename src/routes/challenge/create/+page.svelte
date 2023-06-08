<script lang="ts">
	import EditBar from './components/EditBar.svelte';
	import Hero from './components/Hero.svelte';
	import ChallengeDetail from './components/ChallengeDetail.svelte';

	let title: string;
	let description: string;
	let skillLevel: string;
	let startDate: string;
	let endDate: string;
	let prize: string;

</script>

<EditBar />
<Hero 
	bind:title={title}
	bind:description={description}
/>
<ChallengeDetail 
	bind:skillLevel={skillLevel}
	bind:startDate={startDate}
	bind:endDate={endDate}
	bind:prize={prize}
/>

