<div class="usercard">
	<slot />
</div>

<style>
	.usercard {
		width: 100%;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1em;
		margin: 0 0 1em 0;

		grid-area: 2/2/3/-2;
	}

	@media (min-width: 1200px) {
		.usercard {
			grid-area: 2/2/3/3;
		}
	}
</style>
