<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5'></path>\n  <line x1='5.63' y1='7.16' x2='5.63' y2='7.17'></line>\n  <line x1='4.06' y1='11' x2='4.06' y2='11.01'></line>\n  <line x1='4.63' y1='15.1' x2='4.63' y2='15.11'></line>\n  <line x1='7.16' y1='18.37' x2='7.16' y2='18.38'></line>\n  <line x1='11' y1='19.94' x2='11' y2='19.95'></line>\n
</Icon>