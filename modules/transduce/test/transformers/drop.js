import { assert } from 'chai'
import drop from '../../lib/transformers/drop'
import push from '../../lib/transformers/push'
import transduce from '../../lib/transduce'

const { deepEqual } = assert

it('drop', () => {
  const list = [ 1, 2, 3, 4, 5, 6 ]
  const result = transduce(
    drop(2),
    push,
    list,
  )
  deepEqual([ 3, 4, 5, 6 ], result)
})
