

<script>

	export let Component = null
	export let name = ''
	export let size = null
	export let strokeSize = null
	export let stroke = null

</script>


<div class="icon">

	<header>
		{name}
	</header>

	<main>
		<Component
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
