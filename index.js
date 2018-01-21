module.exports = function () {
  const last = arguments[arguments.length-1]
  if (arguments.length > 1 && 'function' == typeof last) {
    last.apply(null, Array.from(arguments).slice(0, arguments.length - 1))
  }
  else {
    console.log.apply(null, arguments)
  }
  return arguments[0]
}
