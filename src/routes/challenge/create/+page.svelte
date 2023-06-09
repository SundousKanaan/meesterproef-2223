<script lang="ts">
	import EditBar from './components/EditBar.svelte';
	import Hero from './components/Hero.svelte';
	import ChallengeDetail from './components/ChallengeDetail.svelte';
	import SkillSelector from './components/SkillSelector.svelte';

	let title: string;
	let description: string;
	let skillLevel: string;
	let startDate: string;
	let endDate: string;
	let prize: string;
	let challengeDetails: string;
	let skillsDetails: string;
	let shortTitle: string;
</script>

<EditBar />
<Hero bind:title bind:description />
<ChallengeDetail bind:skillLevel bind:startDate bind:endDate bind:prize />

<section class="pain">
	<article class="challenge-details">
		<h1>
			About
			<span contenteditable="true" bind:innerText={shortTitle}>&lt;challenge name&gt;</span>
			Challenge
		</h1>
		<p contenteditable="true" bind:innerText={challengeDetails} />
	</article>
	<article class="skills-details">
		<h1>Skills you learn</h1>
		<SkillSelector />
	</article>
</section>

<style>
	.pain {
		width: 60em;
		margin-top: 2em;
		margin-left: auto;
		margin-right: auto;

		/* make both articles take up the full width */
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1em;
		gap: 1em;
	}

	article > h1 {
		font-weight: 700;
	}

	article > p {
		border: black 1px dashed;
		padding: 1em;
	}
</style>
