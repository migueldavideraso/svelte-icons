<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z'></path>\n  <path d='M6 14h12'></path>\n  <path d='M7.305 17.695l3.695 -3.695'></path>\n  <path d='M10.26 19.74l5.74 -5.74l-5.74 5.74z'></path>\n
</Icon>