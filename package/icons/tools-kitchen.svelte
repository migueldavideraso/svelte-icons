<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 3h8l-1 9h-6z'></path>\n  <path d='M7 18h2v3h-2z'></path>\n  <path d='M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z'></path>\n  <path d='M20 15v6h-1v-3'></path>\n  <line x1='8' y1='12' x2='8' y2='18'></line>\n
</Icon>