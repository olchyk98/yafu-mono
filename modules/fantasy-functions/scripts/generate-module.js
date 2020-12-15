const { existsSync, mkdirSync, writeFileSync } = require('fs')
const fantasyLand = require('fantasy-land')

const names = Object.keys(fantasyLand)

function generate (name, path) {
  const lines = names.map((n) => (
    `export const ${n} = ${name}('${n}', definitions.${n})`
  ))

  return [
    "import definitions from '../../lib/definitions.js'",
    `import ${name} from '../../lib/${path}'`,
    '',
    ...lines
  ].join('\n')
}


if (!existsSync('dist/es6')) {
  mkdirSync('dist/es6', { recursive: true })
}
writeFileSync('dist/es6/fantasy-functions-development.js', generate('createDebugFunction', 'create-debug-function.js'))
writeFileSync('dist/es6/fantasy-functions-production.js', generate('createFunction', 'create-function.js'))
