<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='13' r='2'></circle>\n  <line x1='13.45' y1='11.55' x2='15.5' y2='9.5'></line>\n  <path d='M6.4 20a9 9 0 1 1 11.2 0z'></path>\n
</Icon>