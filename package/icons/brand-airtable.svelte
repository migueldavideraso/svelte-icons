<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 10v8l7 -3v-2.6z'></path>\n  <path d='M3 6l9 3l9 -3l-9 -3z'></path>\n  <path d='M14 12.3v8.7l7 -3v-8z'></path>\n
</Icon>