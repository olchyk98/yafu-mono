const { readFileSync } = require('fs')
const { deepStrictEqual } = require('assert')

const expectedPaths = [ '- node_modules', ...process.argv.slice(2).map((s) => `- modules/${s}/node_modules`) ]

const content = readFileSync(`${__dirname}/../.circleci/config.yml`, 'utf-8')

function matches (regex) {
  return (string) => regex.test(string)
}

function trim (s) {
  return s.trim()
}

const lines = content.split('\n').map(trim)
const firstLine = lines.findIndex(matches(/#pathsbegin/)) + 1
const lastLine = lines.findIndex(matches(/#pathsend/))

function sendError (s) {
  process.stderr.write(s)
  process.stderr.write('\n')
  process.exit(1)
}

if (firstLine === -1) {
  sendError('Could not find #pathsbegin marker in circle ci config file')
}

if (lastLine === -1) {
  sendError('Could not find #pathsend marker in circle ci config file')
}

const actualPaths = lines.slice(firstLine, lastLine)
try {
  deepStrictEqual(actualPaths, expectedPaths)
} catch (e) {
  sendError(`Cache paths not matching expected paths:\nActual:\n${actualPaths}\nExpected:\n${expectedPaths}`)
}
