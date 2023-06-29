<script>
	import '../app.css';
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
    import { goto } from '$app/navigation';

    function navigateTo(route) {
        goto(route);
    }
</script>

<Header />



<slot />

<Footer />