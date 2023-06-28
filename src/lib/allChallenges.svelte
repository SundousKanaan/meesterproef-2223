<script>
	const data = [
	  {image: "/shoe.webp", challenge: "Schoen tekenen", creator: "John"},
	  {image: "/eye.png", challenge: "Ogen tekenen", creator: "Jane"},
	  {image: "/beans.png", challenge: "Bonen tekenen", creator: "Joan"},
	  {image: "/shoe.webp", challenge: "Schoen schilderen", creator: "James"},
	  {image: "/eye.png", challenge: "Ogen schetsen", creator: "Jill"},
	  {image: "/beans.png", challenge: "Bonen beeldhouwen", creator: "Jerry"},
	  {image: "/shoe.webp", challenge: "Schoen ontwerpen", creator: "Jenny"},
	  {image: "/eye.png", challenge: "Ogen fotograferen", creator: "Jack"},
	  {image: "/beans.png", challenge: "Bonen printen", creator: "Jacob"},
	  {image: "/shoe.webp", challenge: "Schoen animeren", creator: "Jasmine"},
	  {image: "/eye.png", challenge: "Ogen digitaliseren", creator: "Jaden"},
	  {image: "/beans.png", challenge: "Bonen grafisch ontwerpen", creator: "Julia"},
	  {image: "/shoe.webp", challenge: "Schoen beeldhouwen", creator: "Jordan"},
	  {image: "/eye.png", challenge: "Ogen illustreren", creator: "Jenna"},
	  {image: "/beans.png", challenge: "Bonen tekenen", creator: "Joe"},
	  {image: "/shoe.webp", challenge: "Schoen schilderen", creator: "Janet"},
	  {image: "/eye.png", challenge: "Ogen schetsen", creator: "Jeff"},
	  {image: "/beans.png", challenge: "Bonen beeldhouwen", creator: "Josie"},
	];

	let visibleData = data.slice(0, 9);

function loadMore() {
  visibleData = data.slice(0, visibleData.length + 9);
}
  </script>

<section class="boxed">
    <h2>All challenges</h2>
    <p>Browse through the challenges</p>
</section>

<section class="boxed">
    <div class="categories">
        <select class="meerInformatie">
            All categories
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    </div>
    <div class="search">
        <input type="search" placeholder="Find entries"/>
    </div>
</section>

