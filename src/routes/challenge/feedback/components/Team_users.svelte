<script lang="ts">
	export const firstName: string = 'Sundous';
	export const lastName: string = 'Kanaan';
	export const location: string = 'Japan';

	interface Rol {
		id: number;
		rol: string[];
	}

	let rolls: Rol[] = [
		{ id: 1, rol: ['film', 'baka'] },
		{ id: 2, rol: ['UX/UI', 'art'] }
	];
</script>

<li class="teamUser">
	<a href="/">
		<div>
			<img src="/fire-emoji.svg" alt="" />
		</div>
		<div>
			<span>
				<h3>{firstName} {lastName}</h3>
				<p>{location}</p>
			</span>
			<p>School</p>
			<span>
				<h3>Rol:</h3>
				<ul>
					{#each rolls as rol (rol.id)}
						<li>
							{#each rol.rol as userrol}
								<p>{userrol}</p>
							{/each}
						</li>
					{/each}
				</ul>
			</span>
		</div>
	</a>
</li>

<style>
	li {
		width: 100%;
		height: fit-content;
		position: relative;
	}

	li.teamUser:nth-last-child(n + 2) {
		margin-bottom: 0.5em;
	}

	li.teamUser:nth-last-child(n + 2)::after {
		content: '';
		display: block;
		width: 60%;
		height: 0.5px;
		background-color: black;
		position: absolute;
		left: calc(50% - 60% / 2);
		bottom: -0.5em;
	}

    li a{
        width: inherit;
        height: fit-content;
        display: flex;
		flex-direction: row;
		align-items: center;
        gap: 1em;

        color: black;
    }

	li a > div:first-of-type {
		--size: 4em;
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
        background-color: white;

        flex-shrink: 0;
	}

	li a > div:first-of-type img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	li a > div:last-of-type {
		width: 100%;
	}

	li a > div:last-of-type span:first-of-type {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	li a > div:last-of-type span:first-of-type p {
		position: relative;
	}

	li a > div:last-of-type span:first-of-type p::before {
		content: url(/location-icon.svg);
		display: block;
		width: 1.5em;
		height: 1.5em;

		position: absolute;
		top: calc(50% - 1.5em / 2);
		left: -1.5em;
	}

	li a > div:last-of-type span:last-of-type {
		margin-top: 0.5em;
	}

	li a > div:last-of-type span:last-of-type ul,
	li a > div:last-of-type span:last-of-type {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5em;
	}

	li a > div:last-of-type span:last-of-type ul li {
        display: flex;
        gap: .5em;
		border: none;
		margin: none;
	}
	li a > div:last-of-type span:last-of-type ul li p {
		text-transform: capitalize;
        font-size: .9em;
		padding: 0.2em 0.5em;
		border-radius: 0.5em;
		background-color: var(--theme-secondary);
        color: white;
	}
</style>
