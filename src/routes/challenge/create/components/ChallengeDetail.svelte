<script lang="ts">
	export let skillLevel: string;
	export let startDate: string;
	export let endDate: string;
	export let prize: string;
</script>

<section class="challenge-info">
	<article class="challenge-detail skill-level">
		<img src="/instagram-icon.svg" alt="Temporary Instagram logo for illustration purposes" />
		<label for="skill-level">Skill Level</label>
		<select name="skill-level" id="skill-level" bind:value={skillLevel}>
			<option value="beginner">Beginner</option>
			<option value="novice">Novice</option>
			<option value="expert">Expert</option>
		</select>
	</article>
	<article class="challenge-detail start-date">
		<img src="/instagram-icon.svg" alt="Temporary Instagram logo for illustration purposes" />
		<label for="start-date">Start Date</label>
		<input type="date" id="start-date" bind:value={startDate} />
	</article>
	<article class="challenge-detail end-date">
		<img src="/instagram-icon.svg" alt="Temporary Instagram logo for illustration purposes" />
		<label for="end-date">End Date</label>
		<input type="date" id="end-date" bind:value={endDate} />
	</article>
	<article class="challenge-detail prize">
		<img src="/instagram-icon.svg" alt="Temporary Instagram logo for illustration purposes" />
		<label for="end-date">#1 Points Prize</label>
		<input type="number" id="prize" bind:value={prize} />
	</article>
</section>

<style>
	.challenge-info {
		width: 60em;
		margin-top: 2em;
		margin-left: auto;
		margin-right: auto;
		background-color: var(--theme-color);
		border: black 1px solid;
		padding: 1em;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.challenge-detail {
		display: grid;
		grid-template-columns: 2em 1fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
			'icon title'
			'icon input';
	}

	.challenge-detail > img {
		grid-area: icon;
		align-self: center;
	}
</style>
