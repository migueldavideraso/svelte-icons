<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697'></path>\n  <path d='M18 12v-5a2 2 0 0 0 -2 -2h-2'></path>\n  <rect x='8' y='3' width='6' height='4' rx='2'></rect>\n  <path d='M8 11h4'></path>\n  <path d='M8 15h3'></path>\n  <circle cx='16.5' cy='17.5' r='2.5'></circle>\n  <path d='M18.5 19.5l2.5 2.5'></path>\n
</Icon>