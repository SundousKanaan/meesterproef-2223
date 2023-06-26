<script lang="ts">
	import Team_users from '../feedback/components/Team_users.svelte';
	import Usercard from '../feedback/components/Usercard.svelte';
	import Buttons from "$lib/Buttons.svelte";
	import Firstplace from './components/Firstplace.svelte';

function scroll(){
    window.scrollTo(0,0);
}

</script>

<section>
	<div class="titel" id="top">
		<h2>Entry project</h2>
		<p>Extensive review</p>
	</div>

	<div class="previous">
        <Buttons variant="left"/>
        </div>
        <div class="next">	
        <Buttons variant="right"/>
        </div>
	<Usercard/>
	
    <Firstplace />
	
	<div class="members">
		<h3>Team members:</h3>
		<ul>
			<Team_users />
		</ul>
	</div>

    <Buttons variant="up" handleClick={scroll}/>

</section>

<style>
	section {
		justify-self: center;
		width: 90%;
		height: fit-content;
		padding-top: 1em;

		display: grid;
		grid-template-columns: 1fr;
		gap: 1em;
	}

	.titel {
		align-self: center;
		text-align: center;
		grid-area: 1/1/2/-1;
	}

	.titel p {
		color: var(--theme-secondary);
	}

	.previous,
	.next {
		--size: 5em;
		width: var(--size);
		height: var(--size);
	}

	.previous {
		grid-area: 1/1/2/-1;
		justify-self: start;
	}

	.next {
		grid-area: 1/1/2/-1;
		justify-self: end;
	}

	.members {
		padding: 1em;
		border: solid 0.5px black;
		border-radius: 0.5em;
	}

	.members h3 {
		margin-bottom: 0.5em;
	}

	.members ul {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 1200px) {
		section {
			width: 100%;
			grid-template-columns: 6em 30em 1fr 6em;
			grid-template-rows: 6em auto;

			padding: 0;
		}
		.titel {
			grid-area: 1/2/2/-2;
			text-align: unset;
		}

		.previous {
			grid-area: 2/1/3/2;
			position: fixed;
		}

		.next {
			grid-area: 2/4/3/-1;
			position: fixed;
		}

		.members {
			grid-area: 4/2/5/3;
		}
	}
</style>
