<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5'></path>\n  <line x1='18.37' y1='7.16' x2='18.37' y2='7.17'></line>\n  <line x1='13' y1='19.94' x2='13' y2='19.95'></line>\n  <line x1='16.84' y1='18.37' x2='16.84' y2='18.38'></line>\n  <line x1='19.37' y1='15.1' x2='19.37' y2='15.11'></line>\n  <line x1='19.94' y1='11' x2='19.94' y2='11.01'></line>\n
</Icon>