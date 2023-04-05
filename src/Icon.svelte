<script>

	import { Icon } from '../package/index.js'

	export let name = ''
	export let size = 45
	export let strokeSize = 3
	export let stroke = "#2c3e50"

</script>


<div class="icon">

	<header>
		{name}
	</header>

	<main>
		<Icon
			{name}
			{size}
			{strokeSize}
			{stroke}
		/>
	</main>

</div>


<style>

	.icon {
		background-color: #f8f6fc;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, .2);
	}

	header {
		text-align: center;
		font-size: 14px;
		margin-bottom: 10px;
		color: rgba(0, 0, 0, .8);
	}

	main {
		place-content: center;
		display: grid;
	}

</style>
