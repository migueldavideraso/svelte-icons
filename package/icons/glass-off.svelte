<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='8' y1='21' x2='16' y2='21'></line>\n  <line x1='12' y1='15' x2='12' y2='21'></line>\n  <path d='M7 3h10l1 7a4.511 4.511 0 0 1 -1.053 2.94m-2.386 1.625a7.48 7.48 0 0 1 -2.561 .435c-3.314 0 -6 -1.988 -6 -5l.5 -3.495'></path>\n  <line x1='3' y1='3' x2='21' y2='21'></line>\n
</Icon>