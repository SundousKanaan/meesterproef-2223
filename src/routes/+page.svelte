<script>
	import user from '$lib/user';

	var pain;
	user.subscribe((val) => {
		pain = val;
	});
	console.log(pain);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
