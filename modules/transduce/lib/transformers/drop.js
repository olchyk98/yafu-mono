import {
  STEP,
  createTransformer,
  step,
} from './utils'

export default function drop (n) {
  let count = 0
  return (transformer) => (
    createTransformer(transformer, {
      [STEP] (acc, item) {
        const limitReached = count++ >= n
        return limitReached
          ? step(transformer, acc, item)
          : acc
      },
    })
  )
}
