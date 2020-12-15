import {
  ap as AP,
  chain as CHAIN,
  equals as EQUALS,
  extract as EXTRACT,
  map as MAP,
  of as OF,
  reduce as REDUCE,
} from 'fantasy-land'

export default class Const {
  static [OF] (v) {
    return new Const(v)
  }

  constructor (v) {
    this.v = v
  }

  [MAP] () {
    return this
  }

  [AP] () {
    return this
  }

  [CHAIN] () {
    return this
  }

  [EXTRACT] () {
    return this.v
  }

  [REDUCE] (f, x) {
    return f(x, this.v)
  }

  [EQUALS] (b) {
    return b instanceof Const && b.v === this.v
  }

  toString () {
    return `Const[${this.v}]`
  }
}

export function constOf (v) {
  return new Const(v)
}
