<script lang="ts">
	import Feedback from './components/Feedback-form.svelte';
	import Team_users from './components/Team_users.svelte';
</script>

<section>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<Feedback />

	<div>
		<h2>Team members:</h2>
		<ul>
			<Team_users />
		</ul>
	</div>
</section>

<style>
	section {
		justify-self: center;
		width: 90%;
		height: fit-content;

		display: grid;
		grid-template-areas:
		'a h1 a'
		'card'
			'form';

		grid-template-columns: 1fr;
		gap: 1em;
		background-color: rgba(0, 255, 255, 0.211);
	}

	section > div{
		padding: 1em;
		border: solid .5px black;
		border-radius: .5em;
	}

	section > div h2{
		margin-bottom: .5em;
	}

	section > div ul{
		display: flex;
		flex-direction: column;
	}
</style>
