const yaml = require('js-yaml')
const fs = require('fs')

console.log('---------- parse yaml file ------------')
const obj = yaml.safeLoad(fs.readFileSync('hello-yaml.yaml', 'utf8'))
console.log(JSON.stringify(obj))

console.log('---------- dump object to YAML text ----------')
const yamlStr = yaml.dump(obj)
console.log(yamlStr)