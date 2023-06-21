<script lang="ts">
	export let type: 'speed' | 'extensive' | 'medals' = 'speed';
</script>

<article>
	<h2 class="title">
		{#if type == 'speed'}
			Speed Review
		{:else if type == 'extensive'}
			Extensive Review
		{:else}
			Give Medals
		{/if}
	</h2>
	<p class="description">
		{#if type == 'speed'}
			Be critical. We advice you to let a maximum of 20 designs pass.
		{:else if type == 'extensive'}
			You give extensive feedback to everyone about their work.
		{:else}
			When you are done with reviewing all the designs, you can give medals to the bests.
		{/if}
	</p>

	<!-- Tingting when button component pleasseeeeee -->
	{#if type == 'speed'}
		<button>Speed review</button>
	{:else if type == 'extensive'}
		<button>Extensive review</button>
	{:else}
		<button>Give medals</button>
	{/if}
</article>

<style>
	article {
		box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		background-color: white;
		padding: 3rem;

		display: grid;
		grid-template-rows: 2rem 1fr 1fr;
	}

	h2 {
		font-size: 1.1rem;
	}

	button {
		margin-top: 1rem;
		min-height: 4rem;
	}
</style>
