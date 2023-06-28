<script lang="ts">
	import Buttons from "$lib/Buttons.svelte";
</script>

<div>
	<Buttons variant="no"></Buttons>
	<Buttons variant="yes"></Buttons>
</div>

<style>
	div{
		display: flex;
		flex-direction: row;

		justify-content: space-around;
	}
</style>
