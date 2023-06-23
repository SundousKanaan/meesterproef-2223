<script lang="ts">
	import { listen } from 'svelte/internal';
	import Slider from './Slider.svelte';
	let slider_concept: string;
	let slider_proces: string;
	let slider_creativity: string;
	slider_concept = 'concept';
	slider_proces = 'proces';
	slider_creativity = 'creativity';

	let slider_concept_value: number;
	let slider_proces_value: number;
	let slider_creativity_value: number;

	// Make sure the total doesn't exceed 10
	$: {
		let total = slider_concept_value + slider_proces_value + slider_creativity_value;
		if (total > 10) {
			let excess = total - 10;
			// Deduct the excess from the last changed slider
			if (slider_concept_value >= excess) slider_concept_value -= excess;
			else if (slider_proces_value >= excess) slider_proces_value -= excess;
			else if (slider_creativity_value >= excess) slider_creativity_value -= excess;
		}
	}

	function handleConceptSliderInput(event: CustomEvent<number>) {
		slider_concept_value = event.detail;
	}

	function handleProcesSliderInput(event: CustomEvent<number>) {
		slider_proces_value = event.detail;
	}

	function handleCreativitySliderInput(event: CustomEvent<number>) {
		slider_creativity_value = event.detail;
	}

	const whiteStarSVGs = [
		'/half-star-left-white.svg',
		'/half-star-right-white.svg',
		'/half-star-left-white.svg',
		'/half-star-right-white.svg',
		'/half-star-left-white.svg',
		'/half-star-right-white.svg',
		'/half-star-left-white.svg',
		'/half-star-right-white.svg',
		'/half-star-left-white.svg',
		'/half-star-right-white.svg'
	];

	const yellowStarSVGs = [
		'/half-star-left.svg',
		'/half-star-right.svg',
		'/half-star-left.svg',
		'/half-star-right.svg',
		'/half-star-left.svg',
		'/half-star-right.svg',
		'/half-star-left.svg',
		'/half-star-right.svg',
		'/half-star-left.svg',
		'/half-star-right.svg'
	];
</script>

<form>
	<h2>Evaluation & feedback</h2>
	<Slider icon="hearteyes" titel={slider_concept} on:sliderInput={handleConceptSliderInput} />
	<Slider icon="fire" titel={slider_proces} on:sliderInput={handleProcesSliderInput} />
	<Slider icon="rocket" titel={slider_creativity} on:sliderInput={handleCreativitySliderInput} />
	<h3>The final result:</h3>
	<!-- <p>{slider_concept_value + slider_proces_value + slider_creativity_value}</p> -->
	<ul class="stars">
		{#each Array.from({ length: 10 }) as _, i}
			{#if i < slider_concept_value + slider_proces_value + slider_creativity_value}
				<li>
					<img src={yellowStarSVGs[i]} alt="half star SVG" />
				</li>
			{:else}
				<li>
					<img src={whiteStarSVGs[i]} alt="white half star SVG" />
				</li>
			{/if}
		{/each}
	</ul>
	<h3>Feedback</h3>
	<textarea name="feedback" id="feedback" cols="30" rows="10" placeholder="Write a feedback ..." />
	<button type="submit" value="Save">Save</button>
</form>

<style>
	form {
		width: 100%;
		padding: 1.5em;
		box-shadow: var(--shadow-button);
		background-color: var(--theme-color-secondary);
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 1200px) {
		form {
			grid-area: 3/2/4/3;
		}
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
		transition: 0.5s;
	}

	button:active {
		transform: scale(0.5);
	}

	.stars {
		margin-top: 0.5em;
		align-self: center;
		display: flex;
	}

	.stars li {
		height: 3em;
	}

	.stars li img {
		height: 100%;
	}
</style>
