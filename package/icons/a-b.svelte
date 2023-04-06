<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5'></path>\n  <line x1='12' y1='6' x2='12' y2='18'></line>\n  <path d='M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3'></path>\n
</Icon>