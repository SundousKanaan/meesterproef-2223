<script lang="ts">
	import TeamUsers from './components/TeamUsers.svelte';
	import Feedback from './components/Feedback-form.svelte';
	import Usercard from './components/Usercard.svelte';
	import Buttons from '$lib/Buttons.svelte';
	import type { PageData } from './$types';
	import type { SvelteComponent } from 'svelte';
	import FeedbackTinder from './components/FeedbackTinder.svelte';
	import Winners from '../medals/components/Winners.svelte';

	export let data: PageData;
</script>

<section>
	<div class="titel">
		<h2>Entry project</h2>
		<p>Extensive review</p>
	</div>

	<div class="previous">
		<Buttons variant="left" />
	</div>
	<div class="next">	
	<Buttons variant="right"/>
	</div>
	<Usercard />
	<div class="REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE">
	{#if data.feedbackType == "speed"}
		<FeedbackTinder></FeedbackTinder>
	{:else if data.feedbackType == "acc" }
		<Feedback />
	{:else if data.feedbackType == "medals"}
		nothing
	{/if}
	</div>

	<div class="container">
		<div class="datacontainer">
			<div class="usercard">
				<Usercard />
			</div>

			<div class="speedfeedback">
				{#if data.feedbackType == 'speed'}
					<FeedbackTinder />
				{:else if data.feedbackType == 'acc'}
					<Feedback />
				{:else if data.feedbackType == 'medals'}
					<Winners />
				{/if}
			</div>

			<div class="members">
				<h3>Team members:</h3>
				<ul>
					<TeamUsers />
				</ul>
			</div>
		</div>

		<div class="werkreview">
			<iframe src="/challenge/feedback?feedback=medals" title="feedback" frameborder="0" />
		</div>
	</div>
	<article class="submission">
		<iframe src="https://tioc.nl" frameborder="0"></iframe>
	</article>
</section>

<style>
	section {
		justify-self: center;
		width: 90%;
		height: fit-content;
		padding-top: 1em;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1em;
	}

	.titel {
		align-self: center;
		text-align: center;
		grid-area: 1/1/2/-1;
	}

	.titel p {
		color: var(--theme-secondary);
	}

	.previous,
	.next {
		--size: 5em;
		width: var(--size);
		height: var(--size);
	}

	.previous {
		grid-area: 1/1/2/-1;
		justify-self: start;
	}

	.next {
		grid-area: 1/1/2/-1;
		justify-self: end;
	}

	.members {
		padding: 1em;
		border: solid 0.5px var(--black);
	}

	.members h3 {
		margin-bottom: 0.5em;
	}

	.members ul {
		display: flex;
		flex-direction: column;
	}

	.speedfeedback {
		height: fit-content;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1em;
	}

	.datacontainer {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.werkreview {
		box-shadow: var(--shadow-cards);
	}

	iframe {
		width: 100%;
		height: 50em;
	}

	.submission {
		grid-area: 2/3/5/4;
	}

	iframe {
		width: 100%;
		height: 100%;
	}

	@media (min-width: 1200px) {
		section {
			width: 100%;
			grid-template-columns: 6em 30em 1fr 6em;
			grid-template-rows: 6em auto;
			padding: 0;
		}

		.titel {
			grid-area: 1/2/2/-2;
			text-align: unset;
		}

		.previous {
			grid-area: 2/1/3/2;
			position: fixed;
			top: 12%;
		}

		.next {
			grid-area: 2/4/3/-1;
			position: fixed;
			top: 12%;
		}

		.container {
			width: 100%;
			grid-column: 2/4;
			grid-row-start: 2;

			grid-template-columns: 30em 1fr;
			gap: 1em;
		}
		iframe {
			height: 100%;
		}
	}
</style>
