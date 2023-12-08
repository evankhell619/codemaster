import { BankAccount } from "./lat1.js";

const rekening = new BankAccount(123, 'Kupa', 10000 )

class Bank {
  constructor(nameBank, NamePerson, numberBank){
    // this.nameBank = nameBank
    // this.NamePerson = NamePerson
    // this.numberBank =  numberBank
    this.accounts = []
  }

  addAccount(){
    this.accounts.push(rekening)
    console.log(this.accounts);
  }
}

const myBank = new Bank('BNI','Popol', 123)

myBank.addAccount();
