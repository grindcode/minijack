module.exports = function minijack () {
  const last = arguments[arguments.length - 1]
  if (arguments.length > 1 && typeof last === 'function') {
    last.apply(null, Array.from(arguments).slice(0, arguments.length - 1))
  } else {
    console.log.apply(null, arguments)
  }
  return arguments[0]
}
