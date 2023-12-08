const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Siapa anda? ', (nama) => {
  console.log(`Halo, ${nama} !Selamat datang.`)
  rl.close;
})