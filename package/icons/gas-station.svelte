<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3'></path>\n  <path d='M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14'></path>\n  <line x1='3' y1='20' x2='15' y2='20'></line>\n  <path d='M18 7v1a1 1 0 0 0 1 1h1'></path>\n  <line x1='4' y1='11' x2='14' y2='11'></line>\n
</Icon>