const readline = require('readline')
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
})
function showMenu() {
console.log('Pilih menu:')
console.log('1. Lihat profil')
console.log('2. Ubah kata sandi')
console.log('3. Keluar')
}
showMenu()
rl.question('Pilihan Anda: ', (pilihan) => {
if (pilihan === '1') {
console.log('Profil pengguna...')
} else if (pilihan === '2') {
console.log('Ubah kata sandi...')
} else if (pilihan === '3') {
console.log('Anda telah keluar.')
} else {
console.log('Pilihan tidak valid.')
}
rl.close()
})