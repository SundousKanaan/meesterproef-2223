<script>
	const pageTitle = 'Immersive Retail Experience';
	const pageDescription = 'How to create an Immersive Retail Experience for Asics shoes Europe';
	const participants = 123;
	const breadcrumbs = ['home', 'challenges', 'challengeDetail'];
	const heroImage = '/hero_no_content.jpg';
</script>

<section class="hero">
	<div>
		<ul class="breadcrumbs">
			<li>
				<a href="#">{breadcrumbs[0]}</a>
			</li>
			<li>
				<a href="#">{breadcrumbs[1]}</a>
			</li>
			<li>
				<a href="#">{breadcrumbs[2]}</a>
			</li>
		</ul>
		<h1>{pageTitle}</h1>
		<h2>{pageDescription}</h2>

		<div>
			<img src="/man1.jpg" alt="" />
			<img src="/man2.jpg" alt="" />
			<img src="/man3.jpg" alt="" />
			<p><span>{participants}</span> have participated in the Asics challenge</p>
		</div>
	</div>
</section>

<style>
	:root {
		--cta-color: #21bde5;
		--yellow: #ffeb66;
		--hover: #bae4e8;
		--white: #ffffff;
		--black: #000000;
	}

	.hero {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: center;
		width: 100%;
		margin-bottom: 2em;
		background-image: url('/HeroPast.png');
		background-size: cover;
		background-repeat: no-repeat;
	}

	span {
		font-weight: bold;
	}

	.hero > div {
		display: flex;
		flex-direction: column;
		padding: 1em;
		padding-top: 3.5em;
		width: 1200px;
	}

	.hero > div:first-of-type {
		order: 2;
	}

	.hero > div:last-of-type {
		justify-content: center;
		width: 90%;
	}

	.hero > div h1 {
		font-size: 2em;
		width: 40%;
		margin-bottom: 0.6em;
		padding-left: 0.2em;
		color: var(--white);
		background-color: var(--black);
	}

	.hero > div h2 {
		font-size: 2em;
		width: 50%;
		margin-bottom: 0.6em;
		padding-left: 0.2em;
		color: var(--yellow);
		background-color: var(--black);
	}

	.hero div .breadcrumbs {
		display: flex;
		gap: 1.5em;
		list-style: none;
		padding: 0;
		margin: 0;
		margin-bottom: 1em;
	}

	.hero div .breadcrumbs li a {
		color: var(--white);
		position: relative;
	}

	.hero div .breadcrumbs li a:hover {
		color: var(--hover);
	}

	.hero div .breadcrumbs li:not(:last-of-type) a:after {
		color: var(--cta-color);
		content: '>';
		position: absolute;
		right: -1.2em;
	}

	.hero div > div {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		margin-top: 1em;
	}

	.hero div > div img:nth-of-type(2) {
		transform: translate(-5px);
	}

	.hero div > div img:nth-of-type(3) {
		transform: translate(-10px);
	}

	.hero div > div img {
		border-radius: 100%;
		object-fit: cover;
		width: 22px;
		height: 22px;
	}

	.hero div > div p {
		color: var(--white);
	}

	@media screen and (max-width: 768px) {
		.hero > div {
			/* padding: 6em; */
			padding-bottom: 2em;
		}

		.hero > div h1 {
			font-size: 2.5em;
			width: 100%;
			margin-bottom: 0.6em;
			padding-left: 0.2em;
			color: var(--white);
			background-color: var(--black);
		}

		.hero > div h2 {
			font-size: 2em;
			width: 100%;
			/* width: 14em; */
			margin-bottom: 0.6em;
			padding-left: 0.2em;
			color: var(--yellow);
			background-color: var(--black);
		}

		.hero div > div {
			align-items: center;
		}

		.hero div .breadcrumbs {
			flex-wrap: wrap;
		}

		.hero div .breadcrumbs li {
			white-space: nowrap;
		}
	}
</style>
