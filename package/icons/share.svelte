<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6' cy='12' r='3'></circle>\n  <circle cx='18' cy='6' r='3'></circle>\n  <circle cx='18' cy='18' r='3'></circle>\n  <line x1='8.7' y1='10.7' x2='15.3' y2='7.3'></line>\n  <line x1='8.7' y1='13.3' x2='15.3' y2='16.7'></line>\n
</Icon>