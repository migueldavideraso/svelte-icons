<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6.1 15h11.8'></path>\n  <path d='M14 3v7.342a6.002 6.002 0 0 1 1.318 10.658h-6.635a6.002 6.002 0 0 1 1.317 -10.66v-7.34h4z'></path>\n  <path d='M9 3h6'></path>\n
</Icon>