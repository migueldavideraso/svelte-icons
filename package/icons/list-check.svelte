<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3.5 5.5l1.5 1.5l2.5 -2.5'></path>\n  <path d='M3.5 11.5l1.5 1.5l2.5 -2.5'></path>\n  <path d='M3.5 17.5l1.5 1.5l2.5 -2.5'></path>\n  <line x1='11' y1='6' x2='20' y2='6'></line>\n  <line x1='11' y1='12' x2='20' y2='12'></line>\n  <line x1='11' y1='18' x2='20' y2='18'></line>\n
</Icon>