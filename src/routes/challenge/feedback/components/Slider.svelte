<script lang="ts">
	export let titel: string;
	export let icon: string = 'hearteyes';
	export let level: string = 'So bad';
	let iconURL: string;

	switch (icon) {
		case 'hearteyes': {
			iconURL = 'url(/love-eyes-smiley.svg)';
			break;
		}
		case 'fire': {
			iconURL = 'url(/fire-emoji.svg)';
			break;
		}
		case 'rocket': {
			iconURL = 'url(/rocket-emoji.svg)';
			break;
		}
	}

	let sliderValue: number;
	sliderValue = 0;
	let color: string;
	let weight: string;
	let score: number = 0;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	interface Ranking {
		rank: string;
	}

	let rankings: Ranking[] = [
		{ rank: 'so bad' },
		{ rank: 'bad' },
		{ rank: 'good' },
		{ rank: 'super' },
		{ rank: 'amazing' },
		{ rank: 'So amazing' }
	];

	$: {
		console.log('sliderValue:', sliderValue);
	}

	function handleSliderInput(event: Event) {
		sliderValue = Number((event.target as HTMLInputElement).value);
		dispatch('sliderInput', sliderValue); // Dispatch the event with the current sliderValue

		if (sliderValue == 0 && sliderValue < rankings.length) {
			level = rankings[sliderValue].rank;
			color = 'black';
			weight = 'lighter';
		} else if (sliderValue == 1 && sliderValue < rankings.length) {
			level = rankings[sliderValue].rank;
			color = 'black';
			weight = 'lighter';
		} else if (sliderValue == 2 && sliderValue < rankings.length) {
			level = rankings[sliderValue].rank;
			color = 'black';
			weight = 'lighter';
		} else if (sliderValue == 3 && sliderValue < rankings.length) {
			level = rankings[sliderValue].rank;
			color = 'black';
			weight = 'lighter';
		} else if (sliderValue == 4 && sliderValue < rankings.length) {
			level = rankings[sliderValue].rank;
			color = 'red';
			weight = 'bolder';
		} else {
			level = rankings[sliderValue].rank;
			color = 'red';
			weight = 'bolder';
		}
	}
</script>

<label>
	<h3>{titel}:</h3>
	<p style:color style:font-weight={weight}>{level}</p>
	<input
		type="range"
		min="0"
		max="5"
		step="1"
		class={icon}
		on:input={handleSliderInput}
		bind:value={sliderValue}
		required
	/>
</label>

<!-- min="1" max="5" step="1" -->
<style>

	label {
		width: 100%;
		height: fit-content;

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 0.5em;
		margin-top: 1em;
	}

	label h3 {
		font-weight: lighter;
		text-transform: capitalize;
		justify-self: start;
	}

	label p {
		text-transform: capitalize;
		justify-self: end;

		padding: .25em .5em;
		border-radius: .5em;

		background-color: white;
	}

	label input[type='range'] {
		appearance: none;
		-webkit-appearance: none;
		margin: 18px 0;
		width: 100%;

		grid-column: 1/-1;
		border-radius: 5em;

		background: rgba(145, 145, 145, 0.198);
		background-image: linear-gradient(
			to right,
			rgba(145, 145, 145, 0.198) 0 23%,
			black 0 23.5%,
			rgba(145, 145, 145, 0.198) 0 41%,
			black 0 41.5%,
			rgba(145, 145, 145, 0.198) 0 60%,
			black 0 60.5%,
			rgba(145, 145, 145, 0.198) 0 77%,
			black 0 77.5%,
			rgba(255, 255, 255, 0.198) 0 99%,
			black 0 99.5%
		);

		overscroll-behavior-x: contain;
	}
	label input[type='range']:focus {
		outline: none;
	}
	label input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 1em;
		cursor: pointer;
		background-color: transparent;
		border-radius: 5em;
	}

	label input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		--size: 3em;
		height: var(--size);
		width: var(--size);
		border-radius: 50%;
		background: transparent;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		cursor: pointer;
		margin-top: -14px;
	}

	label input[type='range']::-moz-range-track {
		width: 100%;
		height: 1em;
		cursor: pointer;

		border-radius: 5em;
	}

	label input[type='range']::-moz-range-thumb {
		--size: 2.5em;
		height: var(--size);
		width: var(--size);
		border-radius: 50%;
		background: transparent;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		cursor: pointer;
		border: none;
	}

	label input[type='range'].hearteyes::-webkit-slider-thumb {
		background-image: url(/love-eyes-smiley.svg);
	}
	label input[type='range'].hearteyes::-moz-range-thumb {
		background-image: url(/love-eyes-smiley.svg);
	}

	label input[type='range'].fire::-webkit-slider-thumb {
		background-image: url(/fire-emoji.svg);
	}
	label input[type='range'].fire::-moz-range-thumb {
		background-image: url(/fire-emoji.svg);
	}

	label input[type='range'].rocket::-webkit-slider-thumb {
		background-image: url(/rocket-emoji.svg);
		transform: scale(1.5);
	}
	label input[type='range'].rocket::-moz-range-thumb {
		background-image: url(/rocket-emoji.svg);
		transform: scale(1.5);
	}

	label input[type='range']:hover::-moz-range-thumb {
		transform: scale(1.3);
	}
	label input[type='range']:hover::-webkit-slider-thumb {
		transform: scale(1.3);
	}

	label input[type='range'].rocket:hover::-webkit-slider-thumb {
		transform: scale(1.8);
	}
	label input[type='range'].rocket:hover::-moz-range-thumb {
		transform: scale(1.8);
	}

	/* @media (prefers-reduced-motion) {
		styles to apply if a user's device settings are set to reduced motion
	} */
</style>
