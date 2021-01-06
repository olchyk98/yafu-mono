import { assert } from 'chai'
import chain from '../../lib/transformers/chain'
import into from '../../lib/into'

const { deepEqual } = assert

const getTags = ({ tags }) => tags

it('chain', () => {
  const list = [
    { tags: [ 'a', 'b', 'c' ] },
    { tags: [ 'd', 'e', 'f' ] },
  ]
  const result = into(
    [],
    chain(getTags),
    list,
  )
  deepEqual(result, [ 'a', 'b', 'c', 'd', 'e', 'f' ])
})
