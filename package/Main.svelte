<script>

	import { onMount } from 'svelte'

	export let name = ''
	export let size = 15
	export let strokeSize = 3
	export let stroke = '#2c3e50'

	let IconComponent = null

	onMount(async () => {
		IconComponent = (await import(`./icons/${name}.svelte`)).default
	})

</script>


<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size} height={size} viewBox="0 0 24 24" stroke-width={strokeSize}
	stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round"
>
	<svelte:component this={IconComponent} />
</svg>
