<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M14 3v4a1 1 0 0 0 1 1h4'></path>\n  <path d='M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5'></path>\n  <circle cx='16.5' cy='17.5' r='2.5'></circle>\n  <line x1='18.5' y1='19.5' x2='21' y2='22'></line>\n
</Icon>