
<script>
    const data = [
      {image: "/shoe.webp", challenge: "Schoen tekenen", creator: "John", link: "/challenges/schoen-tekenen"},
      {image: "/eye.png", challenge: "Ogen tekenen", creator: "Jane", link: "/challenges/ogen-tekenen"},
      {image: "/beans.png", challenge: "Bonen tekenen", creator: "Joan", link: "/challenges/bonen-tekenen"},
      {image: "/shoe.webp", challenge: "Schoen schilderen", creator: "James", link: "/challenges/schoen-schilderen"},
      {image: "/eye.png", challenge: "Ogen schetsen", creator: "Jill", link: "/challenges/ogen-schetsen"},
      {image: "/beans.png", challenge: "Bonen beeldhouwen", creator: "Jerry", link: "/challenges/bonen-beeldhouwen"},
      {image: "/shoe.webp", challenge: "Schoen ontwerpen", creator: "Jenny", link: "/challenges/schoen-ontwerpen"},
      {image: "/eye.png", challenge: "Ogen fotograferen", creator: "Jack", link: "/challenges/ogen-fotograferen"},
      {image: "/beans.png", challenge: "Bonen printen", creator: "Jacob", link: "/challenges/bonen-printen"},
      {image: "/shoe.webp", challenge: "Schoen animeren", creator: "Jasmine", link: "/challenges/schoen-animeren"},
      {image: "/eye.png", challenge: "Ogen digitaliseren", creator: "Jaden", link: "/challenges/ogen-digitaliseren"},
      {image: "/beans.png", challenge: "Bonen grafisch ontwerpen", creator: "Julia", link: "/challenges/bonen-grafisch-ontwerpen"},
      {image: "/shoe.webp", challenge: "Schoen beeldhouwen", creator: "Jordan", link: "/challenges/schoen-beeldhouwen"},
      {image: "/eye.png", challenge: "Ogen illustreren", creator: "Jenna", link: "/challenges/ogen-illustreren"},
      {image: "/beans.png", challenge: "Bonen tekenen", creator: "Joe", link: "/challenges/bonen-tekenen-2"},
      {image: "/shoe.webp", challenge: "Schoen schilderen", creator: "Janet", link: "/challenges/schoen-schilderen-2"},
      {image: "/eye.png", challenge: "Ogen schetsen", creator: "Jeff", link: "/challenges/ogen-schetsen-2"},
      {image: "/beans.png", challenge: "Bonen beeldhouwen", creator: "Josie", link: "/challenges/bonen-beeldhouwen-2"},
    ];
  </script>

<section>
    <h2>Featured work</h2>
    <ul>
        <!-- sveltekit each item in array becomes a listitem -->
        {#each data as item}
        <li>
            <a href={item.link}>
                <img src={item.image} alt={item.challenge} />
                <h3>{item.challenge}</h3>
                <p>by {item.creator}</p>
            </a>
        </li>
        {/each}
    </ul>
</section>