<section class="boxed">
	{#each visibleData as item}
	  <article class="challenge-block">
		<figure>
		  <img src={item.image} alt="" />
		  <figcaption>
			<div class="bookmark">
				<svg
				width="33"
				height="32"
				viewBox="0 0 33 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
		>
			<path
					d="M28.1197 6.14666C27.4387 5.46533 26.6301 4.92485 25.7401 4.5561C24.8502 4.18735 23.8963 3.99756 22.933 3.99756C21.9697 3.99756 21.0158 4.18735 20.1259 4.5561C19.2359 4.92485 18.4273 5.46533 17.7463 6.14666L16.333 7.55999L14.9197 6.14666C13.5441 4.77107 11.6784 3.99827 9.733 3.99827C7.78763 3.99827 5.92193 4.77107 4.54634 6.14666C3.17075 7.52225 2.39795 9.38795 2.39795 11.3333C2.39795 13.2787 3.17075 15.1444 4.54634 16.52L5.95967 17.9333L16.333 28.3067L26.7063 17.9333L28.1197 16.52C28.801 15.839 29.3415 15.0304 29.7102 14.1405C30.079 13.2505 30.2688 12.2966 30.2688 11.3333C30.2688 10.37 30.079 9.41613 29.7102 8.52619C29.3415 7.63624 28.801 6.82767 28.1197 6.14666V6.14666Z"
					stroke="black"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
			/>
		</svg>
			</div>
			<div class="deelnemers">
				<svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
      />
      <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
      />
              </svg>
			  <p>250</p>
			</div>
		  </figcaption>
		  <div class="overlay">
			<h4>{item.challenge}</h4>
			<p>{item.creator}</p>
		  </div>
		</figure>
	  </article>
	{/each}
	<a href="#" on:click|preventDefault={loadMore} class="laadMeer">Load more challenges</a>
  </section>

<style>
	.boxed:last-child > a {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 15px 20px;
		gap: 8px;

        background: white;
        border: 1px solid #000000;
        /* Shadow (XS) */

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 19.2px;
        line-height: 22px;
        /* identical to box height, or 115% */

        text-transform: capitalize;

        color: black;
    }

    .boxed:last-child > a:hover {
        background: #d9d9d9;
    }

    em {
        font-size: 0.8em;
        color: #73738c;
    }

    .group {
        padding: 1em;
        gap: 0.5em;
        display: flex;
        flex-direction: column;
    }

    .detail {
        gap: 0.5em;
    }

    caption {
        color: #6e98ff;
        font-weight: 600;
        font-size: 0.75em;
    }

    section:first-of-type > article:first-of-type > .container > a {
        padding: 1em;
        border: 0.1875em solid black;
        background-color: white;
        width: 12em;
        text-decoration: none;
        color: black;
        text-align: center;
    }

    .main-container {
        display: flex;
        gap: 0.5em;
    }

    .side-container {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .group > p {
        margin-bottom: 1em;
    }

    .container a {
        width: 100%;
        padding: 0.5em;
        gap: 0.5em;
    }

    .container a {
        margin-top: 8px;
    }

    .boxed:first-of-type {
        margin-top: 4em;
    }

    .boxed > h2,
    .boxed > p {
        width: 100%;
    }

    h3 {
        order: -1;
    }

    .boxed {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: row;
        gap: 1em;
    }

    .boxed article {
        flex: 1 1 30%;
    }

    a.laadMeer {
        padding: 1em;
        background-color: slategray;
        text-decoration: none;
        color: black;
        text-align: center;
        justify-content: center;
    }

    a.enroll {
        padding: 1em;
        background-color: black;
        width: 100%;
        text-decoration: none;
        color: white;
        text-align: center;
    }

    .boxed:first-of-type {
        padding: 1em;
        border: 0.1875em solid black;
        background-color: white;
        width: 50%;
        text-decoration: none;
        color: black;
        text-align: center;
    }

    article figure img {
        background: gray;
        width: 100%;
        display: block;
    }

    article {
        background-color: white;
        box-shadow: 0px 0.4px 8px rgba(0, 0, 0, 0.1);
    }

    article figure {
        position: relative;
    }

    figcaption {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .deelnemers {
        position: absolute;
        top: 1em;
        left: 1em;
        padding: 0.5em;
        background: white;
        font-size: 1em;
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        box-shadow: 0px 0.4px 8px rgba(0, 0, 0, 0.1);
    }

    .bookmark {
        position: absolute;
        top: 1em;
        right: 1em;
        padding: 0.5em;
        background: white;
        font-size: 1em;
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        box-shadow: 0px 0.4px 8px rgba(0, 0, 0, 0.1);
    }
	.search > input {
		padding: 12px;
		height: 50px;
		background: #ffffff;
		border: 1px solid #000000;
		background: #ffffff;
		border: 1px solid #000000;
	}

    /* tekst in de challenge blokken */
    .challenge-block {
        position: relative;
    }

    .challenge-block figure {
        position: relative;
    }

    .challenge-block .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 10px;
        color: white;
        width: 100%;
    }

	.boxed {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		flex-direction: row;
		gap: 1em;
	}

	.boxed article {
		flex: 1 1 17em;
		min-width:30%;
	}

    .challenge-block {
        margin-bottom: 0.5em;
        width: 100%;
    }

    .challenge-block {
        height: 100%;
        background-color: #edf2f2;
        box-shadow: none;
    }

    .categories > select {
        color: black;
        padding: 11px 56px;
        gap: 8px;

        width: 251px;
        height: 48px;
        border: 1px solid #000000;
        cursor: pointer;

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;

    }

    .categories {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
	}

	.bookmark {
		position: absolute;
		top: 1em;
		right: 1em;
		padding: 0.5em;
		background: white;
		font-size: 1em;
		display: flex;
		flex-direction: row;
		gap: 0.5em;
		box-shadow: 0px 0.4px 8px rgba(0, 0, 0, 0.1);
	}

    .categories select:hover {
        background-color: #d9d9d9;

    }

    .search > input {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        gap: 16px;
        width: 913px;
        height: 50px;

        background: #ffffff;
        border: 1px solid #000000;
    }

	.challenge-block {
		height: 100%;
		background-color: #edf2f2;
		box-shadow: none;
	}
</style>

