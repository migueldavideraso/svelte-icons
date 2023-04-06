<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='18' r='2'></circle>\n  <circle cx='7' cy='6' r='2'></circle>\n  <circle cx='17' cy='6' r='2'></circle>\n  <path d='M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2'></path>\n  <line x1='12' y1='12' x2='12' y2='16'></line>\n
</Icon>