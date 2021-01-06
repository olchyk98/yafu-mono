import { assert } from 'chai'
import { compose } from 'yafu'
import map from '../lib/transformers/map'
import filter from '../lib/transformers/filter'
import transduce from '../lib/transduce'

const { equal } = assert
const getFoo = ({ foo }) => foo
const isOdd = (n) => n % 2 === 1

describe('transduce', () => {
  it('combines reducers', () => {
    const fooList = [
      { foo: 1 },
      { foo: 4 },
      { foo: 3 },
    ]
    const result = transduce(
      compose(map(getFoo), filter(isOdd)),
      Math.max,
      0,
      fooList,
    )
    equal(result, 3)
  })
})
