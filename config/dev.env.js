const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseUrl: '"http://mock.eolinker.com/w3sm6km51637652b0e9fed018d020f922170c476258699e?uri="'
})