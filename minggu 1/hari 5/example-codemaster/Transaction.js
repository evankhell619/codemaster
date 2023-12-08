import { formatCurrency } from './helper.js'

export default class Transaction {
  constructor(accountNumber, amount) {
    this.accountNumber = accountNumber
    this.amount = amount
  }

  toString() {
    const amount = formatCurrency(Math.abs(this.amount))
    const transactionType = this.amount > 0 ? 'deposit' : 'withdraw'
    return `${transactionType} ${amount}`
  }
}
