<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='12' y1='2' x2='12' y2='22'></line>\n  <path d='M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8'></path>\n  <path d='M20 6a2 2 0 0 0 -2 -2'></path>\n  <path d='M18 20a2 2 0 0 0 2 -2'></path>\n  <line x1='20' y1='10' x2='20' y2='14'></line>\n
</Icon>