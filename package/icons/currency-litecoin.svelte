<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M18 19h-8.194a2 2 0 0 1 -1.98 -2.283l1.674 -11.717'></path>\n  <path d='M14 9l-9 4'></path>\n
</Icon>