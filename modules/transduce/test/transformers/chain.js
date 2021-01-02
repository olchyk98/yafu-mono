import { assert } from 'chai'
import chain from '../../lib/transformers/chain'
import push from '../../lib/transformers/push'
import transduce from '../../lib/transduce'

const { deepEqual } = assert

const getTags = ({ tags }) => tags

it('chain', () => {
  const list = [
    { tags: [ 'a', 'b', 'c' ] },
    { tags: [ 'd', 'e', 'f' ] },
  ]
  const result = transduce(
    chain(getTags),
    push,
    list,
  )
  deepEqual(result, [ 'a', 'b', 'c', 'd', 'e', 'f' ])
})
