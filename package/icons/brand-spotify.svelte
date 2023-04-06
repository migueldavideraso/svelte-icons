<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <path d='M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527'></path>\n  <path d='M9 15c1.5 -1 4 -1 5 .5'></path>\n  <path d='M7 9c2 -1 6 -2 10 .5'></path>\n
</Icon>