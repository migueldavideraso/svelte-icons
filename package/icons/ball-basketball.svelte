<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <line x1='5.65' y1='5.65' x2='18.35' y2='18.35'></line>\n  <line x1='5.65' y1='18.35' x2='18.35' y2='5.65'></line>\n  <path d='M12 3a9 9 0 0 0 9 9'></path>\n  <path d='M3 12a9 9 0 0 1 9 9'></path>\n
</Icon>