import definitions from './definitions'
import createFunction from './create-function'

const out = {}

Object.entries(definitions).forEach(([ name, d ]) => {
  out[name] = createFunction(name, d)
})

export default out
