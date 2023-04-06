<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M20.041 16.046a9 9 0 0 0 -12.084 -12.09m-2.323 1.683a9 9 0 0 0 12.726 12.73'></path>\n  <path d='M12 7l4.755 3.455l-.566 1.743l-.98 3.014l-.209 .788h-6l-1.755 -5.545l1.86 -1.351l2.313 -1.681z'></path>\n  <path d='M12 7v-4'></path>\n  <line x1='15' y1='16' x2='17.5' y2='19'></line>\n  <path d='M16.755 10.455l3.745 -1.455'></path>\n  <path d='M9.061 16.045l-2.561 2.955'></path>\n  <path d='M7.245 10.455l-3.745 -1.455'></path>\n  <line x1='3' y1='3' x2='21' y2='21'></line>\n
</Icon>