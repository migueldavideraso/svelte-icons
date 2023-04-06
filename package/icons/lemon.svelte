<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143c-3.906 3.905 -10.237 3.905 -14.143 0l14.143 -14.143'></path>\n  <path d='M5.868 15.06a6.5 6.5 0 0 0 9.193 -9.192'></path>\n  <path d='M10.464 10.464l4.597 4.597'></path>\n  <path d='M10.464 10.464v6.364'></path>\n  <path d='M10.464 10.464h6.364'></path>\n
</Icon>