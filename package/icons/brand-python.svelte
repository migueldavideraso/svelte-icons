<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3'></path>\n  <path d='M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3'></path>\n  <path d='M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4'></path>\n  <line x1='11' y1='6' x2='11' y2='6.01'></line>\n  <line x1='13' y1='18' x2='13' y2='18.01'></line>\n
</Icon>