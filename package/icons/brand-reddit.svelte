<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z'></path>\n  <path d='M12 8l1 -5l6 1'></path>\n  <circle cx='19' cy='4' r='1'></circle>\n  <circle cx='9' cy='13' r='.5' fill='currentColor'></circle>\n  <circle cx='15' cy='13' r='.5' fill='currentColor'></circle>\n  <path d='M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5'></path>\n
</Icon>