<script lang="ts">
	import type { User } from '$lib/types';
	import type { LayoutData } from '../../$types';

	export let data: LayoutData;

	let loggedIn = false;
	let confirmed = false;

	if(data && data.user) {
		loggedIn = true;
	}
	if (data && data.user && data.user.confirmed) {
		confirmed = true;
	}

	// TODO: Add a button to resend the confirmation email

</script>

{#if loggedIn}
	<h1 class="text-green-900">You have successfully registered!!</h1>
{/if}
{#if confirmed}
	<h2>You have verified your email account!</h2>
{:else}
	<h2>You still need to verify your email account!</h2>
{/if}