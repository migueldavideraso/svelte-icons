<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='10' r='4'></circle>\n  <path d='M6.75 16a8.015 8.015 0 1 0 9.25 -13'></path>\n  <line x1='12' y1='18' x2='12' y2='22'></line>\n  <line x1='8' y1='22' x2='16' y2='22'></line>\n
</Icon>