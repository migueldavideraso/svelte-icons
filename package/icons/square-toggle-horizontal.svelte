<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M22 12h-20'></path>\n  <path d='M4 14v-8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8'></path>\n  <path d='M18 20a2 2 0 0 0 2 -2'></path>\n  <path d='M4 18a2 2 0 0 0 2 2'></path>\n  <line x1='14' y1='20' x2='10' y2='20'></line>\n
</Icon>