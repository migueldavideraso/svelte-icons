<script>

	import Icon from './Icon.svelte'
	import ChevronRightIcon from '@migueleraso/svelte-icons/icons/chevron-right.svelte'
	import CheckIcon from '@migueleraso/svelte-icons/icons/check.svelte'
	import XIcon from '@migueleraso/svelte-icons/icons/x.svelte'
	import TrashIcon from '@migueleraso/svelte-icons/icons/trash.svelte'
	import SearchIcon from '@migueleraso/svelte-icons/icons/search.svelte'

</script>

<main>

	<div class="card">

		<section class="header_container">
			Default Settings
		</section>

		<section class="card_container">

			<Icon
				name="chevron-right"
				strokeSize={1}
				Component={ChevronRightIcon}
			/>

			<Icon name="check" Component={CheckIcon} />

			<Icon name="x" Component={XIcon} />

			<Icon name="trash" Component={TrashIcon} />

			<Icon name="search" Component={SearchIcon} />

		</section>

	</div>

</main>

<style>

	main {
		flex-direction: column;
		display: flex;
		grid-gap: 20px;
		margin: 20px auto;
		width: min(100% - 40px, 800px);
	}

	.card {
		background-color: #fff;
		flex-direction: column;
		display: flex;
		height: 500px;
		padding: 10px;
		grid-gap: 10px;
		border-radius: 5px;
	}

	.header_container {
		font-size: 1.5rem;
		font-weight: 600;
	}
	
	.card_container {
		place-content: baseline;
		height: inherit;
		overflow: auto;
		display: grid;
		flex: auto;
		padding: 10px;
		grid-gap: 20px;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	}

</style>
