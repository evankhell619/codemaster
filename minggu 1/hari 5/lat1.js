export class BankAccount {
  constructor(accountNumber, accountName,balance) {
    this.accountNumber = accountNumber
    this.accountName = accountName
    this.balance = balance
  }
  depo(amo) {
    this.balance += amo
    console.log(`Saldo setelah deposit : ${this.balance}` )
  }
  wd(amo) {
    this.balance -= amo
    console.log(`Saldo setelah withdraw : ${this.balance}`);
  }
  cek() {
    console.log(`Saldo Akhir : ${this.balance}`);
  }
}

const cust = new BankAccount(7347,"Popol",10000)
console.log(cust);

cust.depo(5000)
cust.wd(1000)
cust.cek()


class Bank {
  constructor(namaBank){
    this.Bank = this.Bank
  }
  lol() {
    console.log();
  }

}