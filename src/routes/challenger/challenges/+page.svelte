<script>
	import Table from './components/Table.svelte';
	import MobileCard from './components/MobileCard.svelte';
	import { dev } from '$app/environment';
</script>

<main>
	<h1>Goeiemogguhhh Asics</h1>
	<p>Dashboard</p>

	<div class="bar-boven-de-tabel-die-de-zoekbalk-bevat-enzo">
		<h2>Challenges</h2>
		<div>
			<img src="/instagram-icon.svg" alt="Temporary logo bc bruh">

			<input placeholder="Zoeken..." type="text" name="searchbar" />
		</div>
	</div>

	<div class="div-table-table-div">
		<Table />
	</div>

	{#if dev}
		<br />
		<br />
	{/if}

	<section class="mobile-cards-section">
		<MobileCard background="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
		<MobileCard background="https://images.pexels.com/photos/2097/desk-office-pen-ruler.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
	</section>
</main>

<style>
	main {
		width: 100%;
		padding: 1rem calc(calc(91 / 16) * 1rem);
	}

	.div-table-table-div {
		display: grid;
		width: 100%;
		grid-column: 2/16;
	}

	h2 {
		font-size: 1rem;
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
		grid-template-columns: 1fr 1fr;
		grid-gap: 32px;
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
