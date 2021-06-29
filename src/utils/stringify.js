import _ /**/ from "lodash"

export function stringify(val) {
  if (_.isFinite(val) || _.isString(val) || _.isArray(val)) {
    return toJSON(val)
  }
  if (_.isFunction(val)) {
    return val.toString()
  }
  if (_.isObject(val) && !_.isRegExp(val)) {
    return toJSON(val)
  }
  if (_.isUndefined(val)) {
    return "undefined"
  }
  if (val === null) {
    return "null"
  }
  return val.toString()
}

export function restring(val) {
  return fromJSON(toJSON(val))
}

export function toJSON(obj) {
  return JSON.stringify(obj, getCircularReplacer())
}

export function fromJSON(str) {
  return JSON.parse(str)
}

function getCircularReplacer() {
  const seen = new WeakSet()
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return "CYCLE"
      }
      seen.add(value)
    }
    return value
  }
}

stringify.restring = restring
stringify.toJSON = toJSON
stringify.fromJSON = fromJSON

export default stringify
