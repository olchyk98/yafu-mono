import { Transform } from 'stream'
import { step } from './transformers'

function streamTransduce (reducer, initial) {
  const readable = this
  let acc = initial
  const transform = new Transform({
    objectMode: true,
    transform (data, _, cb) {
      acc = step(reducer, acc, data)
      cb()
    },
  })
  return readable.pipe(transform)
}
