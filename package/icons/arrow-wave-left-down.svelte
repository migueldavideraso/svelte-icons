<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M7 13.998h-4v-4'></path>\n  <path d='M21 11.998c-.887 1.284 -2.48 2.033 -4 2c-1.52 .033 -3.113 -.716 -4 -2s-2.48 -2.033 -4 -2c-1.52 -.033 -3 1 -4 2l-2 2'></path>\n
</Icon>