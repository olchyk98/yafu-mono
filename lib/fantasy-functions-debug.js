import definitions from './definitions'
import createDebugFunction from './create-debug-function'

export default Object.entries(definitions).reduce((acc, [ name, item ]) => {
  acc[name] = createDebugFunction(name, item)
  return acc
}, {})
