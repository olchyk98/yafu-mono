import {
  INIT,
  RESULT,
  STEP,
} from './utils'

export default function pushTo (array) {
  return {
    [INIT] () {
      return array.concat([])
    },
    [STEP] (acc, item) {
      acc.push(item)
      return acc
    },
    [RESULT] (acc) {
      return acc
    },
  }
}
