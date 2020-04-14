/* eslint-disable sort-keys */
import FL from 'fantasy-land'

export default [ {
  name: 'equals',
  args: [ '_sameType' ],
}, {
  name: 'lte',
  args: [ 'function:boolean' ],
}, {
  name: 'compose',
  args: [ '_sameType' ],
}, {
  name: 'id',
  args: [],
  isStatic: true,
}, {
  name: 'concat',
  args: [ '_sameType' ],
}, {
  name: 'empty',
  args: [],
  isStatic: true,
}, {
  name: 'invert',
  args: [],
}, {
  name: 'filter',
  args: [ 'function:boolean' ],
}, {
  name: 'map',
  args: [ 'function' ],
}, {
  name: 'contramap',
  args: [ 'function' ],
}, {
  name: 'ap',
  args: [ '_sameType' ],
}, {
  name: 'of',
  args: [ '_any' ],
  isStatic: true,
}, {
  name: 'alt',
  args: [ '_sameType' ],
}, {
  name: 'zero',
  args: [],
  isStatic: true,
}, {
  name: 'reduce',
  args: [ 'function', '_any' ],
}, {
  name: 'traverse',
  args: [ `constructor:${FL.of}`, 'function' ],
}, {
  name: 'chain',
  args: [ 'function:_sameType' ],
}, {
  name: 'chainRec',
  args: [ 'function', '_any' ],
  isStatic: true,
}, {
  name: 'extend',
  args: [ 'function' ],
}, {
  name: 'extract',
  args: [],
}, {
  name: 'bimap',
  args: [ 'function', 'function' ],
}, {
  name: 'promap',
  args: [ 'function', 'function' ],
} ]
