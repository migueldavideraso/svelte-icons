<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M17 3v1c-.01 3.352 -1.68 6.023 -5.008 8.014c-3.328 1.99 3.336 -2.005 .008 -.014c-3.328 1.99 -4.997 4.662 -5.008 8.014v1'></path>\n  <path d='M17 21.014v-1c-.01 -3.352 -1.68 -6.023 -5.008 -8.014c-3.328 -1.99 3.336 2.005 .008 .014c-3.328 -1.991 -4.997 -4.662 -5.008 -8.014v-1'></path>\n  <path d='M7 4h10'></path>\n  <path d='M7 20h10'></path>\n  <path d='M8 8h8'></path>\n  <path d='M8 16h8'></path>\n
</Icon>