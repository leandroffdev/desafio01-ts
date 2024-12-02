import { CompanyAccount } from './class/CompanyAccount'
import { NewTypeOfAccount } from './class/NewTypeOfAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Leandro', 10)
// console.log(peopleAccount)
console.log(peopleAccount.getName())
peopleAccount.deposit(100)
peopleAccount.withdraw(40)


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// console.log(companyAccount)
console.log(companyAccount.getName())
companyAccount.deposit(50)
companyAccount.withdraw(70)
companyAccount.getLoan(250)

const newAccount: NewTypeOfAccount = new NewTypeOfAccount("ALice", 30);
// console.log(newAccount)
console.log(newAccount.getName())
newAccount.deposit(20)
newAccount.withdraw(30)
