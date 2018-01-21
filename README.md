# Minijack

[![Greenkeeper badge](https://badges.greenkeeper.io/grindcode/minijack.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/grindcode/minijack.svg?branch=master)](https://travis-ci.org/grindcode/minijack) [![Test Coverage](https://codeclimate.com/github/grindcode/minijack/badges/coverage.svg)](https://codeclimate.com/github/grindcode/minijack/coverage) [![Dependency Status](https://david-dm.org/grindcode/minijack.svg)](https://david-dm.org/grindcode/minijack) [![devDependency Status](https://david-dm.org/grindcode/minijack/dev-status.svg)](https://david-dm.org/grindcode/minijack#info=devDependencies)

Inline logging inspired by Elm's Debug.log

## Get Started
```shell
npm install minijack
```

## API
### minijack(value [, substn, ..., fn])
Passes `value` and `substr` to console.log or executes `fn`, and then returns `value`.
* `value`: First value passed to the logging function, and then returned. (**Any**)
* `substn`: Optional. Subsequent values passed to the logging function. (**Any**)
* `fn`: Optional. Logging function to use. Default is `console.log`. (**Function**)

### Usage
```javascript
const minijack = require('minijack')

const value = (value) => minijack(value)
// → Logs and returns value.

const value = (value) => minijack(value, 'is the sample value', console.error)
// → Logs value and 'is the sample value' using console.error. Returns value.
```

## License
See the [License](LICENSE) file.
