<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='15' cy='15' r='3'></circle>\n  <path d='M13 17.5v4.5l2 -1.5l2 1.5v-4.5'></path>\n  <path d='M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73'></path>\n  <line x1='6' y1='9' x2='18' y2='9'></line>\n  <line x1='6' y1='12' x2='9' y2='12'></line>\n  <line x1='6' y1='15' x2='8' y2='15'></line>\n
</Icon>