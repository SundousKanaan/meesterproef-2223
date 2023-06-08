<script lang="ts">
	import Challenges from "./components/Challenges.svelte";

	let username: string;
	let location: string;
	let followers: number;
	let profielViews: number;

	username = "HvA";
	followers=0;
	profielViews=0;
	location="Amsterdam";
</script>

<main>
	<Challenges username={username} />

	<section>
		<div>
			<span>
				<img
					src="data:image/png;base64,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"
					alt="{username} profile photo"/>
			</span>
			<button>
				<img src="/edit-pen.svg" alt="edit pen icon">
			</button>
		</div>

		<h3>{username}</h3>
		<p class="location">{location}</p>

		<table>
			<tr>
				<td>Followers</td>
				<td>{followers}</td>
			</tr>
			<tr>
				<td>Profiel views</td>
				<td>{profielViews}</td>
			</tr>
		</table>

		<a href="/challenger/profiel">Profiel</a>
		<a href="/">Edit profiel</a>
		<a href="/">Settings</a>
		<a href="/">Sign out</a>
	</section>
</main>

<style lang="css">
	main {
		width: 90%;
		height: fit-content;

		justify-self: center;

		display: grid;
		grid-template-columns: 1fr;

		border: solid .1em var(--gray-font);
		border-top: none;
	}

	@media (min-width: 1200px){
		main{
			grid-template-columns: 20em 1fr;
		}
	}

	section {
		height: fit-content;
		grid-area: 1/1/2/2;
		padding: 1em 0;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section > *{
		margin-top: .5em;
	}

	section div{
		width: 15em;
		border-radius: 50%;
		aspect-ratio: 1/1;

		position: relative;
	}
	
	section div > span{
		display: block;
		width: 100%;
		aspect-ratio: 1/1;

		border-radius: 50%;
		overflow: hidden;
	}
	
	section div > span img{
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	section div > button{
		appearance: none;
		--webkit-appearance: none;
		width: 3em;
		aspect-ratio: 1/1;
		border-radius: 50%;
		box-shadow: var(--shadow-button);

		background-color: var(--theme-color);

		position: absolute;
		bottom: 2.5em;
		right: -.5em;
		z-index: 2;

		display: grid;
		place-content: center;
	}

	h3{
		font-size: 2em;
		font-family: var(--optima);
		font-weight: bold;
	}

	.location{
		position: relative;
		padding-left: 1.5em;
	}
	.location::before{
		content: url(/location-icon.svg);
		width: 2em;
		aspect-ratio: 1/1;

		position: absolute;
		left: 0;
	}

	section table{
		width: 100%;
	}

	section table td:first-of-type{
		font-weight: bold;
		color: var(--gray-font);
		padding-left: 1em;
	}

	section table td:last-of-type{
		font-weight: bolder;
	}

	section a{
		width: 100%;
		height: 3em;
		align-self: start;
		border-top: solid .1em var(--gray-font);
		padding: 0 1em;

		margin: 0%;

		display: flex;
		align-items: center;
	}

	section a:last-of-type{
		height: 100%;
	}

</style>
