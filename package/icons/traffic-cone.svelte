<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='4' y1='20' x2='20' y2='20'></line>\n  <line x1='9.4' y1='10' x2='14.6' y2='10'></line>\n  <line x1='7.8' y1='15' x2='16.2' y2='15'></line>\n  <path d='M6 20l5 -15h2l5 15'></path>\n
</Icon>