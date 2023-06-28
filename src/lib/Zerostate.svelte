<script lang="ts">
	import Buttons from '$lib/Buttons.svelte';
	let showing: string;
	let stap: string;
	let statuscheck: string;
	let imagesCount: number = 1;

	let imageNumber: number = imagesCount;
	function setImageSource() {
		imagesCount += 1;
		imageNumber = imagesCount;
		console.log('imagesCount', imagesCount, imageNumber);

		if (imagesCount === 4) {
			statuscheck = 'close';
			imageNumber = 1;
			imagesCount = 1;
		}
	}

	function skiptheinfo() {
		console.log('skip');
		statuscheck = 'close';
		imageNumber = 1;
		imagesCount = 1;
	}
</script>

<section class="status {statuscheck}">
	<div class="mobimagecontainer">
		<img src="/zero-state-mob{imageNumber}.svg" alt="zero stat {stap}" class={showing} />
	</div>

	<div class="points">
		<span class="full" />
		<span class={imagesCount >= 2 ? 'full' : ''} />
		<span class={imagesCount == 3 ? 'full' : ''} />
	</div>

	<div>
		<Buttons variant="savexit" handleClick={setImageSource}>Next</Buttons>
	</div>

	<div class="skip">
		<Buttons variant="skipcancel" handleClick={skiptheinfo}><u>Skip</u></Buttons>
	</div>
</section>

<!-- /* background-image: url(/theme-form.svg); background-position: center; background-repeat:
no-repeat; */ -->

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;

		padding: 1em 0;

		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 9999999;

		background-color: white;
	}

	.close {
		display: none;
	}

	.mobimagecontainer {
		width: 90%;
		height: fit-content;

		/* position: absolute; */

		display: flex;
		justify-content: center;
	}

	img {
		width: 100%;
	}

	.showing {
		display: block;
	}

	.points {
		width: 50%;
		height: 2em;
		display: flex;
		justify-content: space-around;
	}

	.points span {
		width: 2em;
		height: 2em;
		border-radius: 50%;
		border: solid 0.3em var(--blue-button);
	}

	.full {
		background-color: var(--blue-button);
	}

	.skip {
		position: fixed;
		top: 1em;
		right: 1em;
	}
</style>
