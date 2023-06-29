<script>
	let winnerName = 'Bart-Jan';
	let imagePath = '/first.png';
</script>

<section class="winner">
	<h2>Scoreboard</h2>
</section>

<div class="grouping">
	<section class="winner">
		<div class="grouping">
			<div class="plaatsing">
				<div class="prijsDetail">
					<div class="prijsIcoon">
						<svg
							width="67"
							height="67"
							viewBox="0 0 117 97"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<defs>
								<pattern
									id="backgroundPattern"
									patternUnits="userSpaceOnUse"
									width="100"
									height="80"
								>
									<image xlink:href="/3e.png" width="100" height="80" />
								</pattern>
							</defs>
							<rect
								width="101"
								height="80"
								transform="translate(8 8)"
								fill="url(#backgroundPattern)"
							/>
						</svg>
					</div>
					<div>
						<p class="prijsNummer">Third place</p>
						<p class="naamWinnaar">{winnerName}</p>
					</div>
				</div>
				<img src={imagePath} alt="" class="image-1" />
			</div>

			<div class="plaatsing">
				<div class="prijsDetail">
					<div class="prijsIcoon">
						<svg
							width="117"
							height="97"
							viewBox="0 0 117 97"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<defs>
								<pattern
									id="backgroundPattern"
									patternUnits="userSpaceOnUse"
									width="100"
									height="100"
								>
									<image xlink:href="/1e.png" width="100" height="80" />
								</pattern>
							</defs>
							<rect
								width="101"
								height="80"
								transform="translate(8 8)"
								fill="url(#backgroundPattern)"
							/>
						</svg>
					</div>
					<div>
						<p class="prijsNummer">First place</p>
						<p class="naamWinnaar">{winnerName}</p>
					</div>
				</div>

				<img src={imagePath} alt="" class="image-2" />
			</div>

			<div class="plaatsing">
				<div class="prijsDetail">
					<div class="prijsIcoon">
						<svg
							width="77"
							height="80"
							viewBox="0 0 117 97"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<defs>
								<pattern
									id="backgroundPattern"
									patternUnits="userSpaceOnUse"
									width="100"
									height="80"
								>
									<image xlink:href="/2e.png" width="100" height="80" />
								</pattern>
							</defs>
							<rect
								width="101"
								height="80"
								transform="translate(8 8)"
								fill="url(#backgroundPattern)"
							/>
						</svg>
					</div>
					<div>
						<p class="prijsNummer">Second place</p>
						<p class="naamWinnaar">{winnerName}</p>
					</div>
				</div>

				<img src={imagePath} alt="" class="image-3" />
			</div>
		</div>
	</section>
</div>

<style>
	.grouping {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		padding: 0;
		gap: 2.25em;
	}

	.winner {
		max-width: 75em;
		margin: 0 auto;
		width: 100%;
		padding: 1em;
	}

	.grouping {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
		padding: 0;
		gap: 2.25em;
	}

	.plaatsing {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		flex: 1 0 0;
	}

	.prijsDetail {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.0625em;
	}

	.prijsIcoon {
		background-image: url('data:image/svg+xml;charset=utf-8,<svg width="115" height="108" viewBox="0 0 115 108" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g filter="url(%23filter0_d_1411_12952)"><rect width="99" height="99" transform="translate(8)" fill="url(%23pattern0)"/></g><defs><filter id="filter0_d_1411_12952" x="0" y="-7.6" width="115" height="115" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">');
	}

	img {
		background: gray;
	}

	.image-1 {
		width: 100%;
		height: 14em;
		border: 6px solid #ffaf66;
		/* background-image: url('/3e.png'); */
	}

	.image-2 {
		width: 100%;
		height: 22em;
		border: 6px solid #ffeb66;
		/* background-image: url('/1e.png'); */
	}

	.image-3 {
		width: 100%;
		height: 17em;
		border: 6px solid #b7b7b7;
		/* background-image: url('/2e.png'); */
	}

	.grouping {
		width: 100%;
	}

	@media (max-width: 60em) {
		h2 {
			padding-left: 1em;
		}

		.plaatsing {
			flex-direction: column;
			align-items: center;
			gap: 1em;
			width: 100%;
		}

		.plaatsing:nth-child(2) {
			order: -1;
		}

		.plaatsing:last-of-type {
			order: -1;
		}

		.prijsDetail {
			flex-direction: row;
			align-items: center;
			gap: 0.0625em;
		}

		.grouping {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;
			padding: 0.5em;
			gap: 2.25em;
		}

		.winner {
			max-width: 75em;
			margin: 0 auto;
			width: 100%;
			margin-bottom: 2em;
			padding: 0;
		}

		.image-1 {
			width: 100%;
			height: 15em;
		}

		.image-2 {
			width: 100%;
			height: 15em;
		}

		.image-3 {
			width: 100%;
			height: 15em;
		}

		.image-1,
		.image-2,
		.image-3 {
			object-fit: cover;
		}
	}
</style>
