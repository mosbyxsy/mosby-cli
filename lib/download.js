/**
 * A library of download-git-repo to download according the git address
 */
const download = require('download-git-repo') // 项目下载工具
const path = require('path')
const ora = require('ora') // 下载loading

module.exports = function (url, target) {
  target = path.join(target || '.', Math.random().toFixed(10))
  return new Promise(function(resolve, reject){
    const spinner = ora(`it is downloading template, source address: https://github.com/${url}`)
    spinner.start()
    // 如果是git url，url后面的branch不能忽略
    download('direct:https://github.com/' + url, target, { clone: true }, (err) => {
      if (err) {
        spinner.fail()
        reject(err)
      } else {
        spinner.succeed()
        resolve(target)
      }
    })
  })
}
