<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 12v4h16v-4z'></path>\n  <path d='M6 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6'></path>\n  <path d='M14 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6'></path>\n
</Icon>