<script>
	import Listinput from '$lib/Listinput.svelte';
	import DragenDropp from '$lib/DragenDropp.svelte';
</script>

<h2>Resources</h2>
<form>
	<div>
		<label for="video">Online resources (video's & online pages)</label>
		<Listinput
			inputType="url"
			variant="link"
			placeholderText="The video title"
			placeholderDescription="YouTube video or online page link"
		/>
	</div>

	<div>
		<label for="zipFile">Zip file</label>
		<DragenDropp DragType="file" />
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
