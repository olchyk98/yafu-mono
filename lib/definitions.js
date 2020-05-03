/* eslint-disable sort-keys */
import FL from 'fantasy-land'

export default {
  equals: {
    args: [ '_any' ],
  },
  lte: {
    args: [ '_any' ],
  },
  compose: {
    args: [ '_sameType' ],
  },
  id: {
    args: [],
    isStatic: true,
  },
  concat: {
    args: [ '_sameType' ],
  },
  empty: {
    args: [],
    isStatic: true,
  },
  invert: {
    args: [],
  },
  filter: {
    args: [ 'function:boolean' ],
  },
  map: {
    args: [ 'function' ],
  },
  contramap: {
    args: [ 'function' ],
  },
  ap: {
    args: [ '_sameType:function' ],
  },
  of: {
    args: [ '_any' ],
    isStatic: true,
  },
  alt: {
    args: [ '_sameType' ],
  },
  zero: {
    args: [],
    isStatic: true,
  },
  reduce: {
    args: [ 'function', '_any' ],
  },
  traverse: {
    args: [ `_constructor:${FL.of}`, 'function' ],
  },
  chain: {
    args: [ 'function:_sameType' ],
  },
  chainRec: {
    args: [ 'function', '_any' ],
    isStatic: true,
  },
  extend: {
    args: [ 'function' ],
  },
  extract: {
    args: [],
  },
  bimap: {
    args: [ 'function', 'function' ],
  },
  promap: {
    args: [ 'function', 'function' ],
  },
}
