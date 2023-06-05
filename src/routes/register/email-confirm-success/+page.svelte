<script>
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";

	let timer = 5;
	const interval = setInterval(() => {
		timer--;
		if (timer === 0) {
			clearInterval(interval);
			if(browser)
				goto('/login');
		}
	}, 1000);

</script>
<h1>Successfully confirmed email!</h1>
<h2>You will be redirected in {timer} seconds to the login page!</h2>
<a href="/login">Click here if you are not automatically redirected.</a>