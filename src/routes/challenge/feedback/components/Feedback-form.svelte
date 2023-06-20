<script lang="ts">
	import Slider from './Slider.svelte';
	let slider_concept: string;
	let slider_proces: string;
	let slider_creativity: string;
	slider_concept = 'concept';
	slider_proces = 'proces';
	slider_creativity = 'creativity';
</script>

<form>
	<h2>Evaluation & feedback</h2>
	<Slider icon="hearteyes" titel={slider_concept} />
	<Slider icon="fire" titel={slider_proces} />
	<Slider icon="rocket" titel={slider_creativity} />
	<h3>The final result:</h3>
	<div>stars</div>
	<h3>Feedback</h3>
	<textarea name="feedback" id="feedback" cols="30" rows="10" placeholder="Write a feedback ..." />
	<button type="submit" value="Save">Save</button>
</form>

<style>
	form {
		width: 100%;
		height: 40em;
		padding: 1.5em;
		box-shadow: var(--shadow-button);
		background-color: var(--theme-color-secondary);

		display: flex;
		flex-direction: column;
	}

	form h2 {
		font-size: 1.3em;
		font-weight: bold;
	}

	form h3 {
		margin-top: 1em;
	}

	form textarea {
		resize: none;
		width: 100%;
		height: 10em;
		border: none;
		padding: 0.5em;
		margin-top: 0.7em;
	}

	form > button {
		appearance: none;
		-webkit-appearance: none;
		width: 9em;
		height: 3em;
		border: none;
		color: var(--white);
		font-family: var(--font-family);
		background-color: var(--theme-secondary);
		box-shadow: var(--shadow-button);

		margin-top: 1.5em;
		align-self: center;

		cursor: pointer;
		transition: .5s;
	}

	button:active{
		transform: scale(.5);
	}
</style>
