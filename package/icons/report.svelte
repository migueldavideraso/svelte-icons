<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697'></path>\n  <path d='M18 14v4h4'></path>\n  <path d='M18 11v-4a2 2 0 0 0 -2 -2h-2'></path>\n  <rect x='8' y='3' width='6' height='4' rx='2'></rect>\n  <circle cx='18' cy='18' r='4'></circle>\n  <path d='M8 11h4'></path>\n  <path d='M8 15h3'></path>\n
</Icon>