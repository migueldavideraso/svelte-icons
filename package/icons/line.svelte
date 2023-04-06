<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6' cy='18' r='2'></circle>\n  <circle cx='18' cy='6' r='2'></circle>\n  <line x1='7.5' y1='16.5' x2='16.5' y2='7.5'></line>\n
</Icon>