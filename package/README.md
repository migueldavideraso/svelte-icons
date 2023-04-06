# Svelte Icons
Svelte Icons created with tablericons
### TablerIcons:
https://tablericons.com/

Set default values
```js
import { setInitialValues } from '@migueleraso/svelte-icons'

// Default: { size: 15, strokeSize: 3, stroke: '#2c3e50' }
setInitialValues({ strokeSize: 1.5, size: 50, stroke: 'black' })
```

```html
<script>
  import ChevronRightIcon from '@migueleraso/svelte-icons/icons/chevron-right.svelte'
  import CheckIcon from '@migueleraso/svelte-icons/icons/check.svelte'

</script>

<CheckIcon />
<ChevronRightIcon
  size={15}
  strokeSize={3}
  stroke="#2c3e50"
/>
```
