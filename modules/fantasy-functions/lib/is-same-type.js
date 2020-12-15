class Orphan {}
const lastProto = Object.getPrototypeOf(Orphan)

function getUltimateProto (v) {
  const proto = Object.getPrototypeOf(v)
  return proto === lastProto ? v : getUltimateProto(proto)
}

export default function isSameType (a, b) {
  const ultimateProto = getUltimateProto(b.constructor)
  return a instanceof ultimateProto
}
