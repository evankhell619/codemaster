const { log } = require("console")
const fs = require(`fs`)

const iniFS = fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err
  // console.log(data)
})

module.exports={
  iniFS
}

fs.writeFile('test.txt', 'Alooooooo', (err) => {
  if (err) throw err
  // console.log('File sdh di buat');
})

fs.readdir('.',(err,files) => {
  if (err) throw err
  // console.log('Filess');
})