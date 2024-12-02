/*
[ x ] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
  - Apenas contas com o status true podem fazer empréstimo
*/

import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  // Constructor
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  
  // Getters
  public getLoan = (val: number): void => {
    if (this.validateStatus()) {
      this.deposit(val)
      console.log(`${this.getName()} pegou um empréstimo de ${val} - novo saldo é ${this.getBalance()}`)
      } 
  }
}
