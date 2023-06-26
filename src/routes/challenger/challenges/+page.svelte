<script lang="ts">
	import { ChallengeStatus } from '$lib/challenge';

	import Table from './components/Table.svelte';
	import MobileCard from './components/MobileCard.svelte';
	import { dev } from '$app/environment';

	const numChallenges = 2;

	const currentHour = new Date().getHours();

	var introText = 'Goedemorgen';

	if (currentHour >= 12 && currentHour < 18) {
		introText = 'Goedemiddag';
	} else if (currentHour >= 18 && currentHour < 24) {
		introText = 'Goedenavond';
	} else if (currentHour >= 0 && currentHour < 6) {
		introText = 'Welterusten';
	}

	var table: boolean = numChallenges > 10 ? true : false;

	async function sadness(e: Event) {
		e.preventDefault();
		table = !table;
	}

</script>

<main>
	<h1>{introText}, Asics</h1>
	<div class="breadcrumb-container">
		<span class="breadcrumb">Dashboard</span>
	</div>
	
	<div class="bar-boven-de-tabel-die-de-zoekbalk-bevat-enzo">
		<h2>Challenges</h2>
		<div>
			<button on:click={sadness}>
				<img src="/instagram-icon.svg" alt="Temporary logo bc bruh">
			</button>

			<input placeholder="Zoeken..." type="text" name="searchbar" />
		</div>
	</div>

	{#if table}

	<div class="div-table-table-div">
		<Table />
	</div>

	{:else}

	<section class="mobile-cards-section">
		<MobileCard title="Lorem ipsum doler sit amet sit edoler ipsum lorem" background="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
		<MobileCard status={ChallengeStatus.DRAFT} background="https://images.pexels.com/photos/2097/desk-office-pen-ruler.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
		<MobileCard status={ChallengeStatus.PUBLISHED} background="https://images.pexels.com/photos/2097/desk-office-pen-ruler.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
	</section>
	{/if}
</main>

<style>
	main {
		width: 100vw;
		padding: 1rem calc(calc(91 / 16) * 1rem);
	}

	.breadcrumb {
		color: var(--primary-900);
	}

	.breadcrumb:not(:last-of-type):after {
		content: '>';
		margin: 0rem 0.25rem;
	}

	.div-table-table-div {
		display: grid;
		width: 100%;
		grid-column: 2/16;
	}

	h2 {
		font-size: 1rem;
	}

	button {
		appearance: none;
		border: none;
		background-color: transparent;
		height: fit-content;
		width: fit-content;
		padding: 0px;
	}

	.bar-boven-de-tabel-die-de-zoekbalk-bevat-enzo {
		width: 100%;
		margin: 2rem 0rem 1rem 0rem;
		height: 2.5rem;
		/* align vertically */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.bar-boven-de-tabel-die-de-zoekbalk-bevat-enzo > h2 {
	}

	.bar-boven-de-tabel-die-de-zoekbalk-bevat-enzo > div {
		display: flex;
		gap: 2rem;
		height: 100%;
	}

	.bar-boven-de-tabel-die-de-zoekbalk-bevat-enzo > div > input {
		background-color: var(--neutral-100);
		width: 21rem;
		padding: 0rem 0.7rem;
		border: 1px solid var(--neutral-900);
		height: 100%;
	}

	/* .bar-boven-de-tabel-die-de-zoekbalk-bevat-enzo > div > input::after {
		content: '';
		background-image: url('/edit-pen.svg');
	} */

	.mobile-cards-section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		grid-gap: 32px;
	}

	@media only screen and (min-width: 1024px) {
		/* .mobile-cards-section {
			display: none;
		} */

		/* .div-table-table-div {
			display: block;
		} */
	}

	/* tablet size */
	@media only screen and (max-width: 1024px) {
		main {
			padding: 0 calc(calc(91 / 16) * 0.5rem);
		}
	}

	@media only screen and (max-width: 768px) {

		main {
			padding: 0 calc(calc(91 / 16) * 0.25rem);
		}
	}
</style>