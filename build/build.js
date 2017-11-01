process.env.NODE_ENV = 'production'

const ora = require('ora')    // Elegant terminal spinner (更优雅的终端片段)
const rm = require('rimraf')  // A deep deletion module for node (like `rm -rf`)
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('构建生产环境代码...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err

    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red(' 构建失败.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan(' 构建完成.\n'))
    console.log(chalk.yellow(`
      Tip: built files are meant to be served over an HTTP server.
      Opening index.html over file:// won\'t work.
    `))
  })
})