import { assert } from 'chai'
import { I } from 'yafu'
import transduce from '../../lib/transduce'

import pushTo from '../../lib/transformers/push-to'

const { deepEqual } = assert

it('pushTo', () => {
  const fooList = [ 1, 6, 3 ]
  const result = transduce(
    I,
    pushTo([]),
    fooList,
  )
  deepEqual(result, [ 1, 6, 3 ])
})

it('pushTo non empty array', () => {
  const fooList = [ 1, 6, 3 ]
  const result = transduce(
    I,
    pushTo([ 'a', 'b' ]),
    fooList,
  )
  deepEqual(result, [ 'a', 'b', 1, 6, 3 ])
})
