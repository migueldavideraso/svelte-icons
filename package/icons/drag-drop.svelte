<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2'></path>\n  <path d='M13 13l9 3l-4 2l-2 4l-3 -9'></path>\n  <line x1='3' y1='3' x2='3' y2='3.01'></line>\n  <line x1='7' y1='3' x2='7' y2='3.01'></line>\n  <line x1='11' y1='3' x2='11' y2='3.01'></line>\n  <line x1='15' y1='3' x2='15' y2='3.01'></line>\n  <line x1='3' y1='7' x2='3' y2='7.01'></line>\n  <line x1='3' y1='11' x2='3' y2='11.01'></line>\n  <line x1='3' y1='15' x2='3' y2='15.01'></line>\n
</Icon>