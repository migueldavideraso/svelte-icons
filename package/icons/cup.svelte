<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 11h14v-3h-14z'></path>\n  <path d='M17.5 11l-1.5 10h-8l-1.5 -10'></path>\n  <path d='M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1'></path>\n  <path d='M15 5v-2'></path>\n
</Icon>