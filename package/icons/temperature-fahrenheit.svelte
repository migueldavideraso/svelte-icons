<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6' cy='8' r='2'></circle>\n  <line x1='13' y1='12' x2='18' y2='12'></line>\n  <path d='M20 6h-6a1 1 0 0 0 -1 1v11'></path>\n
</Icon>