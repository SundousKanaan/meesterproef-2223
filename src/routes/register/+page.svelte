<script lang="ts">
	import type { User } from '$lib/types';
	import { goto } from '$app/navigation';
	import UserStore from '$lib/user';
	import type { LayoutData } from '../$types';

	export let data: LayoutData;

	let email = '';
	let username = '';
	let password = '';
	let password_conf = '';

	async function register() {
		const res = await fetch('/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify({ email, username, password })
		});
		if (res.ok) {
			const data: { user: User } = await res.json();

			if (data) {
				//$UserStore = data.user;
				goto('/register/success');
			}
		} else {
			const { error } = await res.json();
			console.log(error);
		}
	}
</script>

<form on:submit|preventDefault={register} class="container mx-auto my-4">
	<h1 class="text-center text-2xl font-bold">Login</h1>
	<div class="my-1">
		<label for="email">Email</label>
		<input id="email" type="email" placeholder="Enter your email" bind:value={email} />
	</div>
	<div class="my-2">
		<label for="username">Username</label>
		<input id="username" type="text" placeholder="Enter your username" bind:value={username} />
	</div>
	<div class="my-3">
		<label for="password">Password</label>
		<input id="password" type="password" placeholder="Enter your password" bind:value={password} />
	</div>
	<div class="my-4">
		<label for="password-conf">Password Confirmation</label>
		<input id="password-conf" type="password" placeholder="Enter your password" bind:value={password_conf} />
	</div>
	<div class="my-5">
		<button class="submit" type="submit">Register</button>
	</div>
</form>

<style lang="postcss">
	label {
		@apply font-bold block mb-1;
	}
	input {
		@apply bg-white w-full border border-gray-500 rounded outline-none py-2 px-4;
	}
	.submit {
		@apply bg-blue-500 text-white border-transparent rounded px-4 py-2;
	}
</style>
