<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M7 3h10c.644 0 1.11 .696 .978 1.33l-1.984 9.859a1.014 1.014 0 0 1 -.994 .811h-2.254c-.308 0 -.6 .141 -.793 .382l-4.144 5.25c-.599 .752 -1.809 .331 -1.809 -.632v-16c0 -.564 .44 -1 1 -1z'></path>\n  <line x1='12' y1='9' x2='17' y2='9'></line>\n
</Icon>