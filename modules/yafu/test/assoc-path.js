module.exports = function(assocPath) {
  return function () {
    it('works with objects', function() {
      assocPath(
        ['keySpec', 'author'],
        'admin',
        { keySpec: { author: 'user' } }
      ).should.deep.equal({ keySpec: { author: 'admin' } })
    })

    it('works with arrays', function() {
      assocPath(
        [0, 1],
        128,
        [[0, 8], [1, 3], [3, 8]]
      ).should.deep.equal([[0, 128], [1, 3], [3, 8]])
    })

    it('works with arrays nested inside objects', function() {
      assocPath(
        ['keyChain', 1],
        512,
        { keyChain: [128, 465] }
      ).should.deep.equal({ keyChain: [128, 512] })
    })

    it('works with objects nested inside arrays', function() {
      assocPath(
        [1, 'keyData'],
        null,
        [ { keyData: "128xb3_384h" }, {} ]
      ).should.deep.equal([ null, { keyData: null } ])
    })

    it('works with complex schemas', function() {
      assocPath(
        ['schema', 'lessons', 0, 'names', 1],
        'PE',
        { schema: { lessons: [ { names: [ 'MATH', 'ART' ] } ] } }
      ).should.deep.equal(
        { schema: { lessons: [ { names: [ 'MATH', 'PE' ] } ] } }
      )
    })

    it('returns null if path is invalid', function() {
      assocPath(
        ['schema', 123],
        'far',
        { schema: { lessons: [ 1, 2, 3 ] } }
      ).should.equal(null)
    })
  }
}
