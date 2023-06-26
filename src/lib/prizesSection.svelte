<script lang="ts">
    import { onMount } from 'svelte';
  
    let items = [
      { isExpanded: false },
      { isExpanded: false },
      { isExpanded: false } 
    ];
  
    const labels = ['First', 'Second', 'Third'];
  
    function toggleExpand(index: number) {
      items[index].isExpanded = !items[index].isExpanded;
    }
  
    onMount(() => {
      items.forEach(item => {
        item.isExpanded = false;
      });
    });
</script>

<section class="prizes">
    <div>
        <div>
            <img src="/hero_no_content.jpg" alt="" />
        </div>
        <ul>
            {#each items as item, index}
              <li>
                <div>
                  <img src="/medal.svg" alt="" />
                </div>
                <div>
                  <span>{labels[index]} place</span>
                  <h2 class:expanded={item.isExpanded} on:click={() => toggleExpand(index)}>Cooperate with us</h2>
                </div>
                {#if item.isExpanded}
                  <p>Description of the prize</p>
                {/if}
              </li>
            {/each}
          </ul>
    </div>
</section>

<style>
    h2 {
        cursor: pointer;
    }

    .prizes div ul li div h2.expanded:last-of-type:after {
        background-image: url('/arrow-down.svg');
    }

    .prizes {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 3em;
    }

    .prizes > div {
        display: flex;
        gap: 2em;
    }

    .prizes > div > div:first-of-type {
        width: 100%;
        height: 40dvh;
        max-width: 40em;
    }

    .prizes > div > div:first-of-type img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .prizes div ul {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .prizes div ul li {
        display: grid;
        grid-template-columns: .1fr 1fr;
        gap: 1em;
    }

    .prizes div ul li div:first-of-type {
        background-image: url('/klodder.svg');
        background-size: contain;
        background-position: right;
        background-repeat: no-repeat;
    }

    .prizes div ul li div:first-of-type {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
    }

    .prizes div ul li p {
        grid-column: 1 / 3;
        grid-row: 3 / 3;
    }

    .prizes div ul li div:last-of-type {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
        align-self: center;
    }

    .prizes div ul li:nth-of-type(2) div:last-of-type h2 {
        font-size: 1.3em;
    }

    .prizes div ul li:nth-of-type(3) div:last-of-type h2 {
        font-size: 1em;
    }

    .prizes div ul li:nth-of-type(1) div:first-of-type {
        width: 7em;
    }

    .prizes div ul li:nth-of-type(2) div:first-of-type {
        width: 6em;
    }

    .prizes div ul li:nth-of-type(3) div:first-of-type {
        width: 5em;
    }

    .prizes div ul li div:first-of-type {
        display: flex;
        justify-content: flex-end;
    }

    .prizes div ul li div:last-of-type {
        position: relative;
    }

    .prizes div ul li div h2:last-of-type:after {
        content: '';
        position: absolute;
        background-image: url('/arrow-side.svg');
        background-size: contain;
        margin-left: 2%;
    }

    .prizes div ul li:nth-of-type(1) div h2:last-of-type:after {
        width: 20px;
        height: 20px;
        margin-top: 4%;
    }

    .prizes div ul li:nth-of-type(2) div h2:last-of-type:after {
        width: 15px;
        height: 15px;
        margin-top: 4%;
    }

    .prizes div ul li:nth-of-type(3) div h2:last-of-type:after {
        width: 15px;
        height: 15px;
        margin-top: 2%;
    }

    .prizes div ul li:nth-of-type(1) div img {
        width: 100%;
    }

    .prizes div ul li:nth-of-type(2) div img {
        width: 75%;
    }

    .prizes div ul li:nth-of-type(3) div img {
        width: 50%;
    }

    @media (max-width: 60em) { 
        .prizes {
            width: 100%;
            padding: 1em;
        }

        .prizes div {
            flex-direction: column;
            flex-wrap: wrap;
        }

        .prizes div > .projectImage {
            margin: 0 auto;
            margin-top: 1em;
            width: 90%;
        }

        .prizes div ul li:not(:first-of-type) {
            margin-top: 1em;
        }

        .prizes div ul li:nth-of-type(1) > div:first-of-type {
            margin-right: 0em;
        }

        .prizes div ul li:nth-of-type(2) > div:first-of-type {
            margin-right: 1em;
        }

        .prizes div ul li:nth-of-type(3) > div:first-of-type {
            margin-right: 2em;
        }

        .prizes div ul li div:first-of-type {
            align-items: flex-end;
        }
    }
</style>