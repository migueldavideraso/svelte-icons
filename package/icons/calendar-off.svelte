<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.175 -1.823m3.825 -.177h9a2 2 0 0 1 2 2v9'></path>\n  <line x1='16' y1='3' x2='16' y2='7'></line>\n  <line x1='8' y1='3' x2='8' y2='4'></line>\n  <path d='M4 11h7m4 0h5'></path>\n  <line x1='11' y1='15' x2='12' y2='15'></line>\n  <line x1='12' y1='15' x2='12' y2='18'></line>\n  <line x1='3' y1='3' x2='21' y2='21'></line>\n
</Icon>