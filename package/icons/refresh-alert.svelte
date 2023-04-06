<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4'></path>\n  <path d='M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4'></path>\n  <line x1='12' y1='9' x2='12' y2='12'></line>\n  <line x1='12' y1='15' x2='12.01' y2='15'></line>\n
</Icon>