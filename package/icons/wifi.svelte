<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='12' y1='18' x2='12.01' y2='18'></line>\n  <path d='M9.172 15.172a4 4 0 0 1 5.656 0'></path>\n  <path d='M6.343 12.343a8 8 0 0 1 11.314 0'></path>\n  <path d='M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0'></path>\n
</Icon>