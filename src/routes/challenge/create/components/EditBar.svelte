<script lang="ts">

</script>

<section>
	<button id="unpublish">Unpublish</button>
	<div>
	<button id="save-draft">Save Draft</button>
	<button id="preview">Preview</button>
	<button id="publish">Publish</button>

	</div>
</section>

<style>
	section {
		background-color: white;
		width: 100%;
		height: fit-content;
	}

	section > div {
		float: right;
	}

	button {
		background-color: #D9D9D9;
		border: none;
		border-radius: 5px;
		padding: 0.5em 1em;
		margin: 1em;
		cursor: pointer;
	}

	#unpublish {
		background-color: #F7CE46;
	}

	#publish {
		background-color: #21BDE5;
	}
</style>