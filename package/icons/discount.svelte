<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='9' y1='15' x2='15' y2='9'></line>\n  <circle cx='9.5' cy='9.5' r='.5' fill='currentColor'></circle>\n  <circle cx='14.5' cy='14.5' r='.5' fill='currentColor'></circle>\n  <circle cx='12' cy='12' r='9'></circle>\n
</Icon>