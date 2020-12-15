import {
  ap as AP,
  chain as CHAIN,
  extract as EXTRACT,
  map as MAP,
  of as OF,
} from 'fantasy-land'

export function identityOf (v) {
  return new Identity(v) // eslint-disable-line no-use-before-define
}

export default class Identity {
  static [OF] (v) {
    return identityOf(v)
  }

  constructor (v) {
    this.v = v
  }

  [MAP] (f) {
    return identityOf(f(this.v))
  }

  [AP] (b) {
    return identityOf(b.v(this.v))
  }

  [CHAIN] (f) {
    return f(this.v)
  }

  [EXTRACT] () {
    return this.v
  }

  toString () {
    return `Identity[${this.v}]`
  }
}
