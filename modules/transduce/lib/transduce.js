import { I, curry } from 'yafu'
import {
  INIT,
  RESULT,
  STEP,
  isReduced,
  result,
  step,
  value,
} from './transformers/utils'
import runTransduce from './run-transduce'

function createAccumulator (fn) {
  return {
    [STEP] (acc, item) {
      return fn(acc, item)
    },
    [RESULT] (acc) {
      return acc
    },
  }
}

function arrayTransduce (reducer, initial) {
  const list = this
  let acc = initial
  for (let i = 0, len = list.length; i < len; i++) {
    acc = step(reducer, acc, list[i])
    if (isReduced(acc)) return value(acc)
  }
  return result(reducer, acc)
}

function arrayInit () {
  return this.concat([])
}

function arrayStep (acc, item) {
  acc.push(item)
  return acc
}

// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, '@@transduce', {
  configurable: false,
  enumerable: false,
  value: arrayTransduce,
  writable: true,
})

// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, INIT, {
  configurable: false,
  enumerable: false,
  value: arrayInit,
  writable: true,
})

// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, STEP, {
  configurable: false,
  enumerable: false,
  value: arrayStep,
  writable: true,
})

// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, RESULT, {
  configurable: false,
  enumerable: false,
  value: I,
  writable: true,
})

function transduce (transformer, fn) {
  const reducer = createAccumulator(fn)
  return (acc, transducible) => runTransduce(transformer, reducer, acc, transducible)
}

export default curry(transduce)
