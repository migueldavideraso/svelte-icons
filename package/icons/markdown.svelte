<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='5' width='18' height='14' rx='2'></rect>\n  <path d='M7 15v-6l2 2l2 -2v6'></path>\n  <path d='M14 13l2 2l2 -2m-2 2v-6'></path>\n
</Icon>