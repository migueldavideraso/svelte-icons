<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n    <ellipse cx='16' cy='6' rx='5' ry='3'></ellipse>\n  <path d='M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4'></path>\n  <path d='M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4'></path>\n  <path d='M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4'></path>\n  <path d='M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5'></path>\n  <path d='M5 15v1m0 -8v1'></path>\n
</Icon>