# Minijack

[![Build Status](https://travis-ci.org/grindcode/minijack.svg?branch=master)](https://travis-ci.org/grindcode/minijack) [![Dependency Status](https://david-dm.org/grindcode/minijack.svg)](https://david-dm.org/grindcode/minijack) [![devDependency Status](https://david-dm.org/grindcode/minijack/dev-status.svg)](https://david-dm.org/grindcode/minijack#info=devDependencies)

Inline logging inspired by Elm's Debug.log

## Get Started
```shell
npm install minijack
```

## API
### minijack(value [, substn, ..., fn])
Passes `value` and `substn` to console.log or `fn`, and then returns `value`.
* `value`: First value passed to the logging function, and then returned. (**Any**)
* `substn`: Optional. Subsequent values passed to the logging function. (**Any**)
* `fn`: Optional. Logging function to use. Default is `console.log`. (**Function**)

### Usage
```javascript
const minijack = require('minijack')

const value = minijack(value)
// → Logs and returns value.

const value = minijack(value, console.error)
// → Logs value using console.error. Returns value.

const value = minijack(value, 'is the sample value', console.error)
// → Logs value and 'is the sample value' using console.error. Returns value.
```

## License
See the [License](LICENSE) file.
