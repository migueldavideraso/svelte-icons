<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1'></path>\n  <path d='M8 16h8'></path>\n  <path d='M8.322 12.582l7.956 .836'></path>\n  <path d='M8.787 9.168l7.826 1.664'></path>\n  <path d='M10.096 5.764l7.608 2.472'></path>\n
</Icon>