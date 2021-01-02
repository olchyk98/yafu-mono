import { assert } from 'chai'
import filter from '../../lib/transformers/filter'
import push from '../../lib/transformers/push'
import transduce from '../../lib/transduce'

const { deepEqual } = assert

const isOdd = (n) => n % 2 === 1

it('map', () => {
  const list = [ 1, 2, 3 ]
  const result = transduce(
    filter(isOdd),
    push,
    list,
  )
  deepEqual([ 1, 3 ], result)
})
