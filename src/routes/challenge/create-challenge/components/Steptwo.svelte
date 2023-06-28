<script lang="ts">
	import DragenDropp from '$lib/DragenDropp.svelte';
	import Select from '$lib/Select.svelte';
	import Textarea from '$lib/Textarea.svelte';

	import Listinput from '$lib/Listinput.svelte';

	let options = ['Beginner', 'Intermediate', 'Advanced'];
</script>

<h2>Challenge Details</h2>
<form>
	<div>
		<label for="challenge_description">Challenge long description</label>
		<Textarea placeholder="What is your challenge?" />
	</div>

	<div>
		<label for="challenge_cover">Skills after the challenge:</label>
		<Listinput inputType="text" />
	</div>

	<div>
		<label for="challenge_cover">Prizes</label>
		<Listinput listWithDescription inputType="text" />
	</div>

	<div>
		<label for="challenge_cover">Required skill level</label>
		<Select {options} />
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
</style>
