<script lang="ts">
	import Input from '$lib/Input.svelte';
    import DragenDropp from '$lib/DragenDropp.svelte';
    let placeholder_Text: string = "write ...";


	function test() {
		console.log('test');
	}
</script>

<Input inputType="url" placeholder_Text = {placeholder_Text} />
<DragenDropp />
