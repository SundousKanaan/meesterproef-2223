<script lang="ts">
	import type { Participant } from '$lib/participants';
	import type { Challenge } from '$lib/challenge';
	import { IconSize } from '$lib/Icon';
	import { ChallengeStatus } from '$lib/challenge';
	import Buttons from '$lib/Buttons.svelte';
	import EntriesPie from './components/EntriesPie.svelte';
	import Timeline from '$lib/Timeline.svelte';
	import Icon from '$lib/Icon.svelte';
	import ReviewCard from './components/ReviewCard.svelte';
	import ParticipantTable from './components/ParticipantTable.svelte';

	const challenge: Challenge = {
		id: '1',
		title: 'How to create an immersive experience for Retail?',
		description: 'Description 1',
		image: '/Hero.jpg',
		start_date: '2023-06-02',
		end_date: '2023-08-05',
		status: ChallengeStatus.OPEN,
		creators: 256,
		entries: 12,
		creators_last_week: 220,
		entries_last_week: 0
	};

	const participants: Participant[] = [
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'John',
			creatorhandle: '@JohnDoe',
			status: 'registered',
			submitDate: new Date(),
			yesno: false,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Emily',
			creatorhandle: '@EmilySmith',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 4
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'David',
			creatorhandle: '@DavidJohnson',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Olivia',
			creatorhandle: '@OliviaBrown',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: false,
			feedback: 2
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Michael',
			creatorhandle: '@MichaelWilson',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Sophia',
			creatorhandle: '@SophiaTaylor',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Daniel',
			creatorhandle: '@DanielAnderson',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Mia',
			creatorhandle: '@MiaThomas',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: false,
			feedback: 3
		}
	];
</script>

<div class="ultra-wrapper">
	<div class="tyfus">
		<img src={challenge.image} alt="hero or something" />
	</div>

	<div class="wrapper">
		<div class="bovenste-stukje">
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
			<Buttons variant="primary" size="small" hasIcon
				>View Challenge <Icon icon="eye" size={IconSize.SMALL} /></Buttons
			>
			<Buttons variant="primary" size="small" hasIcon
				>Edit <Icon icon="edit" size={IconSize.SMALL} /></Buttons
			>
		</div>
		<div>
			<EntriesPie />
		</div>
	</div>

	<div class="review-buttons-wrappertje">
		<ReviewCard type="speed" />
		<ReviewCard type="extensive" />
		<ReviewCard type="medals" />
	</div>

	<div class="participants-wrapper">
		<ParticipantTable {participants} />
	</div>
</div>

<style>
	* {
		max-width: 100vw;
	}

	.ultra-wrapper {
		max-width: 80rem;
		margin-right: auto;
		margin-left: auto;
	}
	.wrapper {
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr;
		padding: 3rem 2rem;
		/* background-color: #d6d6d6; */
	}

	.bovenste-stukje {
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.timeline-wrapper {
		width: 90%;
		margin-right: auto;
		margin-left: 0.5rem;
		margin-top: 2rem;
	}

	.timeline-wrapper > h2 {
		margin-left: -0.5rem; /* I am sorry */
		margin-bottom: 0.75rem;
	}

	.review-buttons-wrappertje {
		padding: 2rem 2rem;
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 1rem;
	}

	.participants-wrapper {
		margin: 0rem 2rem;
		overflow-x: scroll;
		overscroll-behavior-x: contain;
	}

	@media only screen and (min-width: 624px) {
		.review-buttons-wrappertje {
			padding: 2rem 4rem;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr;
			gap: 1rem;
		}

		.wrapper {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr;
			margin: 0rem 4rem;
		}

		.review-buttons-wrappertje {
			padding: 2rem 4rem;
		}

		.participants-wrapper {
			padding: 3rem 4rem;
		}
	}
</style>
