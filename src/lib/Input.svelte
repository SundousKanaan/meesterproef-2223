<script lang="ts">
	export let placeholder_Text: string = 'Write somthing ...';

	export let inputType: 'text' | 'date' | 'url' | 'textarea';

	export let timelineCheck: string =" ";
</script>

<input type={inputType} class={inputType}{timelineCheck} placeholder={placeholder_Text} required/>

<style>
	input,
	.text {
		width: 100%;
		height: 3em;
		padding: 0.5em;
		font-size: 1em;
		border: solid 0.1em rgba(128, 128, 128, 0.39);
	}

	.date {
		width: fit-content;
	}

	.url {
		text-decoration: underline;
	}
</style>
