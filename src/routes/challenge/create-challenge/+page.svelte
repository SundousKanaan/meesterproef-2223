<script lang="ts">
	import Stepone from './components/Stepone.svelte';
	import Steptwo from './components/Steptwo.svelte';
	import Stepthree from './components/Stepthree.svelte';
	import Stepfour from './components/Stepfour.svelte';
	import Buttons from '$lib/Buttons.svelte';
	import isValidForm from './components/Stepone.svelte'

	let processCounter: number = 1;
	let value: string = '0.5';

	function minCount() {
		processCounter -= 1;
		if (processCounter == 2) {
			value = '2.1';
		} else if (processCounter == 3) {
			value = `${processCounter}.7`;
		} else if (processCounter == 4) {
			value = '7';
		} else {
			value = '0.7';
		}

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});

		console.log('processCounter', processCounter, value);
	}

	function plusCount() {
		processCounter += 1;
		if (processCounter == 2) {
			value = '2.1';
		} else if (processCounter == 3) {
			value = `${processCounter}.7`;
		} else if (processCounter == 4) {
			value = '7';
		} else {
			value = '0.7';
		}

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});

		console.log('processCounter', processCounter, value);
	}

	function test() {
		console.log("jojo", isValidForm); // Is this a Jojo reference?????
		
	}

	function closePage() {
		console.log("close page");
		
		window.location.href = "/challenger/challenges";
	}
</script>

<section>
	<div class="process-area" style="--value: {value}">
		<span>1</span>
		<span>2</span>
		<span>3</span>
		<span>4</span>
	</div>

	<h1>Create your challenge</h1>

	<div class={processCounter == 1 ? 'open' : 'close'}>
		<Stepone />
	</div>

	<div class={processCounter == 2 ? 'open' : 'close'}>
		<Steptwo />
	</div>

	<div class={processCounter == 3 ? 'open' : 'close'}>
		<Stepthree />
	</div>

	<div class={processCounter == 4 ? 'open' : 'close'}>
		<Stepfour />
	</div>

	<div class="buttons">
		<div class={processCounter == 1 ? 'noButton' : 'button back'}>
			<Buttons handleClick={minCount} variant="start-blue" size="full-width">Back</Buttons>
		</div>

		<div class={processCounter == 4 ? 'noButton' : 'button next'}>
			<Buttons handleClick={plusCount} variant="start-blue" size="full-width">Next</Buttons>
		</div>
		<div class="savexit">
			<Buttons variant="savexit" size="full-width">Save & Exit</Buttons>
		</div>

		<div class="skipcancel">
			<Buttons variant="skipcancel" size="full-width" handleClick={closePage}>Cancel</Buttons>
		</div>

		<div class="send">
			<Buttons handleClick={test} variant="primary" size="full-width" type="submit">Send</Buttons>
		</div>
	</div>
</section>

<style>
	section {
		width: 90%;
		padding-top: 1em;

		justify-self: center;

		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	section > div.close {
		display: none;
	}

	section > div.open {
		display: block;
	}

	h1 {
		font-size: 2em;
	}

	.process-area {
		--value: 0;

		width: 70%;
		height: 3em;
		align-self: center;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1em;

		position: relative;
	}

	.process-area::after {
		content: '';
		display: block;
		width: 100%;
		height: 0.3em;

		position: absolute;
		z-index: -1;

		background-color: red;
		background: 
		/* linear-gradient(to right, limegreen 0 var(--value), #0000 0 100%), */ linear-gradient(
				to right,
				var(--blue-button) calc(1em + (100% - 2em) / 5 * var(--value, 0)),
				#0000 0
			),
			repeating-linear-gradient(to right, transparent 0% 5%, var(--neutral-600) 5% 10%);
	}

	.process-area span {
		display: block;
		flex-shrink: 0;
		width: 3em;
		height: 3em;

		display: grid;
		place-items: center;

		border: solid 0.3em var(--blue-button);
		border-radius: 50%;
		background-color: white;
	}

	.buttons {
		border-top: solid 0.1em black;
		padding: 1em;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 1em;
		row-gap: 4em;
	}

	.buttons div {
		display: flex;
		width: 100%;
		height: 4em;
	}

	.noButton {
		visibility: hidden;
		grid-area: 1/1/2/2;
	}

	.back {
		grid-area: 1/1/2/2;
	}

	.savexit {
		grid-area: 1/2/2/3;
	}

	.skipcancel {
		grid-area: 2/1/3/2;
	}

	.send {
		grid-area: 2/-2/3/-1;
	}

	@media (min-width: 1200px) {
		section {
			width: 60%;
		}

		.buttons {
			grid-template-columns: repeat(6, 1fr);
		}

		.noButton {
			visibility: hidden;
			grid-area: 1/3/2/4;
		}

		.back {
			grid-area: 1/3/2/4;
		}

		.next {
			grid-area: 1/4/2/5;
		}

		.savexit {
			grid-area: 1/5/2/6;
		}

		.skipcancel {
			grid-area: 1/1/2/2;
		}

		.send {
			grid-area: 1/6/2/7;
		}
	}
</style>
