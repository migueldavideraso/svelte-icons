<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M17 4.5a9 9 0 0 1 3.864 5.89a2.5 2.5 0 0 1 -.29 4.36a9 9 0 0 1 -17.137 0a2.5 2.5 0 0 1 -.29 -4.36a9 9 0 0 1 3.746 -5.81'></path>\n  <path d='M9.5 16a3.5 3.5 0 0 0 5 0'></path>\n  <path d='M8.5 2c1.5 1 2.5 3.5 2.5 5'></path>\n  <path d='M12.5 2c1.5 2 2 3.5 2 5'></path>\n  <line x1='9' y1='12' x2='9.01' y2='12'></line>\n  <line x1='15' y1='12' x2='15.01' y2='12'></line>\n
</Icon>