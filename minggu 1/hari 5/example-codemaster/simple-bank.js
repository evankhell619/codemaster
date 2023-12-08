import Bank from './Bank.js'
import BankAccount from './BankAccount.js'

// create a new bank
const bca = new Bank('BCA')
const mandiri = new Bank('Mandiri')

// create new accounts
const johnsAccount = new BankAccount('John Doe', 'male')
const janesAccount = new BankAccount('Jane Doe', 'female')
const jacksAccount = new BankAccount('Jack Doe', 'male')

// add accounts to the bank
bca.addAccount(johnsAccount)
bca.addAccount(janesAccount)

mandiri.addAccount(jacksAccount)

// perform transactions
johnsAccount.deposit(1000000)
johnsAccount.withdraw(500000)

janesAccount.deposit(500000)
janesAccount.withdraw(250000)
janesAccount.withdraw(50000)

jacksAccount.deposit(5000000)

const bcaAccounts = bca.listAccounts()
console.log(`List of accounts at ${bca.name}:`)
bcaAccounts.forEach(function (account) {
  console.log(account.toString())
  account.getTransactions().forEach(function (transaction, index) {
    console.log(`  ${index + 1}. ${transaction.toString()}`)
  })
})

const mandiriAccounts = mandiri.listAccounts()
console.log(`List of accounts at ${mandiri.name}:`)
mandiriAccounts.forEach(function (account) {
  console.log(account.toString())
  account.getTransactions().forEach(function (transaction, index) {
    console.log(`  ${index + 1}. ${transaction.toString()}`)
  })
})
