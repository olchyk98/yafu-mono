import is from '../lib/is'

module.exports = function() {
  return function() {
    it('works with strings', function() {
      is(String, 'sample text').should.equal(true)
    })

    it('works with regular numbers', function() {
      is(Number, 4).should.equal(true)
      is(Number, -38742384).should.equal(true)
      is(Number, -1e48).should.equal(true)
      is(Number, 0).should.equal(true)
    })

    it('works with hex numbers', function() {
      is(Number, 0x3B4B3FA000).should.equal(true)
    })

    it('works with irrational numbers', function() {
      is(Number, Infinity).should.equal(false)
    })

    it('works with NaN', function() {
      is(Number, NaN).should.equal(false)
    })

    it('works with arrays', function() {
      is(Object, [ 2, 8, 2 ]).should.equal(false)
      is(Object, []).should.equal(false)

      is(Array, [ 2, 8, 2 ]).should.equal(true)
      is(Array, []).should.equal(true)
    })

    it('works with objects', function() {
      is(Object, {}).should.equal(true)
    })
  }
}
