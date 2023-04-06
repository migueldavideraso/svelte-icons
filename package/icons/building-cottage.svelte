<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='21' x2='21' y2='21'></line>\n  <path d='M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11'></path>\n  <circle cx='12' cy='9' r='2'></circle>\n  <path d='M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5'></path>\n
</Icon>