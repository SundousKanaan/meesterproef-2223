<script lang="ts">
	import type { Challenge } from '$lib/challenge';
	import { ChallengeStatus } from '$lib/challenge';
	import EntriesPie from './components/EntriesPie.svelte';
	import Timeline from '$lib/Timeline.svelte';
	import Icon from '$lib/Icon.svelte';
	import ReviewCard from './components/ReviewCard.svelte';

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
	};
</script>

<img src="/Hero.jpg" alt="hero or something" />

<div class="wrapper">
	<div>
		<h1>{challenge.title}</h1>
		<div class="timeline-wrapper">
			<h2>Project Timeline</h2>
			<Timeline
				dates={[
					{
						date: new Date(challenge.start_date),
						icon: 'trend',
						title: 'Start'
					},
					{
						date: new Date('2023-06-30'),
						icon: 'trend',
						title: 'Deadline'
					},
					{
						date: new Date('2023-07-20'),
						icon: 'trend',
						title: 'Evaluation'
					},
					{
						date: new Date(challenge.end_date),
						icon: 'trend',
						title: 'Winners'
					}
				]}
				spaceRelativeToTime={true}
			/>
		</div>
		<p>{challenge.description}</p>

		<!-- button component here obv-->
		<button>View Challenge</button>
		<button>Share</button>
	</div>
	<div>
		<EntriesPie />
	</div>
</div>

<div class="review-buttons-wrappertje">
	<ReviewCard type="speed"></ReviewCard>
	<ReviewCard type="extensive"></ReviewCard>
	<ReviewCard type="medals"></ReviewCard>
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 3rem 4rem;
	}

	img {
		width: 100%;
	}

	.timeline-wrapper {
		width: 90%;
		margin-right: auto;
		margin-left: 0.5rem;
		margin-top: 2rem;
	}

	.timeline-wrapper > h2 {
		margin-left: -0.5rem;		/* I am sorry */
		margin-bottom: 0.75rem;
	}

	.review-buttons-wrappertje {
		padding: 2rem 4rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;

	}
</style>
