import { faker } from '@faker-js/faker'
import Transaction from './Transaction.js'
import { formatName, formatCurrency } from './helper.js'

export default class BankAccount {
  balance = 0
  transactions = []

  constructor(owner, gender) {
    this.number = faker.finance.accountNumber()
    this.owner = owner
    this.gender = gender
  }

  deposit(amount) {
    this.balance += amount
    this.transactions.push(new Transaction(this.number, amount))
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error('Insufficient balance')
    }

    this.balance -= amount
    this.transactions.push(new Transaction(this.number, -amount))
  }

  toString() {
    const balance = formatCurrency(this.balance)
    const owner = formatName(this.owner, this.gender)
    return `A/N (${this.number}) - ${owner}: ${balance}`
  }

  getBalance() {
    return formatCurrency(this.balance)
  }

  getTransactions() {
    return this.transactions
  }
}
