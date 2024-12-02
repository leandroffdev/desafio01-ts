/*
[ x ] Criar um novo tipo de conta a partir da DioAccount
 - Esta conta não deve receber novos atributos
 - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)
*/

import { DioAccount } from "./DioAccount";

export class NewTypeOfAccount extends DioAccount {
    // Constructor
    constructor(name:string, accountNumber: number) {
        super(name, accountNumber)
    }
    // Methods
    public deposit = (val: number): void => {
        if(this.validateStatus()){
          this.setBalance(this.getBalance() + val + 10)
          console.log(`${this.getName()} depositou ${val} e ganhou mais 10 e o saldo agora é ${this.getBalance()}`)
        }
      }
}