<script lang="ts">
	import DragenDropp from '$lib/DragenDropp.svelte';
	import Input from '$lib/Input.svelte';

	let startDate: Date;
	let deadline: Date;
	let evaluation: Date;
	let winners: Date;
	let timelineCheck: string = '';

	function test() {
		if (startDate && deadline && evaluation && winners) {
			const startDateValue = new Date(startDate);
			const deadlineValue = new Date(deadline);
			const evaluationValue = new Date(evaluation);
			const winnersValue = new Date(winners);

			if (
				startDateValue.getTime() < deadlineValue.getTime() &&
				deadlineValue.getTime() < evaluationValue.getTime() &&
				evaluationValue.getTime() < winnersValue.getTime()
			) {
				console.log('Elke waarde is groter dan de vorige.');
				timelineCheck = "Good";
			} else {
				console.log('Niet elke waarde is groter dan de vorige.');
				timelineCheck = " ";
			}
		}
	}
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
	<label for="timeline">Challenge timeline</label>
	<div>
		<span>
			<label for="Start">Start</label>
			<input type="date" bind:value={startDate} on:input={test} class={timelineCheck}/>
		</span>
		<span>
			<label for="Deadline">Deadline</label>
			<input type="date" bind:value={deadline} on:input={test}/>
		</span>
		<span>
			<label for="Evaluation">Evaluation</label>
			<input type="date" bind:value={evaluation} on:input={test}/>
		</span>
		<span>
			<label for="Winners">Winners</label>
			<input type="date" bind:value={winners} on:input={test}/>
		</span>
	</div>
	<!-- <button on:click={test}>Check mijn</button> -->
</div>

<!-- <div class="Timeline">
	<label for="timeline">Challenge timeline</label>
	<div>
		<span>
			<label for="Start">Start</label>
			<Input inputType="date" />
		</span>
		<span>
			<label for="Deadline">Deadline</label>
			<Input inputType="date" />
		</span>
		<span>
			<label for="Evaluation">Evaluation</label>
			<Input inputType="date" />
		</span>
		<span>
			<label for="Winners">Winners</label>
			<Input inputType="date" />
		</span>
	</div>
</div> -->

<style>
	h2 {
		font-size: 1.5em;
	}

	div {
		margin: 2em 1em;

		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	label {
		font-size: 1em;
	}

	.Timeline div {
		margin: 0;
		padding: 1em;

		border: dashed 0.1em var(--neutral-00);
	}

	.Timeline div span {
		/* width: 80%; */
		align-self: center;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		gap: 0.5em;
	}

	input.good{
		background-color: greenyellow;
	}
</style>
