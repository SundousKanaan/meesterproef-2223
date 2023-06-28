<script lang="ts">
	let showing: string;
	let stap: string;
	let fullpoint: string;
    let statuscheck: string;

    let imagesCount: number = 1; 

	interface image {
		src: string;
	}

	// let images: image[] = [ { src: 'mob2' }, { src: 'mob3' }];

	let imageNumber: number = imagesCount;
	function setImageSource(): void {
        imagesCount += 1;
        imageNumber = imagesCount;
        console.log("imagesCount", imagesCount, imageNumber);

        if (imagesCount === 4) {
            statuscheck = "close";
            imageNumber = 1;
            imagesCount = 1;

        }
        
	}

</script>

<section class="{statuscheck}">
	<div class="mobimagecontainer">
        <!-- images src -->
		<img src="/zero-state-mob{imageNumber}.svg" alt="zero stat {stap}" class={showing} />
	</div>

	<div class="points">
		<span class={(fullpoint = 'full')} />
		<span class={(fullpoint = ' ')} />
		<span class={(fullpoint = ' ')} />
	</div>

	<div>
		<button on:click={setImageSource}>click</button>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;

		padding: 1em 0;

		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 9999999;

		/* 
        background-image: url(/theme-form.svg);
        background-position: center;
        background-repeat: no-repeat; */

		background-color: rgb(126, 126, 126);
	}

    .close{
        display: none;
    }

	.mobimagecontainer {
		width: 90%;
		height: fit-content;

		/* position: absolute; */

		display: flex;
		justify-content: center;
	}

	img {
		width: 100%;
	}

	.showing {
		display: block;
	}

	.points {
		width: 50%;
		height: 2em;
		display: flex;
		justify-content: space-around;
	}

	.points span {
		width: 2em;
		height: 2em;
		border-radius: 50%;
		border: solid 0.3em var(--blue-button);
	}

	.full {
		background-color: var(--blue-button);
	}

	/* all: unset;
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background: rgb(0 0 0 /0.5);
    display: none;
    backdrop-filter: blur(0.1em); */
</style>
