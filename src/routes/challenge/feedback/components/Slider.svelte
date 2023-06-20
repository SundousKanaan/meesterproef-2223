<script lang="ts">
	export let titel: string;
	export let icon: string = 'hearteyes';
	export let level: string = 'bad'

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

	let sliderValue: number = 1;
	let color:string;
	let weight:string;
	let score:number = 0;

	function handleSliderInput(event: Event) {
		
		if (sliderValue >= 0 && sliderValue <= 25) {
			level="bad";
			color="black";
			weight="lighter";
			score=1
		} else if (sliderValue >= 25 && sliderValue <= 50) {
			level="good";
			color="black";
			weight="lighter"
		} else if (sliderValue >= 50 && sliderValue <= 75) {
			level="super";
			color="black";
			weight="lighter";
		} else {
			level= "amazing";
			color="red";
			weight="bolder";
		}
	}
</script>

<label>
	<h3>{titel}:</h3>
	<p style:color={color} style:font-weight={weight}>{level}</p>
	<input type="range" class="{icon}" on:input={handleSliderInput} bind:value={sliderValue} required/>
</label>
<!-- min="1" max="5" step="0" -->
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
			rgba(145, 145, 145, 0.198) 0 5%,
			black 0 5.5%,
			rgba(145, 145, 145, 0.198) 0 26%,
			black 0 26.5%,
			rgba(145, 145, 145, 0.198) 0 50%,
			black 0 50.5%,
			rgba(145, 145, 145, 0.198) 0 75%,
			black 0 75.5%,
			rgba(255, 255, 255, 0.198) 0 99%,
			black 0 99.5%
		);
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
		--size:8vw;
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
		width: 3em;
		height: 3em;
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
</style>
