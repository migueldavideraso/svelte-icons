<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='9' y1='10' x2='9.01' y2='10'></line>\n  <line x1='15' y1='10' x2='15.01' y2='10'></line>\n  <path d='M9.5 15.25a3.5 3.5 0 0 1 5 0'></path>\n  <path d='M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606z'></path>\n  <path d='M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222'></path>\n
</Icon>