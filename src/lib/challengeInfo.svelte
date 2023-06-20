<script>

</script>

<section class="challenge-info">
    <article>
        <h2>About the Immersive Retail Experience Challenge</h2>
        <p>Are you interested in the exciting world of web development? Whether you're a beginner or have some experience, it's crucial to be aware of the potential risks that can lurk in the shadows of the internet. One such risk is known as XSS (Cross-Site Scripting) vulnerability..</p>
    </article>
    <aside>
        <ul>
            <li>
                <div>
                    <img src="/skill.svg" alt=""/>
                </div>
                <div class="wrapper">
                    <h3>Skill level</h3>
                    <h4>Intermediate</h4>
                </div>
            </li>

            <li>
                <div>
                    <img src="/deadline.svg" alt=""/>
                </div>
                <div class="wrapper">
                    <h3>Deadline</h3>
                    <h4>17-07-2023</h4>
                </div>
            </li>

            <li>
                <div>
                    <img src="/price.svg" alt=""/>
                </div>
                <div class="wrapper">
                    <h3>Price</h3>
                    <h4>Paid internship at ASICS</h4>
                </div>
            </li>
        </ul>
    </aside>
    <article>
        <h2>Skills you’ll have mastered after the challenge</h2>
        <ul>
            <li>
                <img src="/klodder.svg" alt=""/>
                <p>UX design</p>
            </li>
            <li>
                <img src="/klodder.svg" alt=""/>
                <p>Communication</p>
            </li>
            <li>
                <img src="/klodder.svg" alt=""/>
                <p>Coding</p>
            </li>
            <li>
                <img src="/klodder.svg" alt=""/>
                <p>Presenting</p>
            </li>
        </ul>
    </article>
</section>

<style>
    .challenge-info {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin: 0 auto;
        width: 80%;
        padding: 6em;
    }

    .challenge-info article:first-of-type {
        flex: 50%;
    }

    .challenge-info article:first-of-type p {
        margin-top: .5em;
        width: 90%;
    }

    .challenge-info article:last-of-type {
        width: 100%;
    }

    .challenge-info article:last-of-type h2 {
        width: 14em;
    }

    .challenge-info article:last-of-type ul {
        display: flex;
        flex-wrap: wrap;
        margin-top: .4em;
        width: 25em;
    }

    .challenge-info article:last-of-type ul li {
        display: flex;
        width: 10em;
        margin-top: 1em;
        align-items: center;
        margin-right: 2em;
    }

    .challenge-info article:last-of-type ul li img {
        width: 1.5em;
        margin-right: 1em;
    }

    .challenge-info aside {
        display: flex;
        flex: 50%;
        justify-content: center;
    }

    .challenge-info aside ul li {
        margin-bottom: .5em;
        margin-top: .5em;
        display: flex;
    }

    .challenge-info aside ul li .wrapper h3 {
        font-weight: bold;
    }

    .challenge-info aside ul li .wrapper h4 {
        font-weight: normal;
    }

    .challenge-info aside ul li > div:nth-of-type(1) {
        margin-right: .5em;
        background-image: url('/klodder.svg');
        background-repeat: no-repeat;
    }
</style>