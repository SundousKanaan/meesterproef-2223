<script lang="ts">
	import DragenDropp from '$lib/DragenDropp.svelte';
	import Timeline from '$lib/Timeline.svelte';
	import Input from '$lib/Input.svelte';
    import type { Challenge } from '$lib/challenge';
    import { ChallengeStatus } from '$lib/challenge';

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
</script>

<h2>General information</h2>
<div>
	<label for="challenge_name">challenge name</label>
	<Input inputType="text" placeholder_Text="What is the name of your special challenge?" />
</div>

<div>
	<label for="challenge_cover">challenge cover</label>
	<DragenDropp DragType="image" />
</div>

<div>
	<label for="Short_description">Short description</label>
	<Input inputType="text" placeholder_Text="What is your challenge in short?" />
</div>

<div class="Timeline">
    <Timeline editable
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

<style>
	h2 {
		font-size: 1.5em;
	}

	div {
		margin:2em 1em;

		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}
	label {
		font-size: 1em;
	}

    /* .Timeline{
        margin: 2em 1em;
    } */
</style>
