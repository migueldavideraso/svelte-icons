<script>

	import { getInitialValues } from "./index.js"

	export let values = {}

	const initialValues = getInitialValues()

	let size = values.size || initialValues.size
	let stroke = values.stroke || initialValues.stroke
	let strokeSize = values.strokeSize || initialValues.strokeSize

</script>


<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size} height={size} viewBox="0 0 24 24" stroke-width={strokeSize}
	stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round"
>
	<slot />
</svg>