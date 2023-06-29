<script>
    let PaidArticles = [{
        imageUrl: '/dswaab.png',
        altText: 'portretfoto van Dick Swaab',
        title: 'DICK SWAAB: THE CREATIVE BRAIN',
        writtenBy: 'TIOC',
        writtenOn: '12-12-2020',
        tags: ['Creativity', 'Education'],
        description:'Dick Swaab (1944), a distinguished Professor of Neurobiology at the University of Amsterdam, is a leading authority on the human brain. Throughout his extensive career, he authored numerous publications, received many awards and honors, and wrote several bestsellers...',
        link:'/blog/'
    },
    {
        imageUrl: '/dHeiden.png',
        altText: 'The project logo of Asics',
        title: 'DIDIER VAN DER HEIJDEN: FOOD FOR THOUGHT',
        writtenBy: 'TIOC',
        writtenOn: '12-12-2020',
        tags: ['Creativity', 'Education'],
        description:'Didier van der Heijden, a former chef turned photographer, deeply loves all things food. He is the co-owner of Twentyten, a culinary photography and film studio in Amsterdam. Didier was raised in a creative family, with a father who had a passion for photography and a musically inclined...',
        link:'/blog/'
    },
    ];
    let topArticles = [
    {
        imageUrl: '/dHeiden2.png',
        altText: 'The cover image of "The Art of Photography"',
        title: 'THE ART OF PHOTOGRAPHY: CAPTURING MOMENTS',
        writtenBy: 'Jane Doe',
        writtenOn: '05-03-2022',
        tags: ['Photography', 'Visual Arts'],
        description: 'In "The Art of Photography: Capturing Moments," Jane Doe explores the beauty and intricacies of the art form. Through her captivating prose and stunning visuals, she delves into the technical aspects of photography, as well as the emotional and creative elements that make it a powerful medium of expression...',
        link:'/blog/'
    },
    {
        imageUrl: '/dHeiden4.png',
        altText: 'The book cover of "The Power of Music"',
        title: 'THE POWER OF MUSIC: HEALING THROUGH SOUND',
        writtenBy: 'Sarah Johnson',
        writtenOn: '18-09-2021',
        tags: ['Music', 'Wellness'],
        description: 'Sarah Johnson, a renowned music therapist, takes readers on a transformative journey in "The Power of Music: Healing Through Sound." Through personal anecdotes and scientific research, Johnson explores how music can positively impact mental and physical health, providing a powerful tool for self-discovery and healing...',
        link:'/blog/'
    },
    {
        imageUrl: '/dHeiden5.png',
        altText: 'The cover art of "The Science of Happiness"',
        title: 'THE SCIENCE OF HAPPINESS: UNLOCKING JOY',
        writtenBy: 'Mark Davis',
        writtenOn: '30-07-2022',
        tags: ['Psychology', 'Self-Improvement'],
        description: 'Mark Davis, a leading psychologist, delves into the complexities of happiness in "The Science of Happiness: Unlocking Joy." Drawing on cutting-edge research and practical strategies, Davis explores the science behind happiness and offers readers actionable steps to cultivate a more fulfilling and joyful life...',
        link:'/blog/'
    }];
</script>

<section class="boxed">
    <h2>Recent</h2>
    {#each PaidArticles as article, index}
    <article>
        <a href={article.link}>
        <figure class="featured-border">
            <img src={article.imageUrl} alt={article.altText}/>
        </figure>
        <div class="group">
            <div class="detail">
              <h3>{article.title}</h3>
              <span>By: <p>{article.writtenBy}</p> On: <p>{article.writtenOn}</p></span>
              <div>
                {#each article.tags as tag}
                <span class="tag">{tag}</span>
                {/each}
              </div>
            </div>
            <p>{article.description}</p>
        </div>
        </a>
    </article>
    {/each}
    {#each topArticles as article}
    <article>
        <a href={article.link}>
            <figure class="featured-border">
            <img src={article.imageUrl} alt={article.altText}/>
        </figure>
        <div class="group">
            <div class="detail">
              <h3>{article.title}</h3>
              <span>By: <p>{article.writtenBy}</p> On: <p>{article.writtenOn}</p></span>
              <div>
                {#each article.tags as tag}
                <span class="tag">{tag}</span>
                {/each}
              </div>
            </div>
            <p>{article.description}</p>
        </div>            
    </a>
    </article>
    {/each}
</section>

<style>

    img{
        width:100%;
        transition:.2s;
    }

/*  */
.boxed {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto repeat(6, 1fr); 
    gap: 1em;
}

h2 {
    grid-area: 1 / 1 / 2 / 7;
}

.boxed article:first-of-type { grid-area: 2 / 1 / 5 / 5; } 
.boxed article:nth-of-type(2) { grid-area: 2 / 5 / 5 / 7; } 
.boxed article:nth-of-type(3){ grid-area: 5 / 1 / 8 / 3; }
.boxed article:nth-of-type(4) { grid-area: 5 / 3 / 8 / 5; } 
.boxed article:nth-of-type(5) { grid-area: 5 / 5 / 8 / 7; } 

article{
    overflow:hidden;
}

h3+span{
    font-size:.8em;
    display:flex;
    margin:.3em 0 1em 0;
}
h3+span >p:first-of-type{
    font-weight:700;
}
h3+span > p{
    padding: 0 .3em;
}
.group{
    padding: .5em;
}

.detail div{
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    gap:.5em;
    padding-bottom: 1em;
}

.tag{
    background-color: #32A5C3;
    padding: .2em .5em;
    border-radius: 5px;
    font-size:.8em;
    color:white;
}

a{
    color:unset;
}

a:hover img{
    transform:scale(1.05)
}

@media (max-width:800px){
    .boxed article:first-of-type { grid-area: 2 / 1 / 5 / 4; } 
    .boxed article:nth-of-type(2) { grid-area: 2 / 4 / 5 / 7; } 
    .boxed article:nth-of-type(3){ grid-area: 5 / 1 / 11 / 7; } 
    .boxed article:nth-of-type(4) { grid-area: 11 / 1 / 14 / 7; } 
    .boxed article:nth-of-type(5) { grid-area: 14 / 1 / 17 / 7; }
}

@media (max-width: 600px) {
    .boxed {
        grid-template-columns: 1fr;
        grid-template-rows: auto repeat(5, 1fr); 
    }
    h2 {
        grid-area: 1 / 1 / 2 / 2;
    }
    .boxed article:first-of-type { grid-area: 2 / 1 / 3 / 2; } 
    .boxed article:nth-of-type(2) { grid-area: 3 / 1 / 4 / 2; } 
    .boxed article:nth-of-type(3){ grid-area: 4 / 1 / 5 / 2; } 
    .boxed article:nth-of-type(4) { grid-area: 5 / 1 / 6 / 2; } 
    .boxed article:nth-of-type(5) { grid-area: 6 / 1 / 7 / 2; } 
}

</style>