<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M18 18h-13l-1.865 -9.327a0.25 .25 0 0 1 .4 -.244l4.465 3.571l1.6 -2.4m1.596 -2.394l.804 -1.206l4 6l4.464 -3.571a0.25 .25 0 0 1 .401 .244l-1.363 6.818'></path>\n  <line x1='3' y1='3' x2='21' y2='21'></line>\n
</Icon>