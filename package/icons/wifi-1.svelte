<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='12' y1='18' x2='12.01' y2='18'></line>\n  <path d='M9.172 15.172a4 4 0 0 1 5.656 0'></path>\n
</Icon>