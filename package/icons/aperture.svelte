<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <line x1='3.6' y1='15' x2='14.15' y2='15'></line>\n  <line x1='3.6' y1='15' x2='14.15' y2='15' transform='rotate(72 12 12)'></line>\n  <line x1='3.6' y1='15' x2='14.15' y2='15' transform='rotate(144 12 12)'></line>\n  <line x1='3.6' y1='15' x2='14.15' y2='15' transform='rotate(216 12 12)'></line>\n  <line x1='3.6' y1='15' x2='14.15' y2='15' transform='rotate(288 12 12)'></line>\n
</Icon>