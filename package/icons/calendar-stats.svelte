<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4'></path>\n  <path d='M18 14v4h4'></path>\n  <circle cx='18' cy='18' r='4'></circle>\n  <path d='M15 3v4'></path>\n  <path d='M7 3v4'></path>\n  <path d='M3 11h16'></path>\n
</Icon>