import { assert } from 'chai'
import take from '../../lib/transformers/take'
import push from '../../lib/transformers/push'
import transduce from '../../lib/transduce'

const { deepEqual } = assert

it('take', () => {
  const list = [ 1, 2, 3, 4, 5, 6 ]
  const result = transduce(
    take(3),
    push,
    list,
  )
  deepEqual([ 1, 2, 3 ], result)
})
