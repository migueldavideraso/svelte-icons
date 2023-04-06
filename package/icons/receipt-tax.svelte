<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='9' y1='14' x2='15' y2='8'></line>\n  <circle cx='9.5' cy='8.5' r='.5' fill='currentColor'></circle>\n  <circle cx='14.5' cy='13.5' r='.5' fill='currentColor'></circle>\n  <path d='M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2'></path>\n
</Icon>