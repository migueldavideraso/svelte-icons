<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M18 18h-14a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2m4 0h10a2 2 0 0 1 2 2v8c0 .554 -.226 1.056 -.59 1.418'></path>\n  <line x1='6' y1='10' x2='6' y2='10.01'></line>\n  <line x1='10' y1='10' x2='10' y2='10.01'></line>\n  <line x1='14' y1='10' x2='14' y2='10.01'></line>\n  <line x1='18' y1='10' x2='18' y2='10.01'></line>\n  <line x1='6' y1='14' x2='6' y2='14.01'></line>\n  <line x1='18' y1='14' x2='18' y2='14.01'></line>\n  <line x1='10' y1='14' x2='14' y2='14'></line>\n  <line x1='3' y1='3' x2='21' y2='21'></line>\n
</Icon>