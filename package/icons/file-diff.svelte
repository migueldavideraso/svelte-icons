<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M14 3v4a1 1 0 0 0 1 1h4'></path>\n  <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z'></path>\n  <line x1='12' y1='10' x2='12' y2='14'></line>\n  <line x1='10' y1='12' x2='14' y2='12'></line>\n  <line x1='10' y1='17' x2='14' y2='17'></line>\n
</Icon>