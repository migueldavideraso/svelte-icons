<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle transform='rotate(180 12 14)' cx='12' cy='14' r='2'></circle>\n  <path d='M14 10a2 2 0 1 0 -4 0v4'></path>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n
</Icon>