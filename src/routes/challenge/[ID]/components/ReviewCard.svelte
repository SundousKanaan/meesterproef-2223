<script lang="ts">
	import Buttons from "$lib/Buttons.svelte";
	export let title: string = "";
	export let size: string = "normal";
	export let padding: string = "normal";
</script>

<article class="size-{size} padding-{padding}">
	{#if title}
	<h2 class="title">
		{title}
	</h2>
	{/if}
	<slot />
</article>

<style>
	article {
		box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		background-color: white;
		padding: 3rem;

		display: flex;
		flex-direction: column;
	}

	.padding-tiny {
		padding: 30px;
	}

	.size-normal {
		width: 100%;
	}

	.size-full {
		width: 100%;
		height: 100%;
	}

	.title {
		margin-bottom: 24px;
	}

	h2 {
		font-size: 1.1rem;
	}

	@media only screen and (max-width: 1000px) {
		article {
			padding: 2rem 1rem;
		}
	}
</style>
