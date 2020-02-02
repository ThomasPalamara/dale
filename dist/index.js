
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dale.cjs.production.min.js')
} else {
  module.exports = require('./dale.cjs.development.js')
}
