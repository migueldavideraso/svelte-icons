<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='4' x2='21' y2='4'></line>\n  <path d='M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10'></path>\n  <line x1='12' y1='16' x2='12' y2='20'></line>\n  <line x1='9' y1='20' x2='15' y2='20'></line>\n  <path d='M8 12l3 -3l2 2l3 -3'></path>\n
</Icon>