import curry from './curry'
export default curry(_assoc)

/**
 * Makes a shallow clone of an object, setting or overriding
 * the specified property with the given value.
 *
 * @function assoc
 * @arg p {String|Number} Target property
 * @arg v {*} Value that needs to be set
 * @arg o {Object} Object that needs to be modified 
 * */
function _assoc(p, v, o) {
  const cloneObj = Object.assign(o.constructor(), o)
  cloneObj[p] = v

  return cloneObj
}
