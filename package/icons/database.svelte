<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <ellipse cx='12' cy='6' rx='8' ry='3'></ellipse>\n  <path d='M4 6v6a8 3 0 0 0 16 0v-6'></path>\n  <path d='M4 12v6a8 3 0 0 0 16 0v-6'></path>\n
</Icon>