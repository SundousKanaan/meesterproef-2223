<script lang="ts">
	let skillsList: {
		skillName: string;
	}[] = [
		{
			skillName: ''
		}
	];
	let inputElements: HTMLInputElement[] = [];

	async function handleInput(e: Event, index: number) {
		e.preventDefault();

		const val = skillsList[index].skillName;

		if (val === '') {
			if (skillsList.length > 1) {
				skillsList.splice(index, 1);
				inputElements[index - 1].focus();
			}
		} else if (index === skillsList.length - 1) {
			skillsList.push({
				skillName: ''
			});
		}
	}

	async function handleInputKeyPress(e: KeyboardEvent, index: number) {
		const shiftUpwards = () => {
			if (inputElements[index - 1]) {
				inputElements[index - 1].focus();
			}
		};

		const shiftDownwards = () => {
			if (index == skillsList.length - 1) {
				skillsList.push({
					skillName: ''
				});
			} else if (inputElements[index + 1]) {
				inputElements[index + 1].focus();
			}
		};

		switch (e.key) {
			case 'Enter': {
				e.preventDefault();

				if (index == skillsList.length - 1) {
					skillsList.push({
						skillName: ''
					});
				} else if (inputElements[index + 1]) {
					inputElements[index + 1].focus();
				}
				break;
			}
			case 'ArrowUp': {
				e.preventDefault();
				shiftUpwards();
				break;
			}
			case 'ArrowDown': {
				e.preventDefault();
				shiftDownwards();
				break;
			}
			case 'Backspace': {
				if (skillsList[index].skillName === '') {
					e.preventDefault();
					shiftUpwards();
				}
				break;
			}
		}
	}

	async function handleButton(e: Event, index: number) {
		e.preventDefault();

	}

	function addElement(node: HTMLInputElement) {
		inputElements.push(node);
		inputElements = inputElements;

		return {
			destroy() {
				inputElements.splice(inputElements.indexOf(node), 1);
				inputElements = inputElements;
			}
		};
	}
</script>

<section class="skill-selector">
	<ul>
		{#each skillsList as skill}
			<li class="skill">
				<img src="/instagram-icon.svg" alt="Placeholder logo" />
				<input
					bind:value={skill.skillName}
					on:input={(e) => {
						handleInput(e, skillsList.indexOf(skill));
					}}
					on:keydown={(e) => {
						handleInputKeyPress(e, skillsList.indexOf(skill));
					}}
					use:addElement
					type="text"
					placeholder="Add a new skill..."
				/>
				<button
					on:click={(e) => {
						handleButton(e, skillsList.indexOf(skill));
					}}>&Cross;</button
				>
			</li>
		{/each}
	</ul>
</section>

<style>
	.skill-selector {
		border: black 1px dashed;
		padding: 1em;
	}

	.skill {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5em;

		border-bottom: black 1px solid;
		padding-bottom: 0.2em;
	}

	input {
		border: none;
		background-color: transparent;
		width: 100%;
	}

	button {
		border: none;
		background-color: transparent;
		cursor: pointer;
		color: oklch(0.9 0.6 70);
		font-size: 1.5em;
		margin-right: 0.5em;
	}
</style>
