import {
  STEP,
  createTransformer,
  reduced,
  step,
} from './utils'

export default function take (n) {
  let count = 0
  return (transformer) => (
    createTransformer(transformer, {
      [STEP] (acc, item) {
        const limitReached = count++ === n
        return limitReached
          ? reduced(acc)
          : step(transformer, acc, item)
      },
    })
  )
}
