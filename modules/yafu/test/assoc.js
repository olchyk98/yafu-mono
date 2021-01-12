module.exports = function (assoc) {
  return function () {
    it('works with objects', () => {
      assoc('key', 4, { key: 2 }).should.deep.equal({ key: 4 })
    })

    it('works with arrays', () => {
      assoc(0, 5, [3]).should.deep.equal([5])
    })
  }
}
