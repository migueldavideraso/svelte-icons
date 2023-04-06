
import { icons as iconsData } from './data.js'
import fs from 'fs'



const getComponent = (icon) => `<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	${icon}
</Icon>`

const createIcons = ({ name, icon }) => {

	return new Promise((resolve, reject) => {

		fs.writeFile(`./package/icons/${name}.svelte`, getComponent(icon), function (err) {
			resolve()
		});
	})
}

console.time('Files')

Promise.all(
	iconsData
	.map(async (file) => {
		await createIcons(file)
	})
)
.then(() => {
	console.timeEnd('Files')
})