import p from './components/p.js'
import useState  from './utils/useState.js'
import { create, add, rem } from './utils/dom.js'

const h1 = create('h1', 'heading')
h1.innerHTML = '0'

const button = create('button', 'button')
button.innerText = 'Click'

const [value, setValue] = useState(0)

button.onclick = () => {
  setValue(value() + 1, updateH1)
}

const updateH1 = () => {
  h1.innerHTML = value()
}

add(root, h1, button,p)