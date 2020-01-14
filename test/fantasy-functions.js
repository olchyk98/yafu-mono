/* eslint-disable max-classes-per-file */
import { assert } from 'chai'
import FL from 'fantasy-land'
import ff from '../lib/fantasy-functions'

const { deepEqual, equal, isEmpty } = assert
const {
  empty,
  map,
  of,
  reduce,
} = ff

class Identity {

  static [FL.of] (v) {
    return new Identity(v)
  }

  constructor (v) {
    this.v = v
  }

  [FL.map] (f) {
    return new Identity(f(this.v))
  }

  [FL.reduce] (f, x) {
    return f(x, this.v)
  }
}

class Add {

  static [FL.empty] () {
    return 0
  }
}

describe('fantasyFunctions', () => {
  const i1 = Identity[FL.of](1)
  const countKeys = (o) => Object.keys(o).length

  it('should have the same amount of functions as specified by FL', () => {
    equal(countKeys(ff), countKeys(FL))
    const nulls = Object.keys(ff).filter((x) => ff[x] == null)
    isEmpty(nulls, 'Some methods were undefined')
  })

  it('should work for unary methods', () => {
    const inc = (x) => x + 1
    const result = map(inc, i1)
    const expected = Identity[FL.of](2)
    deepEqual(result, expected)
  })

  it('should work for binary methods', () => {
    const add = (a, b) => a + b
    const result = reduce(add, 10, i1)
    equal(result, 11)
  })

  it('should work for static functions', () => {
    const i1b = of(Identity, 1)
    deepEqual(i1b, i1)
  })

  it('should work for nullary functions', () => {
    equal(empty(Add), 0)
  })
})
