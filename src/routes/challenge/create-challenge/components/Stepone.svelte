<script lang="ts">
	import DragenDropp from '$lib/DragenDropp.svelte';
	import Input from '$lib/Input.svelte';

	let startDate: Date;
	let deadline: Date;
	let evaluation: Date;
	let winners: Date;
	let timelineCheck: string = '';

	let formData = {
		challenge_name: '',
		challenge_cover: '',
		Short_description: '',
		startDate: '',
		deadline: '',
		evaluation: '',
		winners: ''
	};

	function timelineTest() {
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
				timelineCheck = 'good';
			} else {
				console.log('Niet elke waarde is groter dan de vorige.');
				timelineCheck = 'bad';
			}
		}
	}
</script>

<h2>General information</h2>

<form>
	<div>
		<label for="challenge_name">Challenge name</label>
		<Input inputType="text" placeholder_Text="What is the name of your special challenge?" />
	</div>

	<div>
		<label for="challenge_cover">Challenge cover</label>
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
				<input
					type="date"
					bind:value={startDate}
					on:input={timelineTest}
					class={timelineCheck}
					required
				/>
			</span>
			<span>
				<label for="Deadline">Deadline</label>
				<input type="date" bind:value={deadline} on:input={timelineTest} class={timelineCheck} required />
			</span>
			<span>
				<label for="Evaluation">Evaluation</label>
				<input type="date" bind:value={evaluation} on:input={timelineTest} class={timelineCheck} required />
			</span>
			<span>
				<label for="Winners">Winners</label>
				<input type="date" bind:value={winners} on:input={timelineTest} class={timelineCheck} required />
			</span>
		</div>
	</div>
</form>

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

		border: dashed 0.1em rgba(128, 128, 128, 0.39);
	}

	.Timeline div span {
		align-self: center;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		gap: 0.5em;
	}

	input[type=date]{
		height: 4em;
		padding: 0 1em;
		border: solid .1em rgba(128, 128, 128, 0.39);
	}

	input[type=date]:focus-visible{
		outline-color: var(--blue-button);
	}

	input[type=date].good {
		background-color: var(--accent-success-100);
		border-color: var(--accent-success-100);
	}

	input[type=date].bad {
		background-color: var(--accent-danger-100);
		border-color: var(--accent-danger-100);
	}
</style>
