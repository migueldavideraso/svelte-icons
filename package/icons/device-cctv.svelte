<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='3' width='18' height='4' rx='1'></rect>\n  <circle cx='12' cy='14' r='4'></circle>\n  <path d='M19 7v7a7 7 0 0 1 -14 0v-7'></path>\n  <line x1='12' y1='14' x2='12.01' y2='14'></line>\n
</Icon>