<script>
	let showToast = false;

	function showPopup() {
	showToast = true;
	setTimeout(() => {
		showToast = false;
	}, 2000);
	}
</script>

{#if showToast}
  <div class="popup">
	<p>Already given</p>
    <p>You've already given a golden medal.</p>
  </div>
{/if}

<span>
	<label for="firstplace" on:click={showPopup} on:keydown={showPopup}>
		<p>First</p>
		<span class="image" >
			<img src="/medal1.svg" alt="First place" />
		</span>
		<input type="radio" id="firstplace" name="medales" />
	</label>

	<label for="secondplace">
		<p>Second</p>
		<span class="image">
			<img src="/medal2.svg" alt="Second place" />
		</span>
		<input type="radio" id="secondplace" name="medales" />
	</label>

	<label for="thirdplace">
		<p>Third</p>
		<span class="image">
			<img src="/medal3.svg" alt="Third place" />
		</span>
		<input type="radio" id="thirdplace" name="medales" />
	</label>

	<label for="noplace">
		<p>None</p>
		<span class="image">
			<img src="/medal4.svg" alt="no place" />
		</span>
		<input type="radio" id="noplace" name="medales" checked/>
	</label>
</span>

<style>
	span {
		width: 100%;
		height: 100%;
		
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	label {
		width: calc(100% / 4.5);
		height: 100%;
		background-color: var(--primary-200);
		box-shadow: var(--shadow-cards);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		padding: 1em;
		gap: .5em;
	}

	label p {
		height: fit-content;
		text-align: center;
	}

	input[type='radio'] {
		position: absolute;
		transform: scale(0);
	}

	label:focus-within {
		border: 5px solid var(--accent-success-500);
		background-color: var(--accent-success-100);
	}
	label:has(input:checked) {
		border: 5px solid var(--accent-success-500);
		background-color: var(--accent-success-100);
	}

	.image {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	img {
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.popup {
    position: fixed;
    top: 8.5%;
    right: 1%;
	height: fit-content;
	width: fit-content;
	border-radius: 5px;
	background: var(--accent-danger-100);
	box-shadow: var(--shadow-cards);
	display: flex;
	flex-direction: column;
	z-index: 4;
  }

  .popup p{
	color: var(--accent-danger-900);
	margin-left: 5%;
  }

  .popup p:first-of-type{
	font-weight: bold;
	margin-top: 5%;
  }

  .popup p:nth-of-type(2){
	margin-bottom: 5%;
  }
</style>
