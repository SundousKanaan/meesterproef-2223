<script lang="ts">
	import Stapone from './components/Stapone.svelte';
	import Staptwo from './components/Staptwo.svelte';
    import Stapthree from './components/Stapthree.svelte';
    import Stapfour from './components/Stapfour.svelte'
	import Buttons from '$lib/Buttons.svelte';
</script>

<section>
	<div class="process-area">process area</div>
	<h1>Create your challenge</h1>
	<div>
		1
		<Stapone />
	</div>

	<div>
		2
		<Staptwo />
	</div>

    <div>
        3
        <Stapthree />
    </div>

    <div>
        4
        <Stapfour />
    </div>

</section>

<style>
	section {
		width: 90%;
		padding-top: 1em;

		justify-self: center;

		border-bottom: solid 0.1em black;
	}

	h1 {
		font-size: 2em;
	}

	.process-area {
		border: solid 0.1em black;
		text-align: center;
	}

	@media (min-width: 1200px) {
        section{
            width: 60%;
        }
	}
</style>
