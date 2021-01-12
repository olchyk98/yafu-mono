import curry from './curry'
import assoc from './assoc'
export default curry(_assocProp)

/**
 * Makes a shallow clone of an object, setting or overriding the nodes
 * required to create the given path, and placing the specific
 * value at the tail end of that path.
 * */
function _assocProp (p, v, o) {
  const cloneObj = Object.assign(o.constructor(), o)
  const target = o[p]

  if(!target || typeof o !== "object") {
    return null
  }

  if(p.length <= 0) {
    cloneObj
  }

}
