<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='4' width='18' height='4' rx='2'></rect>\n  <path d='M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10'></path>\n  <line x1='10' y1='12' x2='14' y2='12'></line>\n
</Icon>