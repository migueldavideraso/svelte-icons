<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='19' x2='3.01' y2='19'></line>\n  <path d='M7 19a4 4 0 0 0 -4 -4'></path>\n  <path d='M11 19a8 8 0 0 0 -8 -8'></path>\n  <path d='M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2'></path>\n
</Icon>