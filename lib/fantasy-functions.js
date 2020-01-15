/* eslint-disable sort-keys, no-restricted-syntax */
import FL from 'fantasy-land'
import { curry } from 'yafu'

const definitions = [
  { name: 'equals', length: 1 },
  { name: 'lte', length: 1 },
  { name: 'compose', length: 1 },
  { name: 'id', length: 0, isStatic: true },
  { name: 'concat', length: 1 },
  { name: 'empty', length: 0, isStatic: true },
  { name: 'invert', length: 0 },
  { name: 'contramap', length: 1 },
  { name: 'filter', length: 1 },
  { name: 'map', length: 1 },
  { name: 'ap', length: 1 },
  { name: 'of', length: 1, isStatic: true },
  { name: 'alt', length: 1 },
  { name: 'zero', length: 1, isStatic: true },
  { name: 'reduce', length: 2 },
  { name: 'traverse', length: 2 },
  { name: 'chain', length: 1 },
  { name: 'chainRec', length: 3, isStatic: true },
  { name: 'extend', length: 1 },
  { name: 'extract', length: 0 },
  { name: 'bimap', length: 2 },
  { name: 'promap', length: 2 },
]

const out = {}

for (const f of definitions) {
  const { name, length, isStatic } = f
  const flName = FL[name]
  let fn
  if (length === 0) {
    fn = (m) => m[flName]()
  } else if (length === 1) {
    if (isStatic) {
      fn = (m, a) => m[flName](a)
    } else {
      fn = (a, m) => m[flName](a)
    }
  } else if (length === 2) {
    fn = (a, b, m) => m[flName](a, b)
  } else if (length === 3) {
    if (isStatic) {
      fn = (m, a, b, c) => m[flName](a, b, c)
    } else {
      fn = (a, b, c, m) => m[flName](a, b, c)
    }
  }
  out[name] = curry(fn)
}

export default out
