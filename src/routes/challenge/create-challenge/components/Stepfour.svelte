<script>
	import Listinput from '$lib/Listinput.svelte';
	import DragenDropp from '$lib/DragenDropp.svelte';
</script>

<h2>Resources</h2>
<form>
	<div>
		<label for="video">Video</label>
		<Listinput
			inputType="url"
			listWithDescription
			placeholderText="The video title"
			placeholderDescription="The video link"
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
