<script lang="ts">
	export let user: {
		firstName: string;
		lastName: string;
		location: string;
		userImage: string;
		education: string;
	} = {
		firstName: 'Sundous',
		lastName: 'Kanaan',
		location: 'Japan',
		userImage: '/fire-emoji.svg',
		education: 'Communication and Multimedia Design'
	};

	interface Rol {
		id: number;
		rol: string[];
	}

	let rolls: Rol[] = [
		{ id: 1, rol: ['film', 'frontender'] },
		{ id: 2, rol: ['UX/UI', 'frontender', 'designer'] }
	];
	let slider_concept: string;
	let slider_proces: string;
	let slider_creativity: string;
	slider_concept = 'concept';
	slider_proces = 'proces';
	slider_creativity = 'creativity';

	let slider_concept_value: number;
	let slider_proces_value: number;
	let slider_creativity_value: number;

	// Make sure the total doesn't exceed 10
	$: {
		let total = slider_concept_value + slider_proces_value + slider_creativity_value;
		if (total > 10) {
			let excess = total - 10;
			// Deduct the excess from the last changed slider
			if (slider_concept_value >= excess) slider_concept_value -= excess;
			else if (slider_proces_value >= excess) slider_proces_value -= excess;
			else if (slider_creativity_value >= excess) slider_creativity_value -= excess;
		}
	}

	function handleConceptSliderInput(event: CustomEvent<number>) {
		slider_concept_value = event.detail;
	}

	function handleProcesSliderInput(event: CustomEvent<number>) {
		slider_proces_value = event.detail;
	}

	function handleCreativitySliderInput(event: CustomEvent<number>) {
		slider_creativity_value = event.detail;
	}

	const whiteStarSVGs = [
		'/half-star-left-white.svg',
		'/half-star-right-white.svg',
		'/half-star-left-white.svg',
		'/half-star-right-white.svg',
		'/half-star-left-white.svg',
		'/half-star-right-white.svg',
		'/half-star-left-white.svg',
		'/half-star-right-white.svg',
		'/half-star-left-white.svg',
		'/half-star-right-white.svg'
	];

	const yellowStarSVGs = [
		'/half-star-left.svg',
		'/half-star-right.svg',
		'/half-star-left.svg',
		'/half-star-right.svg',
		'/half-star-left.svg',
		'/half-star-right.svg',
		'/half-star-left.svg',
		'/half-star-right.svg',
		'/half-star-left.svg',
		'/half-star-right.svg'
	];
</script>

<a class="usercard" href="/">
	<span>
		<div><img src={user.userImage} alt="{user.firstName} {user.lastName} profile image" /></div>
		<span>
			<h3 class="name">{user.firstName} {user.lastName}</h3>
			<p class="education">{user.education}</p>
		</span>
	</span>

	<span class="location-icon">
		<p class="location">{user.location}</p>
		<ul class="stars">
			{#each Array.from({ length: 10 }) as _, i}
				{#if i < slider_concept_value + slider_proces_value + slider_creativity_value}
					<li>
						<img src={yellowStarSVGs[i]} alt="half star SVG" />
					</li>
				{:else}
					<li>
						<img src={whiteStarSVGs[i]} alt="white half star SVG" />
					</li>
				{/if}
			{/each}
		</ul>
	</span>

	<span class="skills">
		<h3>Skills:</h3>
		<ul>
			<li>
				{#each rolls as rol (rol.id)}
					{#each rol.rol as userrol}
						<p>{userrol}</p>
					{/each}
				{/each}
			</li>
		</ul>
	</span>
</a>

<style>
	.usercard {
		width: 100%;
		height: 100%;
		box-shadow: var(--shadow-cards);
		padding: 1em;
		background-color: var(--primary300b);
		grid-area: 2/2/3/-2;
		display: flex;
		flex-direction: column;
		color: var(--black);
	}

	.usercard > span:first-of-type {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.usercard > span:first-of-type div {
		--size: 6em;
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		background-color: var(--white);
		flex-shrink: 0;
	}

	.usercard > span:first-of-type div img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.usercard > span:first-of-type {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1em;
	}

	.usercard > span:first-of-type p {
		position: relative;
	}

	.location-icon {
		display: flex;
		align-items: end;
		justify-content: space-between;
		margin-bottom: 1em;
	}

	.location-icon p:nth-of-type(2) {
		text-align: end;
	}

	.location-icon .location::before {
		content: url(/location-icon.svg);
		width: 1.5em;
		height: 1.5em;
		margin-right: 0.5em;
		position: relative;
	}

	.usercard > span:last-of-type {
		margin-top: 0.5em;
	}

	.usercard > span:last-of-type ul,
	.usercard > span:last-of-type {
		display: flex;
		flex-direction: row;
		align-items: start;
		gap: 0.5em;
	}

	.usercard > span:last-of-type ul li {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
		border: none;
		margin: 0;
	}
	.usercard > span:last-of-type ul li p {
		text-transform: capitalize;
		font-size: 0.9em;
		padding: 0.2em 0.5em;
		border-radius: 0.5em;
		background-color: var(--theme-secondary);
		color: var(--white);
	}

	.stars {
		margin-top: 0.5em;
		justify-content: flex-end;
		display: flex;
	}

	.stars li {
		height: 2em;
	}

	.stars li img {
		height: 100%;
	}


	@media (min-width: 1200px) {
		.usercard {
			grid-area: 2/2/3/3;
		}
	}
</style>
