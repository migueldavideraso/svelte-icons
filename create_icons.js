
import { icons as iconsData } from './data.js'
import fs from 'fs'

const createIcons = ({ name, icon }) => {

	return new Promise((resolve, reject) => {

		fs.writeFile(`./package/_icons/${name}.svelte`, icon, function (err) {
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