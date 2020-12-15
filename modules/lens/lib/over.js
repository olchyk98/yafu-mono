import { curry } from 'yafu'
import { extract } from '@yafu/fantasy-functions'
import { identityOf } from '@yafu/identity'
import { constOf } from '@yafu/const'

function over (lens, f, target) {
  const functor = lens((focus) => {
    const newValue = f(focus)
    return newValue === focus ? constOf(target) : identityOf(newValue)
  }, target)
  return extract(functor)
}

export default curry(over)
