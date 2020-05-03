const { writeFileSync } = require('fs')
const definitions = require('../dist/definitions')

const names = Object.keys(definitions)

const lines = names.map((n) => (
  `export const ${n} = createDebugFunction('${n}', definitions.${n})`
))

const content = [
  "import definitions from '../lib/definitions'",
  "import createDebugFunction from '../lib/create-debug-function'",
  '',
  ...lines
].join('\n')

writeFileSync('dist/es6.js', content)
