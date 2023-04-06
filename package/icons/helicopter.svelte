<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 10l1 2h6'></path>\n  <path d='M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2z'></path>\n  <line x1='13' y1='9' x2='13' y2='6'></line>\n  <line x1='5' y1='6' x2='20' y2='6'></line>\n  <path d='M15 9.1v3.9h5.5'></path>\n  <line x1='15' y1='19' x2='15' y2='16'></line>\n  <line x1='19' y1='19' x2='11' y2='19'></line>\n
</Icon>