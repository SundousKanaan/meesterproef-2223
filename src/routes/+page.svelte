<footer>
	<section>
		<ul>
			<li>
				<p>TIOC</p>
			</li>
			<li>
				<a href="/page/about">About</a>
			</li>
			<li>
				<a href="/page/contact">Contact</a>
			</li>
		</ul>

		<ul>
			<li>
				<p>Partners</p>
			</li>
			<li>
				<a href="https://www.nro.nl/en">The Netherlands Initiative for Education Research (NRO)</a>
			</li>
			<li>
				<a href="https://www.amsterdamuas.com">Amsterdam University of Applied Sciences</a>
			</li>
		</ul>

		<ul>
			<li>
				<p>Get in touch</p>
			</li>
			<li>
				<a href="/page/contact">Contact</a>
			</li>
		</ul>

		<ul>
			<li>
				<p>Socials</p>
			</li>
			<li>
				<ul>
					<li>
						<a href="https://www.instagram.com/institute_of_creativity">
							<img
								src="https://tioc-cdn.ams3.digitaloceanspaces.com/icon_instagram_black_3b621aef08.svg?w=48&q=75"
								alt=""
							/>
						</a>
					</li>
					<li>
						<a href="http://www.youtube.com/instituteofcreativity">
							<img
								src="https://tioc-cdn.ams3.digitaloceanspaces.com/icon_youtube_black_affc45f1b7.svg?w=48&q=75"
								alt=""
							/>
						</a>
					</li>
					<li>
						<a href="/www.linkedin.com/tioc">
							<img
								src="https://tioc-cdn.ams3.digitaloceanspaces.com/icon_linkedin_black_7594063366.svg?w=48&q=75"
								alt=""
							/>
						</a>
					</li>
					<li>
						<a href="http://www.twitter.com/tioc">
							<img
								src="https://tioc-cdn.ams3.digitaloceanspaces.com/icon_twitter_black_b9d42f456d.svg?w=48&q=75"
								alt=""
							/>
						</a>
					</li>
				</ul>
			</li>
		</ul>
	</section>
</footer>

<style>
	footer {
		width: 100%;
		min-height: 400px;
		max-height: fit-content;

		background-color: #ffeb66;
		padding-top: 15rem;

		position: relative;
	}

	footer::before {
		content: '';
		display: block;
		width: 100%;
		height: 15rem;

		position: absolute;
		top: 0;
		z-index: 2;

		background-color: #fff;
		background-image: url(../static/footer_background_yellow_01.png);
		background-image: url(https://tioc.nl/images/img_footer_background_yellow_01.png);
		background-position: bottom center;
		background-repeat: repeat-x;
	}

	section {
		width: 100%;

		display: flex;
		align-items: baseline;
		flex-wrap: wrap;

		gap: 2rem;
		margin: 0 auto;
		padding: 1rem;
        padding-right: 0;

		background-color: #ffeb66;
	}

	@media (min-width: 992px) {
		section {
			width: 100%;
			max-width: 120rem;
			max-width: 75rem;
			padding: 2rem;
			justify-content: space-between;
		}
	}

	ul {
		list-style: none;
		line-height: 2;
		font-family: Open Sans, sans-serif;
		min-width: 5rem;
		max-width: 30rem;
	}

	@media (max-width: 575.99px) {
		ul {
			width: calc(50% - 2rem);
		}
	}

	ul > li {
		width: 100%;
	}

	ul li a {
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: black;
		cursor: pointer;
		word-wrap: break-word;
	}

	ul li a:hover {
		color: #707070;
	}

	ul li p:first-child {
		font-weight: 700;
	}

	ul li ul {
		display: flex;
		flex-wrap: nowrap;
		gap: 0.5rem;
	}

	ul li ul li {
		width: 15px;
	}

	ul li ul li a img {
		inset: 0px;
		box-sizing: border-box;
		padding: 0px;
		border: none;
		margin: auto;
		display: block;
		min-width: 100%;
		max-width: 100%;
		min-height: 100%;
		max-height: 100%;
	}
</style>
