<script lang="ts">
	import { ChallengeStatus } from '$lib/challenge';
	import type { Challenge } from '$lib/challenge';
	import Status from './Status.svelte';

	const challenges: Challenge[] = [
		{
			id: '1',
			title: 'How to create an immersive experience for Retail?',
			description: 'Description 1',
			start_date: '02-07-2023',
			end_date: '05-08-2023',
			status: ChallengeStatus.OPEN
		},
		{
			id: '2',
			title: 'Crowd Storming',
			description: 'Description 2',
			start_date: '01-07-2023',
			end_date: '07-08-2023',
			status: ChallengeStatus.CLOSED
		},
		{
			id: '3',
			title: 'Active VR meeting room',
			description: 'Description 3',
			start_date: '27-06-2023',
			end_date: '30-07-2023',
			status: ChallengeStatus.PUBLISHED
		},
		{
			id: '4',
			title: 'Fix XSS vulnerability',
			description: 'Description 4',
			start_date: '20-06-2023',
			end_date: '10-07-2023',
			status: ChallengeStatus.DRAFT
		},
		{
			id: '5',
			title: 'Wireframes',
			description: 'Description 5',
			start_date: '20-06-2023',
			end_date: '10-07-2023',
			status: ChallengeStatus.FINISHED
		},
		{
			id: '6',
			title: 'Creative AR kids service',
			description: 'Description 6',
			start_date: '29-05-2023',
			end_date: '30-06-2023',
			status: ChallengeStatus.HIDDEN
		}


	];

	var filteredChallenges: Challenge[] = challenges;
	var selectedStatus: string;

	async function statusFilter() {
		if(selectedStatus === 'ALL')
			filteredChallenges = challenges;
		else if(selectedStatus){
			filteredChallenges = challenges.filter((challenge) => challenge.status === selectedStatus);
		}
	}
</script>

<table>
	<tr>
		<th>Title</th>
		<th>Start Datum</th>
		<th>Eind Datum</th>
		<th>
			<select
				bind:value={selectedStatus}
				on:change={(e) => {
					statusFilter();
				}}
			>
				<option value="ALL" disabled selected>Status</option>
				<option value="ALL">All</option>
				<option value="OPEN">Open</option>
				<option value="CLOSED">Closed</option>
				<option value="PUBLISHED">Published</option>
				<option value="DRAFT">Draft</option>
				<option value="FINISHED">Finished</option>
				<option value="HIDDEN">Hidden</option>
			</select>
		</th>
		<th>Creators</th>
		<th>Entries</th>
		<th />
	</tr>
	{#each filteredChallenges as challenge}
		<tr>
			<td>{challenge.title}</td>
			<td>{challenge.start_date}</td>
			<td>{challenge.end_date}</td>
			<td><Status status={challenge.status} /></td>
			<td>Creators</td>
			<td>Entries</td>
			<td>
				<a href="/challenges/{challenge.id}">Bekijk</a>
			</td>
		</tr>
	{/each}
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 0.5rem;
		text-align: left;
		border: 1px solid var(--neutral-300);
	}

	th > select {
		content: '';
		width: 100%;
		background-color: transparent;
		border: none;
		font: inherit;
	}

	tr:nth-child(even) {
		background-color: #ffffff;
	}

	th {
		background-color: rgba(255, 208, 39, 0.48);
		color: black;
	}
</style>
