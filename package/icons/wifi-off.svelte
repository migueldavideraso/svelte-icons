<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='12' y1='18' x2='12.01' y2='18'></line>\n  <path d='M9.172 15.172a4 4 0 0 1 5.656 0'></path>\n  <path d='M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163 .155a7.965 7.965 0 0 1 3.287 2'></path>\n  <path d='M3.515 9.515a12 12 0 0 1 3.544 -2.455m3.101 -.92a12 12 0 0 1 10.325 3.374'></path>\n  <line x1='3' y1='3' x2='21' y2='21'></line>\n
</Icon>