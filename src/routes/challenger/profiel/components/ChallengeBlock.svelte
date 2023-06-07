<script lang="ts">
	export let challengeName: string;
	export let username: string;
</script>


<li>
	<a href="/">
		<div>
			<h4>{challengeName}</h4>
			<p>By {username}</p>
		</div>
		<img src="/hero-img.png" alt="Some guy screaming into a megaphone for some reason.">
	</a>
</li>

<style>
	li{
		width: 20em;
		height: 20em;
		flex-shrink: 1;
	}

	a{
		width: 100%;
		height: 100%;
		position: relative;
	}

	img{
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	div{
		width: 100%;
		height: fit-content;
		padding: var(--padding-button);
		padding-top: 3em;
		position: absolute;
		bottom: 0;

		background-image: linear-gradient(transparent 5% , var(--shadow-color) 100%);
	}

	li a div h4{
		font-size: 1.5em;
		font-weight: bold;
		color: var(--white);
		text-shadow: 0 0 .3em var(--shadow-color);
	}
</style>