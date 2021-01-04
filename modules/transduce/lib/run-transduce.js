export default function runTransduce (transformer, reducer, initial, transducible) {
  return transducible['@@transduce'](transformer(reducer), initial)
}
