import { assert } from 'chai'
import map from '../../lib/transformers/map'
import push from '../../lib/transformers/push'
import transduce from '../../lib/transduce'

const { deepEqual } = assert

function inc (x) {
  return x + 1
}

it('map', () => {
  const list = [ 1, 2, 3 ]
  const result = transduce(
    map(inc),
    push,
    list,
  )
  deepEqual([ 2, 3, 4 ], result)
})
