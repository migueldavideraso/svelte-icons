<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='3'></circle>\n  <rect x='3' y='6' width='18' height='12' rx='2'></rect>\n  <line x1='18' y1='12' x2='18.01' y2='12'></line>\n  <line x1='6' y1='12' x2='6.01' y2='12'></line>\n
</Icon>