import './app.css'
import App from './App.svelte'
import { setInitialValues } from '@migueleraso/svelte-icons/'

setInitialValues({ strokeSize: 1.5, size: 50, stroke: 'black' })

const app = new App({
	target: document.getElementById('app'),
})

export default app
