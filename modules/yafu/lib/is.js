import curry from './curry'
export default curry(_is) 

/**
 * Validates if value has a specific type.
 * Function is sensitive to NaN and Infinity.
 *
 * @function is
 * @arg {Object} t Type the value needs to be validated against
 * @arg {*} v Value that needs to be tested
 * @return {Boolean}
 * */
function _is(t, v) {
  if(t == Number) {
    if(isNaN(v) || !Number.isFinite(v)) return false
  }

  return v.constructor === t
}
