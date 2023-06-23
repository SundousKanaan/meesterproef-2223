<script lang="ts">
	import type { Participant } from "$lib/participants";

	import Buttons from "$lib/Buttons.svelte";


	export let participants: Participant[] = [];

	// Calculate how many pages there are based on the number of participants and the max per page
	function calculatePages(participants: Participant[], maxPerPage: number) {
		return Math.ceil(participants.length / maxPerPage);
	}
</script>

<article>
	<h2>Challenge Participants ({participants.length})</h2>
	<table>
		<tr>
			<th>Creator</th>
			<th>Status</th>
			<th>Submit Date</th>
			<th>Yes/No</th>
			<th>Feedback</th>
			<th>&nbsp;</th>
		</tr>
		{#each participants as participant}
		<tr>
			<td class="creator-td">
					<img class="profile-img" src="{participant.profilePicture}" alt="">
					<div class="creator">
						{participant.creator}
						<span class="handle">
							{participant.creatorhandle}
						</span>
					</div>
			</td>
			<td class="status-td">
				{#if participant.status == "handed-in"}
					Handed in
				{:else}
					Registered
				{/if}
			</td>
			<td class="submitdate-td">
				{participant.submitDate}
				
			</td>
			<td class="yesno-td">
				{#if participant.yesno}
					True
				{:else}
					False
				{/if}
			</td>
			<td class="feedback-td">
				★★☆☆☆
			</td>
			<td class="viewbutton-td">
				<Buttons variant="primary" size="medium">VIEW</Buttons>
			</td>
		</tr>
		{/each}
	</table>
	<section class="pager">
			1 - 1 van de 1
		<div class="buttons">
			<Buttons variant="start-grey" size="small">&lt</Buttons>
			<Buttons variant="start-grey" size="small">&gt;</Buttons>
		</div>
	</section>
</article>

<style>
	table {
		margin-top: 2rem;
		width: 100%;
		text-align: center;
	}

	tr:first-child {
		border-top: 1px solid var(--neutral-900);
	}

	tr:first-child th {
		padding: 16px 0;
	}

	table, th, td {
		border-collapse: collapse;
		border-bottom: 1px solid;
	}

	th, td {
		padding: 0.75rem 1rem;
	}

	.creator-td  {
		display: flex;
		align-items: center;
	}

	.profile-img {
		height: 3rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		margin-right: 8px;
	}


	.handle {
		display: block;
		font-size: 0.8rem;
	}

	.pager {
		display: flex;
		justify-content: end;
		align-items: center;
		gap: 1rem;
		margin-top: 1rem;
	}
	
	.buttons {
		display: flex;
		gap: 4px;
	}
</style>