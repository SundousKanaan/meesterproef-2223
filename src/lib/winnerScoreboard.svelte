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
							width="115"
							height="84"
							viewBox="0 0 115 84"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g filter="url(#filter0_d_1411_12961)">
								<rect width="99" height="67" transform="translate(8 8)" fill="url(#pattern0)" />
								<g clip-path="url(#clip0_1411_12961)">
									<path
										d="M57.5 44.5C61.366 44.5 64.5 41.366 64.5 37.5C64.5 33.634 61.366 30.5 57.5 30.5C53.634 30.5 50.5 33.634 50.5 37.5C50.5 41.366 53.634 44.5 57.5 44.5Z"
										stroke="#3A3C43"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M53.71 43.39L52.5 52.5L57.5 49.5L62.5 52.5L61.29 43.38"
										stroke="#3A3C43"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</g></g
							></svg
						>
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
							width="116"
							height="108"
							viewBox="0 0 116 108"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g filter="url(#filter0_d_1411_12952)">
								<rect width="99" height="99" transform="translate(8.5)" fill="url(#pattern0)" />
								<path
									d="M58.0002 57.5C68.3095 57.5 76.6668 49.1426 76.6668 38.8333C76.6668 28.524 68.3095 20.1666 58.0002 20.1666C47.6908 20.1666 39.3335 28.524 39.3335 38.8333C39.3335 49.1426 47.6908 57.5 58.0002 57.5Z"
									stroke="#3A3C43"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M47.8932 54.54L44.6665 78.8333L57.9998 70.8333L71.3332 78.8333L68.1065 54.5133"
									stroke="#3A3C43"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
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
							width="117"
							height="97"
							viewBox="0 0 117 97"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g filter="url(#filter0_d_1411_12943)">
								<rect width="101" height="80" transform="translate(8 8)" fill="url(#pattern0)" />
								<path
									d="M58.4998 52C63.6545 52 67.8332 47.8213 67.8332 42.6666C67.8332 37.512 63.6545 33.3333 58.4998 33.3333C53.3452 33.3333 49.1665 37.512 49.1665 42.6666C49.1665 47.8213 53.3452 52 58.4998 52Z"
									stroke="#3A3C43"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M53.4468 50.52L51.8335 62.6667L58.5002 58.6667L65.1668 62.6667L63.5535 50.5067"
									stroke="#3A3C43"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
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
		gap: 1.5rem;
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
		border-bottom: 6px solid #ffeb66;
	}

	.image-2 {
		width: 100%;
		height: 22.4375em;
		border: 6px solid #ffeb66;
	}

	.image-3 {
		width: 100%;
		height: 15em;
		border-bottom: 6px solid #ffeb66;
	}

	.grouping {
		width: 100%;
	}

	@media (max-width: 60em) {
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
			padding: 0;
			gap: 2.25em;
		}

		.winner {
			max-width: 75em;
			margin: 0 auto;
			width: 100%;
			padding: 0.5em 0;
			margin-bottom: 2em;
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
