<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M21 13c0 -3.87 -3.37 -7 -10 -7h-8'></path>\n  <path d='M3 15h16a2 2 0 0 0 2 -2'></path>\n  <path d='M3 6v5h17.5'></path>\n  <line x1='3' y1='10' x2='3' y2='14'></line>\n  <line x1='8' y1='11' x2='8' y2='6'></line>\n  <line x1='13' y1='11' x2='13' y2='6.5'></line>\n  <line x1='3' y1='19' x2='21' y2='19'></line>\n
</Icon>