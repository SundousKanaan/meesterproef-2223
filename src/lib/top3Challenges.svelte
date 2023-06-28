<script>
    let challenges = [
      {
        image: "/shoe.webp",
        title: "Web development",
        caption: "test",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam optio ut eaque itaque vel? Incidunt a vero qui voluptate dolorem, temporibus iusto voluptatum modi excepturi praesentium autem ut similique reprehenderit unde voluptatem saepe nemo, deleniti omnis minus laboriosam laudantium nam.",
        participants: 250
      },
      {
        image: "/eye.png",
        title: "Web development",
        caption: "test",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam optio ut eaque itaque vel? Incidunt a vero qui voluptate dolorem, temporibus iusto voluptatum modi excepturi praesentium autem ut similique reprehenderit unde voluptatem saepe nemo, deleniti omnis minus laboriosam laudantium nam.",
        participants: 250
      },
      {
        image: "/beans.png",
        title: "Web development",
        caption: "test",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam optio ut eaque itaque vel? Incidunt a vero qui voluptate dolorem, temporibus iusto voluptatum modi excepturi praesentium autem ut similique reprehenderit unde voluptatem saepe nemo, deleniti omnis minus laboriosam laudantium nam.",
        participants: 250
      }
    ];
  </script>

<section class="boxed">
    <h2>Top 3 challenges</h2>
    <span>Join the top 3 weekly challenges</span>
    {#each challenges as challenge}
      <article>
        <figure>
          <img src={challenge.image} alt=""/>
          <figcaption>
            <!-- Omit the inline SVG's here and use CSS or external SVG files instead to make it more concise -->
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
              <div>
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
              </div>
              <p>{challenge.participants}</p>
            </div>
          </figcaption>
        </figure>
        <div class="group">
          <div class="detail">
            <h3>{challenge.title}</h3>
            <caption>{challenge.caption}</caption>
          </div>
          <p>{challenge.description}</p>
          <div class="side-container">
            <a href="#" class="meerInformatie">Meer informatie</a>
            <a href="#" class="enroll">Enroll</a>
            <em>deadline:</em>
          </div>
        </div>
      </article>
    {/each}
  </section>

  <style>
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
.side-container {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}

.group > p {
    margin-bottom: 1em;
}

.boxed:first-of-type {
    margin-top: 4em;
}

.boxed:nth-child(2) {
    display: grid;
    grid-template-columns: 2fr 1fr;
}

.boxed > h2{
    width: 100%;
}

h3 {
    order: -1;
}

section > span:first-of-type{
    width:100%;
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
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    min-width:30%;
}

a.meerInformatie {
    padding: 1em;
    border: 0.1875em solid black;
    background-color: white;
    width: 100%;
    text-decoration: none;
    color: black;
    text-align: center;
}

a.enroll {
    padding: 1em;
    background-color: #ffeb66;
    width: 100%;
    text-decoration: none;
    color: black;
    text-align: center;
    box-shadow: 0px 0.4px 8px rgba(0, 0, 0, 0.1);
}
article figure img {
    height: 100%;
    width: 100%;
}

article {
    background-color: white;
    overflow: hidden;

}

article figure {
    position: relative;
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
    cursor: pointer;
}

figure{
    overflow:hidden;
    position:relative;
    display:flex;
}
figure img{
    transition:.2s;
    object-fit:cover;
}
figure img:hover{
    transform:scale(1.15)
}
</style>