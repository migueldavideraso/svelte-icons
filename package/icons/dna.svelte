<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle transform='rotate(-45 12 12)' cx='12' cy='12' r='4'></circle>\n  <path d='M9.172 20.485a4 4 0 1 0 -5.657 -5.657'></path>\n  <path d='M14.828 3.515a4 4 0 1 0 5.657 5.657'></path>\n
</Icon>