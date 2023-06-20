<script lang="ts">
	import type { Challenge } from "$lib/challenge";
	import { ChallengeStatus } from "$lib/challenge";
	import EntriesPie from "./components/EntriesPie.svelte";
	import Timeline from "$lib/Timeline.svelte";
	import Icon from "$lib/Icon.svelte";

	const challenge: Challenge = {
			id: '1',
			title: 'How to create an immersive experience for Retail?',
			description: 'Description 1',
			start_date: '2023-06-02',
			end_date: '2023-08-05',
			status: ChallengeStatus.OPEN,
			creators: 256,
			entries: 12,
			creators_last_week: 220,
			entries_last_week: 0
	}
</script>

<img src="/Hero.jpg" alt="hero or something">

<div class="wrapper">
	<div>
	<h1>{challenge.title}</h1>
	<p>{challenge.description}</p>
	<button>View Challenge</button>
	<button>Share</button>
	</div>
	<div>
		<EntriesPie></EntriesPie>
	</div>
</div>

<div class="timeline-wrapper">

<Timeline
	dates={[
		{
			date: new Date(challenge.start_date),
			icon: 'trend',
			title: "Start"
		},
		{
			date: new Date("2023-06-30"),
			icon: 'trend',
			title: "Deadline"
		},
		{
			date: new Date("2023-07-20"),
			icon: 'trend',
			title: "Evaluation"
		},
		{
			date: new Date(challenge.end_date),
			icon: 'trend',
			title: "Winners"
		},
	]}
	spaceRelativeToTime={true}
></Timeline>
</div>
	

<style>
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	img {
		width: 100%;

	}

	.timeline-wrapper {
		width: 50rem;
		margin-right: auto;
		margin-left: auto;
		margin-top: 2rem;
	}
</style>