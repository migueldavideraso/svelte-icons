<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M14 10h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1'></path>\n  <path d='M13 17c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5'></path>\n  <path d='M3 19c0 1.5 .5 2 2 2s2 -4 3 -9s1.5 -9 3 -9s2 .5 2 2'></path>\n  <line x1='5' y1='12' x2='11' y2='12'></line>\n
</Icon>