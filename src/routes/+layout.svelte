<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Zerostate from '$lib/Zerostate.svelte';
  import { goto } from '$app/navigation';

	let zeroStateOpen: boolean = true;

	function showInfo() {
		zeroStateOpen = !zeroStateOpen;
	}


    function navigateTo(route) {
        goto(route);
    }
</script>

<Header />



<slot />
<button on:click={showInfo}>i</button>

{#if zeroStateOpen}
	<div class="zerostate">
		<Zerostate bind:open={zeroStateOpen} />
	</div>
{/if}

<Footer />

<style>
	button {
		width: 2.5em;
		height: 2.5em;
		position: fixed;
		right: 3%;
		bottom: 5%;

		font-family: var(--font-family);
		color: var(--blue-button);
		font-weight: bolder;

		border: solid 0.3em var(--blue-button);
		border-radius: 50%;

		background-color: white;
		cursor: pointer;
		z-index:3;
	}

	button:hover {
		transform: scale(1.3);
	}

	button:active {
		transform: scale(0.8);
	}
</style>
