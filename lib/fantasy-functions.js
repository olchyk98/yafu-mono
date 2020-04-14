/* eslint-disable sort-keys, no-restricted-syntax */
import FL from 'fantasy-land'
import { curry } from 'yafu'
import definitions from './definitions'

const out = {}

definitions.forEach((f) => {
  const {
    args: { length },
    name,
    isStatic,
  } = f
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
})

export default out
